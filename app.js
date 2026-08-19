/*
 * 제품 퀴즈 - 앱 로직
 * - 하루 5문제
 * - 정답당 포인트 적립 + 연속 학습(스트릭) 보너스
 * - 진행 상태는 브라우저 localStorage 에 저장(서버 불필요)
 */
(function () {
  "use strict";

  const DAILY_COUNT = 5; // 하루 문제 수
  const POINTS_PER_CORRECT = 20; // 정답당 포인트
  const PERFECT_BONUS = 30; // 5문제 전부 정답 보너스
  const STREAK_BONUS_PER_DAY = 5; // 스트릭 1일당 추가 보너스(상한 있음)
  const STREAK_BONUS_CAP = 50; // 스트릭 보너스 상한
  const STORAGE_KEY = "productQuizState.v1";

  const bank = window.QUESTION_BANK || [];

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
    if (bank.length === 0) return [];
    const seed = hashSeed("quiz-" + dateKey);
    const shuffled = seededShuffle(bank, seed);
    return shuffled.slice(0, Math.min(DAILY_COUNT, shuffled.length));
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
      // 오늘 진행 정보(하루 안에서 새로고침해도 이어짐)
      today: null, // { date, index, answers: [], correctCount, finished }
    };
  }

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return defaultState();
      const s = JSON.parse(raw);
      return Object.assign(defaultState(), s);
    } catch (e) {
      return defaultState();
    }
  }

  function saveState(s) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(s));
    } catch (e) {
      /* 저장 실패는 조용히 무시 */
    }
  }

  let state = loadState();

  // ---------- DOM ----------
  const el = (id) => document.getElementById(id);
  const dom = {
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
  };

  // ---------- 오늘 세션 초기화 ----------
  function ensureToday() {
    const tk = todayKey();
    if (!state.today || state.today.date !== tk) {
      state.today = {
        date: tk,
        index: 0,
        answers: [], // 선택한 보기 인덱스
        correctCount: 0,
        finished: false,
      };
      saveState(state);
    }
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

  // ---------- 렌더링 ----------
  function render() {
    ensureToday();
    updateStatsBar();
    dom.dateLabel.textContent = state.today.date + " 오늘의 퀴즈";

    const questions = getDailyQuestions(state.today.date);

    if (state.today.finished) {
      showDone(questions);
      return;
    }
    if (questions.length === 0) {
      dom.questionText.textContent = "출제할 문제가 없습니다.";
      dom.options.innerHTML = "";
      return;
    }
    dom.quizCard.hidden = false;
    dom.doneCard.hidden = true;
    renderQuestion(questions);
  }

  function renderQuestion(questions) {
    const i = state.today.index;
    const q = questions[i];
    const total = questions.length;

    dom.progressText.textContent = `${i + 1} / ${total}`;
    dom.progressFill.style.width = `${(i / total) * 100}%`;
    dom.drugTag.textContent = q.drug;
    dom.questionText.textContent = q.q;
    dom.feedback.hidden = true;
    dom.feedback.className = "feedback";
    dom.nextBtn.hidden = true;

    dom.options.innerHTML = "";
    q.options.forEach((opt, idx) => {
      const btn = document.createElement("button");
      btn.className = "option";
      btn.type = "button";
      btn.textContent = opt;
      btn.addEventListener("click", () => onAnswer(questions, idx, btn));
      dom.options.appendChild(btn);
    });
  }

  function onAnswer(questions, choiceIdx, btnEl) {
    const i = state.today.index;
    const q = questions[i];
    // 이미 답한 문제면 무시
    if (state.today.answers.length > i) return;

    const isCorrect = choiceIdx === q.answer;
    state.today.answers.push(choiceIdx);
    if (isCorrect) state.today.correctCount++;

    // 보기 잠금 + 정답/오답 표시
    const buttons = Array.from(dom.options.children);
    buttons.forEach((b, idx) => {
      b.disabled = true;
      if (idx === q.answer) b.classList.add("correct");
      if (idx === choiceIdx && !isCorrect) b.classList.add("wrong");
    });

    dom.feedback.hidden = false;
    dom.feedback.classList.add(isCorrect ? "ok" : "no");
    dom.feedback.innerHTML =
      `<strong>${isCorrect ? "정답입니다! ✅" : "오답입니다. ❌"}</strong><br>` +
      q.explain;

    dom.nextBtn.hidden = false;
    dom.nextBtn.textContent =
      i + 1 >= questions.length ? "결과 보기" : "다음 문제";
    saveState(state);
  }

  function goNext() {
    const questions = getDailyQuestions(state.today.date);
    if (state.today.index + 1 >= questions.length) {
      finishDay(questions);
    } else {
      state.today.index++;
      saveState(state);
      renderQuestion(questions);
    }
  }

  function finishDay(questions) {
    const correct = state.today.correctCount;
    const total = questions.length;

    // 스트릭 갱신
    if (isYesterday(state.lastCompletedDate, state.today.date)) {
      state.streak += 1;
    } else {
      state.streak = 1;
    }
    if (state.streak > state.bestStreak) state.bestStreak = state.streak;

    // 포인트 계산
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
    state.lastCompletedDate = state.today.date;
    state.today.finished = true;
    state.today.earned = earned;
    state.today.perfect = correct === total;
    state.today.streakBonus = streakBonus;
    saveState(state);

    render();
  }

  function showDone(questions) {
    dom.quizCard.hidden = true;
    dom.doneCard.hidden = false;
    dom.progressFill.style.width = "100%";
    dom.progressText.textContent = `${questions.length} / ${questions.length}`;

    const correct = state.today.correctCount;
    const total = questions.length;
    dom.doneTitle.textContent = state.today.perfect
      ? "완벽해요! 🎉"
      : "오늘 학습 완료! 👏";
    dom.doneSummary.textContent = `${total}문제 중 ${correct}문제 정답`;

    let earnedText = `+${state.today.earned} 포인트 획득`;
    const parts = [];
    parts.push(`정답 ${correct}×${POINTS_PER_CORRECT}`);
    if (state.today.perfect) parts.push(`올클리어 보너스 +${PERFECT_BONUS}`);
    if (state.today.streakBonus > 0)
      parts.push(`스트릭 보너스 +${state.today.streakBonus}`);
    dom.doneEarned.innerHTML =
      `<div class="earned-big">${earnedText}</div>` +
      `<div class="earned-detail">${parts.join(" · ")}</div>` +
      `<div class="earned-detail">현재 연속 학습 ${state.streak}일 · 누적 ${state.points.toLocaleString()}포인트</div>`;

    // 오늘 문제 리뷰
    dom.reviewList.innerHTML = "";
    questions.forEach((q, idx) => {
      const chosen = state.today.answers[idx];
      const ok = chosen === q.answer;
      const item = document.createElement("div");
      item.className = "review-item " + (ok ? "ok" : "no");
      item.innerHTML =
        `<div class="review-q"><span class="mini-tag">${q.drug}</span> ${q.q}</div>` +
        `<div class="review-a">정답: <b>${q.options[q.answer]}</b>` +
        (ok ? "" : ` · 내 선택: ${q.options[chosen]}`) +
        `</div>` +
        `<div class="review-e">${q.explain}</div>`;
      dom.reviewList.appendChild(item);
    });
  }

  // ---------- 이벤트 ----------
  dom.nextBtn.addEventListener("click", goNext);

  const resetBtn = el("reset-btn");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      if (
        confirm(
          "모든 포인트와 진행 기록을 초기화할까요? 되돌릴 수 없습니다."
        )
      ) {
        state = defaultState();
        saveState(state);
        render();
      }
    });
  }

  // 첫 렌더
  render();
})();
