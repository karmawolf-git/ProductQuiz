/*
 * 제품 퀴즈 - 앱 로직
 * - 하루 5문제
 * - 정답당 포인트 적립 + 연속 학습(스트릭) 보너스
 * - 리그 등급 + 로컬 리더보드(프로필별 랭킹)
 * - 진행 상태는 브라우저 localStorage 에 저장(서버 불필요)
 */
(function () {
  "use strict";

  const DAILY_COUNT = 5; // 하루 문제 수
  const POINTS_PER_CORRECT = 20; // 정답당 포인트
  const PERFECT_BONUS = 30; // 5문제 전부 정답 보너스
  const STREAK_BONUS_PER_DAY = 5; // 스트릭 1일당 추가 보너스(상한 있음)
  const STREAK_BONUS_CAP = 50; // 스트릭 보너스 상한

  const PROFILES_KEY = "productQuizProfiles.v1";
  const STATE_PREFIX = "productQuizState.v1::";
  const LEGACY_STATE_KEY = "productQuizState.v1"; // 이전 단일 사용자 데이터

  const bank = window.QUESTION_BANK || [];

  // 리그 등급(누적 포인트 기준) — 낮은 순서부터
  const TIERS = [
    { name: "브론즈", icon: "🥉", min: 0, color: "#c8874f" },
    { name: "실버", icon: "🥈", min: 200, color: "#b8c2d0" },
    { name: "골드", icon: "🥇", min: 600, color: "#ffcf4d" },
    { name: "플래티넘", icon: "💠", min: 1200, color: "#5ed3d3" },
    { name: "다이아몬드", icon: "🔷", min: 2500, color: "#6aa8ff" },
    { name: "마스터", icon: "👑", min: 5000, color: "#c77dff" },
  ];

  // 벤치마크용 샘플 랭커(실제 사용자 아님 · 목표치 참고용)
  const SAMPLE_RANKERS = [
    { name: "약사왕 김선생", points: 4200, days: 32, sample: true },
    { name: "성실한 이대리", points: 2100, days: 18, sample: true },
    { name: "꾸준함 박주임", points: 1350, days: 12, sample: true },
    { name: "열공 최쌤", points: 720, days: 7, sample: true },
    { name: "새내기 정사원", points: 360, days: 4, sample: true },
  ];

  // ---------- 날짜 유틸 ----------
  function todayKey(d) {
    const dt = d || new Date();
    const y = dt.getFullYear();
    const m = String(dt.getMonth() + 1).padStart(2, "0");
    const day = String(dt.getDate()).padStart(2, "0");
    return `${y}-${m}-${day}`;
  }

  function isYesterday(prevKey, curKey) {
    if (!prevKey) return false;
    const [py, pm, pd] = prevKey.split("-").map(Number);
    const prev = new Date(py, pm - 1, pd);
    prev.setDate(prev.getDate() + 1);
    return todayKey(prev) === curKey;
  }

  // ---------- 시드 기반 난수(날짜별 동일한 문제 세트) ----------
  function hashSeed(str) {
    let h = 2166136261 >>> 0;
    for (let i = 0; i < str.length; i++) {
      h ^= str.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return h >>> 0;
  }

  function mulberry32(a) {
    return function () {
      a |= 0;
      a = (a + 0x6d2b79f5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function seededShuffle(arr, seed) {
    const rnd = mulberry32(seed);
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(rnd() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // 오늘 날짜에 해당하는 5문제 선택(모든 사용자가 같은 세트, 매일 순환)
  function getDailyQuestions(dateKey) {
    const ids = session() && session().questionIds;
    if (ids) return ids.map(id => bank.find(q => q.id === id)).filter(Boolean);
    return seededShuffle(bank, hashSeed("quiz-" + dateKey)).slice(0, DAILY_COUNT);
  }

  // ---------- 리그 등급 ----------
  function tierForPoints(points) {
    let cur = TIERS[0];
    for (const t of TIERS) if (points >= t.min) cur = t;
    return cur;
  }
  function nextTier(points) {
    for (const t of TIERS) if (points < t.min) return t;
    return null; // 최고 등급
  }

  // ---------- 프로필 관리 ----------
  function loadProfiles() {
    let data;
    try {
      data = JSON.parse(localStorage.getItem(PROFILES_KEY));
    } catch (e) {
      data = null;
    }
    if (!data || !Array.isArray(data.players) || data.players.length === 0) {
      // 최초 실행: 기본 프로필 생성(이전 단일 데이터가 있으면 승계)
      const id = "p_" + Date.now().toString(36);
      data = { currentId: id, players: [{ id, name: "나", createdAt: Date.now() }] };
      const legacy = localStorage.getItem(LEGACY_STATE_KEY);
      if (legacy) {
        localStorage.setItem(STATE_PREFIX + id, legacy);
        localStorage.removeItem(LEGACY_STATE_KEY);
      }
      saveProfiles(data);
    }
    if (!data.players.find((p) => p.id === data.currentId)) {
      data.currentId = data.players[0].id;
    }
    return data;
  }

  function saveProfiles(data) {
    try {
      localStorage.setItem(PROFILES_KEY, JSON.stringify(data));
    } catch (e) {
      /* noop */
    }
  }

  let profiles = loadProfiles();

  function stateKeyFor(id) {
    return STATE_PREFIX + id;
  }

  // ---------- 상태 저장/로드 ----------
  function defaultState() {
    return {
      points: 0,
      streak: 0,
      bestStreak: 0,
      lastCompletedDate: null,
      totalAnswered: 0,
      totalCorrect: 0,
      daysCompleted: 0,
      today: null, // { date, index, answers: [], correctCount, finished }
    };
  }

  function loadStateFor(id) {
    try {
      const raw = localStorage.getItem(stateKeyFor(id));
      if (!raw) return defaultState();
      return Object.assign(defaultState(), JSON.parse(raw));
    } catch (e) {
      return defaultState();
    }
  }

  function saveStateFor(id, s) {
    try {
      localStorage.setItem(stateKeyFor(id), JSON.stringify(s));
    } catch (e) {
      /* noop */
    }
  }

  let state = loadStateFor(profiles.currentId);
  let practiceActive = !!state.practice;
  let activeView = practiceActive ? "practice" : "daily";
  function session() { return isPractice() ? state.practice : state.today; }
  function isPractice() { return !!(practiceActive && state.practice); }


  function saveState() {
    saveStateFor(profiles.currentId, state);
  }
  function currentName() {
    const p = profiles.players.find((x) => x.id === profiles.currentId);
    return p ? p.name : "나";
  }

  // ---------- DOM ----------
  const el = (id) => document.getElementById(id);
  const dom = {
    profileSelect: el("profile-select"),
    renameBtn: el("rename-btn"),
    addProfileBtn: el("add-profile-btn"),
    tierBadge: el("tier-badge"),
    tierProgress: el("tier-progress"),
    points: el("stat-points"),
    streak: el("stat-streak"),
    accuracy: el("stat-accuracy"),
    days: el("stat-days"),
    dateLabel: el("date-label"),
    quizCard: el("quiz-card"),
    doneCard: el("done-card"),
    progressFill: el("progress-fill"),
    progressText: el("progress-text"),
    drugTag: el("drug-tag"),
    questionText: el("question-text"),
    options: el("options"),
    feedback: el("feedback"),
    nextBtn: el("next-btn"),
    doneTitle: el("done-title"),
    doneSummary: el("done-summary"),
    doneEarned: el("done-earned"),
    reviewList: el("review-list"),
    leaderboard: el("leaderboard"),
    myRank: el("my-rank"),
  };

  // ---------- 오늘 세션 초기화 ----------
  function ensureToday() {
    const tk = todayKey();
    if (!state.today || state.today.date !== tk) {
      state.today = {date: tk, index: 0, answers: [], correctCount: 0, finished: false};
    }
    if (!state.today.questionIds) {
      // Preserve legacy in-progress sets, selected from the original 28 questions.
      const pool = state.today.answers.length || state.today.index || state.today.finished
        ? bank.filter(q => q.id < 100) : bank;
      state.today.questionIds = seededShuffle(pool, hashSeed("quiz-" + tk)).slice(0, DAILY_COUNT).map(q => q.id);
    }
    saveState();
  }

  function updateStatsBar() {
    dom.points.textContent = state.points.toLocaleString();
    dom.streak.textContent = state.streak + "일";
    const acc =
      state.totalAnswered > 0
        ? Math.round((state.totalCorrect / state.totalAnswered) * 100)
        : 0;
    dom.accuracy.textContent = acc + "%";
    dom.days.textContent = state.daysCompleted + "일";
  }

  function updateTier() {
    const t = tierForPoints(state.points);
    dom.tierBadge.textContent = `${t.icon} ${t.name}`;
    dom.tierBadge.style.borderColor = t.color;
    dom.tierBadge.style.color = t.color;
    const nt = nextTier(state.points);
    const percentage = nt ? Math.min(100, (state.points - t.min) / (nt.min - t.min) * 100) : 100;
    el("tier-fill").style.width = percentage + "%";
    if (nt) {
      const need = nt.min - state.points;
      dom.tierProgress.textContent = `${nt.icon} ${nt.name}까지 ${need.toLocaleString()}점`;
    } else {
      dom.tierProgress.textContent = "최고 등급 달성! 👑";
    }
  }

  function updateProfileBar() {
    dom.profileSelect.innerHTML = "";
    profiles.players.forEach((p) => {
      const opt = document.createElement("option");
      opt.value = p.id;
      opt.textContent = p.name;
      if (p.id === profiles.currentId) opt.selected = true;
      dom.profileSelect.appendChild(opt);
    });
  }

  // ---------- 리더보드 ----------
  function buildLeaderboard() {
    const real = profiles.players.map((p) => {
      const s = loadStateFor(p.id);
      return {
        name: p.name,
        points: s.points,
        days: s.daysCompleted,
        isMe: p.id === profiles.currentId,
        sample: false,
      };
    });
    const all = real.concat(
      SAMPLE_RANKERS.map((r) => ({
        name: r.name,
        points: r.points,
        days: r.days,
        isMe: false,
        sample: true,
      }))
    );
    all.sort((a, b) => b.points - a.points || b.days - a.days);
    return all;
  }

  function renderLeaderboard() {
    const rows = buildLeaderboard();
    dom.leaderboard.innerHTML = "";
    const medals = ["🥇", "🥈", "🥉"];
    let myRank = 0;
    rows.forEach((r, i) => {
      if (r.isMe) myRank = i + 1;
      const item = document.createElement("div");
      item.className = "lb-row" + (r.isMe ? " me" : "");
      const rankMark = i < 3 ? medals[i] : `${i + 1}`;
      const t = tierForPoints(r.points);
      item.innerHTML =
        `<span class="lb-rank">${rankMark}</span>` +
        `<span class="lb-name">${escapeHtml(r.name)}` +
        (r.isMe ? ` <span class="lb-you">나</span>` : "") +
        (r.sample ? ` <span class="lb-sample">샘플</span>` : "") +
        `</span>` +
        `<span class="lb-tier" title="${t.name}">${t.icon}</span>` +
        `<span class="lb-points">${r.points.toLocaleString()}<small>P</small></span>`;
      dom.leaderboard.appendChild(item);
    });

    const total = rows.length;
    dom.myRank.textContent = `${currentName()} 님은 현재 ${total}명 중 ${myRank}위`;
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, (c) => {
      return {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      }[c];
    });
  }

  // ---------- 렌더링 ----------
  function render() {
    ensureToday();
    updateProfileBar();
    updateStatsBar();
    updateTier();
    renderLeaderboard();
    renderLearning();
    renderView();
    dom.dateLabel.textContent = isPractice() ? state.practice.label : session().date + " 오늘의 퀴즈";

    const questions = getDailyQuestions(session().date);

    if (session().finished) {
      showDone(questions);
      return;
    }
    if (questions.length === 0) {
      dom.quizCard.hidden = false;
      dom.doneCard.hidden = true;
      dom.questionText.textContent = "출제할 문제가 없습니다.";
      dom.options.innerHTML = "";
      return;
    }
    dom.quizCard.hidden = false;
    dom.doneCard.hidden = true;
    renderQuestion(questions);
  }

  function renderQuestion(questions) {
    const i = session().index;
    const q = questions[i];
    const total = questions.length;

    dom.progressText.textContent = `${i + 1} / ${total}`;
    dom.progressFill.style.width = `${(i / total) * 100}%`;
    document.querySelector(".progress-track").setAttribute("aria-valuenow", String(Math.round(i / total * 100)));
    dom.drugTag.textContent = q.drug;
    el("difficulty-tag").textContent = q.level || "기본";
    dom.questionText.textContent = q.q;
    dom.feedback.hidden = true;
    dom.feedback.className = "feedback";
    dom.nextBtn.hidden = true;
    el("answer-note").textContent = "답안을 선택하면 정답과 해설을 확인할 수 있어요.";

    dom.options.innerHTML = "";
    q.options.forEach((opt, idx) => {
      const btn = document.createElement("button");
      btn.className = "option";
      btn.type = "button";
      btn.textContent = opt;
      btn.addEventListener("click", () => onAnswer(questions, idx));
      dom.options.appendChild(btn);
    });

    // 이미 답한 문제(새로고침 복원)면 결과 표시
    if (session().answers.length > i) {
      lockAnswer(questions, session().answers[i]);
    }
  }

  function lockAnswer(questions, choiceIdx) {
    const i = session().index;
    const q = questions[i];
    const isCorrect = choiceIdx === q.answer;
    Array.from(dom.options.children).forEach((b, idx) => {
      b.disabled = true;
      if (idx === q.answer) b.classList.add("correct");
      if (idx === choiceIdx && !isCorrect) b.classList.add("wrong");
    });
    dom.feedback.hidden = false;
    dom.feedback.classList.add(isCorrect ? "ok" : "no");
    dom.feedback.innerHTML =
      `<strong>${isCorrect ? "정답입니다! ✅" : "오답입니다. ❌"}</strong><br>` +
      escapeHtml(q.explain) + sourceLink(q);
    dom.nextBtn.hidden = false;
    el("answer-note").textContent = isPractice() ? "연습은 포인트에 반영되지 않습니다." : "정답당 20P · 일일 퀴즈 완료 시 적립";
    dom.nextBtn.textContent =
      i + 1 >= questions.length ? "결과 보기" : "다음 문제";
  }

  function onAnswer(questions, choiceIdx) {
    const i = session().index;
    if (session().answers.length > i) return; // 이미 답함
    const q = questions[i];
    const isCorrect = choiceIdx === q.answer;
    recordAnswer(q, choiceIdx);
    session().answers.push(choiceIdx);
    if (isCorrect) session().correctCount++;
    saveState();
    lockAnswer(questions, choiceIdx);
    renderLearning();
  }

  function goNext() {
    const questions = getDailyQuestions(session().date);
    if (session().index + 1 >= questions.length) {
      finishDay(questions);
    } else {
      session().index++;
      saveState();
      renderQuestion(questions);
    }
  }

  function finishDay(questions) {
    if (session().finished) return;
    if (isPractice()) {
      state.practice.finished = true;
      saveState();
      render();
      return;
    }
    const correct = session().correctCount;
    const total = questions.length;

    if (isYesterday(state.lastCompletedDate, session().date)) {
      state.streak += 1;
    } else {
      state.streak = 1;
    }
    if (state.streak > state.bestStreak) state.bestStreak = state.streak;

    let earned = correct * POINTS_PER_CORRECT;
    if (correct === total) earned += PERFECT_BONUS;
    const streakBonus = Math.min(
      (state.streak - 1) * STREAK_BONUS_PER_DAY,
      STREAK_BONUS_CAP
    );
    earned += streakBonus;

    state.points += earned;
    state.totalAnswered += total;
    state.totalCorrect += correct;
    state.daysCompleted += 1;
    state.lastCompletedDate = session().date;
    session().finished = true;
    session().earned = earned;
    session().perfect = correct === total;
    session().streakBonus = streakBonus;
    saveState();

    render();
  }

  function showDone(questions) {
    dom.quizCard.hidden = true;
    dom.doneCard.hidden = false;
    dom.progressFill.style.width = "100%";
    document.querySelector(".progress-track").setAttribute("aria-valuenow", "100");
    dom.progressText.textContent = `${questions.length} / ${questions.length}`;

    const correct = session().correctCount;
    const total = questions.length;
    dom.doneTitle.textContent = isPractice() ? "연습 완료! 👏" : session().perfect
      ? "완벽해요! 🎉"
      : "오늘 학습 완료! 👏";
    dom.doneSummary.textContent = `${total}문제 중 ${correct}문제 정답`;

    dom.doneEarned.hidden = isPractice();
    document.querySelector(".come-back").textContent = isPractice() ? "다른 제품이나 오답을 연습하거나 일일 퀴즈로 돌아가세요." : "내일 새로운 5문제가 기다리고 있어요. 👋";
    const parts = [`정답 ${correct}×${POINTS_PER_CORRECT}`];
    if (session().perfect) parts.push(`올클리어 보너스 +${PERFECT_BONUS}`);
    if (session().streakBonus > 0)
      parts.push(`스트릭 보너스 +${session().streakBonus}`);
    dom.doneEarned.innerHTML =
      `<div class="earned-big">+${session().earned} 포인트 획득</div>` +
      `<div class="earned-detail">${parts.join(" · ")}</div>` +
      `<div class="earned-detail">현재 연속 학습 ${state.streak}일 · 누적 ${state.points.toLocaleString()}포인트</div>`;

    dom.reviewList.innerHTML = "";
    questions.forEach((q, idx) => {
      const chosen = session().answers[idx];
      const ok = chosen === q.answer;
      const item = document.createElement("div");
      item.className = "review-item " + (ok ? "ok" : "no");
      item.innerHTML =
        `<div class="review-q"><span class="mini-tag">${q.drug}</span> ${escapeHtml(
          q.q
        )}</div>` +
        `<div class="review-a">정답: <b>${escapeHtml(
          q.options[q.answer]
        )}</b>` +
        (ok ? "" : ` · 내 선택: ${escapeHtml(q.options[chosen])}`) +
        `</div>` +
        `<div class="review-e">${escapeHtml(q.explain)}${sourceLink(q)}</div>`;
      dom.reviewList.appendChild(item);
    });
  }

  function sourceLink(q) {
    return q.source ? `<br><a href="${escapeHtml(q.source)}" target="_blank" rel="noopener noreferrer">성분 참고자료 (해외 허가정보)</a> · 확인 ${q.reviewed}` : "";
  }

  function recordAnswer(q, choice) {
    state.productStats ||= {};
    state.mistakes ||= {};
    const stat = state.productStats[q.drug] ||= {answered: 0, correct: 0};
    const correct = choice === q.answer;
    stat.answered++;
    if (correct) stat.correct++;
    if (!correct || state.mistakes[q.id]) {
      const old = state.mistakes[q.id] || {wrongCount: 0};
      state.mistakes[q.id] = {...old, choice, resolved: correct,
        wrongCount: old.wrongCount + (correct ? 0 : 1), date: todayKey()};
    }
  }

  function startPractice(ids, label) {
    if (!ids.length) return;
    practiceActive = true;
    activeView = "practice";
    state.practice = {questionIds: ids, label, date: todayKey(), index: 0,
      answers: [], correctCount: 0, finished: false};
    saveState();
    render();
    dom.quizCard.scrollIntoView({behavior: "smooth", block: "start"});
    dom.questionText.tabIndex = -1;
    dom.questionText.focus({preventScroll: true});
  }

  function renderLearning() {
    el("daily-return").hidden = !isPractice();
    el("practice-back").hidden = !isPractice();
    el("quiz-mode-label").textContent = isPractice() ? "제품 연습" : "오늘의 학습";
    el("resume-card").hidden = !state.practice;
    if (state.practice) {
      el("resume-description").textContent = state.practice.label + " · " + state.practice.answers.length + " / " + state.practice.questionIds.length + (state.practice.finished ? "문제 완료 · 결과 확인" : "문제 풀이");
    }
    const products = [...new Set(bank.map(q => q.drug))];
    el("product-stats").innerHTML = products.map(drug => {
      const stat = (state.productStats || {})[drug] || {answered: 0, correct: 0};
      const rate = stat.answered ? Math.round(stat.correct / stat.answered * 100) : 0;
      return `<div class="product-stat"><span>${drug}</span><b>${stat.answered ? rate + "%" : "학습 전"}</b><small>${stat.correct} / ${stat.answered}회 정답</small><meter min="0" max="100" value="${rate}" aria-label="${drug} 정답률">${rate}%</meter></div>`;
    }).join("");
    el("overview-product-stats").innerHTML = el("product-stats").innerHTML;
    el("product-cards").innerHTML = products.map(drug => {
      const count = bank.filter(q => q.drug === drug).length;
      const stat = (state.productStats || {})[drug] || {answered: 0, correct: 0};
      const rate = stat.answered ? Math.round(stat.correct / stat.answered * 100) : 0;
      return `<article class="card product-card"><div class="product-meta"><span class="drug-tag">${count}문제</span><span class="eyebrow">기본 + 응용</span></div><h2>${drug}</h2><p class="mode-note">기본 개념부터 상황 판단까지</p><div class="product-stat"><span>나의 정답률</span><b>${stat.answered ? rate + "%" : "학습 전"}</b><meter min="0" max="100" value="${rate}" aria-label="${drug} 정답률">${rate}%</meter></div><button class="btn-primary" type="button" data-practice-drug="${drug}">${drug} 연습 시작 →</button></article>`;
    }).join("");
    const entries = Object.entries(state.mistakes || {}).filter(([id]) => bank.some(q => q.id === Number(id)));
    const pending = entries.filter(([,m]) => !m.resolved);
    el("mistake-count").textContent = `미해결 ${pending.length} · 복습 완료 ${entries.length - pending.length}`;
    el("retry-all").disabled = !pending.length;
    el("nav-mistake-count").textContent = pending.length;
    el("nav-mistake-count").hidden = !pending.length;
    el("pending-title").textContent = pending.length ? `복습할 문제가 ${pending.length}개 있어요` : "복습할 문제가 없어요";
    el("pending-description").textContent = pending.length ? "헷갈렸던 개념을 다시 확인해 보세요." : "오늘의 퀴즈로 제품 지식을 쌓아보세요.";
    const list = el("mistake-list");
    list.innerHTML = entries.length ? "" : '<div class="empty-state"><h2>아직 오답이 없어요</h2><p class="mode-note">퀴즈를 풀면 틀린 문제가 여기에 저장됩니다.</p></div>';
    entries.sort((a,b) => Number(a[1].resolved) - Number(b[1].resolved)).forEach(([id,m]) => {
      const q = bank.find(q => q.id === Number(id));
      const item = document.createElement("details");
      item.className = "review-item " + (m.resolved ? "ok" : "no");
      item.innerHTML = `<summary>${q.drug} · ${escapeHtml(q.q)} <small>${m.resolved ? "복습 완료" : "복습 필요"}</small></summary><p>최근 선택: ${escapeHtml(q.options[m.choice])}<br>정답: ${escapeHtml(q.options[q.answer])}</p><p>${escapeHtml(q.explain)}${sourceLink(q)}</p><p class="mode-note">누적 오답 ${m.wrongCount}회 · 최근 풀이 ${m.date}</p>`;
      const retry = document.createElement("button");
      retry.type = "button";
      retry.className = "btn-ghost";
      retry.textContent = "이 문제 다시 풀기";
      retry.addEventListener("click", () => startPractice([q.id], "오답 다시 풀기"));
      item.appendChild(retry);
      list.appendChild(item);
    });
  }

  [...new Set(bank.map(q => q.drug))].forEach(drug => {
    const option = document.createElement("option");
    option.value = option.textContent = drug;
    el("practice-product").appendChild(option);
  });
  el("practice-start").addEventListener("click", () => {
    const drug = el("practice-product").value;
    const ids = bank.filter(q => !drug || q.drug === drug).map(q => q.id);
    startPractice(seededShuffle(ids, Date.now()), (drug || "전체 제품") + " 연습");
  });
  el("retry-all").addEventListener("click", () => startPractice(
    bank.filter(q => state.mistakes?.[q.id] && !state.mistakes[q.id].resolved).map(q => q.id), "미해결 오답 다시 풀기"));
  el("daily-return").addEventListener("click", () => {
    state.practice = null;
    practiceActive = false;
    activeView = "daily";
    saveState();
    render();
  });

  // View selection does not discard a saved practice or unfinished daily quiz.
  function renderView() {
    const copy = {
      daily: ["오늘도, 다섯 문제로 한 걸음.", "짧게 배우고, 꾸준히 쌓는 나만의 제품 지식."],
      practice: ["제품별 연습", "집중해서 배우고 싶은 제품을 선택하세요."],
      mistakes: ["오답 노트", "틀린 문제를 다시 풀며 개념을 확실하게 익혀요."],
      overview: ["학습 현황", "꾸준함과 이해도를 함께 살펴보세요."]
    };
    document.querySelectorAll("[data-view]").forEach(button => {
      if (button.dataset.view === activeView) button.setAttribute("aria-current", "page");
      else button.removeAttribute("aria-current");
    });
    for (const view of Object.keys(copy)) el(view + "-panel").hidden = view !== activeView;
    el("page-title").textContent = copy[activeView][0];
    el("page-description").textContent = copy[activeView][1];
    if (activeView === "practice" && isPractice()) {
      el("page-title").textContent = state.practice.label;
      el("page-description").textContent = "한 문제씩 차근차근, 제품 지식을 점검해 보세요.";
    }
    el("calendar-date").dateTime = todayKey();
    el("calendar-date").textContent = new Intl.DateTimeFormat("ko-KR", {year: "numeric", month: "long", day: "numeric", weekday: "long"}).format(new Date());
    const showPlayer = activeView === "daily" || (activeView === "practice" && isPractice());
    el("quiz-area").hidden = !showPlayer;
    if (showPlayer) el(activeView === "daily" ? "daily-slot" : "practice-slot").appendChild(el("quiz-area"));
    el("practice-picker").hidden = activeView === "practice" && isPractice();
    el("daily-return").hidden = !isPractice();
    el("practice-back").hidden = !isPractice();
  }

  function navigate(view) {
    activeView = view;
    if (view === "daily" || view === "practice") practiceActive = false;
    render();
    el("main-content").focus({preventScroll: true});
  }
  document.querySelectorAll("[data-view], [data-open-view]").forEach(button => {
    button.addEventListener("click", () => navigate(button.dataset.view || button.dataset.openView));
  });
  el("product-cards").addEventListener("click", event => {
    const button = event.target.closest("[data-practice-drug]");
    if (!button) return;
    const drug = button.dataset.practiceDrug;
    const ids = bank.filter(q => q.drug === drug).map(q => q.id);
    startPractice(seededShuffle(ids, Date.now()), drug + " 연습");
  });
  el("practice-back").addEventListener("click", () => navigate("practice"));
  el("resume-practice").addEventListener("click", () => {
    if (!state.practice) return;
    practiceActive = true;
    activeView = "practice";
    render();
  });

  // ---------- 프로필 이벤트 ----------
  function switchProfile(id) {
    if (!profiles.players.find((p) => p.id === id)) return;
    profiles.currentId = id;
    saveProfiles(profiles);
    state = loadStateFor(id);
    practiceActive = !!state.practice;
    activeView = practiceActive ? "practice" : "daily";
    render();
  }

  function renameProfile() {
    const cur = profiles.players.find((p) => p.id === profiles.currentId);
    const name = (prompt("닉네임을 입력하세요.", cur ? cur.name : "") || "").trim();
    if (!name) return;
    cur.name = name.slice(0, 16);
    saveProfiles(profiles);
    render();
  }

  function addProfile() {
    const name = (prompt("새 프로필(참가자) 이름을 입력하세요.") || "").trim();
    if (!name) return;
    const id = "p_" + Date.now().toString(36);
    profiles.players.push({ id, name: name.slice(0, 16), createdAt: Date.now() });
    profiles.currentId = id;
    saveProfiles(profiles);
    state = loadStateFor(id);
    practiceActive = !!state.practice;
    activeView = practiceActive ? "practice" : "daily";
    render();
  }

  // ---------- 이벤트 바인딩 ----------
  dom.nextBtn.addEventListener("click", goNext);
  dom.profileSelect.addEventListener("change", (e) =>
    switchProfile(e.target.value)
  );
  dom.renameBtn.addEventListener("click", renameProfile);
  dom.addProfileBtn.addEventListener("click", addProfile);

  const resetBtn = el("reset-btn");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      if (
        confirm(
          `'${currentName()}' 프로필의 포인트와 기록을 초기화할까요? 되돌릴 수 없습니다.`
        )
      ) {
        state = defaultState();
        practiceActive = false;
        activeView = "overview";
        saveState();
        render();
      }
    });
  }

  // 첫 렌더
  render();
})();
