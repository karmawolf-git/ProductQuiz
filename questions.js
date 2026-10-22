const QUESTION_BANK = [
  {
    "id": 1,
    "drug": "리피토",
    "q": "리피토(Lipitor)의 주성분은 무엇인가요?",
    "options": [
      "아토르바스타틴",
      "암로디핀",
      "프레가발린",
      "세레콕시브"
    ],
    "answer": 0,
    "explain": "리피토의 주성분은 아토르바스타틴(atorvastatin)입니다.",
    "source": "https://www.viatris.co.kr/-/media/project/common/viatriscokr/pdf/product-chart/lipitor-tablets_12mar2024.pdf",
    "sourceName": "리피토정 10·20·40·80mg 국내 제품설명서",
    "reviewed": "2026-10-20"
  },
  {
    "id": 2,
    "drug": "리피토",
    "q": "리피토가 속하는 약물 계열은 무엇인가요?",
    "options": [
      "칼슘채널차단제",
      "HMG-CoA 환원효소 억제제(스타틴)",
      "COX-2 억제제",
      "항경련제"
    ],
    "answer": 1,
    "explain": "아토르바스타틴은 HMG-CoA 환원효소를 억제하는 스타틴 계열 약물로 콜레스테롤 합성을 줄입니다.",
    "source": "https://www.viatris.co.kr/-/media/project/common/viatriscokr/pdf/product-chart/lipitor-tablets_12mar2024.pdf",
    "sourceName": "리피토정 10·20·40·80mg 국내 제품설명서",
    "reviewed": "2026-10-20"
  },
  {
    "id": 3,
    "drug": "리피토",
    "q": "리피토의 대표적인 적응증은 무엇인가요?",
    "options": [
      "고혈압",
      "이상지질혈증(고지혈증)",
      "신경병증성 통증",
      "골관절염"
    ],
    "answer": 1,
    "explain": "리피토는 LDL 콜레스테롤을 낮추어 이상지질혈증(고지혈증) 치료에 사용됩니다.",
    "source": "https://www.viatris.co.kr/-/media/project/common/viatriscokr/pdf/product-chart/lipitor-tablets_12mar2024.pdf",
    "sourceName": "리피토정 10·20·40·80mg 국내 제품설명서",
    "reviewed": "2026-10-20"
  },
  {
    "id": 4,
    "drug": "리피토",
    "q": "스타틴이 주로 낮추는 혈중 지질 성분은 무엇인가요?",
    "options": [
      "HDL 콜레스테롤",
      "LDL 콜레스테롤",
      "혈당",
      "요산"
    ],
    "answer": 1,
    "explain": "스타틴은 특히 LDL(나쁜) 콜레스테롤을 효과적으로 낮춥니다.",
    "source": "https://www.viatris.co.kr/-/media/project/common/viatriscokr/pdf/product-chart/lipitor-tablets_12mar2024.pdf",
    "sourceName": "리피토정 10·20·40·80mg 국내 제품설명서",
    "reviewed": "2026-10-20"
  },
  {
    "id": 5,
    "drug": "리피토",
    "q": "스타틴 복용 중 드물지만 주의해야 할 대표적 이상반응은?",
    "options": [
      "근육통·근육병증",
      "탈모",
      "청력 소실",
      "시력 향상"
    ],
    "answer": 0,
    "explain": "스타틴은 드물게 근육통, 근육병증(횡문근융해증 포함)을 일으킬 수 있어 근육 증상에 주의합니다.",
    "source": "https://www.viatris.co.kr/-/media/project/common/viatriscokr/pdf/product-chart/lipitor-tablets_12mar2024.pdf",
    "sourceName": "리피토정 10·20·40·80mg 국내 제품설명서",
    "reviewed": "2026-10-20"
  },
  {
    "id": 6,
    "drug": "리피토",
    "q": "스타틴 시작 전 및 임상적으로 필요할 때 확인하는 대표적 검사 수치는?",
    "options": [
      "간기능 수치(AST/ALT)",
      "안압",
      "골밀도",
      "심박수"
    ],
    "answer": 0,
    "explain": "국내 허가사항에서는 치료 시작 전 간기능 검사를 시행하고, 이후 간손상 증후가 있는 경우 반복 검사하도록 안내합니다. 정기적인 검사 등으로 충분히 관찰하여 이상이 확인되면 적절한 조치를 취합니다.",
    "source": "https://www.viatris.co.kr/-/media/project/common/viatriscokr/pdf/product-chart/lipitor-tablets_12mar2024.pdf",
    "sourceName": "리피토정 10·20·40·80mg 국내 제품설명서",
    "reviewed": "2026-10-20"
  },
  {
    "id": 20,
    "drug": "리피토플러스",
    "q": "리피토플러스는 어떤 성분들의 복합제인가요?",
    "options": [
      "아토르바스타틴 + 에제티미브",
      "암로디핀 + 발사르탄",
      "프레가발린 + 가바펜틴",
      "세레콕시브 + 트라마돌"
    ],
    "answer": 0,
    "explain": "리피토플러스는 스타틴(아토르바스타틴)과 콜레스테롤 흡수 억제제(에제티미브)를 결합한 복합제입니다.",
    "source": "https://www.viatris.co.kr/-/media/project/common/viatriscokr/pdf/product-chart/lipitorplus_20260303.pdf",
    "sourceName": "리피토플러스정 10/10·10/20·10/40mg 국내 제품설명서",
    "reviewed": "2026-10-20"
  },
  {
    "id": 21,
    "drug": "리피토플러스",
    "q": "리피토플러스에 포함된 에제티미브의 작용 기전은 무엇인가요?",
    "options": [
      "장에서의 콜레스테롤 흡수 억제",
      "칼슘채널 차단",
      "COX-2 억제",
      "신경 흥분 억제"
    ],
    "answer": 0,
    "explain": "에제티미브는 소장에서 콜레스테롤 흡수를 선택적으로 억제하여 LDL을 추가로 낮춥니다.",
    "source": "https://www.viatris.co.kr/-/media/project/common/viatriscokr/pdf/product-chart/lipitorplus_20260303.pdf",
    "sourceName": "리피토플러스정 10/10·10/20·10/40mg 국내 제품설명서",
    "reviewed": "2026-10-20"
  },
  {
    "id": 22,
    "drug": "리피토플러스",
    "q": "리피토플러스처럼 두 기전을 결합한 복합제의 주요 장점은?",
    "options": [
      "서로 다른 기전으로 LDL 강하 효과 강화",
      "혈압을 함께 낮춤",
      "통증을 함께 조절",
      "혈당을 함께 낮춤"
    ],
    "answer": 0,
    "explain": "합성 억제(스타틴)와 흡수 억제(에제티미브)를 함께 사용해 단독요법보다 강력한 LDL 강하를 기대할 수 있습니다.",
    "source": "https://www.viatris.co.kr/-/media/project/common/viatriscokr/pdf/product-chart/lipitorplus_20260303.pdf",
    "sourceName": "리피토플러스정 10/10·10/20·10/40mg 국내 제품설명서",
    "reviewed": "2026-10-20"
  },
  {
    "id": 23,
    "drug": "리피토플러스",
    "q": "리피토플러스가 목표로 하는 주 치료 영역은?",
    "options": [
      "이상지질혈증(콜레스테롤 관리)",
      "고혈압",
      "관절염",
      "간질"
    ],
    "answer": 0,
    "explain": "리피토플러스는 콜레스테롤(이상지질혈증) 관리를 위한 복합제입니다.",
    "source": "https://www.viatris.co.kr/-/media/project/common/viatriscokr/pdf/product-chart/lipitorplus_20260303.pdf",
    "sourceName": "리피토플러스정 10/10·10/20·10/40mg 국내 제품설명서",
    "reviewed": "2026-10-20"
  },
  {
    "id": 40,
    "drug": "노바스크",
    "q": "노바스크(Norvasc)의 주성분은 무엇인가요?",
    "options": [
      "암로디핀",
      "아토르바스타틴",
      "세레콕시브",
      "프레가발린"
    ],
    "answer": 0,
    "explain": "노바스크의 주성분은 암로디핀(amlodipine)입니다.",
    "source": "https://www.viatris.co.kr/-/media/project/common/viatriscokr/pdf/lld_norvasc_20240830.pdf",
    "sourceName": "노바스크정 2.5·5·10mg 국내 제품설명서",
    "reviewed": "2026-10-20"
  },
  {
    "id": 41,
    "drug": "노바스크",
    "q": "노바스크(암로디핀)가 속하는 약물 계열은?",
    "options": [
      "디하이드로피리딘계 칼슘채널차단제",
      "베타차단제",
      "스타틴",
      "이뇨제"
    ],
    "answer": 0,
    "explain": "암로디핀은 디하이드로피리딘계 칼슘채널차단제(CCB)로 혈관을 확장시킵니다.",
    "source": "https://www.viatris.co.kr/-/media/project/common/viatriscokr/pdf/lld_norvasc_20240830.pdf",
    "sourceName": "노바스크정 2.5·5·10mg 국내 제품설명서",
    "reviewed": "2026-10-20"
  },
  {
    "id": 42,
    "drug": "노바스크",
    "q": "노바스크의 대표적인 적응증은?",
    "options": [
      "고혈압·협심증",
      "고지혈증",
      "우울증",
      "위궤양"
    ],
    "answer": 0,
    "explain": "노바스크는 고혈압과 협심증(안정형·이형성) 치료에 사용됩니다.",
    "source": "https://www.viatris.co.kr/-/media/project/common/viatriscokr/pdf/lld_norvasc_20240830.pdf",
    "sourceName": "노바스크정 2.5·5·10mg 국내 제품설명서",
    "reviewed": "2026-10-20"
  },
  {
    "id": 43,
    "drug": "노바스크",
    "q": "암로디핀의 혈압 강하 기전으로 옳은 것은?",
    "options": [
      "혈관 평활근 이완을 통한 말초혈관 확장",
      "심박수 증가",
      "소변량 감소",
      "혈액 점도 증가"
    ],
    "answer": 0,
    "explain": "칼슘 유입을 차단해 혈관 평활근을 이완시키고 말초혈관을 확장하여 혈압을 낮춥니다.",
    "source": "https://www.viatris.co.kr/-/media/project/common/viatriscokr/pdf/lld_norvasc_20240830.pdf",
    "sourceName": "노바스크정 2.5·5·10mg 국내 제품설명서",
    "reviewed": "2026-10-20"
  },
  {
    "id": 44,
    "drug": "노바스크",
    "q": "암로디핀 복용 시 비교적 흔히 나타날 수 있는 이상반응은?",
    "options": [
      "말초 부종(발목 부종)",
      "혈당 급등",
      "청력 상실",
      "탈모"
    ],
    "answer": 0,
    "explain": "혈관 확장 작용으로 인해 발목 등 말초 부종이 비교적 흔하게 나타날 수 있습니다.",
    "source": "https://www.viatris.co.kr/-/media/project/common/viatriscokr/pdf/lld_norvasc_20240830.pdf",
    "sourceName": "노바스크정 2.5·5·10mg 국내 제품설명서",
    "reviewed": "2026-10-20"
  },
  {
    "id": 45,
    "drug": "노바스크",
    "q": "암로디핀의 특징 중 하나로 옳은 것은?",
    "options": [
      "반감기가 길어 1일 1회 복용이 가능",
      "반드시 1일 4회 복용",
      "복용 즉시 효과가 사라짐",
      "공복에만 효과가 있음"
    ],
    "answer": 0,
    "explain": "암로디핀은 반감기가 길어(약 30~50시간) 하루 한 번 복용으로 24시간 혈압 조절이 가능합니다.",
    "source": "https://www.viatris.co.kr/-/media/project/common/viatriscokr/pdf/lld_norvasc_20240830.pdf",
    "sourceName": "노바스크정 2.5·5·10mg 국내 제품설명서",
    "reviewed": "2026-10-20"
  },
  {
    "id": 60,
    "drug": "리리카",
    "q": "리리카(Lyrica)의 주성분은 무엇인가요?",
    "options": [
      "프레가발린",
      "암로디핀",
      "세레콕시브",
      "아토르바스타틴"
    ],
    "answer": 0,
    "explain": "리리카의 주성분은 프레가발린(pregabalin)입니다.",
    "source": "https://www.viatris.co.kr/-/media/project/common/viatriscokr/pdf/product-chart/updated-pdfs/lyrica-cap_lld_20250318.pdf",
    "sourceName": "리리카캡슐 25·50·75·150·300mg 국내 제품설명서",
    "reviewed": "2026-10-20"
  },
  {
    "id": 61,
    "drug": "리리카",
    "q": "리리카의 대표적인 적응증이 아닌 것은?",
    "options": [
      "신경병증성 통증",
      "섬유근육통",
      "부분발작 보조요법",
      "고혈압"
    ],
    "answer": 3,
    "explain": "리리카는 신경병증성 통증, 섬유근육통, 부분발작 보조요법 등에 사용되며 고혈압은 적응증이 아닙니다.",
    "source": "https://www.viatris.co.kr/-/media/project/common/viatriscokr/pdf/product-chart/updated-pdfs/lyrica-cap_lld_20250318.pdf",
    "sourceName": "리리카캡슐 25·50·75·150·300mg 국내 제품설명서",
    "reviewed": "2026-10-20"
  },
  {
    "id": 62,
    "drug": "리리카",
    "q": "프레가발린의 작용 기전으로 옳은 것은?",
    "options": [
      "전압의존성 칼슘채널의 α2δ 소단위에 결합",
      "COX-2 효소 억제",
      "HMG-CoA 환원효소 억제",
      "베타수용체 차단"
    ],
    "answer": 0,
    "explain": "프레가발린은 전압의존성 칼슘채널의 α2δ 소단위에 결합하여 흥분성 신경전달물질 방출을 감소시킵니다.",
    "source": "https://www.viatris.co.kr/-/media/project/common/viatriscokr/pdf/product-chart/updated-pdfs/lyrica-cap_lld_20250318.pdf",
    "sourceName": "리리카캡슐 25·50·75·150·300mg 국내 제품설명서",
    "reviewed": "2026-10-20"
  },
  {
    "id": 63,
    "drug": "리리카",
    "q": "리리카 복용 시 흔히 나타날 수 있는 이상반응은?",
    "options": [
      "어지러움·졸음",
      "혈압 급등",
      "탈모",
      "청력 상실"
    ],
    "answer": 0,
    "explain": "리리카는 어지러움과 졸음이 비교적 흔한 이상반응입니다.",
    "source": "https://www.viatris.co.kr/-/media/project/common/viatriscokr/pdf/product-chart/updated-pdfs/lyrica-cap_lld_20250318.pdf",
    "sourceName": "리리카캡슐 25·50·75·150·300mg 국내 제품설명서",
    "reviewed": "2026-10-20"
  },
  {
    "id": 64,
    "drug": "리리카",
    "q": "리리카 복용 환자 상담 시 특히 주의를 당부해야 할 상황은?",
    "options": [
      "운전·기계 조작 시 졸음·어지러움",
      "햇빛 노출",
      "고단백 식이",
      "카페인 섭취"
    ],
    "answer": 0,
    "explain": "졸음·어지러움이 있을 수 있어 운전이나 기계 조작 시 주의가 필요합니다.",
    "source": "https://www.viatris.co.kr/-/media/project/common/viatriscokr/pdf/product-chart/updated-pdfs/lyrica-cap_lld_20250318.pdf",
    "sourceName": "리리카캡슐 25·50·75·150·300mg 국내 제품설명서",
    "reviewed": "2026-10-20"
  },
  {
    "id": 65,
    "drug": "리리카",
    "q": "리리카를 갑자기 중단하면 안 되는 이유로 가장 적절한 것은?",
    "options": [
      "금단·재발 증상 우려로 점진적 감량 권장",
      "즉시 혈압이 오름",
      "간 손상 유발",
      "효과가 영구히 사라짐"
    ],
    "answer": 0,
    "explain": "갑작스러운 중단은 금단 증상을 유발할 수 있어 점진적으로 감량하는 것이 권장됩니다.",
    "source": "https://www.viatris.co.kr/-/media/project/common/viatriscokr/pdf/product-chart/updated-pdfs/lyrica-cap_lld_20250318.pdf",
    "sourceName": "리리카캡슐 25·50·75·150·300mg 국내 제품설명서",
    "reviewed": "2026-10-20"
  },
  {
    "id": 80,
    "drug": "쎄레브렉스",
    "q": "쎄레브렉스(Celebrex)의 주성분은 무엇인가요?",
    "options": [
      "세레콕시브",
      "프레가발린",
      "암로디핀",
      "아토르바스타틴"
    ],
    "answer": 0,
    "explain": "쎄레브렉스의 주성분은 세레콕시브(celecoxib)입니다.",
    "source": "https://www.viatris.co.kr/-/media/project/common/viatriscokr/pdf/product-chart/celebrex100mg-200mg_20250602.pdf",
    "sourceName": "쎄레브렉스캡슐 100·200mg 국내 제품설명서",
    "reviewed": "2026-10-20"
  },
  {
    "id": 81,
    "drug": "쎄레브렉스",
    "q": "쎄레브렉스가 속하는 약물 계열은?",
    "options": [
      "COX-2 선택적 억제 NSAID",
      "스타틴",
      "칼슘채널차단제",
      "항경련제"
    ],
    "answer": 0,
    "explain": "세레콕시브는 COX-2를 선택적으로 억제하는 비스테로이드성 소염진통제(NSAID)입니다.",
    "source": "https://www.viatris.co.kr/-/media/project/common/viatriscokr/pdf/product-chart/celebrex100mg-200mg_20250602.pdf",
    "sourceName": "쎄레브렉스캡슐 100·200mg 국내 제품설명서",
    "reviewed": "2026-10-20"
  },
  {
    "id": 82,
    "drug": "쎄레브렉스",
    "q": "쎄레브렉스의 대표적인 적응증은?",
    "options": [
      "골관절염·류마티스 관절염 등 통증·염증",
      "고혈압",
      "고지혈증",
      "간질"
    ],
    "answer": 0,
    "explain": "쎄레브렉스는 골관절염, 류마티스 관절염, 급성 통증 등 통증·염증 치료에 사용됩니다.",
    "source": "https://www.viatris.co.kr/-/media/project/common/viatriscokr/pdf/product-chart/celebrex100mg-200mg_20250602.pdf",
    "sourceName": "쎄레브렉스캡슐 100·200mg 국내 제품설명서",
    "reviewed": "2026-10-20"
  },
  {
    "id": 83,
    "drug": "쎄레브렉스",
    "q": "COX-2 선택적 억제제가 기존 비선택적 NSAID 대비 기대하는 장점은?",
    "options": [
      "위장관 부작용(궤양 등) 상대적 감소",
      "혈압 강하",
      "콜레스테롤 감소",
      "혈당 조절"
    ],
    "answer": 0,
    "explain": "COX-1을 상대적으로 덜 억제하여 위장관 부작용(궤양·출혈) 위험을 낮추는 것을 기대합니다.",
    "source": "https://www.viatris.co.kr/-/media/project/common/viatriscokr/pdf/product-chart/celebrex100mg-200mg_20250602.pdf",
    "sourceName": "쎄레브렉스캡슐 100·200mg 국내 제품설명서",
    "reviewed": "2026-10-20"
  },
  {
    "id": 84,
    "drug": "쎄레브렉스",
    "q": "세레콕시브 사용 시 주의해야 할 대표적 위험은?",
    "options": [
      "심혈관계 위험(고위험 환자 주의)",
      "혈당 저하",
      "탈모",
      "청력 상실"
    ],
    "answer": 0,
    "explain": "NSAID로서 심혈관계 위험이 있을 수 있어 심혈관 고위험 환자에서는 주의가 필요합니다.",
    "source": "https://www.viatris.co.kr/-/media/project/common/viatriscokr/pdf/product-chart/celebrex100mg-200mg_20250602.pdf",
    "sourceName": "쎄레브렉스캡슐 100·200mg 국내 제품설명서",
    "reviewed": "2026-10-20"
  },
  {
    "id": 85,
    "drug": "쎄레브렉스",
    "q": "세레콕시브 처방 전 확인이 특히 중요한 약물 알레르기는?",
    "options": [
      "설폰아마이드계 과민반응",
      "페니실린 알레르기",
      "요오드 알레르기",
      "유당 불내성"
    ],
    "answer": 0,
    "explain": "세레콕시브 또는 설폰아마이드에 대한 알려진 과민반응은 허가사항의 금기 항목을 확인해야 합니다.",
    "source": "https://www.viatris.co.kr/-/media/project/common/viatriscokr/pdf/product-chart/celebrex100mg-200mg_20250602.pdf",
    "sourceName": "쎄레브렉스캡슐 100·200mg 국내 제품설명서",
    "reviewed": "2026-10-20"
  },
  {
    "id": 100,
    "drug": "리피토",
    "q": "아토르바스타틴이 간세포의 LDL 수용체를 증가시키는 과정과 가장 관련 있는 변화는?",
    "options": [
      "간 내 콜레스테롤 합성 감소",
      "장내 담즙산 흡수 증가",
      "혈관 칼슘 유입 감소",
      "신장 포도당 재흡수 감소"
    ],
    "answer": 0,
    "explain": "합성 억제로 간 내 콜레스테롤이 감소하면 LDL 수용체 발현이 증가하여 혈중 LDL 제거가 촉진됩니다.",
    "level": "응용",
    "source": "https://www.viatris.co.kr/-/media/project/common/viatriscokr/pdf/product-chart/lipitor-tablets_12mar2024.pdf",
    "reviewed": "2026-10-20",
    "sourceName": "리피토정 10·20·40·80mg 국내 제품설명서"
  },
  {
    "id": 101,
    "drug": "리피토",
    "q": "아토르바스타틴 복용 중 강력한 CYP3A4 억제제를 병용할 때 특히 검토할 위험은?",
    "options": [
      "약물 농도 저하로 인한 효과 소실",
      "약물 노출 증가에 따른 근육독성",
      "장내 콜레스테롤 흡수 증가",
      "칼슘채널 차단 효과 증가"
    ],
    "answer": 1,
    "explain": "CYP3A4 억제는 아토르바스타틴 노출을 높일 수 있어 병용약과 근육독성 위험을 검토합니다.",
    "level": "응용",
    "source": "https://www.viatris.co.kr/-/media/project/common/viatriscokr/pdf/product-chart/lipitor-tablets_12mar2024.pdf",
    "reviewed": "2026-10-20",
    "sourceName": "리피토정 10·20·40·80mg 국내 제품설명서"
  },
  {
    "id": 102,
    "drug": "리피토",
    "q": "리피토 복용 중 설명되지 않는 근육통·근력 저하와 진한 소변이 발생했다. 가장 적절한 상담은?",
    "options": [
      "운동량을 늘리도록 권한다",
      "효과가 나타나는 정상 과정이라고 설명한다",
      "근육 손상 가능성을 고려해 신속히 의료진 평가를 받게 한다",
      "다른 스타틴을 임의로 추가하도록 한다"
    ],
    "answer": 2,
    "explain": "근육 증상과 진한 소변은 심한 근육 손상의 신호일 수 있으므로 신속한 평가가 필요합니다.",
    "level": "응용",
    "source": "https://www.viatris.co.kr/-/media/project/common/viatriscokr/pdf/product-chart/lipitor-tablets_12mar2024.pdf",
    "reviewed": "2026-10-20",
    "sourceName": "리피토정 10·20·40·80mg 국내 제품설명서"
  },
  {
    "id": 103,
    "drug": "리피토",
    "q": "아토르바스타틴과 에제티미브의 기전을 올바르게 비교한 것은?",
    "options": [
      "둘 다 장내 NPC1L1을 억제한다",
      "아토르바스타틴은 흡수, 에제티미브는 합성을 억제한다",
      "둘 다 COX-2를 억제한다",
      "아토르바스타틴은 합성, 에제티미브는 흡수를 억제한다"
    ],
    "answer": 3,
    "explain": "아토르바스타틴은 HMG-CoA 환원효소를, 에제티미브는 장의 NPC1L1을 표적으로 합니다.",
    "level": "응용",
    "source": "https://www.viatris.co.kr/-/media/project/common/viatriscokr/pdf/product-chart/lipitor-tablets_12mar2024.pdf",
    "reviewed": "2026-10-20",
    "sourceName": "리피토정 10·20·40·80mg 국내 제품설명서"
  },
  {
    "id": 104,
    "drug": "리피토플러스",
    "q": "에제티미브가 표적으로 하는 장내 수송 단백질은?",
    "options": [
      "NPC1L1",
      "SGLT2",
      "α2δ",
      "COX-2"
    ],
    "answer": 0,
    "explain": "NPC1L1은 장에서 콜레스테롤이 흡수되는 데 관여하는 단백질입니다.",
    "level": "응용",
    "source": "https://www.viatris.co.kr/-/media/project/common/viatriscokr/pdf/product-chart/lipitorplus_20260303.pdf",
    "reviewed": "2026-10-20",
    "sourceName": "리피토플러스정 10/10·10/20·10/40mg 국내 제품설명서"
  },
  {
    "id": 105,
    "drug": "리피토플러스",
    "q": "스타틴 단독요법에 에제티미브를 더하는 기전적 근거는?",
    "options": [
      "같은 효소를 이중으로 차단한다",
      "콜레스테롤의 합성과 흡수라는 서로 다른 경로를 억제한다",
      "혈압 강하를 통해 LDL을 제거한다",
      "신장으로 콜레스테롤 배설을 직접 증가시킨다"
    ],
    "answer": 1,
    "explain": "합성과 흡수 경로를 함께 억제하여 LDL 강하 효과를 보완합니다.",
    "level": "응용",
    "source": "https://www.viatris.co.kr/-/media/project/common/viatriscokr/pdf/product-chart/lipitorplus_20260303.pdf",
    "reviewed": "2026-10-20",
    "sourceName": "리피토플러스정 10/10·10/20·10/40mg 국내 제품설명서"
  },
  {
    "id": 106,
    "drug": "리피토플러스",
    "q": "리피토에서 리피토플러스로 변경된 환자의 병용약 검토 시 옳은 것은?",
    "options": [
      "에제티미브가 있어 스타틴 상호작용은 사라진다",
      "두 성분 모두 항고혈압제이다",
      "아토르바스타틴 성분에 관련된 상호작용도 계속 확인한다",
      "기존 스타틴을 항상 추가 복용한다"
    ],
    "answer": 2,
    "explain": "복합제에도 아토르바스타틴이 포함되므로 스타틴 관련 병용약 검토가 필요합니다.",
    "level": "응용",
    "source": "https://www.viatris.co.kr/-/media/project/common/viatriscokr/pdf/product-chart/lipitorplus_20260303.pdf",
    "reviewed": "2026-10-20",
    "sourceName": "리피토플러스정 10/10·10/20·10/40mg 국내 제품설명서"
  },
  {
    "id": 107,
    "drug": "리피토플러스",
    "q": "리피토플러스와 별도 아토르바스타틴 처방이 함께 보일 때 먼저 확인할 사항은?",
    "options": [
      "두 약의 색상이 같은지",
      "반드시 함께 복용해야 하는지",
      "에제티미브가 칼슘채널차단제인지",
      "스타틴 성분 중복과 총 투여량이 의도된 것인지"
    ],
    "answer": 3,
    "explain": "복합제의 성분을 확인하여 의도하지 않은 스타틴 중복을 방지해야 합니다.",
    "level": "응용",
    "source": "https://www.viatris.co.kr/-/media/project/common/viatriscokr/pdf/product-chart/lipitorplus_20260303.pdf",
    "reviewed": "2026-10-20",
    "sourceName": "리피토플러스정 10/10·10/20·10/40mg 국내 제품설명서"
  },
  {
    "id": 108,
    "drug": "리피토플러스",
    "q": "에제티미브의 작용에 대한 설명으로 옳은 것은?",
    "options": [
      "장내 콜레스테롤 흡수를 억제하며 스타틴과 표적이 다르다",
      "간의 HMG-CoA 환원효소를 직접 억제한다",
      "담즙산을 장내에서 물리적으로 결합하는 수지이다",
      "신경 칼슘채널의 α2δ에 결합한다"
    ],
    "answer": 0,
    "explain": "에제티미브는 NPC1L1을 표적으로 하며 스타틴이나 담즙산 결합수지와 기전이 다릅니다.",
    "level": "응용",
    "source": "https://www.viatris.co.kr/-/media/project/common/viatriscokr/pdf/product-chart/lipitorplus_20260303.pdf",
    "reviewed": "2026-10-20",
    "sourceName": "리피토플러스정 10/10·10/20·10/40mg 국내 제품설명서"
  },
  {
    "id": 109,
    "drug": "리피토플러스",
    "q": "복합제로 변경한 뒤 효과를 평가하는 지표로 가장 직접적인 것은?",
    "options": [
      "발목 둘레만 측정",
      "LDL 콜레스테롤 변화와 복약 이행 확인",
      "졸음 점수만 측정",
      "급성 통증 점수만 측정"
    ],
    "answer": 1,
    "explain": "지질 강하 치료의 반응은 LDL 변화와 복약 이행 등을 함께 평가합니다.",
    "level": "응용",
    "source": "https://www.viatris.co.kr/-/media/project/common/viatriscokr/pdf/product-chart/lipitorplus_20260303.pdf",
    "reviewed": "2026-10-20",
    "sourceName": "리피토플러스정 10/10·10/20·10/40mg 국내 제품설명서"
  },
  {
    "id": 110,
    "drug": "노바스크",
    "q": "암로디핀과 베라파밀의 특성을 비교할 때 암로디핀에 더 부합하는 것은?",
    "options": [
      "주로 방실결절 전도를 억제한다",
      "주된 효과가 강력한 이뇨이다",
      "말초혈관 평활근에 작용하여 혈관을 확장한다",
      "NPC1L1을 차단한다"
    ],
    "answer": 2,
    "explain": "암로디핀은 디하이드로피리딘계 CCB로 말초혈관 확장 작용이 중심입니다.",
    "level": "응용",
    "source": "https://www.viatris.co.kr/-/media/project/common/viatriscokr/pdf/lld_norvasc_20240830.pdf",
    "reviewed": "2026-10-20",
    "sourceName": "노바스크정 2.5·5·10mg 국내 제품설명서"
  },
  {
    "id": 111,
    "drug": "노바스크",
    "q": "암로디핀 복용 후 생긴 발목 부종의 기전으로 가장 적절한 것은?",
    "options": [
      "신장 사구체에서 약물이 결정화됨",
      "LDL 수용체 증가",
      "COX-2 차단에 의한 위산 증가",
      "세동맥 확장에 따른 모세혈관 내 압력 변화"
    ],
    "answer": 3,
    "explain": "암로디핀의 말초 부종은 세동맥 확장과 관련되며 단순한 전신 수분 과잉과 동일하게 해석하지 않습니다.",
    "level": "응용",
    "source": "https://www.viatris.co.kr/-/media/project/common/viatriscokr/pdf/lld_norvasc_20240830.pdf",
    "reviewed": "2026-10-20",
    "sourceName": "노바스크정 2.5·5·10mg 국내 제품설명서"
  },
  {
    "id": 112,
    "drug": "노바스크",
    "q": "반감기가 긴 암로디핀의 약동학적 특징으로 옳은 것은?",
    "options": [
      "반복 투여 후 정상상태 도달에 여러 날이 걸릴 수 있다",
      "정상상태에 항상 첫 복용 직후 도달한다",
      "짧은 반감기 때문에 매시간 투여한다",
      "반감기는 투여 간격과 전혀 관련 없다"
    ],
    "answer": 0,
    "explain": "긴 반감기는 1일 1회 투여를 뒷받침하며 정상상태 도달까지 시간이 필요합니다.",
    "level": "응용",
    "source": "https://www.viatris.co.kr/-/media/project/common/viatriscokr/pdf/lld_norvasc_20240830.pdf",
    "reviewed": "2026-10-20",
    "sourceName": "노바스크정 2.5·5·10mg 국내 제품설명서"
  },
  {
    "id": 113,
    "drug": "노바스크",
    "q": "암로디핀 복용자의 새 병용약에 강력한 CYP3A 억제제가 있다면 적절한 검토는?",
    "options": [
      "혈압 상승만 관찰한다",
      "암로디핀 노출 증가에 따른 저혈압·부종 등을 확인한다",
      "약물 상호작용이 전혀 없다고 안내한다",
      "LDL만 확인하면 충분하다"
    ],
    "answer": 1,
    "explain": "CYP3A 억제제 병용 시 암로디핀 노출이 증가할 수 있어 혈압과 이상반응을 관찰합니다.",
    "level": "응용",
    "source": "https://www.viatris.co.kr/-/media/project/common/viatriscokr/pdf/lld_norvasc_20240830.pdf",
    "reviewed": "2026-10-20",
    "sourceName": "노바스크정 2.5·5·10mg 국내 제품설명서"
  },
  {
    "id": 114,
    "drug": "리리카",
    "q": "프레가발린 투여량 검토 시 신기능이 중요한 이유는?",
    "options": [
      "대부분 담즙으로 배설된다",
      "간 CYP3A4로만 대사된다",
      "주로 신장으로 배설되어 신기능 저하 시 노출이 증가할 수 있다",
      "신장에서 활성형 스타틴으로 변한다"
    ],
    "answer": 2,
    "explain": "프레가발린은 주로 신장으로 배설되므로 신기능에 따른 용량 검토가 필요합니다.",
    "level": "응용",
    "source": "https://www.viatris.co.kr/-/media/project/common/viatriscokr/pdf/product-chart/updated-pdfs/lyrica-cap_lld_20250318.pdf",
    "reviewed": "2026-10-20",
    "sourceName": "리리카캡슐 25·50·75·150·300mg 국내 제품설명서"
  },
  {
    "id": 115,
    "drug": "리리카",
    "q": "프레가발린과 오피오이드 병용 시 특히 주의할 위험은?",
    "options": [
      "LDL 상승만 발생",
      "심박수 증가만 발생",
      "항혈소판 효과 소실",
      "중추신경 억제와 호흡억제 위험 증가"
    ],
    "answer": 3,
    "explain": "오피오이드 등 중추신경 억제제 병용 시 진정과 호흡억제 위험이 증가할 수 있습니다.",
    "level": "응용",
    "source": "https://www.viatris.co.kr/-/media/project/common/viatriscokr/pdf/product-chart/updated-pdfs/lyrica-cap_lld_20250318.pdf",
    "reviewed": "2026-10-20",
    "sourceName": "리리카캡슐 25·50·75·150·300mg 국내 제품설명서"
  },
  {
    "id": 116,
    "drug": "리리카",
    "q": "프레가발린의 이름과 구조로 인해 생길 수 있는 오해를 바로잡는 설명은?",
    "options": [
      "GABA 수용체에 직접 작용하는 약물로 설명하면 부정확하다",
      "GABA 수용체를 직접 활성화하는 것이 주기전이다",
      "COX-2를 선택적으로 차단한다",
      "HMG-CoA 환원효소를 억제한다"
    ],
    "answer": 0,
    "explain": "프레가발린의 표적은 α2δ 소단위이며 GABA 수용체에 직접 작용하는 약물로 설명하지 않습니다.",
    "level": "응용",
    "source": "https://www.viatris.co.kr/-/media/project/common/viatriscokr/pdf/product-chart/updated-pdfs/lyrica-cap_lld_20250318.pdf",
    "reviewed": "2026-10-20",
    "sourceName": "리리카캡슐 25·50·75·150·300mg 국내 제품설명서"
  },
  {
    "id": 117,
    "drug": "리리카",
    "q": "프레가발린 치료 중 얼굴·입술·혀 부종과 호흡곤란이 발생했다. 우선 대응은?",
    "options": [
      "다음 정기 방문까지 관찰",
      "혈관부종 가능성을 고려하여 즉시 응급 평가를 받는다",
      "효과가 좋다는 신호로 안내",
      "운전하여 장거리 이동하도록 권한다"
    ],
    "answer": 1,
    "explain": "얼굴이나 혀의 부종과 호흡곤란은 응급 평가가 필요한 혈관부종의 신호일 수 있습니다.",
    "level": "응용",
    "source": "https://www.viatris.co.kr/-/media/project/common/viatriscokr/pdf/product-chart/updated-pdfs/lyrica-cap_lld_20250318.pdf",
    "reviewed": "2026-10-20",
    "sourceName": "리리카캡슐 25·50·75·150·300mg 국내 제품설명서"
  },
  {
    "id": 118,
    "drug": "쎄레브렉스",
    "q": "세레콕시브의 COX-2 선택성과 위장관 안전성에 대한 설명으로 옳은 것은?",
    "options": [
      "위장관 출혈 위험이 완전히 사라진다",
      "항응고제 병용 시 출혈 평가가 불필요하다",
      "선택적 억제제여도 위장관 궤양·출혈 위험은 남는다",
      "위장관 위험은 투여기간과 무관하다"
    ],
    "answer": 2,
    "explain": "COX-2 선택성이 위장관 궤양이나 출혈 위험을 없애지는 않습니다.",
    "level": "응용",
    "source": "https://www.viatris.co.kr/-/media/project/common/viatriscokr/pdf/product-chart/celebrex100mg-200mg_20250602.pdf",
    "reviewed": "2026-10-20",
    "sourceName": "쎄레브렉스캡슐 100·200mg 국내 제품설명서"
  },
  {
    "id": 119,
    "drug": "쎄레브렉스",
    "q": "세레콕시브와 항응고제를 병용하는 환자에서 특히 확인할 사항은?",
    "options": [
      "청력 향상 여부",
      "LDL 감소 정도만 확인",
      "졸음이 없으면 모든 위험 배제",
      "출혈 징후와 병용에 따른 출혈 위험"
    ],
    "answer": 3,
    "explain": "항응고제와 NSAID 병용 시 출혈 위험을 검토하고 출혈 징후를 관찰합니다.",
    "level": "응용",
    "source": "https://www.viatris.co.kr/-/media/project/common/viatriscokr/pdf/product-chart/celebrex100mg-200mg_20250602.pdf",
    "reviewed": "2026-10-20",
    "sourceName": "쎄레브렉스캡슐 100·200mg 국내 제품설명서"
  },
  {
    "id": 120,
    "drug": "쎄레브렉스",
    "q": "탈수 상태이거나 신기능이 저하된 환자에서 NSAID 사용 시 주의하는 이유는?",
    "options": [
      "신장 프로스타글란딘 억제로 신장 관류가 악화될 수 있다",
      "신장 혈류가 항상 증가한다",
      "프레가발린으로 전환되기 때문이다",
      "장내 콜레스테롤 흡수를 늘리기 때문이다"
    ],
    "answer": 0,
    "explain": "NSAID의 프로스타글란딘 억제는 위험 환자에서 신장 혈류와 신기능에 영향을 줄 수 있습니다.",
    "level": "응용",
    "source": "https://www.viatris.co.kr/-/media/project/common/viatriscokr/pdf/product-chart/celebrex100mg-200mg_20250602.pdf",
    "reviewed": "2026-10-20",
    "sourceName": "쎄레브렉스캡슐 100·200mg 국내 제품설명서"
  },
  {
    "id": 121,
    "drug": "쎄레브렉스",
    "q": "세레콕시브의 사용 원칙으로 가장 적절한 것은?",
    "options": [
      "효과와 관계없이 최고 용량을 장기간 유지한다",
      "개별 위험을 고려해 효과가 있는 최소 용량을 필요한 최단기간 사용한다",
      "다른 NSAID를 항상 추가한다",
      "COX-2 선택성이 있으므로 심혈관 위험은 고려하지 않는다"
    ],
    "answer": 1,
    "explain": "NSAID는 개인의 위험을 평가하여 유효한 최소 용량과 필요한 최단기간을 고려합니다.",
    "level": "응용",
    "source": "https://www.viatris.co.kr/-/media/project/common/viatriscokr/pdf/product-chart/celebrex100mg-200mg_20250602.pdf",
    "reviewed": "2026-10-20",
    "sourceName": "쎄레브렉스캡슐 100·200mg 국내 제품설명서"
  },
  {
    "id": 200,
    "drug": "리피토",
    "q": "관상동맥질환 이차 예방의 LDL-C 목표는?",
    "options": [
      "55 mg/dL 미만 및 기저치 대비 50% 이상 감소",
      "100 mg/dL 미만만 달성",
      "50% 감소만 달성",
      "HDL-C 정상화만 확인"
    ],
    "answer": 0,
    "explain": "절대 목표와 감소율을 함께 평가합니다.",
    "level": "가이드라인",
    "kind": "guideline",
    "source": "https://www.viatris.co.kr/-/media/project/common/viatriscokr/pdf/product-chart/lipitor-tablets_12mar2024.pdf",
    "sourceName": "리피토정 10·20·40·80mg 국내 제품설명서",
    "reviewed": "2026-10-20",
    "guidelineId": "lipid2026",
    "guidelineSection": "제2장 치료 기준 · 관상동맥질환군 (본문 41쪽)"
  },
  {
    "id": 201,
    "drug": "리피토",
    "q": "급성관상동맥증후군 발생 시 스타틴 치료 원칙은?",
    "options": [
      "LDL-C 상승 때까지 대기",
      "기저 LDL-C와 무관하게 조기에 고강도 스타틴",
      "HDL-C만 보고 결정",
      "생활요법만 시행"
    ],
    "answer": 1,
    "explain": "가능한 빨리 고강도 스타틴을 시작하도록 권고합니다.",
    "level": "가이드라인",
    "kind": "guideline",
    "source": "https://www.viatris.co.kr/-/media/project/common/viatriscokr/pdf/product-chart/lipitor-tablets_12mar2024.pdf",
    "sourceName": "리피토정 10·20·40·80mg 국내 제품설명서",
    "reviewed": "2026-10-20",
    "guidelineId": "lipid2026",
    "guidelineSection": "제2장 치료 기준 · 급성관상동맥증후군 (본문 41쪽)"
  },
  {
    "id": 202,
    "drug": "리피토",
    "q": "중등도위험군의 LDL-C가 110 mg/dL이고 위험강화인자가 있다면?",
    "options": [
      "모든 치료 중단",
      "HDL-C만 재검",
      "더 적극적인 LDL-C 강하 고려",
      "위험강화인자 무시"
    ],
    "answer": 2,
    "explain": "위험강화인자는 치료목표 강화 판단에 활용합니다.",
    "level": "가이드라인",
    "kind": "guideline",
    "source": "https://www.viatris.co.kr/-/media/project/common/viatriscokr/pdf/product-chart/lipitor-tablets_12mar2024.pdf",
    "sourceName": "리피토정 10·20·40·80mg 국내 제품설명서",
    "reviewed": "2026-10-20",
    "guidelineId": "lipid2026",
    "guidelineSection": "제2장 위험도 평가·치료 기준 (주요 변경사항 6쪽)"
  },
  {
    "id": 203,
    "drug": "리피토",
    "q": "비공복 중성지방이 450 mg/dL이다. 적절한 검사 전략은?",
    "options": [
      "Friedewald 계산값만 확정",
      "검사 불필요",
      "HDL-C만 추적",
      "공복 지질검사 재시행"
    ],
    "answer": 3,
    "explain": "비공복 중성지방 400 mg/dL 이상이면 공복 재검을 권고합니다.",
    "level": "가이드라인",
    "kind": "guideline",
    "source": "https://www.viatris.co.kr/-/media/project/common/viatriscokr/pdf/product-chart/lipitor-tablets_12mar2024.pdf",
    "sourceName": "리피토정 10·20·40·80mg 국내 제품설명서",
    "reviewed": "2026-10-20",
    "guidelineId": "lipid2026",
    "guidelineSection": "제2장 지질검사 · 비공복 중성지방 (주요 변경사항 5쪽)"
  },
  {
    "id": 204,
    "drug": "리피토플러스",
    "q": "최대 가용 용량의 스타틴으로 LDL-C 목표 미달 시 고려할 병용 성분은?",
    "options": [
      "에제티미브",
      "암로디핀",
      "프레가발린",
      "세레콕시브"
    ],
    "answer": 0,
    "explain": "목표 미달 시 에제티미브 병용을 권고합니다.",
    "level": "가이드라인",
    "kind": "guideline",
    "source": "https://www.viatris.co.kr/-/media/project/common/viatriscokr/pdf/product-chart/lipitorplus_20260303.pdf",
    "sourceName": "리피토플러스정 10/10·10/20·10/40mg 국내 제품설명서",
    "reviewed": "2026-10-20",
    "guidelineId": "lipid2026",
    "guidelineSection": "제4장 약물요법 · 에제티미브 (주요 변경사항 7쪽)"
  },
  {
    "id": 205,
    "drug": "리피토플러스",
    "q": "급성관상동맥증후군에서 조기 목표 달성을 위한 2026년 지침의 전략은?",
    "options": [
      "항상 단독요법만 유지",
      "초기부터 스타틴·에제티미브 병용 고려",
      "LDL-C 목표 폐지",
      "스타틴 일괄 중단"
    ],
    "answer": 1,
    "explain": "초기 병용은 고려 권고(IIa, B)이며 일률적인 의무는 아닙니다.",
    "level": "가이드라인",
    "kind": "guideline",
    "source": "https://www.viatris.co.kr/-/media/project/common/viatriscokr/pdf/product-chart/lipitorplus_20260303.pdf",
    "sourceName": "리피토플러스정 10/10·10/20·10/40mg 국내 제품설명서",
    "reviewed": "2026-10-20",
    "guidelineId": "lipid2026",
    "guidelineSection": "제2장 치료 기준 · 급성관상동맥증후군 (본문 41쪽)"
  },
  {
    "id": 206,
    "drug": "리피토플러스",
    "q": "죽상경화성 심혈관질환에서 스타틴·에제티미브 병용에도 LDL-C 목표 미달이면?",
    "options": [
      "동일 성분 중복",
      "생활요법 중단",
      "PCSK9 억제제 추가 고려",
      "목표 미달 무시"
    ],
    "answer": 2,
    "explain": "추가 병용을 고려하는 단계적 전략입니다.",
    "level": "가이드라인",
    "kind": "guideline",
    "source": "https://www.viatris.co.kr/-/media/project/common/viatriscokr/pdf/product-chart/lipitorplus_20260303.pdf",
    "sourceName": "리피토플러스정 10/10·10/20·10/40mg 국내 제품설명서",
    "reviewed": "2026-10-20",
    "guidelineId": "lipid2026",
    "guidelineSection": "제4장 약물요법 · PCSK9 억제제 (주요 변경사항 7쪽)"
  },
  {
    "id": 207,
    "drug": "리피토플러스",
    "q": "관상동맥질환 환자가 LDL-C 140에서 60 mg/dL로 감소했다. 목표 달성 평가는?",
    "options": [
      "완전 달성",
      "감소율 부족",
      "HDL-C만 확인",
      "감소율은 충족하나 절대 목표 미달"
    ],
    "answer": 3,
    "explain": "50% 이상 감소했지만 55 mg/dL 미만에는 도달하지 못했습니다.",
    "level": "가이드라인",
    "kind": "guideline",
    "source": "https://www.viatris.co.kr/-/media/project/common/viatriscokr/pdf/product-chart/lipitorplus_20260303.pdf",
    "sourceName": "리피토플러스정 10/10·10/20·10/40mg 국내 제품설명서",
    "reviewed": "2026-10-20",
    "guidelineId": "lipid2026",
    "guidelineSection": "제2장 치료 기준 · 관상동맥질환군 (본문 41쪽)"
  },
  {
    "id": 208,
    "drug": "노바스크",
    "q": "당뇨병이 동반된 고혈압 환자의 2026년 권고 목표혈압은?",
    "options": [
      "130/80 mmHg 미만",
      "140/90 mmHg 미만으로만 유지",
      "150/100 mmHg 미만",
      "160/100 mmHg 미만"
    ],
    "answer": 0,
    "explain": "당뇨병 동반 고혈압의 목표가 130/80 mmHg 미만으로 강화되었습니다.",
    "level": "가이드라인",
    "kind": "guideline",
    "source": "https://www.viatris.co.kr/-/media/project/common/viatriscokr/pdf/lld_norvasc_20240830.pdf",
    "sourceName": "노바스크정 2.5·5·10mg 국내 제품설명서",
    "reviewed": "2026-10-20",
    "guidelineId": "hypertension2026",
    "guidelineSection": "제3장 목표혈압 · 당뇨병 (2022년 대비 변경표, PDF 15쪽)"
  },
  {
    "id": 209,
    "drug": "노바스크",
    "q": "고혈압 생활요법의 하루 소금 섭취 권고는?",
    "options": [
      "소금 10 g 이하",
      "소금 5 g 이하",
      "나트륨 5 g 이하",
      "제한 불필요"
    ],
    "answer": 1,
    "explain": "소금 5 g은 나트륨 약 2,000 mg에 해당합니다. 소금과 나트륨을 구분합니다.",
    "level": "가이드라인",
    "kind": "guideline",
    "source": "https://www.viatris.co.kr/-/media/project/common/viatriscokr/pdf/lld_norvasc_20240830.pdf",
    "sourceName": "노바스크정 2.5·5·10mg 국내 제품설명서",
    "reviewed": "2026-10-20",
    "guidelineId": "hypertension2026",
    "guidelineSection": "제3장 생활요법 · 소금 섭취 (2022년 대비 변경표, PDF 15쪽)"
  },
  {
    "id": 210,
    "drug": "노바스크",
    "q": "가정혈압 측정에서 고혈압에 해당하는 기준은?",
    "options": [
      "140/90 mmHg 이상만",
      "수축기 160 mmHg 이상만",
      "수축기 135 또는 이완기 85 mmHg 이상",
      "130/70 mmHg 이상"
    ],
    "answer": 2,
    "explain": "가정혈압과 진료실혈압의 진단 기준은 다릅니다. 반복 측정으로 평가합니다.",
    "level": "가이드라인",
    "kind": "guideline",
    "source": "https://www.viatris.co.kr/-/media/project/common/viatriscokr/pdf/lld_norvasc_20240830.pdf",
    "sourceName": "노바스크정 2.5·5·10mg 국내 제품설명서",
    "reviewed": "2026-10-20",
    "guidelineId": "hypertension2026",
    "guidelineSection": "제2장 8.6 · 표 7 (PDF 47쪽)"
  },
  {
    "id": 211,
    "drug": "노바스크",
    "q": "칼슘통로차단제 기반 2제 병용을 검토할 때 적절한 조합은?",
    "options": [
      "ACE 억제제+ARB",
      "동일 CCB 중복",
      "동일 성분 중복",
      "CCB+RAS 억제제"
    ],
    "answer": 3,
    "explain": "서로 다른 계열을 병용합니다. ACE 억제제와 ARB의 동시 병용은 피합니다.",
    "level": "가이드라인",
    "kind": "guideline",
    "source": "https://www.viatris.co.kr/-/media/project/common/viatriscokr/pdf/lld_norvasc_20240830.pdf",
    "sourceName": "노바스크정 2.5·5·10mg 국내 제품설명서",
    "reviewed": "2026-10-20",
    "guidelineId": "hypertension2026",
    "guidelineSection": "제3장 12.3 병용요법 (PDF 90쪽)"
  },
  {
    "id": 212,
    "drug": "리리카",
    "q": "2형당뇨병의 신경병증 선별검사 시점은?",
    "options": [
      "진단 시부터, 이후 매년",
      "진단 10년 후부터",
      "통증 발생 시에만",
      "발궤양 발생 후"
    ],
    "answer": 0,
    "explain": "무증상일 수 있어 통증 유무만으로 선별검사를 생략하지 않습니다.",
    "level": "가이드라인",
    "kind": "guideline",
    "source": "https://www.viatris.co.kr/-/media/project/common/viatriscokr/pdf/product-chart/updated-pdfs/lyrica-cap_lld_20250318.pdf",
    "sourceName": "리리카캡슐 25·50·75·150·300mg 국내 제품설명서",
    "reviewed": "2026-10-20",
    "guidelineId": "diabetes2025",
    "guidelineSection": "8-2장 권고 1 · PDF 119쪽"
  },
  {
    "id": 213,
    "drug": "리리카",
    "q": "통증성 당뇨병신경병증의 1차 증상치료 약물군에 해당하는 것은?",
    "options": [
      "스타틴만 해당",
      "α2δ 결합 항경련제·TCA·SNRI",
      "CCB만 해당",
      "NSAID만 해당"
    ],
    "answer": 1,
    "explain": "동반질환과 주의사항을 고려해 선택하며 특정 브랜드를 우선한다는 뜻은 아닙니다.",
    "level": "가이드라인",
    "kind": "guideline",
    "source": "https://www.viatris.co.kr/-/media/project/common/viatriscokr/pdf/product-chart/updated-pdfs/lyrica-cap_lld_20250318.pdf",
    "sourceName": "리리카캡슐 25·50·75·150·300mg 국내 제품설명서",
    "reviewed": "2026-10-20",
    "guidelineId": "diabetes2025",
    "guidelineSection": "8-2장 그림 8-2.2 · PDF 124쪽"
  },
  {
    "id": 214,
    "drug": "리리카",
    "q": "신경병증 통증이 약물로 완화된 뒤에도 유지해야 할 관리는?",
    "options": [
      "혈당관리 중단",
      "발평가 중단",
      "혈당·위험인자 조절과 발관리",
      "진통제만 유지"
    ],
    "answer": 2,
    "explain": "증상치료와 혈당·위험인자 관리는 함께 시행합니다.",
    "level": "가이드라인",
    "kind": "guideline",
    "source": "https://www.viatris.co.kr/-/media/project/common/viatriscokr/pdf/product-chart/updated-pdfs/lyrica-cap_lld_20250318.pdf",
    "sourceName": "리리카캡슐 25·50·75·150·300mg 국내 제품설명서",
    "reviewed": "2026-10-20",
    "guidelineId": "diabetes2025",
    "guidelineSection": "8-2장 그림 8-2.2 · PDF 124쪽"
  },
  {
    "id": 215,
    "drug": "리리카",
    "q": "신경병증 1차 약물의 효과가 부족하거나 부작용이 있다면?",
    "options": [
      "무조건 같은 약 증량",
      "평가 없이 치료 중단",
      "임의로 중복 복용",
      "약물 변경 또는 병용 검토"
    ],
    "answer": 3,
    "explain": "지침은 반응과 내약성에 따라 다음 약물군으로 변경하거나 병용하는 경로를 제시합니다.",
    "level": "가이드라인",
    "kind": "guideline",
    "source": "https://www.viatris.co.kr/-/media/project/common/viatriscokr/pdf/product-chart/updated-pdfs/lyrica-cap_lld_20250318.pdf",
    "sourceName": "리리카캡슐 25·50·75·150·300mg 국내 제품설명서",
    "reviewed": "2026-10-20",
    "guidelineId": "diabetes2025",
    "guidelineSection": "8-2장 그림 8-2.2 · PDF 124쪽"
  },
  {
    "id": 216,
    "drug": "쎄레브렉스",
    "q": "NSAID가 필요하고 위장관 고위험·심혈관 저위험이면 고려할 전략은?",
    "options": [
      "선택적 COX-2 억제제 또는 비선택적 NSAID+PPI",
      "고용량 NSAID 중복",
      "위험 평가 생략",
      "아스피린 일괄 추가"
    ],
    "answer": 0,
    "explain": "선택적 COX-2 억제제 사용 시에도 개별 금기와 위험을 확인합니다.",
    "level": "가이드라인",
    "kind": "guideline",
    "source": "https://www.viatris.co.kr/-/media/project/common/viatriscokr/pdf/product-chart/celebrex100mg-200mg_20250602.pdf",
    "sourceName": "쎄레브렉스캡슐 100·200mg 국내 제품설명서",
    "reviewed": "2026-10-20",
    "guidelineId": "ulcer2020",
    "guidelineSection": "본론 권고 4 · 표 3"
  },
  {
    "id": 217,
    "drug": "쎄레브렉스",
    "q": "위장관과 심혈관 위험이 모두 높은 환자의 NSAID 사용 원칙은?",
    "options": [
      "COX-2 억제제 무조건 사용",
      "가능하면 NSAID 회피",
      "위장관 위험만 고려",
      "장기간 고용량 우선"
    ],
    "answer": 1,
    "explain": "두 위험을 함께 평가하며 가능한 대체 전략을 먼저 검토합니다.",
    "level": "가이드라인",
    "kind": "guideline",
    "source": "https://www.viatris.co.kr/-/media/project/common/viatriscokr/pdf/product-chart/celebrex100mg-200mg_20250602.pdf",
    "sourceName": "쎄레브렉스캡슐 100·200mg 국내 제품설명서",
    "reviewed": "2026-10-20",
    "guidelineId": "ulcer2020",
    "guidelineSection": "본론 권고 4 · 표 3"
  },
  {
    "id": 218,
    "drug": "쎄레브렉스",
    "q": "NSAID 관련 궤양 고위험 인자의 조합은?",
    "options": [
      "젊은 나이·과거력 없음",
      "정상 시력·정상 청력",
      "고령·궤양력·항응고제 병용",
      "정상 HDL-C·정상 혈당"
    ],
    "answer": 2,
    "explain": "연령, 궤양 과거력, NSAID 용량과 병용약을 함께 확인합니다.",
    "level": "가이드라인",
    "kind": "guideline",
    "source": "https://www.viatris.co.kr/-/media/project/common/viatriscokr/pdf/product-chart/celebrex100mg-200mg_20250602.pdf",
    "sourceName": "쎄레브렉스캡슐 100·200mg 국내 제품설명서",
    "reviewed": "2026-10-20",
    "guidelineId": "ulcer2020",
    "guidelineSection": "본론 권고 1"
  },
  {
    "id": 219,
    "drug": "쎄레브렉스",
    "q": "장기 NSAID 복용 고위험군의 궤양 예방을 위해 권고하는 약물군은?",
    "options": [
      "스타틴",
      "칼슘통로차단제",
      "프레가발린",
      "양성자펌프억제제(PPI)"
    ],
    "answer": 3,
    "explain": "PPI 병용의 이득과 위해를 평가해 궤양 예방 전략을 결정합니다.",
    "level": "가이드라인",
    "kind": "guideline",
    "source": "https://www.viatris.co.kr/-/media/project/common/viatriscokr/pdf/product-chart/celebrex100mg-200mg_20250602.pdf",
    "sourceName": "쎄레브렉스캡슐 100·200mg 국내 제품설명서",
    "reviewed": "2026-10-20",
    "guidelineId": "ulcer2020",
    "guidelineSection": "본론 권고 3"
  },
  {
    "id": 300,
    "drug": "리리카",
    "q": "이 지침이 다루는 난치성 대상포진 후 신경통의 범위는?",
    "options": [
      "발진 당일의 경미한 통증",
      "1차 치료에도 발진 후 1개월 넘게 NRS 4 이상",
      "무증상 대상포진",
      "모든 급성 요통"
    ],
    "answer": 1,
    "explain": "이 지침의 대상 범위이며, 일반적인 PHN 정의와 구분합니다.",
    "level": "가이드라인",
    "kind": "guideline",
    "source": "https://www.viatris.co.kr/-/media/project/common/viatriscokr/pdf/product-chart/updated-pdfs/lyrica-cap_lld_20250318.pdf",
    "sourceName": "리리카캡슐 25·50·75·150·300mg 국내 제품설명서",
    "reviewed": "2026-10-22",
    "guidelineId": "phn2026",
    "guidelineSection": "대상 환자"
  },
  {
    "id": 301,
    "drug": "리리카",
    "q": "프레가발린 등 1차 치료에도 통증이 지속될 때 적절한 접근은?",
    "options": [
      "무조건 동일 용량 유지",
      "모든 약물 즉시 중단",
      "반응·위험을 재평가해 추가 치료 검토",
      "강한 오피오이드 일괄 전환"
    ],
    "answer": 2,
    "explain": "난치성 통증은 추가 치료의 이득과 위해를 개별 평가합니다.",
    "level": "가이드라인",
    "kind": "guideline",
    "source": "https://www.viatris.co.kr/-/media/project/common/viatriscokr/pdf/product-chart/updated-pdfs/lyrica-cap_lld_20250318.pdf",
    "sourceName": "리리카캡슐 25·50·75·150·300mg 국내 제품설명서",
    "reviewed": "2026-10-22",
    "guidelineId": "phn2026",
    "guidelineSection": "서론 · 1차 치료"
  },
  {
    "id": 302,
    "drug": "리리카",
    "q": "트라마돌 추가 권고의 해석은?",
    "options": [
      "모든 환자에게 필수",
      "고확실성 근거의 일률적 치료",
      "이상반응 평가 불필요",
      "매우 낮은 근거 확실성의 조건부 선택"
    ],
    "answer": 3,
    "explain": "부작용과 환자 상황을 함께 고려하는 선택적 치료입니다.",
    "level": "가이드라인",
    "kind": "guideline",
    "source": "https://www.viatris.co.kr/-/media/project/common/viatriscokr/pdf/product-chart/updated-pdfs/lyrica-cap_lld_20250318.pdf",
    "sourceName": "리리카캡슐 25·50·75·150·300mg 국내 제품설명서",
    "reviewed": "2026-10-22",
    "guidelineId": "phn2026",
    "guidelineSection": "권고 1"
  },
  {
    "id": 303,
    "drug": "리리카",
    "q": "강한 오피오이드 사용 원칙은?",
    "options": [
      "대안 부족 시 단기·제한적 사용과 면밀한 감시",
      "장기 일차 치료",
      "의존 위험 평가 생략",
      "통증 강도와 무관하게 처방"
    ],
    "answer": 0,
    "explain": "다른 치료 반응과 중독 위험을 평가해야 합니다.",
    "level": "가이드라인",
    "kind": "guideline",
    "source": "https://www.viatris.co.kr/-/media/project/common/viatriscokr/pdf/product-chart/updated-pdfs/lyrica-cap_lld_20250318.pdf",
    "sourceName": "리리카캡슐 25·50·75·150·300mg 국내 제품설명서",
    "reviewed": "2026-10-22",
    "guidelineId": "phn2026",
    "guidelineSection": "권고 2"
  },
  {
    "id": 304,
    "drug": "리리카",
    "q": "경막외 차단술을 검토할 때 필요한 조건은?",
    "options": [
      "환자 동의 생략",
      "숙련된 시술자·적절한 시설·설명과 동의",
      "모든 환자 일괄 시행",
      "금기 확인 생략"
    ],
    "answer": 1,
    "explain": "시술 위험과 금기를 확인하는 조건부 선택입니다.",
    "level": "가이드라인",
    "kind": "guideline",
    "source": "https://www.viatris.co.kr/-/media/project/common/viatriscokr/pdf/product-chart/updated-pdfs/lyrica-cap_lld_20250318.pdf",
    "sourceName": "리리카캡슐 25·50·75·150·300mg 국내 제품설명서",
    "reviewed": "2026-10-22",
    "guidelineId": "phn2026",
    "guidelineSection": "권고 3"
  },
  {
    "id": 305,
    "drug": "리리카",
    "q": "척추주위 차단술에서 강조하는 안전 요소는?",
    "options": [
      "영상 없이 반복",
      "자가 시술",
      "영상 유도",
      "통증 평가 생략"
    ],
    "answer": 2,
    "explain": "정확한 위치 확인과 안전을 위해 영상 유도가 필수적입니다.",
    "level": "가이드라인",
    "kind": "guideline",
    "source": "https://www.viatris.co.kr/-/media/project/common/viatriscokr/pdf/product-chart/updated-pdfs/lyrica-cap_lld_20250318.pdf",
    "sourceName": "리리카캡슐 25·50·75·150·300mg 국내 제품설명서",
    "reviewed": "2026-10-22",
    "guidelineId": "phn2026",
    "guidelineSection": "권고 5-2"
  },
  {
    "id": 306,
    "drug": "리리카",
    "q": "PHN의 보툴리눔독소 A 피하주사에 대한 올바른 설명은?",
    "options": [
      "국내 PHN 적응증 허가가 완료됐다",
      "모든 환자 필수 치료다",
      "국내 허가 확인이 필요 없다",
      "조건부 권고와 별개로 국내 PHN 적응증 미허가다"
    ],
    "answer": 3,
    "explain": "지침 권고와 국내 적응증 허가는 구분해야 합니다.",
    "level": "가이드라인",
    "kind": "guideline",
    "source": "https://www.viatris.co.kr/-/media/project/common/viatriscokr/pdf/product-chart/updated-pdfs/lyrica-cap_lld_20250318.pdf",
    "sourceName": "리리카캡슐 25·50·75·150·300mg 국내 제품설명서",
    "reviewed": "2026-10-22",
    "guidelineId": "phn2026",
    "guidelineSection": "권고 5-1"
  },
  {
    "id": 307,
    "drug": "리리카",
    "q": "척수자극술을 검토할 상황은?",
    "options": [
      "다른 치료에도 지속되는 통증에서 전문성·비용 등을 평가",
      "모든 환자의 첫 치료",
      "증상 소실 후 일괄 시행",
      "시설과 무관한 자가 치료"
    ],
    "answer": 0,
    "explain": "난치성 환자에서 자원과 위험을 고려하는 조건부 선택입니다.",
    "level": "가이드라인",
    "kind": "guideline",
    "source": "https://www.viatris.co.kr/-/media/project/common/viatriscokr/pdf/product-chart/updated-pdfs/lyrica-cap_lld_20250318.pdf",
    "sourceName": "리리카캡슐 25·50·75·150·300mg 국내 제품설명서",
    "reviewed": "2026-10-22",
    "guidelineId": "phn2026",
    "guidelineSection": "권고 7"
  },
  {
    "id": 308,
    "drug": "쎄레브렉스",
    "q": "활동성 축성척추관절염의 일차 약물치료는?",
    "options": [
      "항생제",
      "NSAID",
      "스타틴",
      "항히스타민제"
    ],
    "answer": 1,
    "explain": "NSAID 계열 권고이며 특정 제품의 우월성을 뜻하지 않습니다.",
    "level": "가이드라인",
    "kind": "guideline",
    "source": "https://www.viatris.co.kr/-/media/project/common/viatriscokr/pdf/product-chart/celebrex100mg-200mg_20250602.pdf",
    "sourceName": "쎄레브렉스캡슐 100·200mg 국내 제품설명서",
    "reviewed": "2026-10-22",
    "guidelineId": "axspa2026",
    "guidelineSection": "권고 6"
  },
  {
    "id": 309,
    "drug": "쎄레브렉스",
    "q": "치료목표 기반 접근(T2T)의 목적은?",
    "options": [
      "통증 점수만 기록",
      "영상 검사만 반복",
      "질병 활성도의 효과적인 조절",
      "모든 약제 중단"
    ],
    "answer": 2,
    "explain": "목표를 정하고 질병 활성도를 평가하는 조건부 권고입니다.",
    "level": "가이드라인",
    "kind": "guideline",
    "source": "https://www.viatris.co.kr/-/media/project/common/viatriscokr/pdf/product-chart/celebrex100mg-200mg_20250602.pdf",
    "sourceName": "쎄레브렉스캡슐 100·200mg 국내 제품설명서",
    "reviewed": "2026-10-22",
    "guidelineId": "axspa2026",
    "guidelineSection": "권고 1"
  },
  {
    "id": 310,
    "drug": "쎄레브렉스",
    "q": "질병 활성도 평가와 구조적 진행 예측에서 우선 제안하는 지표는?",
    "options": [
      "BMI",
      "LDL-C",
      "공복혈당",
      "ASDAS"
    ],
    "answer": 3,
    "explain": "이 목적에서는 BASDAI보다 ASDAS 사용을 제안합니다.",
    "level": "가이드라인",
    "kind": "guideline",
    "source": "https://www.viatris.co.kr/-/media/project/common/viatriscokr/pdf/product-chart/celebrex100mg-200mg_20250602.pdf",
    "sourceName": "쎄레브렉스캡슐 100·200mg 국내 제품설명서",
    "reviewed": "2026-10-22",
    "guidelineId": "axspa2026",
    "guidelineSection": "권고 2"
  },
  {
    "id": 311,
    "drug": "쎄레브렉스",
    "q": "비약물 관리에서 권고하는 것은?",
    "options": [
      "규칙적인 운동",
      "장기간 절대 안정",
      "운동 전면 금지",
      "증상과 무관한 침상 생활"
    ],
    "answer": 0,
    "explain": "운동은 질병 활성도와 신체 기능 개선을 위해 권고합니다.",
    "level": "가이드라인",
    "kind": "guideline",
    "source": "https://www.viatris.co.kr/-/media/project/common/viatriscokr/pdf/product-chart/celebrex100mg-200mg_20250602.pdf",
    "sourceName": "쎄레브렉스캡슐 100·200mg 국내 제품설명서",
    "reviewed": "2026-10-22",
    "guidelineId": "axspa2026",
    "guidelineSection": "권고 4-2"
  },
  {
    "id": 312,
    "drug": "쎄레브렉스",
    "q": "구조적 척추 진행과 강직 위험 감소를 위한 권고는?",
    "options": [
      "흡연 지속",
      "금연",
      "음주 증가",
      "활동 제한"
    ],
    "answer": 1,
    "explain": "금연은 강한 권고이나 근거 확실성은 매우 낮습니다.",
    "level": "가이드라인",
    "kind": "guideline",
    "source": "https://www.viatris.co.kr/-/media/project/common/viatriscokr/pdf/product-chart/celebrex100mg-200mg_20250602.pdf",
    "sourceName": "쎄레브렉스캡슐 100·200mg 국내 제품설명서",
    "reviewed": "2026-10-22",
    "guidelineId": "axspa2026",
    "guidelineSection": "권고 4-1"
  },
  {
    "id": 313,
    "drug": "쎄레브렉스",
    "q": "NSAID 등 최적 치료에도 통증이 남으면 추가 진통제는?",
    "options": [
      "모든 환자 필수",
      "질병 활성도 평가 대체",
      "선택적으로 검토하는 조건부 치료",
      "무조건 고용량 병용"
    ],
    "answer": 2,
    "explain": "대증 치료의 한계와 이상반응을 고려합니다.",
    "level": "가이드라인",
    "kind": "guideline",
    "source": "https://www.viatris.co.kr/-/media/project/common/viatriscokr/pdf/product-chart/celebrex100mg-200mg_20250602.pdf",
    "sourceName": "쎄레브렉스캡슐 100·200mg 국내 제품설명서",
    "reviewed": "2026-10-22",
    "guidelineId": "axspa2026",
    "guidelineSection": "권고 7"
  },
  {
    "id": 314,
    "drug": "쎄레브렉스",
    "q": "전신 글루코코르티코이드에 대한 권고는?",
    "options": [
      "항상 일차 치료",
      "모든 환자 장기 유지",
      "NSAID 대신 일괄 사용",
      "일반적으로 사용을 권고하지 않음"
    ],
    "answer": 3,
    "explain": "국소 주사에 대한 별도 권고와 구분해야 합니다.",
    "level": "가이드라인",
    "kind": "guideline",
    "source": "https://www.viatris.co.kr/-/media/project/common/viatriscokr/pdf/product-chart/celebrex100mg-200mg_20250602.pdf",
    "sourceName": "쎄레브렉스캡슐 100·200mg 국내 제품설명서",
    "reviewed": "2026-10-22",
    "guidelineId": "axspa2026",
    "guidelineSection": "권고 8"
  },
  {
    "id": 315,
    "drug": "쎄레브렉스",
    "q": "bDMARD 또는 JAK 억제제 사용 시 필요한 것은?",
    "options": [
      "치료 전 선별검사와 감염·결핵·검사실 추적",
      "감염 감시 생략",
      "증상만으로 안전성 판단",
      "치료 전 검사 일괄 생략"
    ],
    "answer": 0,
    "explain": "치료 관련 이상반응을 조기에 발견하기 위한 권고입니다.",
    "level": "가이드라인",
    "kind": "guideline",
    "source": "https://www.viatris.co.kr/-/media/project/common/viatriscokr/pdf/product-chart/celebrex100mg-200mg_20250602.pdf",
    "sourceName": "쎄레브렉스캡슐 100·200mg 국내 제품설명서",
    "reviewed": "2026-10-22",
    "guidelineId": "axspa2026",
    "guidelineSection": "권고 20"
  }
];

window.QUESTION_BANK = QUESTION_BANK;
window.GUIDELINE_SOURCES = {
  "lipid2026": {
    "title": "이상지질혈증 진료지침 2026",
    "edition": "2026년판",
    "issuer": "한국지질·동맥경화학회",
    "url": "https://www.lipid.or.kr/reference/guideline.php?boardid=guideline&mode=view&idx=1456",
    "checked": "2026-10-20",
    "scope": "지질 강하 치료·관상동맥질환",
    "status": "학회 공개 최신판: 2026-09-10 등록"
  },
  "hypertension2026": {
    "title": "2026년 제6판 고혈압 진료지침",
    "edition": "2026년 제6판 수정본",
    "issuer": "대한고혈압학회",
    "url": "https://www.koreanhypertension.org/reference/guide?idno=10446&mode=read",
    "checked": "2026-10-20",
    "scope": "고혈압 진단·목표혈압·병용요법",
    "status": "학회 공개 최신판: 2026-05-22 등록"
  },
  "diabetes2025": {
    "title": "2025 당뇨병 진료지침",
    "edition": "2025년 제9판",
    "issuer": "대한당뇨병학회",
    "url": "https://diabetes.or.kr/bbs/download.php?code=guide&number=1522",
    "checked": "2026-10-20",
    "scope": "8-2장 당뇨병신경병증 및 발관리",
    "status": "학회 공개 최신판: 2025년판"
  },
  "ulcer2020": {
    "title": "약제 연관 소화성궤양의 임상 진료지침 개정안 2020",
    "edition": "2020년 개정판",
    "issuer": "대한상부위장관·헬리코박터학회",
    "url": "https://www.kjg.or.kr/journal/view.html?doi=10.4166/kjg.2020.76.3.108",
    "checked": "2026-10-20",
    "scope": "장기 NSAID 치료의 위장관·심혈관 위험 평가",
    "status": "확인된 공개 개정판: 2020년. 해당 주제의 후속 국내 개정판은 확인되지 않음"
  },
  "phn2026": {
    "title": "난치성 대상포진 후 신경통 진료지침",
    "edition": "2026년판",
    "issuer": "대한통증학회",
    "url": "https://www.epain.org/journal/view.html?doi=10.3344/kjp.25161",
    "checked": "2026-10-22",
    "scope": "1차 치료에 반응하지 않는 대상포진 후 신경통의 추가 치료",
    "status": "2026-04-01 발행 · 국내 학회 영문 지침",
    "language": "영문 · 국내 학회",
    "note": "프레가발린 단독 지침이 아닙니다. 추가 시술·약물의 권고와 국내 허가 범위를 구분합니다."
  },
  "axspa2026": {
    "title": "축성척추관절염 치료 권고",
    "edition": "2026년 개정판",
    "issuer": "대한류마티스학회",
    "url": "https://www.kjim.org/journal/view.php?number=171179",
    "checked": "2026-10-22",
    "scope": "강직척추염을 포함한 축성척추관절염의 약물·비약물 치료",
    "status": "2026-10-01 발행 · 국내 학회 영문 지침",
    "language": "영문 · 국내 학회",
    "note": "NSAID 계열 및 질환 관리 권고입니다. 쎄레브렉스의 적용 범위는 국내 허가사항을 확인합니다."
  }
};
