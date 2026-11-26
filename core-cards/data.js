window.CORE_WORD_CARD_BANK = {
  "version": "automotive-core-cards-v1",
  "sources": [
    "data/concept.json",
    "data/expected/{subject}.json",
    "data/rotation/light/{subject}.json (등장 빈도 참고)"
  ],
  "subjects": [
    {
      "code": "engine",
      "name": "자동차 엔진정비",
      "disabled": false
    },
    {
      "code": "chassis",
      "name": "자동차 섀시정비",
      "disabled": false
    },
    {
      "code": "electrical",
      "name": "자동차 전기·전자장치정비",
      "disabled": false
    },
    {
      "code": "eco",
      "name": "친환경 자동차정비",
      "disabled": false
    }
  ],
  "cards": [
    {
      "id": "auto-card-engine-001",
      "subject": "engine",
      "order": 1,
      "type": "term",
      "category": "기관 작동 원리",
      "title": "불꽃점화 기관",
      "subtitle": "기관 작동 원리",
      "bullets": [
        "불꽃점화 가솔린 엔진은 점화 플러그의 전극 사이에서 발생하는 전기 불꽃으로 공기·연료 혼합기를 점화한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-01"
      ],
      "linkedQuestionIds": [],
      "sourceLabel": "학습 문제은행 · concept-engine-01",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-engine-002",
      "subject": "engine",
      "order": 2,
      "type": "term",
      "category": "기관 작동 원리",
      "title": "흡입 행정",
      "subtitle": "기관 작동 원리",
      "bullets": [
        "흡입 행정에서는 피스톤이 내려가며 실린더에 공기 또는 혼합기가 유입된다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-02"
      ],
      "linkedQuestionIds": [
        "original-engine-01"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-02",
      "examHitCount": 1,
      "examSampleRefs": [
        "original-engine-01"
      ],
      "importance": 2
    },
    {
      "id": "auto-card-engine-003",
      "subject": "engine",
      "order": 3,
      "type": "term",
      "category": "기관 작동 원리",
      "title": "압축 행정",
      "subtitle": "기관 작동 원리",
      "bullets": [
        "압축 행정은 피스톤의 상승으로 실린더 안의 기체 체적을 줄인다.",
        "압축 행정에서는 피스톤 상승으로 기체 체적이 감소한다.",
        "피스톤 상승으로 기체 체적이 감소하고 압력이 높아진다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-13",
        "concept-engine-78",
        "concept-engine-101"
      ],
      "linkedQuestionIds": [
        "original-engine-02"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-13 외 2문항",
      "examHitCount": 1,
      "examSampleRefs": [
        "original-engine-02"
      ],
      "importance": 2
    },
    {
      "id": "auto-card-engine-004",
      "subject": "engine",
      "order": 4,
      "type": "formula",
      "category": "기관 작동 원리",
      "title": "4행정 기관의 회전 관계",
      "subtitle": "기관 작동 원리",
      "bullets": [
        "한 번의 4행정 주기는 크랭크축 2회전과 캠축 1회전으로 이루어진다.",
        "크랭크축 2회전은 720°이다."
      ],
      "formula": "캠축 회전수 = 크랭크축 회전수 ÷ 2",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-05",
        "concept-engine-103"
      ],
      "linkedQuestionIds": [
        "original-engine-08"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-05 외 1문항",
      "examHitCount": 2,
      "examSampleRefs": [
        "original-engine-02",
        "original-engine-08"
      ],
      "importance": 2
    },
    {
      "id": "auto-card-engine-005",
      "subject": "engine",
      "order": 5,
      "type": "term",
      "category": "기관 작동 원리",
      "title": "압축착화 기관",
      "subtitle": "기관 작동 원리",
      "bullets": [
        "일반 디젤 기관에서 연료가 착화되는 기본 원인은 공기의 압축열이다.",
        "공기를 압축해 온도를 높여 연료를 착화시킨다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-138"
      ],
      "linkedQuestionIds": [
        "auto-made-r06-s01-q20"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-138",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-engine-006",
      "subject": "engine",
      "order": 6,
      "type": "term",
      "category": "기관 작동 원리",
      "title": "압축 링",
      "subtitle": "기관 작동 원리",
      "bullets": [
        "피스톤과 실린더 벽 사이에서 연소가스 누설을 줄이는 링은 압축 링이다.",
        "압축 링은 연소실의 기밀을 유지하는 데 기여한다.",
        "링은 피스톤 열을 전달하는 경로다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-03",
        "concept-engine-141"
      ],
      "linkedQuestionIds": [
        "original-engine-03",
        "auto-made-r07-s01-q10"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-03 외 1문항",
      "examHitCount": 1,
      "examSampleRefs": [
        "original-engine-03"
      ],
      "importance": 2
    },
    {
      "id": "auto-card-engine-007",
      "subject": "engine",
      "order": 7,
      "type": "term",
      "category": "기관 작동 원리",
      "title": "오일 링",
      "subtitle": "기관 작동 원리",
      "bullets": [
        "실린더 벽의 윤활유 막 양을 조절하는 피스톤 링은 오일 링이다.",
        "오일 링은 실린더 벽에 남는 오일량을 관리한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-56"
      ],
      "linkedQuestionIds": [
        "auto-made-r07-s01-q14"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-56",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-engine-008",
      "subject": "engine",
      "order": 8,
      "type": "term",
      "category": "기관 작동 원리",
      "title": "링 끝간극",
      "subtitle": "기관 작동 원리",
      "bullets": [
        "실린더에 삽입한 피스톤 링의 양 끝 사이 간격은 링 끝간극이다.",
        "링 끝간극은 차종별 지정 한계로 판단한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-131"
      ],
      "linkedQuestionIds": [
        "auto-made-r05-s01-q15"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-131",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-engine-009",
      "subject": "engine",
      "order": 9,
      "type": "term",
      "category": "기관 작동 원리",
      "title": "밸브 스프링",
      "subtitle": "기관 작동 원리",
      "bullets": [
        "캠에 의해 열린 밸브를 시트 쪽으로 복귀시키는 부품은 밸브 스프링이다.",
        "스프링의 복귀력으로 밸브가 닫힌다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-66"
      ],
      "linkedQuestionIds": [
        "auto-made-r09-s01-q10"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-66",
      "examHitCount": 2,
      "examSampleRefs": [
        "auto-r09-s01-q10",
        "auto-r09-s01-q20"
      ],
      "importance": 2
    },
    {
      "id": "auto-card-engine-010",
      "subject": "engine",
      "order": 10,
      "type": "term",
      "category": "기관 작동 원리",
      "title": "헤드 가스켓",
      "subtitle": "기관 작동 원리",
      "bullets": [
        "실린더 블록과 헤드 사이의 연소실 및 유체 통로를 밀봉하는 부품은 헤드 가스켓이다.",
        "연소실과 냉각수·윤활유 통로의 기밀을 유지한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-67"
      ],
      "linkedQuestionIds": [
        "auto-made-r09-s01-q13"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-67",
      "examHitCount": 5,
      "examSampleRefs": [
        "auto-r01-s01-q11",
        "auto-r04-s01-q13",
        "auto-r04-s01-q17",
        "auto-r08-s01-q04",
        "auto-r09-s01-q13"
      ],
      "importance": 3
    },
    {
      "id": "auto-card-engine-011",
      "subject": "engine",
      "order": 11,
      "type": "term",
      "category": "기관 작동 원리",
      "title": "CVVT",
      "subtitle": "기관 작동 원리",
      "bullets": [
        "캠 위상을 바꾸어 흡·배기 밸브 개폐 시기를 조절하는 방식은 CVVT이다.",
        "가변 밸브 타이밍은 운전 조건에 따라 밸브 위상을 조절한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-52"
      ],
      "linkedQuestionIds": [
        "auto-made-r07-s01-q07"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-52",
      "examHitCount": 1,
      "examSampleRefs": [
        "auto-r07-s01-q07"
      ],
      "importance": 2
    },
    {
      "id": "auto-card-engine-012",
      "subject": "engine",
      "order": 12,
      "type": "term",
      "category": "기관 작동 원리",
      "title": "타이밍 벨트",
      "subtitle": "기관 작동 원리",
      "bullets": [
        "크랭크축과 캠축 사이의 회전 위상 동기를 유지하는 부품은 타이밍 벨트이다.",
        "타이밍 벨트는 밸브 개폐와 피스톤 운동을 동기화한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-54"
      ],
      "linkedQuestionIds": [
        "auto-made-r07-s01-q11"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-54",
      "examHitCount": 5,
      "examSampleRefs": [
        "auto-r02-s01-q14",
        "auto-r02-s01-q15",
        "auto-r05-s01-q16",
        "auto-r07-s01-q11",
        "auto-r09-s01-q19"
      ],
      "importance": 3
    },
    {
      "id": "auto-card-engine-013",
      "subject": "engine",
      "order": 13,
      "type": "term",
      "category": "기관 작동 원리",
      "title": "밸브 시트 접촉폭",
      "subtitle": "기관 작동 원리",
      "bullets": [
        "밸브 시트와 밸브 면이 실제로 맞닿는 띠의 폭을 부르는 용어는 접촉폭이다.",
        "밸브 시트는 접촉폭과 동심도 등이 중요하다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-99"
      ],
      "linkedQuestionIds": [
        "auto-made-r08-s01-q14"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-99",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-engine-014",
      "subject": "engine",
      "order": 14,
      "type": "term",
      "category": "기관 작동 원리",
      "title": "베어링 캡 조립",
      "subtitle": "기관 작동 원리",
      "bullets": [
        "크랭크축 베어링 캡을 재조립할 때 유지해야 할 정보는 기존 위치와 방향이다.",
        "캡은 지정된 위치·방향·체결 조건을 유지한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-137"
      ],
      "linkedQuestionIds": [
        "auto-made-r06-s01-q16"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-137",
      "examHitCount": 1,
      "examSampleRefs": [
        "auto-r06-s01-q16"
      ],
      "importance": 2
    },
    {
      "id": "auto-card-engine-015",
      "subject": "engine",
      "order": 15,
      "type": "term",
      "category": "기관 작동 원리",
      "title": "크랭크축 베어링 구조",
      "subtitle": "기관 작동 원리",
      "bullets": [
        "크랭크축 베어링에는 여러 재료의 조합과 다층 코팅 구조를 사용할 수 있다.",
        "베어링 소재와 코팅은 설계별로 다양하다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-144"
      ],
      "linkedQuestionIds": [
        "auto-made-r08-s01-q10"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-144",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-engine-016",
      "subject": "engine",
      "order": 16,
      "type": "term",
      "category": "냉각·윤활",
      "title": "서모스탯",
      "subtitle": "냉각·윤활",
      "bullets": [
        "서모스탯은 냉간 예열과 정상 작동 온도 유지에 필요한 냉각수 흐름을 조절한다.",
        "라디에이터 열 방출을 제한해 정상 온도 도달을 돕는다.",
        "라디에이터로 냉각수가 일찍 흐르면 난기가 지연될 수 있다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-04",
        "concept-engine-102",
        "concept-engine-58"
      ],
      "linkedQuestionIds": [
        "original-engine-05",
        "auto-made-r07-s01-q17"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-04 외 2문항",
      "examHitCount": 3,
      "examSampleRefs": [
        "original-engine-05",
        "auto-r07-s01-q17",
        "auto-r08-s01-q08"
      ],
      "importance": 3
    },
    {
      "id": "auto-card-engine-017",
      "subject": "engine",
      "order": 17,
      "type": "term",
      "category": "냉각·윤활",
      "title": "오일 필터",
      "subtitle": "냉각·윤활",
      "bullets": [
        "순환 엔진오일의 오염 입자를 제거하는 부품은 오일 필터이다.",
        "오일 필터는 이물질에 의한 마찰면 손상을 줄인다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-14"
      ],
      "linkedQuestionIds": [
        "original-engine-04"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-14",
      "examHitCount": 11,
      "examSampleRefs": [
        "original-engine-04",
        "auto-r01-s01-q15",
        "auto-r02-s01-q16",
        "auto-r03-s01-q01",
        "auto-r03-s01-q11",
        "auto-r03-s01-q14",
        "auto-r03-s01-q15",
        "auto-r06-s01-q17"
      ],
      "importance": 4
    },
    {
      "id": "auto-card-engine-018",
      "subject": "engine",
      "order": 18,
      "type": "term",
      "category": "냉각·윤활",
      "title": "오일 펌프",
      "subtitle": "냉각·윤활",
      "bullets": [
        "엔진의 윤활 경로에 오일을 압송하는 부품은 오일 펌프이다.",
        "오일 펌프는 윤활에 필요한 유량과 압력을 확보한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-15"
      ],
      "linkedQuestionIds": [
        "original-engine-07"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-15",
      "examHitCount": 3,
      "examSampleRefs": [
        "original-engine-07",
        "auto-r06-s01-q17",
        "auto-r09-s01-q07"
      ],
      "importance": 3
    },
    {
      "id": "auto-card-engine-019",
      "subject": "engine",
      "order": 19,
      "type": "term",
      "category": "냉각·윤활",
      "title": "오일 필터 바이패스 밸브",
      "subtitle": "냉각·윤활",
      "bullets": [
        "오일 필터의 압력차가 커질 때 우회 유로를 여는 부품은 바이패스 밸브이다.",
        "필터 막힘 등에서 윤활유 흐름을 유지하는 데 쓰인다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-64"
      ],
      "linkedQuestionIds": [
        "auto-made-r09-s01-q08"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-64",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-engine-020",
      "subject": "engine",
      "order": 20,
      "type": "term",
      "category": "냉각·윤활",
      "title": "냉각계통 압력 캡의 안전",
      "subtitle": "냉각·윤활",
      "bullets": [
        "고온의 가압 냉각계통을 개방할 때 발생할 수 있는 위험은 뜨거운 냉각수 분출이다.",
        "고온·가압 상태에서는 냉각수가 분출해 화상을 입을 수 있다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-16"
      ],
      "linkedQuestionIds": [
        "original-engine-06"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-16",
      "examHitCount": 1,
      "examSampleRefs": [
        "original-engine-06"
      ],
      "importance": 2
    },
    {
      "id": "auto-card-engine-021",
      "subject": "engine",
      "order": 21,
      "type": "term",
      "category": "냉각·윤활",
      "title": "냉각수 가압 시험기",
      "subtitle": "냉각·윤활",
      "bullets": [
        "냉각계통의 누설 여부를 지정 압력으로 확인하는 장비는 냉각수 가압 시험기이다.",
        "냉각회로의 압력 유지 상태를 확인한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-61"
      ],
      "linkedQuestionIds": [
        "auto-made-r08-s01-q18"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-61",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-engine-022",
      "subject": "engine",
      "order": 22,
      "type": "term",
      "category": "냉각·윤활",
      "title": "엔진오일 유화",
      "subtitle": "냉각·윤활",
      "bullets": [
        "엔진오일이 유화된 상태라면 냉각수 혼입 가능성을 점검한다.",
        "냉각수와 오일이 섞이는 경로를 확인한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-68"
      ],
      "linkedQuestionIds": [
        "auto-made-r09-s01-q18"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-68",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-engine-023",
      "subject": "engine",
      "order": 23,
      "type": "term",
      "category": "냉각·윤활",
      "title": "오일압력 게이지",
      "subtitle": "냉각·윤활",
      "bullets": [
        "오일 압력 센서의 전기적 파형과 별도로 윤활계통의 실제 압력을 확인하는 장비는 오일압력 게이지이다.",
        "전기 신호만으로 실제 유압을 확정하지 않는다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-96"
      ],
      "linkedQuestionIds": [
        "auto-made-r06-s01-q13"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-96",
      "examHitCount": 1,
      "examSampleRefs": [
        "auto-r08-s01-q12"
      ],
      "importance": 2
    },
    {
      "id": "auto-card-engine-024",
      "subject": "engine",
      "order": 24,
      "type": "term",
      "category": "냉각·윤활",
      "title": "엔진오일 동점도",
      "subtitle": "냉각·윤활",
      "bullets": [
        "스캔툴 표시만으로 직접 측정할 수 없는 엔진오일 물성은 실제 동점도이다.",
        "오일 동점도는 별도 물성시험이 필요하다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-108"
      ],
      "linkedQuestionIds": [
        "auto-made-r01-s01-q04"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-108",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-engine-025",
      "subject": "engine",
      "order": 25,
      "type": "term",
      "category": "냉각·윤활",
      "title": "엔진오일 교환주기",
      "subtitle": "냉각·윤활",
      "bullets": [
        "엔진오일 교환주기는 주행거리 외에 제작사가 지정한 경과 시간 조건을 고려한다.",
        "거리·시간과 가혹 운행 조건을 함께 고려한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-146"
      ],
      "linkedQuestionIds": [
        "auto-made-r08-s01-q16"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-146",
      "examHitCount": 1,
      "examSampleRefs": [
        "auto-r08-s01-q16"
      ],
      "importance": 2
    },
    {
      "id": "auto-card-engine-026",
      "subject": "engine",
      "order": 26,
      "type": "term",
      "category": "냉각·윤활",
      "title": "폐엔진오일 처리",
      "subtitle": "냉각·윤활",
      "bullets": [
        "교환 후 발생한 폐엔진오일은 지정 수거·재활용 경로로 처리한다.",
        "폐유는 지정 처리 절차를 따른다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-120"
      ],
      "linkedQuestionIds": [
        "auto-made-r03-s01-q15"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-120",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-engine-027",
      "subject": "engine",
      "order": 27,
      "type": "term",
      "category": "흡기·과급·연료",
      "title": "CKP 센서",
      "subtitle": "흡기·과급·연료",
      "bullets": [
        "CKP는 크랭크축 위치 센서로 점화와 분사 시점 산정에 필요한 정보를 제공한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [
        "크랭크축 위치 센서"
      ],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-06"
      ],
      "linkedQuestionIds": [
        "original-engine-09"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-06",
      "examHitCount": 2,
      "examSampleRefs": [
        "original-engine-09",
        "auto-r02-s01-q08"
      ],
      "importance": 2
    },
    {
      "id": "auto-card-engine-028",
      "subject": "engine",
      "order": 28,
      "type": "term",
      "category": "흡기·과급·연료",
      "title": "MAF 센서",
      "subtitle": "흡기·과급·연료",
      "bullets": [
        "엔진에 유입되는 공기의 질량 유량을 감지하는 센서는 MAF 센서이다.",
        "MAF는 흡입 공기의 질량 유량을 측정한다.",
        "열막과 공기 사이의 열전달 변화로 공기 유량을 검출한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [
        "공기 질량 유량"
      ],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-07",
        "concept-engine-80"
      ],
      "linkedQuestionIds": [
        "original-engine-11",
        "auto-made-r01-s01-q08"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-07 외 1문항",
      "examHitCount": 2,
      "examSampleRefs": [
        "original-engine-11",
        "original-engine-28"
      ],
      "importance": 2
    },
    {
      "id": "auto-card-engine-029",
      "subject": "engine",
      "order": 29,
      "type": "term",
      "category": "흡기·과급·연료",
      "title": "MAP 센서",
      "subtitle": "흡기·과급·연료",
      "bullets": [
        "MAP(Manifold Absolute Pressure)는 흡기 매니폴드 절대압력을 뜻한다. MAF 센서는 공기 질량 유량을 측정하므로 구별해야 한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [
        "흡기 매니폴드 절대압력"
      ],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-08"
      ],
      "linkedQuestionIds": [
        "original-engine-12"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-08",
      "examHitCount": 2,
      "examSampleRefs": [
        "original-engine-12",
        "original-engine-23"
      ],
      "importance": 2
    },
    {
      "id": "auto-card-engine-030",
      "subject": "engine",
      "order": 30,
      "type": "term",
      "category": "흡기·과급·연료",
      "title": "TPS",
      "subtitle": "흡기·과급·연료",
      "bullets": [
        "스로틀 밸브의 개도를 감지하는 센서는 TPS이다.",
        "TPS는 스로틀 위치의 변화를 전기 신호로 제공한다.",
        "개도와 출력의 연속적 대응을 확인한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [
        "스로틀 위치 센서"
      ],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-27",
        "concept-engine-132"
      ],
      "linkedQuestionIds": [
        "auto-made-r02-s01-q08",
        "auto-made-r06-s01-q05"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-27 외 1문항",
      "examHitCount": 6,
      "examSampleRefs": [
        "auto-r01-s01-q05",
        "auto-r01-s01-q08",
        "auto-r02-s01-q08",
        "auto-r03-s01-q05",
        "auto-r03-s01-q08",
        "auto-r06-s01-q05"
      ],
      "importance": 3
    },
    {
      "id": "auto-card-engine-031",
      "subject": "engine",
      "order": 31,
      "type": "term",
      "category": "흡기·과급·연료",
      "title": "ECT",
      "subtitle": "흡기·과급·연료",
      "bullets": [
        "냉각수 온도를 ECU에 전달하는 센서는 ECT이다.",
        "ECT는 냉각수 온도 경로의 지정 위치에 장착된다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [
        "냉각수 온도 센서"
      ],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-33"
      ],
      "linkedQuestionIds": [
        "auto-made-r03-s01-q06"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-33",
      "examHitCount": 9,
      "examSampleRefs": [
        "auto-r01-s01-q05",
        "auto-r01-s01-q08",
        "auto-r02-s01-q17",
        "auto-r03-s01-q06",
        "auto-r04-s01-q06",
        "auto-r05-s01-q05",
        "auto-r05-s01-q20",
        "auto-r07-s01-q04"
      ],
      "importance": 4
    },
    {
      "id": "auto-card-engine-032",
      "subject": "engine",
      "order": 32,
      "type": "term",
      "category": "흡기·과급·연료",
      "title": "NTC 서미스터",
      "subtitle": "흡기·과급·연료",
      "bullets": [
        "온도가 올라갈수록 저항이 감소하는 서미스터는 NTC형이다.",
        "NTC는 부온도계수 특성을 가진다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-43"
      ],
      "linkedQuestionIds": [
        "auto-made-r05-s01-q05"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-43",
      "examHitCount": 1,
      "examSampleRefs": [
        "auto-r05-s01-q05"
      ],
      "importance": 2
    },
    {
      "id": "auto-card-engine-033",
      "subject": "engine",
      "order": 33,
      "type": "term",
      "category": "흡기·과급·연료",
      "title": "커먼레일",
      "subtitle": "흡기·과급·연료",
      "bullets": [
        "커먼레일은 고압 연료를 인젝터에 공급하는 공통 통로이자 축압부다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-10"
      ],
      "linkedQuestionIds": [
        "original-engine-15"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-10",
      "examHitCount": 7,
      "examSampleRefs": [
        "original-engine-15",
        "auto-r04-s01-q10",
        "auto-r04-s01-q11",
        "auto-r04-s01-q12",
        "auto-r06-s01-q10",
        "auto-r07-s01-q03",
        "auto-r08-s01-q09"
      ],
      "importance": 4
    },
    {
      "id": "auto-card-engine-034",
      "subject": "engine",
      "order": 34,
      "type": "term",
      "category": "흡기·과급·연료",
      "title": "예열 플러그",
      "subtitle": "흡기·과급·연료",
      "bullets": [
        "디젤 기관의 저온 압축착화를 돕는 부품은 예열 플러그이다.",
        "예열 플러그는 냉간 시 연소실 주변을 가열한다.",
        "전류에 의한 발열로 냉간 시동을 보조한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-18",
        "concept-engine-115"
      ],
      "linkedQuestionIds": [
        "original-engine-14",
        "auto-made-r02-s01-q10"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-18 외 1문항",
      "examHitCount": 1,
      "examSampleRefs": [
        "original-engine-14"
      ],
      "importance": 2
    },
    {
      "id": "auto-card-engine-035",
      "subject": "engine",
      "order": 35,
      "type": "term",
      "category": "흡기·과급·연료",
      "title": "웨이스트게이트",
      "subtitle": "흡기·과급·연료",
      "bullets": [
        "터빈으로 가는 배기가스 일부를 우회시키는 과급압 제어 부품은 웨이스트게이트이다.",
        "터빈을 통과하는 배기가스 에너지를 조절한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-19"
      ],
      "linkedQuestionIds": [
        "original-engine-17"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-19",
      "examHitCount": 6,
      "examSampleRefs": [
        "original-engine-17",
        "auto-r02-s01-q02",
        "auto-r04-s01-q01",
        "auto-r06-s01-q03",
        "auto-r07-s01-q01",
        "auto-r09-s01-q01"
      ],
      "importance": 3
    },
    {
      "id": "auto-card-engine-036",
      "subject": "engine",
      "order": 36,
      "type": "term",
      "category": "흡기·과급·연료",
      "title": "터보차저",
      "subtitle": "흡기·과급·연료",
      "bullets": [
        "터보차저에서 배기 터빈과 흡기 압축기는 공통 회전축으로 연결된다.",
        "배기 에너지로 터빈과 동축 압축기를 회전시킨다.",
        "배기 터빈은 축을 구동하고 압축기 휠이 공기를 압축한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-21",
        "concept-engine-106"
      ],
      "linkedQuestionIds": [
        "auto-made-r01-s01-q02"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-21 외 1문항",
      "examHitCount": 18,
      "examSampleRefs": [
        "original-engine-17",
        "original-engine-22",
        "auto-r01-s01-q02",
        "auto-r01-s01-q10",
        "auto-r02-s01-q02",
        "auto-r02-s01-q12",
        "auto-r02-s01-q17",
        "auto-r03-s01-q02"
      ],
      "importance": 5
    },
    {
      "id": "auto-card-engine-037",
      "subject": "engine",
      "order": 37,
      "type": "term",
      "category": "흡기·과급·연료",
      "title": "슈퍼차저",
      "subtitle": "흡기·과급·연료",
      "bullets": [
        "기계식 슈퍼차저의 구동 에너지원은 일반적으로 엔진의 기계적 동력이다.",
        "기계식 과급기는 엔진 구동력을 일부 사용한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-22"
      ],
      "linkedQuestionIds": [
        "auto-made-r03-s01-q02"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-22",
      "examHitCount": 2,
      "examSampleRefs": [
        "auto-r03-s01-q02",
        "auto-r03-s01-q03"
      ],
      "importance": 2
    },
    {
      "id": "auto-card-engine-038",
      "subject": "engine",
      "order": 38,
      "type": "term",
      "category": "흡기·과급·연료",
      "title": "인터쿨러",
      "subtitle": "흡기·과급·연료",
      "bullets": [
        "인터쿨러는 과급 공기의 온도를 낮춰 공기 밀도를 높이는 데 도움을 준다.",
        "같은 압력에서 기체 온도가 낮아지면 밀도가 높아진다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-12",
        "concept-engine-105"
      ],
      "linkedQuestionIds": [
        "original-engine-18"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-12 외 1문항",
      "examHitCount": 5,
      "examSampleRefs": [
        "original-engine-18",
        "auto-r02-s01-q02",
        "auto-r02-s01-q03",
        "auto-r07-s01-q01",
        "auto-r08-s01-q01"
      ],
      "importance": 3
    },
    {
      "id": "auto-card-engine-039",
      "subject": "engine",
      "order": 39,
      "type": "term",
      "category": "흡기·과급·연료",
      "title": "VGT",
      "subtitle": "흡기·과급·연료",
      "bullets": [
        "터빈 유로 단면을 가변 베인으로 조절하는 터보차저는 VGT이다.",
        "VGT는 운전 조건에 따라 터빈 유로를 조절한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-65"
      ],
      "linkedQuestionIds": [
        "auto-made-r09-s01-q09"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-65",
      "examHitCount": 2,
      "examSampleRefs": [
        "auto-r02-s01-q02",
        "auto-r09-s01-q09"
      ],
      "importance": 2
    },
    {
      "id": "auto-card-engine-040",
      "subject": "engine",
      "order": 40,
      "type": "term",
      "category": "흡기·과급·연료",
      "title": "스러스트 베어링",
      "subtitle": "흡기·과급·연료",
      "bullets": [
        "터보차저 축의 축방향 하중을 지지하는 베어링은 스러스트 베어링이다.",
        "스러스트 지지부는 축방향 유격과 관련된다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-47"
      ],
      "linkedQuestionIds": [
        "auto-made-r06-s01-q02"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-47",
      "examHitCount": 1,
      "examSampleRefs": [
        "auto-r06-s01-q03"
      ],
      "importance": 2
    },
    {
      "id": "auto-card-engine-041",
      "subject": "engine",
      "order": 41,
      "type": "term",
      "category": "흡기·과급·연료",
      "title": "저널 베어링",
      "subtitle": "흡기·과급·연료",
      "bullets": [
        "터보차저 축의 반경방향을 지지하는 대표 부품은 저널 베어링이다.",
        "저널 베어링은 축의 반경방향 지지에 사용된다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-48"
      ],
      "linkedQuestionIds": [
        "auto-made-r06-s01-q03"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-48",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-engine-042",
      "subject": "engine",
      "order": 42,
      "type": "term",
      "category": "흡기·과급·연료",
      "title": "연료계통 프라이밍",
      "subtitle": "흡기·과급·연료",
      "bullets": [
        "연료계통의 공기 혼입을 관리하기 위해 차종별 프라이밍 절차를 따른다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-82"
      ],
      "linkedQuestionIds": [
        "auto-made-r01-s01-q15"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-82",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-engine-043",
      "subject": "engine",
      "order": 43,
      "type": "term",
      "category": "흡기·과급·연료",
      "title": "연료 필터 막힘",
      "subtitle": "흡기·과급·연료",
      "bullets": [
        "연료 필터가 막히면 연료 공급 경로의 유동 저항은 증가할 수 있다.",
        "연료 필터 막힘은 연료 공급압 부족의 원인 후보다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-88"
      ],
      "linkedQuestionIds": [
        "auto-made-r03-s01-q04"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-88",
      "examHitCount": 1,
      "examSampleRefs": [
        "auto-r01-s01-q09"
      ],
      "importance": 2
    },
    {
      "id": "auto-card-engine-044",
      "subject": "engine",
      "order": 44,
      "type": "term",
      "category": "흡기·과급·연료",
      "title": "분사노즐 개방압",
      "subtitle": "흡기·과급·연료",
      "bullets": [
        "기계식 디젤 분사노즐의 분사 개시 특성을 시험하는 압력은 개방압이다.",
        "기계식 노즐 시험에서 개방압과 분무 형상을 확인한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-26"
      ],
      "linkedQuestionIds": [
        "auto-made-r02-s01-q07"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-26",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-engine-045",
      "subject": "engine",
      "order": 45,
      "type": "term",
      "category": "흡기·과급·연료",
      "title": "인젝터 보정코드",
      "subtitle": "흡기·과급·연료",
      "bullets": [
        "지원 차량에서는 교체 인젝터의 보정 정보를 맞는 실린더에 등록한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-49"
      ],
      "linkedQuestionIds": [
        "auto-made-r06-s01-q09"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-49",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-engine-046",
      "subject": "engine",
      "order": 46,
      "type": "term",
      "category": "흡기·과급·연료",
      "title": "인젝터 분무 이상",
      "subtitle": "흡기·과급·연료",
      "bullets": [
        "인젝터 분무가 불균일할 때 분무구 막힘과 함께 확인할 내부 작동 부품은 니들 밸브이다.",
        "니들 고착·마모는 분무에 영향을 줄 수 있다.",
        "분무 불량은 불완전 연소와 그을음 증가의 원인 후보다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-139",
        "concept-engine-100"
      ],
      "linkedQuestionIds": [
        "auto-made-r07-s01-q04",
        "auto-made-r09-s01-q17"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-139 외 1문항",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-engine-047",
      "subject": "engine",
      "order": 47,
      "type": "term",
      "category": "흡기·과급·연료",
      "title": "저압 연료 공급계통",
      "subtitle": "흡기·과급·연료",
      "bullets": [
        "커먼레일 압력이 부족할 때 고압 펌프 이전의 공급 경로는 저압 연료 공급 계통이다.",
        "저압 공급 부족이 고압 생성에 영향을 줄 수 있다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-135"
      ],
      "linkedQuestionIds": [
        "auto-made-r06-s01-q12"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-135",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-engine-048",
      "subject": "engine",
      "order": 48,
      "type": "term",
      "category": "흡기·과급·연료",
      "title": "터보차저 오일 공급·회수",
      "subtitle": "흡기·과급·연료",
      "bullets": [
        "터보차저 오일이 정상적으로 돌아가지 못할 때 누유 원인으로 확인하는 통로는 오일 회수 라인이다.",
        "터보 오일 회수 불량은 윤활유 누유의 원인 후보이다.",
        "제작사 절차에 따른 초기 윤활과 오일 공급을 확인한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-85",
        "concept-engine-107"
      ],
      "linkedQuestionIds": [
        "auto-made-r02-s01-q03",
        "auto-made-r01-s01-q03"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-85 외 1문항",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-engine-049",
      "subject": "engine",
      "order": 49,
      "type": "term",
      "category": "연소·배출가스",
      "title": "삼원촉매",
      "subtitle": "연소·배출가스",
      "bullets": [
        "삼원촉매는 CO·HC 산화와 NOx 환원으로 배출가스를 정화한다.",
        "CO와 HC는 산화되고 NOx는 환원된다.",
        "NOx 환원은 질소 성분의 생성을 돕는다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-09",
        "concept-engine-104",
        "concept-engine-113"
      ],
      "linkedQuestionIds": [
        "original-engine-13",
        "auto-made-r01-s01-q19"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-09 외 2문항",
      "examHitCount": 6,
      "examSampleRefs": [
        "original-engine-13",
        "auto-r01-s01-q17",
        "auto-r01-s01-q19",
        "auto-r04-s01-q19",
        "auto-r04-s01-q20",
        "auto-r08-s01-q06"
      ],
      "importance": 3
    },
    {
      "id": "auto-card-engine-050",
      "subject": "engine",
      "order": 50,
      "type": "term",
      "category": "연소·배출가스",
      "title": "EGR",
      "subtitle": "연소·배출가스",
      "bullets": [
        "EGR은 배기가스 일부를 흡기로 되돌려 연소 조건을 조절하고 NOx 생성을 줄이는 방식이다. PCV는 크랭크실 블로바이 가스를 흡기로 되돌리는 계통이다.",
        "고온 연소와 EGR 작동 상태를 함께 진단한다.",
        "연료 종류만으로 EGR 적용 여부를 결정하지 않는다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [
        "배기가스 재순환"
      ],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-11",
        "concept-engine-150",
        "concept-engine-117"
      ],
      "linkedQuestionIds": [
        "original-engine-16",
        "auto-made-r09-s01-q15",
        "auto-made-r02-s01-q15"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-11 외 2문항",
      "examHitCount": 16,
      "examSampleRefs": [
        "original-engine-16",
        "auto-r01-s01-q09",
        "auto-r01-s01-q10",
        "auto-r02-s01-q08",
        "auto-r02-s01-q15",
        "auto-r02-s01-q20",
        "auto-r03-s01-q17",
        "auto-r03-s01-q20"
      ],
      "importance": 5
    },
    {
      "id": "auto-card-engine-051",
      "subject": "engine",
      "order": 51,
      "type": "term",
      "category": "연소·배출가스",
      "title": "EGR 쿨러",
      "subtitle": "연소·배출가스",
      "bullets": [
        "흡기로 되돌아가는 배기가스를 냉각하는 열교환기는 EGR 쿨러이다.",
        "EGR 쿨러는 재순환 배기가스의 온도를 낮춘다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-59"
      ],
      "linkedQuestionIds": [
        "auto-made-r08-s01-q13"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-59",
      "examHitCount": 1,
      "examSampleRefs": [
        "auto-r08-s01-q13"
      ],
      "importance": 2
    },
    {
      "id": "auto-card-engine-052",
      "subject": "engine",
      "order": 52,
      "type": "term",
      "category": "연소·배출가스",
      "title": "PCV",
      "subtitle": "연소·배출가스",
      "bullets": [
        "PCV 계통 이상은 크랭크케이스 압력 상승 및 누유와 관련될 수 있다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [
        "크랭크케이스 환기"
      ],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-36"
      ],
      "linkedQuestionIds": [
        "auto-made-r03-s01-q14"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-36",
      "examHitCount": 1,
      "examSampleRefs": [
        "auto-r04-s01-q11"
      ],
      "importance": 2
    },
    {
      "id": "auto-card-engine-053",
      "subject": "engine",
      "order": 53,
      "type": "term",
      "category": "연소·배출가스",
      "title": "SCR와 요소수",
      "subtitle": "연소·배출가스",
      "bullets": [
        "SCR에서 요소수로부터 생성되어 NOx 환원에 쓰이는 물질은 암모니아이다.",
        "암모니아는 SCR 촉매에서 질소산화물 환원에 관여한다.",
        "요소수는 규정된 농도의 요소 수용액이다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-30",
        "concept-engine-55"
      ],
      "linkedQuestionIds": [
        "auto-made-r02-s01-q17",
        "auto-made-r07-s01-q13"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-30 외 1문항",
      "examHitCount": 5,
      "examSampleRefs": [
        "original-engine-26",
        "auto-r02-s01-q17",
        "auto-r03-s01-q19",
        "auto-r07-s01-q13",
        "auto-r07-s01-q15"
      ],
      "importance": 3
    },
    {
      "id": "auto-card-engine-054",
      "subject": "engine",
      "order": 54,
      "type": "term",
      "category": "연소·배출가스",
      "title": "DPF 포집·재생·회분",
      "subtitle": "연소·배출가스",
      "bullets": [
        "DPF는 매연 입자를 포집하며 재생으로 가연성 그을음을 줄인다.",
        "재생 시 배기온도 상승으로 그을음 산화를 돕는다.",
        "회분은 일반적인 그을음 산화 재생으로 제거되지 않는다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-32",
        "concept-engine-63",
        "concept-engine-75"
      ],
      "linkedQuestionIds": [
        "auto-made-r02-s01-q19",
        "auto-made-r09-s01-q06",
        "original-engine-26"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-32 외 2문항",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-engine-055",
      "subject": "engine",
      "order": 55,
      "type": "term",
      "category": "연소·배출가스",
      "title": "캐니스터와 퍼지",
      "subtitle": "연소·배출가스",
      "bullets": [
        "연료 증발가스를 활성탄에 흡착해 저장하는 부품은 캐니스터이다.",
        "캐니스터는 증발가스를 저장하고 이후 퍼지한다.",
        "증발가스는 지정 조건에서 흡기로 보내 연소시킨다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-53",
        "concept-engine-140"
      ],
      "linkedQuestionIds": [
        "auto-made-r07-s01-q09"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-53 외 1문항",
      "examHitCount": 1,
      "examSampleRefs": [
        "auto-r07-s01-q09"
      ],
      "importance": 2
    },
    {
      "id": "auto-card-engine-056",
      "subject": "engine",
      "order": 56,
      "type": "term",
      "category": "연소·배출가스",
      "title": "일산화탄소",
      "subtitle": "연소·배출가스",
      "bullets": [
        "연료 탄소가 불완전 산화할 때 발생하는 대표 기체는 일산화탄소이다.",
        "CO는 불완전 연소와 관련된다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [
        "CO"
      ],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-31"
      ],
      "linkedQuestionIds": [
        "auto-made-r02-s01-q18"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-31",
      "examHitCount": 18,
      "examSampleRefs": [
        "original-engine-13",
        "auto-r01-s01-q18",
        "auto-r01-s01-q19",
        "auto-r02-s01-q04",
        "auto-r02-s01-q18",
        "auto-r03-s01-q05",
        "auto-r03-s01-q06",
        "auto-r03-s01-q18"
      ],
      "importance": 5
    },
    {
      "id": "auto-card-engine-057",
      "subject": "engine",
      "order": 57,
      "type": "term",
      "category": "연소·배출가스",
      "title": "탄화수소",
      "subtitle": "연소·배출가스",
      "bullets": [
        "미연소 연료의 배출과 관련되어 실화 시 증가할 수 있는 성분은 HC이다.",
        "실화로 미연소 탄화수소가 증가할 수 있다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [
        "HC"
      ],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-46"
      ],
      "linkedQuestionIds": [
        "auto-made-r05-s01-q20"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-46",
      "examHitCount": 8,
      "examSampleRefs": [
        "original-engine-13",
        "auto-r01-s01-q19",
        "auto-r03-s01-q18",
        "auto-r03-s01-q19",
        "auto-r04-s01-q19",
        "auto-r05-s01-q20",
        "auto-r08-s01-q03",
        "auto-r08-s01-q06"
      ],
      "importance": 4
    },
    {
      "id": "auto-card-engine-058",
      "subject": "engine",
      "order": 58,
      "type": "term",
      "category": "연소·배출가스",
      "title": "질소산화물",
      "subtitle": "연소·배출가스",
      "bullets": [
        "고온 연소에서 생성량이 증가하기 쉬운 주요 배출 성분은 NOx이다.",
        "고온의 연소 조건에서는 질소산화물 생성이 증가하기 쉽다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [
        "NOx"
      ],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-83"
      ],
      "linkedQuestionIds": [
        "auto-made-r01-s01-q18"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-83",
      "examHitCount": 17,
      "examSampleRefs": [
        "original-engine-13",
        "original-engine-16",
        "auto-r01-s01-q18",
        "auto-r01-s01-q19",
        "auto-r02-s01-q17",
        "auto-r02-s01-q19",
        "auto-r02-s01-q20",
        "auto-r03-s01-q17"
      ],
      "importance": 5
    },
    {
      "id": "auto-card-engine-059",
      "subject": "engine",
      "order": 59,
      "type": "term",
      "category": "연소·배출가스",
      "title": "지표 오존",
      "subtitle": "연소·배출가스",
      "bullets": [
        "NOx와 휘발성 유기화합물이 햇빛 아래 반응하여 형성할 수 있는 물질은 지표 오존이다.",
        "광화학 반응은 지표 오존 형성에 관여한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-112"
      ],
      "linkedQuestionIds": [
        "auto-made-r01-s01-q18"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-112",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-engine-060",
      "subject": "engine",
      "order": 60,
      "type": "term",
      "category": "연소·배출가스",
      "title": "옥탄가",
      "subtitle": "연소·배출가스",
      "bullets": [
        "가솔린 연료의 노킹 저항성을 나타내는 대표 지표는 옥탄가이다.",
        "요구 옥탄가와 연료의 적합성은 노킹 진단에 고려된다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-92"
      ],
      "linkedQuestionIds": [
        "auto-made-r04-s01-q13"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-92",
      "examHitCount": 2,
      "examSampleRefs": [
        "auto-r04-s01-q13",
        "auto-r07-s01-q05"
      ],
      "importance": 2
    },
    {
      "id": "auto-card-engine-061",
      "subject": "engine",
      "order": 61,
      "type": "term",
      "category": "연소·배출가스",
      "title": "이론공연비",
      "subtitle": "연소·배출가스",
      "bullets": [
        "연료 조성에 따라 차이가 있으나 가솔린은 약 14.7:1을 사용한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-60"
      ],
      "linkedQuestionIds": [
        "auto-made-r08-s01-q17"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-60",
      "examHitCount": 2,
      "examSampleRefs": [
        "original-engine-13",
        "auto-r04-s01-q05"
      ],
      "importance": 2
    },
    {
      "id": "auto-card-engine-062",
      "subject": "engine",
      "order": 62,
      "type": "term",
      "category": "연소·배출가스",
      "title": "산소 센서와 혼합비 피드백",
      "subtitle": "연소·배출가스",
      "bullets": [
        "배기 산소 센서의 신호는 ECU의 공연비 제어에 활용된다.",
        "배기 산소 정보로 혼합비 상태를 판단한다.",
        "산소 센서 정보는 연료 혼합비 피드백에 사용된다.",
        "촉매에 들어가기 전 배기가스의 산소 상태를 감지한다.",
        "협대역 센서는 일반적으로 낮은 전압이 희박, 높은 전압이 농후에 대응한다.",
        "센서 활성 조건에서 농후·희박 변화에 반응한다.",
        "활성 온도와 시험 조건이 파형 판단에 중요하다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-17",
        "concept-engine-84",
        "concept-engine-109",
        "concept-engine-40",
        "concept-engine-121",
        "concept-engine-122"
      ],
      "linkedQuestionIds": [
        "original-engine-10",
        "auto-made-r01-s01-q20",
        "auto-made-r01-s01-q06",
        "auto-made-r04-s01-q05",
        "auto-made-r04-s01-q07"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-17 외 5문항",
      "examHitCount": 9,
      "examSampleRefs": [
        "original-engine-10",
        "auto-r01-s01-q05",
        "auto-r01-s01-q06",
        "auto-r01-s01-q08",
        "auto-r01-s01-q20",
        "auto-r04-s01-q05",
        "auto-r04-s01-q07",
        "auto-r04-s01-q20"
      ],
      "importance": 4
    },
    {
      "id": "auto-card-engine-063",
      "subject": "engine",
      "order": 63,
      "type": "term",
      "category": "연소·배출가스",
      "title": "노킹과 점화시기 보정",
      "subtitle": "연소·배출가스",
      "bullets": [
        "노킹이 감지되면 ECU가 보정할 수 있는 제어량은 점화 시기이다.",
        "점화 시기 조절은 이상 연소 억제에 사용된다.",
        "특정 진동 주파수 성분으로 노킹을 감지한다.",
        "점화시기를 늦춰 노킹을 억제할 수 있다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-20",
        "concept-engine-34",
        "concept-engine-143"
      ],
      "linkedQuestionIds": [
        "original-engine-19",
        "auto-made-r03-s01-q10",
        "auto-made-r08-s01-q02"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-20 외 2문항",
      "examHitCount": 1,
      "examSampleRefs": [
        "original-engine-19"
      ],
      "importance": 2
    },
    {
      "id": "auto-card-engine-064",
      "subject": "engine",
      "order": 64,
      "type": "term",
      "category": "연소·배출가스",
      "title": "디젤 매연",
      "subtitle": "연소·배출가스",
      "bullets": [
        "디젤 기관에서 흡입 공기량이 부족하면 불완전 연소에 따라 매연가 증가할 수 있다.",
        "흡기 부족은 디젤 매연 증가의 원인 후보다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-94"
      ],
      "linkedQuestionIds": [
        "auto-made-r05-s01-q12"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-94",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-engine-065",
      "subject": "engine",
      "order": 65,
      "type": "term",
      "category": "연소·배출가스",
      "title": "실화와 촉매 과열",
      "subtitle": "연소·배출가스",
      "bullets": [
        "실화가 계속되면 미연소 연료가 촉매에서 반응하여 촉매의 과열 위험을 높인다.",
        "실화와 과도한 발열은 촉매 손상 원인 후보다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-145"
      ],
      "linkedQuestionIds": [
        "auto-made-r08-s01-q15"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-145",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-engine-066",
      "subject": "engine",
      "order": 66,
      "type": "concept",
      "category": "고장 진단·정비",
      "title": "스파크 테스터",
      "subtitle": "고장 진단·정비",
      "bullets": [
        "점화 방전의 발생 여부를 확인하는 전용 시험기는 스파크 테스터이다.",
        "점화 계통의 방전을 지정 방식으로 확인한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-23"
      ],
      "linkedQuestionIds": [
        "auto-made-r01-s01-q07"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-23",
      "examHitCount": 1,
      "examSampleRefs": [
        "auto-r01-s01-q07"
      ],
      "importance": 2
    },
    {
      "id": "auto-card-engine-067",
      "subject": "engine",
      "order": 67,
      "type": "concept",
      "category": "고장 진단·정비",
      "title": "압축누설 시험",
      "subtitle": "고장 진단·정비",
      "bullets": [
        "실린더에 공기를 공급하여 누설 경로를 찾는 시험은 압축누설 시험이다.",
        "압축압력 저하의 원인을 누설 경로로 구분한다.",
        "흡기측 누설은 흡기 밸브와 시트 기밀 문제의 단서다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-24",
        "concept-engine-57"
      ],
      "linkedQuestionIds": [
        "auto-made-r01-s01-q11",
        "auto-made-r07-s01-q16"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-24 외 1문항",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-engine-068",
      "subject": "engine",
      "order": 68,
      "type": "concept",
      "category": "고장 진단·정비",
      "title": "건식·습식 압축시험",
      "subtitle": "고장 진단·정비",
      "bullets": [
        "건식 압축시험보다 습식 시험에서 압력이 크게 올라가면 피스톤 링과 실린더 벽의 기밀 저하를 의심할 수 있다.",
        "오일이 링 주변 밀봉을 일시적으로 돕기 때문이다.",
        "압축압력은 측정 시 회전속도의 영향을 받는다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-42",
        "concept-engine-142"
      ],
      "linkedQuestionIds": [
        "auto-made-r04-s01-q17",
        "auto-made-r07-s01-q20"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-42 외 1문항",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-engine-069",
      "subject": "engine",
      "order": 69,
      "type": "concept",
      "category": "고장 진단·정비",
      "title": "프리즈프레임",
      "subtitle": "고장 진단·정비",
      "bullets": [
        "DTC 발생 당시의 운전 조건을 저장한 진단 데이터는 프리즈프레임이다.",
        "프리즈프레임은 고장 발생 당시 상태를 파악하는 단서다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-25"
      ],
      "linkedQuestionIds": [
        "auto-made-r02-s01-q04"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-25",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-engine-070",
      "subject": "engine",
      "order": 70,
      "type": "concept",
      "category": "고장 진단·정비",
      "title": "DTC 진단 원칙",
      "subtitle": "고장 진단·정비",
      "bullets": [
        "DTC는 고장 진단의 단서이므로 데이터·배선·기계적 상태 등 추가 진단으로 원인을 확인해야 한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "original-engine-20"
      ],
      "linkedQuestionIds": [],
      "sourceLabel": "학습 문제은행 · original-engine-20",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-engine-071",
      "subject": "engine",
      "order": 71,
      "type": "concept",
      "category": "고장 진단·정비",
      "title": "오실로스코프",
      "subtitle": "고장 진단·정비",
      "bullets": [
        "시간에 따라 변하는 센서 전압 파형을 관찰하는 계측기는 오실로스코프이다.",
        "오실로스코프는 펄스의 시간적 변화를 나타낸다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-28"
      ],
      "linkedQuestionIds": [
        "auto-made-r02-s01-q09"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-28",
      "examHitCount": 5,
      "examSampleRefs": [
        "auto-r02-s01-q07",
        "auto-r02-s01-q09",
        "auto-r03-s01-q16",
        "auto-r07-s01-q12",
        "auto-r09-s01-q12"
      ],
      "importance": 3
    },
    {
      "id": "auto-card-engine-072",
      "subject": "engine",
      "order": 72,
      "type": "concept",
      "category": "고장 진단·정비",
      "title": "정비용 청진기",
      "subtitle": "고장 진단·정비",
      "bullets": [
        "기계음의 발생 위치를 비교하는 정비 도구는 정비용 청진기이다.",
        "청진기는 기계음의 위치 비교에 사용한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-37"
      ],
      "linkedQuestionIds": [
        "auto-made-r03-s01-q16"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-37",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-engine-073",
      "subject": "engine",
      "order": 73,
      "type": "concept",
      "category": "고장 진단·정비",
      "title": "엔진오일 누유 진단",
      "subtitle": "고장 진단·정비",
      "bullets": [
        "엔진오일 누유를 진단할 때 우선 찾아야 하는 것은 누유 시작 지점이다.",
        "흘러내린 자국과 실제 누유 발생 위치를 구분한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-29"
      ],
      "linkedQuestionIds": [
        "auto-made-r02-s01-q16"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-29",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-engine-074",
      "subject": "engine",
      "order": 74,
      "type": "concept",
      "category": "고장 진단·정비",
      "title": "P0420",
      "subtitle": "고장 진단·정비",
      "bullets": [
        "P0420은 촉매 효율 관련 코드로 추가 원인 진단이 필요하다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-38"
      ],
      "linkedQuestionIds": [
        "auto-made-r03-s01-q20"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-38",
      "examHitCount": 1,
      "examSampleRefs": [
        "auto-r03-s01-q20"
      ],
      "importance": 2
    },
    {
      "id": "auto-card-engine-075",
      "subject": "engine",
      "order": 75,
      "type": "concept",
      "category": "고장 진단·정비",
      "title": "P0171",
      "subtitle": "고장 진단·정비",
      "bullets": [
        "OBD 코드 P0171이 나타내는 혼합기 상태는 뱅크 1의 희박이다.",
        "P0171은 뱅크 1 혼합기가 희박한 상태를 뜻한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-39"
      ],
      "linkedQuestionIds": [
        "auto-made-r04-s01-q04"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-39",
      "examHitCount": 2,
      "examSampleRefs": [
        "auto-r03-s01-q20",
        "auto-r04-s01-q04"
      ],
      "importance": 2
    },
    {
      "id": "auto-card-engine-076",
      "subject": "engine",
      "order": 76,
      "type": "concept",
      "category": "고장 진단·정비",
      "title": "토크-각도 체결",
      "subtitle": "고장 진단·정비",
      "bullets": [
        "지정 토크로 조인 뒤 지정 각도를 추가하는 체결 방식은 토크-각도 체결이다.",
        "토크 단계와 회전각 단계가 구분된다.",
        "차종에 따라 토크 이후 지정 각도로 체결한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-45",
        "concept-engine-93"
      ],
      "linkedQuestionIds": [
        "auto-made-r05-s01-q16",
        "auto-made-r04-s01-q16"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-45 외 1문항",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-engine-077",
      "subject": "engine",
      "order": 77,
      "type": "concept",
      "category": "고장 진단·정비",
      "title": "밸브 가이드 유격과 청색 배기",
      "subtitle": "고장 진단·정비",
      "bullets": [
        "밸브 가이드 유격 과다는 연소실로 엔진오일 유입을 늘릴 수 있다.",
        "가이드와 밸브 스템 씰 상태는 내부 오일 소모에 영향을 준다.",
        "청색 배기는 내부 오일 연소와 연관될 수 있다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-50",
        "concept-engine-62"
      ],
      "linkedQuestionIds": [
        "auto-made-r06-s01-q15",
        "auto-made-r09-s01-q04"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-50 외 1문항",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-engine-078",
      "subject": "engine",
      "order": 78,
      "type": "concept",
      "category": "고장 진단·정비",
      "title": "EGR 열린 상태 고착",
      "subtitle": "고장 진단·정비",
      "bullets": [
        "EGR 밸브가 공회전에서 과도하게 열린 상태로 고착되면 연소 불안정이 발생할 수 있다.",
        "과도한 배기가스 재순환은 안정적인 공회전을 방해할 수 있다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-51"
      ],
      "linkedQuestionIds": [
        "auto-made-r06-s01-q19"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-51",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-engine-079",
      "subject": "engine",
      "order": 79,
      "type": "concept",
      "category": "고장 진단·정비",
      "title": "실린더 밸런스 시험",
      "subtitle": "고장 진단·정비",
      "bullets": [
        "실린더 밸런스 시험은 각 실린더의 토크 기여도 차이를 비교한다.",
        "실린더별 출력 기여를 비교해 불균형을 평가한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-69"
      ],
      "linkedQuestionIds": [
        "auto-made-r09-s01-q20"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-69",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-engine-080",
      "subject": "engine",
      "order": 80,
      "type": "concept",
      "category": "고장 진단·정비",
      "title": "밸브 간극 측정 조건",
      "subtitle": "고장 진단·정비",
      "bullets": [
        "냉간 간극으로 규정된 엔진의 밸브 간극은 제작사가 지정한 냉간 상태에서 측정한다.",
        "밸브 간극은 지정 온도와 캠 위치를 기준으로 측정한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-79"
      ],
      "linkedQuestionIds": [
        "auto-made-r01-s01-q01"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-79",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-engine-081",
      "subject": "engine",
      "order": 81,
      "type": "concept",
      "category": "고장 진단·정비",
      "title": "ECU 전원·접지·커넥터",
      "subtitle": "고장 진단·정비",
      "bullets": [
        "ECU 전원 공급이 불안정할 때 공급전압과 함께 확인해야 할 공통 전기 경로는 접지이다.",
        "전원 및 접지 경로의 상태는 ECU 작동의 기본 조건이다.",
        "센서 전원·접지·배선을 함께 확인한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-81",
        "concept-engine-119"
      ],
      "linkedQuestionIds": [
        "auto-made-r01-s01-q09",
        "auto-made-r03-s01-q09"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-81 외 1문항",
      "examHitCount": 8,
      "examSampleRefs": [
        "auto-r01-s01-q13",
        "auto-r02-s01-q09",
        "auto-r02-s01-q13",
        "auto-r03-s01-q09",
        "auto-r03-s01-q13",
        "auto-r06-s01-q04",
        "auto-r06-s01-q08",
        "auto-r09-s01-q11"
      ],
      "importance": 4
    },
    {
      "id": "auto-card-engine-082",
      "subject": "engine",
      "order": 82,
      "type": "concept",
      "category": "고장 진단·정비",
      "title": "과급압 진단",
      "subtitle": "고장 진단·정비",
      "bullets": [
        "ECU의 과급압 표시값을 비교 검증할 때 실제 압력을 확인하는 장비는 교정된 압력계이다.",
        "외부 실측 압력과 센서 표시값은 동일 조건에서 비교한다.",
        "목표값과 실측값의 차이를 진단 단서로 사용한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-87",
        "concept-engine-114"
      ],
      "linkedQuestionIds": [
        "auto-made-r02-s01-q12",
        "auto-made-r02-s01-q01"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-87 외 1문항",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-engine-083",
      "subject": "engine",
      "order": 83,
      "type": "concept",
      "category": "고장 진단·정비",
      "title": "백래시",
      "subtitle": "고장 진단·정비",
      "bullets": [
        "기어 유격은 회전 방향에 따라 측정 위상에 영향을 줄 수 있다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-95"
      ],
      "linkedQuestionIds": [
        "auto-made-r06-s01-q11"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-95",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-engine-084",
      "subject": "engine",
      "order": 84,
      "type": "concept",
      "category": "고장 진단·정비",
      "title": "냉각수의 연소실 내부 누설",
      "subtitle": "고장 진단·정비",
      "bullets": [
        "지속적인 흰 배기와 냉각수 감소가 함께 나타날 때 의심할 내부 누설은 연소실로의 냉각수 유입이다.",
        "헤드 가스켓 등의 이상으로 냉각수가 연소실에 유입될 수 있다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-98"
      ],
      "linkedQuestionIds": [
        "auto-made-r07-s01-q19"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-98",
      "examHitCount": 39,
      "examSampleRefs": [
        "original-engine-03",
        "original-engine-05",
        "original-engine-06",
        "original-engine-09",
        "original-engine-11",
        "original-engine-13",
        "original-engine-16",
        "original-engine-17"
      ],
      "importance": 5
    },
    {
      "id": "auto-card-engine-085",
      "subject": "engine",
      "order": 85,
      "type": "concept",
      "category": "고장 진단·정비",
      "title": "커먼레일 인젝터 시험",
      "subtitle": "고장 진단·정비",
      "bullets": [
        "커먼레일 인젝터의 정밀 성능 검사는 기계식 노즐 시험과 구분되는 커먼레일 전용 시험 장비가 필요하다.",
        "인젝터 형식에 맞는 시험장비와 규격을 적용한다.",
        "리턴 유량과 압축 등 다른 자료를 함께 판단한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-110",
        "concept-engine-125"
      ],
      "linkedQuestionIds": [
        "auto-made-r01-s01-q12",
        "auto-made-r04-s01-q12"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-110 외 1문항",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-engine-086",
      "subject": "engine",
      "order": 86,
      "type": "concept",
      "category": "고장 진단·정비",
      "title": "전 실린더 압축압력 저하",
      "subtitle": "고장 진단·정비",
      "bullets": [
        "모든 실린더에서 압축압력이 낮을 때 개별 링 교환보다 먼저 검토할 공통 기계 조건은 밸브 타이밍이다.",
        "전 실린더 공통 이상은 타이밍과 측정 조건을 함께 확인한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-111"
      ],
      "linkedQuestionIds": [
        "auto-made-r01-s01-q16"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-111",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-engine-087",
      "subject": "engine",
      "order": 87,
      "type": "concept",
      "category": "고장 진단·정비",
      "title": "흡기 누설",
      "subtitle": "고장 진단·정비",
      "bullets": [
        "공회전이 불안정할 때 스로틀 명령과 실제 개도 외에 불필요한 공기가 들어오는 흡기 누설을 확인한다.",
        "흡기 누설은 공회전 공기량 제어를 방해할 수 있다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-118"
      ],
      "linkedQuestionIds": [
        "auto-made-r03-s01-q05"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-118",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-engine-088",
      "subject": "engine",
      "order": 88,
      "type": "concept",
      "category": "고장 진단·정비",
      "title": "DPF 재생 상태 진단",
      "subtitle": "고장 진단·정비",
      "bullets": [
        "DPF 재생 상태를 확인할 때 필터 전후 차압 외에 중요한 데이터는 배기온도이다.",
        "배기온도는 그을음 산화 열 조건을 보여준다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-123"
      ],
      "linkedQuestionIds": [
        "auto-made-r04-s01-q09"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-123",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-engine-089",
      "subject": "engine",
      "order": 89,
      "type": "concept",
      "category": "고장 진단·정비",
      "title": "ECU 제어 흐름",
      "subtitle": "고장 진단·정비",
      "bullets": [
        "ECU의 기본 제어 흐름은 센서 입력을 처리하여 액추에이터 명령을 생성하는 것이다.",
        "ECU는 분사 및 점화 등의 작동기를 제어한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-127"
      ],
      "linkedQuestionIds": [
        "auto-made-r05-s01-q04"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-127",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-engine-090",
      "subject": "engine",
      "order": 90,
      "type": "concept",
      "category": "고장 진단·정비",
      "title": "로우사이드 제어",
      "subtitle": "고장 진단·정비",
      "bullets": [
        "인젝터 회로의 스위칭 소자가 부하 접지측을 제어하는 방식은 로우사이드이다.",
        "로우사이드는 접지측 경로를 제어한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-128"
      ],
      "linkedQuestionIds": [
        "auto-made-r05-s01-q07"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-128",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-engine-091",
      "subject": "engine",
      "order": 91,
      "type": "concept",
      "category": "고장 진단·정비",
      "title": "이모빌라이저 등록",
      "subtitle": "고장 진단·정비",
      "bullets": [
        "ECU 교환 후 차종에 따라 기존 키 인증과 연계하여 필요한 설정은 이모빌라이저 등록이다.",
        "코딩·키 등록·학습 필요 여부를 확인한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-130"
      ],
      "linkedQuestionIds": [
        "auto-made-r05-s01-q11"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-130",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-engine-092",
      "subject": "engine",
      "order": 92,
      "type": "concept",
      "category": "고장 진단·정비",
      "title": "적응값 학습",
      "subtitle": "고장 진단·정비",
      "bullets": [
        "ECU 교환 후 보정값을 다시 형성하는 과정은 적응값 학습이다.",
        "필요한 초기 학습은 차종별로 다르다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-133"
      ],
      "linkedQuestionIds": [
        "auto-made-r06-s01-q06"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-133",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-engine-093",
      "subject": "engine",
      "order": 93,
      "type": "concept",
      "category": "고장 진단·정비",
      "title": "SCV 코일 저항 측정 조건",
      "subtitle": "고장 진단·정비",
      "bullets": [
        "SCV 코일 저항 비교에서 부품번호와 함께 고려할 측정 조건은 온도이다.",
        "저항 규격은 온도 등의 지정 조건에 따른다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-134"
      ],
      "linkedQuestionIds": [
        "auto-made-r06-s01-q10"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-134",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-engine-094",
      "subject": "engine",
      "order": 94,
      "type": "concept",
      "category": "고장 진단·정비",
      "title": "예열 릴레이·제어모듈",
      "subtitle": "고장 진단·정비",
      "bullets": [
        "예열 명령은 정상이나 플러그 전압이 없으면 예열 릴레이·제어모듈의 출력을 점검한다.",
        "공급 경로 및 제어모듈 출력을 확인한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-147"
      ],
      "linkedQuestionIds": [
        "auto-made-r08-s01-q20"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-147",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-engine-095",
      "subject": "engine",
      "order": 95,
      "type": "formula",
      "category": "계산 공식",
      "title": "전체 배기량",
      "subtitle": "계산 공식",
      "bullets": [
        "전체 배기량은 400×4=1,600cm³이다.",
        "전체 배기량은 실린더당 배기량에 실린더 수를 곱한다. 450×4=1,800cm³이다."
      ],
      "formula": "전체 배기량 = 실린더당 배기량 × 기통 수",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-70",
        "original-engine-21"
      ],
      "linkedQuestionIds": [
        "original-engine-21"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-70 외 1문항",
      "examHitCount": 1,
      "examSampleRefs": [
        "original-engine-21"
      ],
      "importance": 2
    },
    {
      "id": "auto-card-engine-096",
      "subject": "engine",
      "order": 96,
      "type": "formula",
      "category": "계산 공식",
      "title": "과급기 압력비",
      "subtitle": "계산 공식",
      "bullets": [
        "압력비는 출구 절대압력÷입구 절대압력=180÷100이다.",
        "압축기 압력비는 출구 절대압력을 입구 절대압력으로 나눈 무차원 값이다. 160÷100=1.6이다."
      ],
      "formula": "압력비 = 출구 절대압력 ÷ 입구 절대압력",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-71",
        "original-engine-22"
      ],
      "linkedQuestionIds": [
        "original-engine-22"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-71 외 1문항",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-engine-097",
      "subject": "engine",
      "order": 97,
      "type": "formula",
      "category": "계산 공식",
      "title": "절대압력과 게이지압력",
      "subtitle": "계산 공식",
      "bullets": [
        "게이지압력은 절대압력에서 대기압을 뺀 값이다.",
        "게이지압력은 절대압력에서 기준 대기압을 뺀 값이다. 145−95=50kPa이다.",
        "절대압력=100+80=180kPa이다."
      ],
      "formula": "절대압력 = 대기압 + 게이지압력",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-72",
        "original-engine-23",
        "concept-engine-161"
      ],
      "linkedQuestionIds": [
        "original-engine-23"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-72 외 2문항",
      "examHitCount": 5,
      "examSampleRefs": [
        "original-engine-12",
        "original-engine-22",
        "original-engine-23",
        "auto-r02-s01-q12",
        "auto-r03-s01-q08"
      ],
      "importance": 3
    },
    {
      "id": "auto-card-engine-098",
      "subject": "engine",
      "order": 98,
      "type": "formula",
      "category": "계산 공식",
      "title": "기하학적 압축비",
      "subtitle": "계산 공식",
      "bullets": [
        "기하학적 압축비는 600÷60=10이다.",
        "압축비는 하사점의 전체 체적을 상사점의 연소실 체적으로 나눈 값이다. 500÷50=10이다. 지문 값은 전체 체적이다."
      ],
      "formula": "압축비 = 압축 전 체적 ÷ 압축 후 체적",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-73",
        "original-engine-24"
      ],
      "linkedQuestionIds": [
        "original-engine-24"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-73 외 1문항",
      "examHitCount": 1,
      "examSampleRefs": [
        "original-engine-24"
      ],
      "importance": 2
    },
    {
      "id": "auto-card-engine-099",
      "subject": "engine",
      "order": 99,
      "type": "formula",
      "category": "계산 공식",
      "title": "열교환기 열전달률",
      "subtitle": "계산 공식",
      "bullets": [
        "0.05×1×60=3kJ/s이다.",
        "정상상태에서 축일과 운동·위치에너지 변화를 무시하면 제거 열전달률의 크기는 질량유량×정압비열×온도차이다. 0.04×1×75=3kJ/s=3kW이다."
      ],
      "formula": "Q̇ = ṁ × cp × ΔT",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-74",
        "original-engine-25"
      ],
      "linkedQuestionIds": [
        "original-engine-25"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-74 외 1문항",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-engine-100",
      "subject": "engine",
      "order": 100,
      "type": "formula",
      "category": "계산 공식",
      "title": "베어링 간극",
      "subtitle": "계산 공식",
      "bullets": [
        "지름 간극은 40.06−40.00=0.06mm이다.",
        "50.08−50.00=0.08mm이다. 반경 간극 0.04mm와 구별한다. 실제 서비스 한계는 차종별이다.",
        "반경 간극=(50.08−50)÷2=0.04mm이다."
      ],
      "formula": "지름 간극 = 내경 − 외경; 반경 간극 = 지름 간극 ÷ 2",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-76",
        "original-engine-27",
        "concept-engine-171"
      ],
      "linkedQuestionIds": [
        "original-engine-27"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-76 외 2문항",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-engine-101",
      "subject": "engine",
      "order": 101,
      "type": "formula",
      "category": "계산 공식",
      "title": "EGR 질량 비율",
      "subtitle": "계산 공식",
      "bullets": [
        "20÷(80+20)×100=20%이다.",
        "전체 유량은 120g/s이며 30÷120×100=25%이다. 실제 EGR 표시값의 정의는 차량별로 다를 수 있다."
      ],
      "formula": "EGR 비율 = 재순환 질량유량 ÷ 전체 질량유량 × 100%",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-77",
        "original-engine-28"
      ],
      "linkedQuestionIds": [
        "original-engine-28"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-77 외 1문항",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-engine-102",
      "subject": "engine",
      "order": 102,
      "type": "formula",
      "category": "계산 공식",
      "title": "DPF 차압",
      "subtitle": "계산 공식",
      "bullets": [
        "입구 압력에서 출구 압력을 빼면 12kPa이다.",
        "차압=20−11=9kPa이다."
      ],
      "formula": "차압 = 입구 압력 − 출구 압력",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-41",
        "concept-engine-191"
      ],
      "linkedQuestionIds": [
        "auto-made-r04-s01-q09"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-41 외 1문항",
      "examHitCount": 1,
      "examSampleRefs": [
        "auto-r04-s01-q09"
      ],
      "importance": 2
    },
    {
      "id": "auto-card-engine-103",
      "subject": "engine",
      "order": 103,
      "type": "formula",
      "category": "계산 공식",
      "title": "직접 접촉식 심 간극 조정",
      "subtitle": "계산 공식",
      "bullets": [
        "해당 구조에서 필요한 두께 증가량은 0.35−0.25=0.10mm이다.",
        "간극을 0.15mm 줄이기 위해 심을 그만큼 두껍게 하는 계산이다."
      ],
      "formula": "심 두께 증가량 = 측정 간극 − 목표 간극",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-90",
        "concept-engine-198"
      ],
      "linkedQuestionIds": [
        "auto-made-r04-s01-q02"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-90 외 1문항",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-engine-104",
      "subject": "engine",
      "order": 104,
      "type": "formula",
      "category": "계산 공식",
      "title": "센서 펄스 주파수",
      "subtitle": "계산 공식",
      "bullets": [
        "60×1,200÷60=1,200Hz이다."
      ],
      "formula": "f = 회전당 펄스 수 × rpm ÷ 60",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-91"
      ],
      "linkedQuestionIds": [
        "auto-made-r04-s01-q06"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-91",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-engine-105",
      "subject": "engine",
      "order": 105,
      "type": "formula",
      "category": "계산 공식",
      "title": "NOx 저감률",
      "subtitle": "계산 공식",
      "bullets": [
        "저감률=(120−48)÷120×100=60%이다."
      ],
      "formula": "저감률 = (입구 질량유량 − 출구 질량유량) ÷ 입구 질량유량 × 100%",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-engine-181"
      ],
      "linkedQuestionIds": [
        "auto-made-r03-s01-q19"
      ],
      "sourceLabel": "학습 문제은행 · concept-engine-181",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-chassis-001",
      "subject": "chassis",
      "order": 1,
      "type": "term",
      "category": "제동장치",
      "title": "브레이크액",
      "subtitle": "제동장치",
      "bullets": [
        "유압식 제동장치에서 압력을 전달하는 유체는 브레이크액이다.",
        "유압식 브레이크는 브레이크액을 통해 유압을 전달해."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-chassis-01"
      ],
      "linkedQuestionIds": [],
      "sourceLabel": "학습 문제은행 · concept-chassis-01",
      "examHitCount": 3,
      "examSampleRefs": [
        "auto-r03-s02-q20",
        "auto-r09-s02-q15",
        "auto-r09-s02-q17"
      ],
      "importance": 3
    },
    {
      "id": "auto-card-chassis-002",
      "subject": "chassis",
      "order": 2,
      "type": "term",
      "category": "제동장치",
      "title": "마스터 실린더",
      "subtitle": "제동장치",
      "bullets": [
        "브레이크 페달의 입력을 브레이크액의 압력으로 변환하는 부품은 마스터 실린더이다.",
        "마스터 실린더가 페달 입력을 유압으로 바꾼다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-chassis-02"
      ],
      "linkedQuestionIds": [
        "original-chassis-01"
      ],
      "sourceLabel": "학습 문제은행 · concept-chassis-02",
      "examHitCount": 2,
      "examSampleRefs": [
        "original-chassis-01",
        "auto-r01-s02-q08"
      ],
      "importance": 2
    },
    {
      "id": "auto-card-chassis-003",
      "subject": "chassis",
      "order": 3,
      "type": "term",
      "category": "제동장치",
      "title": "ABS",
      "subtitle": "제동장치",
      "bullets": [
        "ABS는 제동 중 바퀴 잠김을 억제한다. TCS는 주로 가속 시 구동 바퀴의 과도한 미끄러짐을 줄인다.",
        "제동 중 휠 잠김 방지에 제동압 조절을 사용한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [
        "잠김방지 제동장치"
      ],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-chassis-03",
        "concept-chassis-84"
      ],
      "linkedQuestionIds": [
        "original-chassis-03",
        "auto-made-r02-s02-q08"
      ],
      "sourceLabel": "학습 문제은행 · concept-chassis-03 외 1문항",
      "examHitCount": 28,
      "examSampleRefs": [
        "original-chassis-03",
        "original-chassis-12",
        "original-chassis-18",
        "auto-r01-s02-q17",
        "auto-r02-s02-q08",
        "auto-r02-s02-q17",
        "auto-r02-s02-q20",
        "auto-r03-s02-q04"
      ],
      "importance": 5
    },
    {
      "id": "auto-card-chassis-004",
      "subject": "chassis",
      "order": 4,
      "type": "term",
      "category": "제동장치",
      "title": "ESC",
      "subtitle": "제동장치",
      "bullets": [
        "ESC는 차량의 자세 안정화를 위해 필요한 제동력과 구동력을 제어할 수 있다.",
        "조향각을 실제 차체 거동 정보와 비교한다.",
        "요레이트는 차량이 회전하는 빠르기를 나타낸다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [
        "차량자세제어장치"
      ],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-chassis-04",
        "concept-chassis-35",
        "concept-chassis-51"
      ],
      "linkedQuestionIds": [
        "original-chassis-04",
        "auto-made-r03-s02-q19",
        "auto-made-r05-s02-q20"
      ],
      "sourceLabel": "학습 문제은행 · concept-chassis-04 외 2문항",
      "examHitCount": 4,
      "examSampleRefs": [
        "original-chassis-04",
        "auto-r08-s02-q14",
        "auto-r09-s02-q10",
        "auto-r09-s02-q18"
      ],
      "importance": 3
    },
    {
      "id": "auto-card-chassis-005",
      "subject": "chassis",
      "order": 5,
      "type": "term",
      "category": "제동장치",
      "title": "캘리퍼",
      "subtitle": "제동장치",
      "bullets": [
        "디스크 브레이크에서 패드를 디스크에 누르는 부품은 캘리퍼이다.",
        "캘리퍼가 패드를 회전하는 디스크에 밀착시킨다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-chassis-05"
      ],
      "linkedQuestionIds": [
        "original-chassis-05"
      ],
      "sourceLabel": "학습 문제은행 · concept-chassis-05",
      "examHitCount": 1,
      "examSampleRefs": [
        "original-chassis-05"
      ],
      "importance": 2
    },
    {
      "id": "auto-card-chassis-006",
      "subject": "chassis",
      "order": 6,
      "type": "term",
      "category": "제동장치",
      "title": "브레이크 부스터",
      "subtitle": "제동장치",
      "bullets": [
        "운전자가 페달을 밟는 힘을 보조하여 제동력을 확보하기 쉽게 하는 장치는 브레이크 부스터이다.",
        "부스터는 페달 입력력을 증폭하는 역할을 한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-chassis-13"
      ],
      "linkedQuestionIds": [
        "original-chassis-02"
      ],
      "sourceLabel": "학습 문제은행 · concept-chassis-13",
      "examHitCount": 2,
      "examSampleRefs": [
        "original-chassis-02",
        "auto-r09-s02-q17"
      ],
      "importance": 2
    },
    {
      "id": "auto-card-chassis-007",
      "subject": "chassis",
      "order": 7,
      "type": "term",
      "category": "제동장치",
      "title": "브레이크 슈",
      "subtitle": "제동장치",
      "bullets": [
        "드럼 브레이크에서 드럼의 내면에 눌리는 마찰 부품은 브레이크 슈이다.",
        "슈의 라이닝이 드럼 내면과 마찰한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-chassis-14"
      ],
      "linkedQuestionIds": [
        "original-chassis-06"
      ],
      "sourceLabel": "학습 문제은행 · concept-chassis-14",
      "examHitCount": 1,
      "examSampleRefs": [
        "original-chassis-06"
      ],
      "importance": 2
    },
    {
      "id": "auto-card-chassis-008",
      "subject": "chassis",
      "order": 8,
      "type": "term",
      "category": "제동장치",
      "title": "주차 브레이크",
      "subtitle": "제동장치",
      "bullets": [
        "주차 중 차량이 움직이지 않게 유지하는 제동 장치는 주차 브레이크이다.",
        "주차 브레이크는 정차·주차 상태의 차량을 고정한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-chassis-15"
      ],
      "linkedQuestionIds": [
        "original-chassis-07"
      ],
      "sourceLabel": "학습 문제은행 · concept-chassis-15",
      "examHitCount": 3,
      "examSampleRefs": [
        "original-chassis-07",
        "auto-r07-s02-q12",
        "auto-r09-s02-q11"
      ],
      "importance": 3
    },
    {
      "id": "auto-card-chassis-009",
      "subject": "chassis",
      "order": 9,
      "type": "term",
      "category": "제동장치",
      "title": "브레이크 패드",
      "subtitle": "제동장치",
      "bullets": [
        "디스크 브레이크에서 디스크 양면에 접촉하여 마찰력을 만드는 소모 부품은 브레이크 패드이다.",
        "캘리퍼가 패드를 회전 디스크에 누른다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-chassis-78"
      ],
      "linkedQuestionIds": [
        "original-chassis-05"
      ],
      "sourceLabel": "학습 문제은행 · concept-chassis-78",
      "examHitCount": 8,
      "examSampleRefs": [
        "auto-r02-s02-q02",
        "auto-r03-s02-q20",
        "auto-r06-s02-q12",
        "auto-r07-s02-q13",
        "auto-r08-s02-q11",
        "auto-r09-s02-q11",
        "auto-r09-s02-q15",
        "auto-r09-s02-q17"
      ],
      "importance": 4
    },
    {
      "id": "auto-card-chassis-010",
      "subject": "chassis",
      "order": 10,
      "type": "term",
      "category": "제동장치",
      "title": "압력 스위치",
      "subtitle": "제동장치",
      "bullets": [
        "유압이 정해진 조건에 도달했는지를 전기적 접점 신호로 나타내는 부품은 압력 스위치이다.",
        "압력 스위치는 유압 조건을 전기 신호로 변환한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-chassis-32"
      ],
      "linkedQuestionIds": [
        "auto-made-r03-s02-q08"
      ],
      "sourceLabel": "학습 문제은행 · concept-chassis-32",
      "examHitCount": 1,
      "examSampleRefs": [
        "auto-r03-s02-q08"
      ],
      "importance": 2
    },
    {
      "id": "auto-card-chassis-011",
      "subject": "chassis",
      "order": 11,
      "type": "term",
      "category": "제동장치",
      "title": "브레이크 공기빼기",
      "subtitle": "제동장치",
      "bullets": [
        "공기는 압축되므로 제동 유압 전달에 영향을 준다. 차량 지정 절차를 따른다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-chassis-36"
      ],
      "linkedQuestionIds": [
        "auto-made-r03-s02-q20"
      ],
      "sourceLabel": "학습 문제은행 · concept-chassis-36",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-chassis-012",
      "subject": "chassis",
      "order": 12,
      "type": "term",
      "category": "제동장치",
      "title": "ABS 감압·증압",
      "subtitle": "제동장치",
      "bullets": [
        "해당 유압 회로에서 저압측 유로를 개방하면 휠 실린더 압력이 낮아진다.",
        "ABS는 바퀴의 회전 상태에 따라 감압·유지·증압을 반복 제어한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-chassis-71",
        "concept-chassis-132"
      ],
      "linkedQuestionIds": [
        "auto-made-r09-s02-q15",
        "auto-made-r05-s02-q14"
      ],
      "sourceLabel": "학습 문제은행 · concept-chassis-71 외 1문항",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-chassis-013",
      "subject": "chassis",
      "order": 13,
      "type": "term",
      "category": "제동장치",
      "title": "ABS 작동 중 페달 진동",
      "subtitle": "제동장치",
      "bullets": [
        "ABS가 정상적으로 제동압을 반복 조절할 때 페달에서 느껴질 수 있는 현상은 진동이다.",
        "유압 변조에 따라 페달 맥동이 느껴질 수 있다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-chassis-72"
      ],
      "linkedQuestionIds": [
        "auto-made-r09-s02-q17"
      ],
      "sourceLabel": "학습 문제은행 · concept-chassis-72",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-chassis-014",
      "subject": "chassis",
      "order": 14,
      "type": "term",
      "category": "제동장치",
      "title": "ABS 경고등과 기본 제동",
      "subtitle": "제동장치",
      "bullets": [
        "ABS 기능 제한과 일반 제동 기능 상실은 구별한다. 경고 발생 시 점검이 필요하다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-chassis-41"
      ],
      "linkedQuestionIds": [
        "auto-made-r04-s02-q14"
      ],
      "sourceLabel": "학습 문제은행 · concept-chassis-41",
      "examHitCount": 4,
      "examSampleRefs": [
        "auto-r04-s02-q14",
        "auto-r06-s02-q14",
        "auto-r08-s02-q10",
        "auto-r08-s02-q12"
      ],
      "importance": 3
    },
    {
      "id": "auto-card-chassis-015",
      "subject": "chassis",
      "order": 15,
      "type": "term",
      "category": "제동장치",
      "title": "EPB 정비 모드",
      "subtitle": "제동장치",
      "bullets": [
        "일부 EPB 장착 차량의 패드 정비에 사용하는 지정 제어 상태는 정비 모드이다.",
        "차종별 EPB 정비 모드 및 안전 절차가 필요할 수 있다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-chassis-50"
      ],
      "linkedQuestionIds": [
        "auto-made-r05-s02-q19"
      ],
      "sourceLabel": "학습 문제은행 · concept-chassis-50",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-chassis-016",
      "subject": "chassis",
      "order": 16,
      "type": "term",
      "category": "제동장치",
      "title": "액티브·수동 유도형 휠속도 센서",
      "subtitle": "제동장치",
      "bullets": [
        "별도 전원 공급이 필요한 휠속도 센서의 한 분류는 액티브형이다.",
        "액티브 센서와 수동 유도형 센서는 전원·출력 방식이 다르다.",
        "회전에 따른 자속 변화가 유도전압을 발생시킨다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-chassis-54",
        "concept-chassis-60"
      ],
      "linkedQuestionIds": [
        "auto-made-r06-s02-q15",
        "auto-made-r07-s02-q11"
      ],
      "sourceLabel": "학습 문제은행 · concept-chassis-54 외 1문항",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-chassis-017",
      "subject": "chassis",
      "order": 17,
      "type": "term",
      "category": "제동장치",
      "title": "휠속도 엔코더와 휠 베어링",
      "subtitle": "제동장치",
      "bullets": [
        "휠 베어링 교환 후 ABS 신호 이상 시 센서가 읽는 회전 신호원인 엔코더를 확인한다.",
        "엔코더와 센서의 설치 상태는 휠속도 신호에 영향을 준다.",
        "센서 신호원은 베어링 등에 일체화될 수 있다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-chassis-57",
        "concept-chassis-147"
      ],
      "linkedQuestionIds": [
        "auto-made-r06-s02-q18",
        "auto-made-r09-s02-q12"
      ],
      "sourceLabel": "학습 문제은행 · concept-chassis-57 외 1문항",
      "examHitCount": 1,
      "examSampleRefs": [
        "original-chassis-01"
      ],
      "importance": 2
    },
    {
      "id": "auto-card-chassis-018",
      "subject": "chassis",
      "order": 18,
      "type": "concept",
      "category": "제동장치",
      "title": "휠속도 신호 이상 진단",
      "subtitle": "제동장치",
      "bullets": [
        "저속에서 ABS가 불필요하게 개입할 때 바퀴별로 비교할 대표 센서 데이터는 휠속도이다.",
        "차륜 속도 신호와 엔코더·배선을 비교한다.",
        "센서·엔코더·배선의 신호를 비교한다.",
        "센서 신호 경로와 커넥터 상태를 확인한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-chassis-90",
        "concept-chassis-110",
        "concept-chassis-127"
      ],
      "linkedQuestionIds": [
        "auto-made-r04-s02-q17",
        "auto-made-r01-s02-q02",
        "auto-made-r04-s02-q07"
      ],
      "sourceLabel": "학습 문제은행 · concept-chassis-90 외 2문항",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-chassis-019",
      "subject": "chassis",
      "order": 19,
      "type": "term",
      "category": "제동장치",
      "title": "롤러식 제동력 시험기",
      "subtitle": "제동장치",
      "bullets": [
        "롤러식 제동력 시험기로 측정하는 대표 물리량은 각 바퀴의 제동력이다.",
        "기계적 제동력 측정과 ABS 전기제어 진단은 구분한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-chassis-96"
      ],
      "linkedQuestionIds": [
        "auto-made-r06-s02-q14"
      ],
      "sourceLabel": "학습 문제은행 · concept-chassis-96",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-chassis-020",
      "subject": "chassis",
      "order": 20,
      "type": "term",
      "category": "조향·타이어",
      "title": "캠버",
      "subtitle": "조향·타이어",
      "bullets": [
        "캠버는 앞 또는 뒤에서 본 바퀴의 기울기이며 상단이 바깥쪽이면 양의 캠버다.",
        "캠버는 정면에서 본 바퀴의 기울기다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-chassis-06",
        "concept-chassis-102"
      ],
      "linkedQuestionIds": [
        "original-chassis-08"
      ],
      "sourceLabel": "학습 문제은행 · concept-chassis-06 외 1문항",
      "examHitCount": 2,
      "examSampleRefs": [
        "original-chassis-08",
        "auto-r07-s02-q10"
      ],
      "importance": 2
    },
    {
      "id": "auto-card-chassis-021",
      "subject": "chassis",
      "order": 21,
      "type": "term",
      "category": "조향·타이어",
      "title": "토인·토아웃",
      "subtitle": "조향·타이어",
      "bullets": [
        "좌우 바퀴의 앞쪽 간격이 뒤쪽 간격보다 좁은 정렬 상태는 토인이다.",
        "토인은 바퀴의 앞부분이 서로 가까운 정렬 상태다.",
        "토는 위에서 본 좌우 바퀴의 진행 방향 관계다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-chassis-07",
        "concept-chassis-103"
      ],
      "linkedQuestionIds": [
        "original-chassis-09"
      ],
      "sourceLabel": "학습 문제은행 · concept-chassis-07 외 1문항",
      "examHitCount": 2,
      "examSampleRefs": [
        "original-chassis-08",
        "original-chassis-09"
      ],
      "importance": 2
    },
    {
      "id": "auto-card-chassis-022",
      "subject": "chassis",
      "order": 22,
      "type": "term",
      "category": "조향·타이어",
      "title": "캐스터",
      "subtitle": "조향·타이어",
      "bullets": [
        "조향축의 측면 기울기로 직진 안정성과 자기복원 성향에 영향을 주는 각은 캐스터이다.",
        "캐스터는 조향의 복원성과 직진 안정성에 영향을 준다.",
        "양의 캐스터는 직진 안정성과 자기복원 성향에 영향을 준다.",
        "캐스터는 직진 안정성과 복원 성향에 영향을 준다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-chassis-16",
        "concept-chassis-104",
        "concept-chassis-48"
      ],
      "linkedQuestionIds": [
        "original-chassis-10",
        "auto-made-r05-s02-q13"
      ],
      "sourceLabel": "학습 문제은행 · concept-chassis-16 외 2문항",
      "examHitCount": 5,
      "examSampleRefs": [
        "original-chassis-08",
        "original-chassis-09",
        "original-chassis-10",
        "auto-r05-s02-q13",
        "auto-r07-s02-q10"
      ],
      "importance": 3
    },
    {
      "id": "auto-card-chassis-023",
      "subject": "chassis",
      "order": 23,
      "type": "term",
      "category": "조향·타이어",
      "title": "수막현상과 트레드",
      "subtitle": "조향·타이어",
      "bullets": [
        "수막현상은 물 때문에 타이어와 노면의 접촉력이 저하되는 현상이다.",
        "물 배출 능력 저하는 수막현상 위험을 높인다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-chassis-10",
        "concept-chassis-108"
      ],
      "linkedQuestionIds": [
        "original-chassis-16"
      ],
      "sourceLabel": "학습 문제은행 · concept-chassis-10 외 1문항",
      "examHitCount": 1,
      "examSampleRefs": [
        "original-chassis-16"
      ],
      "importance": 2
    },
    {
      "id": "auto-card-chassis-024",
      "subject": "chassis",
      "order": 24,
      "type": "term",
      "category": "조향·타이어",
      "title": "휠 밸런스",
      "subtitle": "조향·타이어",
      "bullets": [
        "회전하는 휠과 타이어 질량 분포의 불균형을 교정하는 작업은 휠 밸런스이다.",
        "질량 불균형은 속도에 따라 진동을 유발할 수 있다.",
        "웨이트로 회전 질량의 불균형을 줄인다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-chassis-18",
        "concept-chassis-107"
      ],
      "linkedQuestionIds": [
        "original-chassis-14"
      ],
      "sourceLabel": "학습 문제은행 · concept-chassis-18 외 1문항",
      "examHitCount": 1,
      "examSampleRefs": [
        "auto-r01-s02-q15"
      ],
      "importance": 2
    },
    {
      "id": "auto-card-chassis-025",
      "subject": "chassis",
      "order": 25,
      "type": "term",
      "category": "조향·타이어",
      "title": "타이어 냉간 공기압",
      "subtitle": "조향·타이어",
      "bullets": [
        "타이어 공기압 점검의 기본 기준은 제작사가 지정한 냉간 공기압이다.",
        "문틀 표시나 사용설명서의 냉간 권장값을 적용한다.",
        "과도한 변형은 열 발생과 손상 가능성을 높인다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-chassis-19",
        "concept-chassis-20"
      ],
      "linkedQuestionIds": [
        "original-chassis-15",
        "original-chassis-17"
      ],
      "sourceLabel": "학습 문제은행 · concept-chassis-19 외 1문항",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-chassis-026",
      "subject": "chassis",
      "order": 26,
      "type": "term",
      "category": "조향·타이어",
      "title": "EPS 토크 센서",
      "subtitle": "조향·타이어",
      "bullets": [
        "EPS가 운전자의 조향 입력력을 판단하는 데 사용하는 센서는 토크 센서이다.",
        "조향 토크를 입력 신호로 이용해 보조력을 계산한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-chassis-24"
      ],
      "linkedQuestionIds": [
        "auto-made-r01-s02-q13"
      ],
      "sourceLabel": "학습 문제은행 · concept-chassis-24",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-chassis-027",
      "subject": "chassis",
      "order": 27,
      "type": "term",
      "category": "조향·타이어",
      "title": "EPS 전동 보조 모터",
      "subtitle": "조향·타이어",
      "bullets": [
        "EPS의 전기적 제어 명령을 실제 보조력으로 변환하는 부품은 보조 모터이다.",
        "전동 모터가 조향 보조 토크를 발생시킨다.",
        "EPS는 전기적 구동으로 조향을 보조한다.",
        "일반적으로 차량 속도에 따라 보조량을 달리 제어할 수 있다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-chassis-25",
        "concept-chassis-69",
        "concept-chassis-85"
      ],
      "linkedQuestionIds": [
        "auto-made-r01-s02-q18",
        "auto-made-r09-s02-q07",
        "auto-made-r02-s02-q18"
      ],
      "sourceLabel": "학습 문제은행 · concept-chassis-25 외 2문항",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-chassis-028",
      "subject": "chassis",
      "order": 28,
      "type": "term",
      "category": "조향·타이어",
      "title": "타이로드 교환 후 토 점검",
      "subtitle": "조향·타이어",
      "bullets": [
        "타이로드 교환 후 우선 기계적으로 확인해야 할 휠 얼라인먼트 항목은 토이다.",
        "타이로드 길이는 바퀴의 토 정렬에 영향을 준다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-chassis-49"
      ],
      "linkedQuestionIds": [
        "auto-made-r05-s02-q18"
      ],
      "sourceLabel": "학습 문제은행 · concept-chassis-49",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-chassis-029",
      "subject": "chassis",
      "order": 29,
      "type": "term",
      "category": "조향·타이어",
      "title": "조향각 센서 영점 보정",
      "subtitle": "조향·타이어",
      "bullets": [
        "조향각 센서가 직진 기준을 올바르게 표시하도록 조정하는 작업은 영점 보정이다.",
        "제작사 지정 직진 기준과 센서 보정 절차를 따른다.",
        "차량마다 조향각 영점 절차가 다르다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-chassis-115",
        "concept-chassis-141"
      ],
      "linkedQuestionIds": [
        "auto-made-r01-s02-q14",
        "auto-made-r07-s02-q10"
      ],
      "sourceLabel": "학습 문제은행 · concept-chassis-115 외 1문항",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-chassis-030",
      "subject": "chassis",
      "order": 30,
      "type": "concept",
      "category": "조향·타이어",
      "title": "EPS 전원·통신 진단",
      "subtitle": "조향·타이어",
      "bullets": [
        "EPS 보조력 저하와 저전압 코드가 함께 발생하면 제어기의 공급전원 품질을 확인한다.",
        "전원·접지와 충전 상태를 확인한다.",
        "통신 경로와 관련 제어기를 확인한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-chassis-112",
        "concept-chassis-116"
      ],
      "linkedQuestionIds": [
        "auto-made-r01-s02-q04",
        "auto-made-r01-s02-q16"
      ],
      "sourceLabel": "학습 문제은행 · concept-chassis-112 외 1문항",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-chassis-031",
      "subject": "chassis",
      "order": 31,
      "type": "term",
      "category": "조향·타이어",
      "title": "조향 유격과 기계적 저항",
      "subtitle": "조향·타이어",
      "bullets": [
        "전자제어 조향장치에서 기계적 헐거움이 의심될 때 스캔 검사와 구별하여 확인할 것은 조향 유격이다.",
        "기계적 유격은 실물 점검이 필요하다.",
        "전자 제어 원인과 기계적 걸림 등을 구분한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-chassis-120",
        "concept-chassis-123"
      ],
      "linkedQuestionIds": [
        "auto-made-r02-s02-q19",
        "auto-made-r03-s02-q16"
      ],
      "sourceLabel": "학습 문제은행 · concept-chassis-120 외 1문항",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-chassis-032",
      "subject": "chassis",
      "order": 32,
      "type": "term",
      "category": "조향·타이어",
      "title": "EPS 감속기",
      "subtitle": "조향·타이어",
      "bullets": [
        "EPS 작동 시 소음의 원인을 확인할 때 모터와 장착부 외에 회전력 전달 부품인 감속기를 점검한다.",
        "보조 모터의 감속 기구와 장착부를 확인한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-chassis-137"
      ],
      "linkedQuestionIds": [
        "auto-made-r06-s02-q12"
      ],
      "sourceLabel": "학습 문제은행 · concept-chassis-137",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-chassis-033",
      "subject": "chassis",
      "order": 33,
      "type": "term",
      "category": "조향·타이어",
      "title": "EPS 보조력 반응",
      "subtitle": "조향·타이어",
      "bullets": [
        "EPS 토크 입력과 모터 구동 데이터를 비교하는 것은 명령에 대한 실제 보조력 반응을 평가하기 위해서다.",
        "조향 입력과 전동 모터 응답의 관계를 확인한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-chassis-140"
      ],
      "linkedQuestionIds": [
        "auto-made-r07-s02-q08"
      ],
      "sourceLabel": "학습 문제은행 · concept-chassis-140",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-chassis-034",
      "subject": "chassis",
      "order": 34,
      "type": "concept",
      "category": "조향·타이어",
      "title": "차량 쏠림 진단",
      "subtitle": "조향·타이어",
      "bullets": [
        "차량이 한쪽으로 쏠리는 증상을 진단할 때 타이어·제동과 함께 바퀴의 정렬 상태를 확인한다.",
        "휠 얼라인먼트의 불균형은 편향 주행의 원인 중 하나다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-chassis-58"
      ],
      "linkedQuestionIds": [
        "auto-made-r07-s02-q04"
      ],
      "sourceLabel": "학습 문제은행 · concept-chassis-58",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-chassis-035",
      "subject": "chassis",
      "order": 35,
      "type": "term",
      "category": "조향·타이어",
      "title": "EPS 과전류 보호",
      "subtitle": "조향·타이어",
      "bullets": [
        "EPS 모터의 과전류 보호 제어는 조향 보조 출력을 제한할 수 있다.",
        "과전류 시 모터와 제어회로의 보호가 필요하다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-chassis-66"
      ],
      "linkedQuestionIds": [
        "auto-made-r08-s02-q15"
      ],
      "sourceLabel": "학습 문제은행 · concept-chassis-66",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-chassis-036",
      "subject": "chassis",
      "order": 36,
      "type": "term",
      "category": "현가장치",
      "title": "쇼크 업소버",
      "subtitle": "현가장치",
      "bullets": [
        "현가장치에서 스프링의 반복 진동 에너지를 소산시키는 부품은 쇼크 업소버이다.",
        "쇼크 업소버는 진동을 감쇠시키는 댐퍼다.",
        "댐퍼는 작동유 유동 저항 등으로 기계적 진동 에너지를 주로 열로 소산시킨다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-chassis-08",
        "concept-chassis-128"
      ],
      "linkedQuestionIds": [
        "original-chassis-11",
        "auto-made-r04-s02-q08"
      ],
      "sourceLabel": "학습 문제은행 · concept-chassis-08 외 1문항",
      "examHitCount": 1,
      "examSampleRefs": [
        "original-chassis-11"
      ],
      "importance": 2
    },
    {
      "id": "auto-card-chassis-037",
      "subject": "chassis",
      "order": 37,
      "type": "term",
      "category": "현가장치",
      "title": "스태빌라이저 바",
      "subtitle": "현가장치",
      "bullets": [
        "좌우 현가장치의 상대 운동에 저항하여 선회 중 차체 롤을 줄이는 부품은 스태빌라이저 바이다.",
        "스태빌라이저 바는 좌우 서스펜션의 상대 변위에 저항한다.",
        "좌우 현가 운동이 다를 때 바의 비틀림 저항이 차체 롤을 줄인다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-chassis-09",
        "concept-chassis-106"
      ],
      "linkedQuestionIds": [
        "original-chassis-13"
      ],
      "sourceLabel": "학습 문제은행 · concept-chassis-09 외 1문항",
      "examHitCount": 3,
      "examSampleRefs": [
        "original-chassis-13",
        "auto-r06-s02-q06",
        "auto-r09-s02-q03"
      ],
      "importance": 3
    },
    {
      "id": "auto-card-chassis-038",
      "subject": "chassis",
      "order": 38,
      "type": "term",
      "category": "현가장치",
      "title": "현가 스프링",
      "subtitle": "현가장치",
      "bullets": [
        "차체 하중을 지지하며 탄성 변형으로 에너지를 저장하고 반환하는 현가 부품은 스프링이다.",
        "스프링은 하중 지지와 충격 완화를 담당한다.",
        "스프링은 탄성 에너지를 저장하고 돌려준다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-chassis-17",
        "concept-chassis-105"
      ],
      "linkedQuestionIds": [
        "original-chassis-12"
      ],
      "sourceLabel": "학습 문제은행 · concept-chassis-17 외 1문항",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-chassis-039",
      "subject": "chassis",
      "order": 39,
      "type": "term",
      "category": "현가장치",
      "title": "에어스프링",
      "subtitle": "현가장치",
      "bullets": [
        "공기식 현가장치에서 주차 중 한쪽 차고가 내려가면 압축공기 누설 가능성을 살핀다.",
        "에어스프링과 공압 배관의 누설은 차고 유지에 영향을 준다.",
        "에어스프링은 압축공기로 탄성 지지력을 만든다.",
        "벨로스의 손상은 공압 누설의 원인 후보이다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-chassis-22",
        "concept-chassis-100",
        "concept-chassis-129"
      ],
      "linkedQuestionIds": [
        "auto-made-r01-s02-q07",
        "auto-made-r09-s02-q20",
        "auto-made-r04-s02-q19"
      ],
      "sourceLabel": "학습 문제은행 · concept-chassis-22 외 2문항",
      "examHitCount": 6,
      "examSampleRefs": [
        "auto-r06-s02-q09",
        "auto-r07-s02-q06",
        "auto-r07-s02-q07",
        "auto-r07-s02-q18",
        "auto-r08-s02-q05",
        "auto-r09-s02-q20"
      ],
      "importance": 3
    },
    {
      "id": "auto-card-chassis-040",
      "subject": "chassis",
      "order": 40,
      "type": "term",
      "category": "현가장치",
      "title": "차고 센서",
      "subtitle": "현가장치",
      "bullets": [
        "전자제어 현가장치에서 차량의 높이 변화를 파악하는 센서는 차고 센서이다.",
        "차고 정보는 차량 높이 제어에 활용된다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-chassis-29"
      ],
      "linkedQuestionIds": [
        "auto-made-r02-s02-q10"
      ],
      "sourceLabel": "학습 문제은행 · concept-chassis-29",
      "examHitCount": 3,
      "examSampleRefs": [
        "auto-r04-s02-q10",
        "auto-r06-s02-q07",
        "auto-r06-s02-q10"
      ],
      "importance": 3
    },
    {
      "id": "auto-card-chassis-041",
      "subject": "chassis",
      "order": 41,
      "type": "term",
      "category": "현가장치",
      "title": "축압기",
      "subtitle": "현가장치",
      "bullets": [
        "유압 현가 계통에서 압력에너지를 저장하는 부품은 축압기이다.",
        "축압기는 유압 에너지 저장에 이용된다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-chassis-31"
      ],
      "linkedQuestionIds": [
        "auto-made-r03-s02-q06"
      ],
      "sourceLabel": "학습 문제은행 · concept-chassis-31",
      "examHitCount": 1,
      "examSampleRefs": [
        "auto-r06-s02-q02"
      ],
      "importance": 2
    },
    {
      "id": "auto-card-chassis-042",
      "subject": "chassis",
      "order": 42,
      "type": "term",
      "category": "현가장치",
      "title": "차체 수직 가속도 센서",
      "subtitle": "현가장치",
      "bullets": [
        "전자제어 현가장치에서 차체의 수직 운동을 검출하는 입력은 가속도 센서이다.",
        "차체 가속도는 현가 감쇠 제어에 활용된다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-chassis-33"
      ],
      "linkedQuestionIds": [
        "auto-made-r03-s02-q09"
      ],
      "sourceLabel": "학습 문제은행 · concept-chassis-33",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-chassis-043",
      "subject": "chassis",
      "order": 43,
      "type": "term",
      "category": "현가장치",
      "title": "스카이훅 제어",
      "subtitle": "현가장치",
      "bullets": [
        "차체 진동을 줄이기 위한 반능동 현가의 대표적인 감쇠 제어 전략은 스카이훅이다.",
        "스카이훅은 차체 거동의 진동 저감을 목표로 한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-chassis-34"
      ],
      "linkedQuestionIds": [
        "auto-made-r03-s02-q10"
      ],
      "sourceLabel": "학습 문제은행 · concept-chassis-34",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-chassis-044",
      "subject": "chassis",
      "order": 44,
      "type": "term",
      "category": "현가장치",
      "title": "댐퍼 바운스 시험",
      "subtitle": "현가장치",
      "bullets": [
        "차체를 눌렀다 놓아 반복 흔들림을 관찰하는 시험은 댐퍼의 보조 진단이다.",
        "반동시험만으로 댐퍼의 모든 성능을 확정하지 않는다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-chassis-39"
      ],
      "linkedQuestionIds": [
        "auto-made-r04-s02-q06"
      ],
      "sourceLabel": "학습 문제은행 · concept-chassis-39",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-chassis-045",
      "subject": "chassis",
      "order": 45,
      "type": "term",
      "category": "현가장치",
      "title": "댐퍼 오일 씰과 감쇠 저하",
      "subtitle": "현가장치",
      "bullets": [
        "댐퍼 피스톤로드의 표면 손상은 오일 씰을 손상시켜 누유를 일으킬 수 있다.",
        "로드를 따라 작동하는 씰이 손상되면 오일이 누출될 수 있다.",
        "댐퍼 오일은 진동 에너지 소산에 필요하다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-chassis-42",
        "concept-chassis-92"
      ],
      "linkedQuestionIds": [
        "auto-made-r04-s02-q16",
        "auto-made-r05-s02-q07"
      ],
      "sourceLabel": "학습 문제은행 · concept-chassis-42 외 1문항",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-chassis-046",
      "subject": "chassis",
      "order": 46,
      "type": "term",
      "category": "현가장치",
      "title": "에어 컴프레서",
      "subtitle": "현가장치",
      "bullets": [
        "공기식 현가장치에서 압축공기를 공급하는 부품은 에어 컴프레서이다.",
        "압축기가 공압 현가에 필요한 공기를 공급한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-chassis-47"
      ],
      "linkedQuestionIds": [
        "auto-made-r05-s02-q10"
      ],
      "sourceLabel": "학습 문제은행 · concept-chassis-47",
      "examHitCount": 1,
      "examSampleRefs": [
        "auto-r05-s02-q10"
      ],
      "importance": 2
    },
    {
      "id": "auto-card-chassis-047",
      "subject": "chassis",
      "order": 47,
      "type": "term",
      "category": "현가장치",
      "title": "어퍼 마운트",
      "subtitle": "현가장치",
      "bullets": [
        "스트럿 상단의 차체 연결 및 지지 부품은 어퍼 마운트이다.",
        "상부 덜컹거림은 어퍼 마운트와 베어링 등을 점검한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-chassis-56"
      ],
      "linkedQuestionIds": [
        "auto-made-r06-s02-q17"
      ],
      "sourceLabel": "학습 문제은행 · concept-chassis-56",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-chassis-048",
      "subject": "chassis",
      "order": 48,
      "type": "term",
      "category": "현가장치",
      "title": "차고 센서 보정",
      "subtitle": "현가장치",
      "bullets": [
        "차고 센서 보정은 지정 하중과 타이어 조건 외에 평탄한 지면이 필요하다.",
        "차량 높이 기준을 일관되게 측정하기 위한 조건이다.",
        "장착 및 차량 지정 높이 보정 절차를 확인한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-chassis-64",
        "concept-chassis-138"
      ],
      "linkedQuestionIds": [
        "auto-made-r08-s02-q06",
        "auto-made-r06-s02-q20"
      ],
      "sourceLabel": "학습 문제은행 · concept-chassis-64 외 1문항",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-chassis-049",
      "subject": "chassis",
      "order": 49,
      "type": "term",
      "category": "현가장치",
      "title": "가스식 댐퍼의 발포 억제",
      "subtitle": "현가장치",
      "bullets": [
        "가스식 댐퍼에서 가스 가압의 역할 중 하나는 작동유의 발포 억제이다.",
        "가스 가압은 작동유 거품 발생을 줄이는 데 도움을 준다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-chassis-68"
      ],
      "linkedQuestionIds": [
        "auto-made-r09-s02-q04"
      ],
      "sourceLabel": "학습 문제은행 · concept-chassis-68",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-chassis-050",
      "subject": "chassis",
      "order": 50,
      "type": "term",
      "category": "현가장치",
      "title": "스프링 압축기",
      "subtitle": "현가장치",
      "bullets": [
        "스프링은 압축 에너지를 저장하므로 지정 압축·고정 장비가 필요하다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-chassis-97"
      ],
      "linkedQuestionIds": [
        "auto-made-r08-s02-q04"
      ],
      "sourceLabel": "학습 문제은행 · concept-chassis-97",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-chassis-051",
      "subject": "chassis",
      "order": 51,
      "type": "term",
      "category": "현가장치",
      "title": "댐퍼 작동유 온도",
      "subtitle": "현가장치",
      "bullets": [
        "유압식 댐퍼의 감쇠력은 작동유의 온도 변화에 영향을 받을 수 있다.",
        "작동유의 온도에 따라 유동 특성이 달라질 수 있다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-chassis-98"
      ],
      "linkedQuestionIds": [
        "auto-made-r08-s02-q19"
      ],
      "sourceLabel": "학습 문제은행 · concept-chassis-98",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-chassis-052",
      "subject": "chassis",
      "order": 52,
      "type": "term",
      "category": "현가장치",
      "title": "가압 현가계 잔압",
      "subtitle": "현가장치",
      "bullets": [
        "가압된 유압 현가계의 누설 정비 전 관리해야 할 위험 에너지는 회로의 잔압이다.",
        "잔류 압력은 지정 안전 절차로 관리한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-chassis-113"
      ],
      "linkedQuestionIds": [
        "auto-made-r01-s02-q06"
      ],
      "sourceLabel": "학습 문제은행 · concept-chassis-113",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-chassis-053",
      "subject": "chassis",
      "order": 53,
      "type": "term",
      "category": "현가장치",
      "title": "가변 댐퍼의 감쇠계수",
      "subtitle": "현가장치",
      "bullets": [
        "반능동 전자제어 현가장치의 가변 댐퍼가 조절하는 주요 물리량은 감쇠계수이다.",
        "가변 댐퍼는 감쇠 특성을 조절한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-chassis-114"
      ],
      "linkedQuestionIds": [
        "auto-made-r01-s02-q10"
      ],
      "sourceLabel": "학습 문제은행 · concept-chassis-114",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-chassis-054",
      "subject": "chassis",
      "order": 54,
      "type": "term",
      "category": "현가장치",
      "title": "유압 펌프",
      "subtitle": "현가장치",
      "bullets": [
        "유압 현가 압력이 부족할 때 유체 부족 및 누설과 함께 검토할 압력 생성 요소는 유압 펌프이다.",
        "유체 공급과 실제 유압을 확인한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-chassis-118"
      ],
      "linkedQuestionIds": [
        "auto-made-r02-s02-q06"
      ],
      "sourceLabel": "학습 문제은행 · concept-chassis-118",
      "examHitCount": 5,
      "examSampleRefs": [
        "auto-r01-s02-q16",
        "auto-r02-s02-q01",
        "auto-r02-s02-q06",
        "auto-r03-s02-q07",
        "auto-r09-s02-q07"
      ],
      "importance": 3
    },
    {
      "id": "auto-card-chassis-055",
      "subject": "chassis",
      "order": 55,
      "type": "concept",
      "category": "현가장치",
      "title": "전자제어 현가 진단",
      "subtitle": "현가장치",
      "bullets": [
        "현가 액추에이터가 명령에 반응하지 않으면 전기회로와 별도로 기계 구동부의 작동 여부를 확인한다.",
        "전기 입력과 기계 작동 이상을 분리한다.",
        "배선과 커넥터·구동 코일을 구분한다.",
        "차고·감쇠 명령과 차량 반응을 함께 살핀다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-chassis-121",
        "concept-chassis-133",
        "concept-chassis-143"
      ],
      "linkedQuestionIds": [
        "auto-made-r03-s02-q11",
        "auto-made-r05-s02-q17",
        "auto-made-r08-s02-q07"
      ],
      "sourceLabel": "학습 문제은행 · concept-chassis-121 외 2문항",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-chassis-056",
      "subject": "chassis",
      "order": 56,
      "type": "term",
      "category": "동력전달·변속기",
      "title": "차동장치",
      "subtitle": "동력전달·변속기",
      "bullets": [
        "선회 시 좌우 바퀴의 이동 거리가 다르므로 차동장치가 회전 차이를 허용한다.",
        "차동장치는 좌우 바퀴의 서로 다른 회전수를 허용한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-chassis-11",
        "concept-chassis-79"
      ],
      "linkedQuestionIds": [
        "original-chassis-19"
      ],
      "sourceLabel": "학습 문제은행 · concept-chassis-11 외 1문항",
      "examHitCount": 2,
      "examSampleRefs": [
        "original-chassis-19",
        "original-chassis-20"
      ],
      "importance": 2
    },
    {
      "id": "auto-card-chassis-057",
      "subject": "chassis",
      "order": 57,
      "type": "term",
      "category": "동력전달·변속기",
      "title": "등속 조인트와 단일 유니버설 조인트",
      "subtitle": "동력전달·변속기",
      "bullets": [
        "허용 굴절각 내에서 입력축과 출력축의 순간 각속도를 같게 유지하는 조인트는 등속 조인트이다.",
        "등속 조인트는 축이 꺾여도 순간 각속도를 같게 유지한다.",
        "일반 십자형 조인트는 굴절각에서 순간 속도 변동이 발생할 수 있다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-chassis-12",
        "concept-chassis-80"
      ],
      "linkedQuestionIds": [
        "original-chassis-20"
      ],
      "sourceLabel": "학습 문제은행 · concept-chassis-12 외 1문항",
      "examHitCount": 1,
      "examSampleRefs": [
        "original-chassis-20"
      ],
      "importance": 2
    },
    {
      "id": "auto-card-chassis-058",
      "subject": "chassis",
      "order": 58,
      "type": "term",
      "category": "동력전달·변속기",
      "title": "클러치",
      "subtitle": "동력전달·변속기",
      "bullets": [
        "변속을 위해 엔진에서 변속기로 전달되는 토크를 분리하는 부품은 클러치이다.",
        "클러치는 엔진과 변속기 사이 동력 연결을 제어한다.",
        "클러치 분리는 변속이나 정차를 돕는다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-chassis-21",
        "concept-chassis-109"
      ],
      "linkedQuestionIds": [
        "original-chassis-18"
      ],
      "sourceLabel": "학습 문제은행 · concept-chassis-21 외 1문항",
      "examHitCount": 15,
      "examSampleRefs": [
        "original-chassis-18",
        "auto-r01-s02-q05",
        "auto-r03-s02-q03",
        "auto-r04-s02-q01",
        "auto-r04-s02-q03",
        "auto-r04-s02-q05",
        "auto-r05-s02-q02",
        "auto-r05-s02-q03"
      ],
      "importance": 5
    },
    {
      "id": "auto-card-chassis-059",
      "subject": "chassis",
      "order": 59,
      "type": "concept",
      "category": "동력전달·변속기",
      "title": "토크 컨버터 록업 진단",
      "subtitle": "동력전달·변속기",
      "bullets": [
        "토크 컨버터 록업 상태 진단에 유용한 회전수 차이는 슬립 회전수이다.",
        "록업 상태의 슬립은 엔진측과 터빈측의 회전수 비교로 판단한다.",
        "록업 지령과 실제 슬립의 차이를 비교한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-chassis-30",
        "concept-chassis-93"
      ],
      "linkedQuestionIds": [
        "auto-made-r03-s02-q03",
        "auto-made-r05-s02-q16"
      ],
      "sourceLabel": "학습 문제은행 · concept-chassis-30 외 1문항",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-chassis-060",
      "subject": "chassis",
      "order": 60,
      "type": "term",
      "category": "동력전달·변속기",
      "title": "스테이터와 일방향 클러치",
      "subtitle": "동력전달·변속기",
      "bullets": [
        "토크 컨버터의 스테이터를 한 방향으로 지지하는 부품은 일방향 클러치이다.",
        "스테이터의 회전 방향을 제어해 유체 흐름을 돕는다.",
        "스테이터는 환류 유체의 방향을 바꾸어 토크 증대에 기여한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-chassis-37",
        "concept-chassis-126"
      ],
      "linkedQuestionIds": [
        "auto-made-r04-s02-q03"
      ],
      "sourceLabel": "학습 문제은행 · concept-chassis-37 외 1문항",
      "examHitCount": 3,
      "examSampleRefs": [
        "auto-r04-s02-q03",
        "auto-r05-s02-q02",
        "auto-r05-s02-q05"
      ],
      "importance": 3
    },
    {
      "id": "auto-card-chassis-061",
      "subject": "chassis",
      "order": 61,
      "type": "term",
      "category": "동력전달·변속기",
      "title": "록업 클러치",
      "subtitle": "동력전달·변속기",
      "bullets": [
        "토크 컨버터의 유체 슬립을 줄이기 위해 엔진측과 터빈측을 직접 연결하는 부품은 록업 클러치이다.",
        "록업 클러치는 조건에 따라 동력 전달 손실을 줄인다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [
        "TCC"
      ],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-chassis-38"
      ],
      "linkedQuestionIds": [
        "auto-made-r04-s02-q05"
      ],
      "sourceLabel": "학습 문제은행 · concept-chassis-38",
      "examHitCount": 4,
      "examSampleRefs": [
        "auto-r04-s02-q05",
        "auto-r08-s02-q01",
        "auto-r08-s02-q02",
        "auto-r09-s02-q14"
      ],
      "importance": 3
    },
    {
      "id": "auto-card-chassis-062",
      "subject": "chassis",
      "order": 62,
      "type": "term",
      "category": "동력전달·변속기",
      "title": "ATF 교환 및 점검 조건",
      "subtitle": "동력전달·변속기",
      "bullets": [
        "ATF 교환 주기와 유종은 차량별 제작사 정비지침을 기준으로 정한다.",
        "변속기 설계 및 가혹 운행 조건에 따라 주기가 달라진다.",
        "오일은 온도에 따라 체적이 달라져 지정 점검 조건이 필요하다.",
        "유온은 변속 제어와 유체 특성에 영향을 준다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-chassis-27",
        "concept-chassis-43",
        "concept-chassis-135"
      ],
      "linkedQuestionIds": [
        "auto-made-r02-s02-q03",
        "auto-made-r04-s02-q20",
        "auto-made-r06-s02-q05"
      ],
      "sourceLabel": "학습 문제은행 · concept-chassis-27 외 2문항",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-chassis-063",
      "subject": "chassis",
      "order": 63,
      "type": "term",
      "category": "동력전달·변속기",
      "title": "변속기 마찰요소",
      "subtitle": "동력전달·변속기",
      "bullets": [
        "특정 변속단에서 슬립이 심하면 해당 단을 구성하는 마찰요소과 유압을 점검한다.",
        "클러치 등 마찰요소가 충분한 토크를 전달하는지 확인한다.",
        "물리적 마모 치수는 별도 계측과 검사로 확인한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-chassis-44",
        "concept-chassis-81"
      ],
      "linkedQuestionIds": [
        "auto-made-r05-s02-q01",
        "auto-made-r01-s02-q05"
      ],
      "sourceLabel": "학습 문제은행 · concept-chassis-44 외 1문항",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-chassis-064",
      "subject": "chassis",
      "order": 64,
      "type": "term",
      "category": "동력전달·변속기",
      "title": "자동변속기 변속 입력",
      "subtitle": "동력전달·변속기",
      "bullets": [
        "변속 제어는 차속, 가속 요구, 유온 등 운전 조건에 대응한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-chassis-52"
      ],
      "linkedQuestionIds": [
        "auto-made-r06-s02-q05"
      ],
      "sourceLabel": "학습 문제은행 · concept-chassis-52",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-chassis-065",
      "subject": "chassis",
      "order": 65,
      "type": "term",
      "category": "동력전달·변속기",
      "title": "레인지 스위치",
      "subtitle": "동력전달·변속기",
      "bullets": [
        "자동변속기의 P/N 위치에서 시동 허용과 변속 위치 정보를 제공하는 장치는 레인지 스위치이다.",
        "인히비터 또는 레인지 스위치가 위치 정보를 제공한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-chassis-55"
      ],
      "linkedQuestionIds": [
        "auto-made-r06-s02-q16"
      ],
      "sourceLabel": "학습 문제은행 · concept-chassis-55",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-chassis-066",
      "subject": "chassis",
      "order": 66,
      "type": "term",
      "category": "동력전달·변속기",
      "title": "라인압 측정",
      "subtitle": "동력전달·변속기",
      "bullets": [
        "유압식 자동변속기에서 제어 명령과 비교하여 실제 유압 상태를 측정하는 물리량은 라인압이다.",
        "유압 회로의 실제 압력과 제어 조건을 비교한다.",
        "제조사 지정 측정점과 조건에 맞춰 실제 유압을 평가한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-chassis-86",
        "concept-chassis-142"
      ],
      "linkedQuestionIds": [
        "auto-made-r03-s02-q05",
        "auto-made-r07-s02-q16"
      ],
      "sourceLabel": "학습 문제은행 · concept-chassis-86 외 1문항",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-chassis-067",
      "subject": "chassis",
      "order": 67,
      "type": "term",
      "category": "동력전달·변속기",
      "title": "스톨 시험",
      "subtitle": "동력전달·변속기",
      "bullets": [
        "토크 컨버터 스톨 속도가 지정 범위보다 낮을 때 변속기 외에도 확인할 동력원의 성능은 엔진 출력이다.",
        "스톨 속도는 엔진 출력 및 컨버터 특성의 영향을 받는다.",
        "클러치 슬립과 유압 부족 등 여러 원인이 있을 수 있다.",
        "제작사 안전 조건과 짧은 규정시간을 따른다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-chassis-87",
        "concept-chassis-91",
        "concept-chassis-131"
      ],
      "linkedQuestionIds": [
        "auto-made-r04-s02-q01",
        "auto-made-r05-s02-q02",
        "auto-made-r05-s02-q05"
      ],
      "sourceLabel": "학습 문제은행 · concept-chassis-87 외 2문항",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-chassis-068",
      "subject": "chassis",
      "order": 68,
      "type": "term",
      "category": "동력전달·변속기",
      "title": "ATF 탄 냄새와 마찰재",
      "subtitle": "동력전달·변속기",
      "bullets": [
        "ATF에서 탄 냄새와 마찰재가 발견되면 내부 클러치의 과열 가능성을 검토한다.",
        "마찰 요소의 과열 또는 마모로 오일이 오염될 수 있다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-chassis-94"
      ],
      "linkedQuestionIds": [
        "auto-made-r06-s02-q01"
      ],
      "sourceLabel": "학습 문제은행 · concept-chassis-94",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-chassis-069",
      "subject": "chassis",
      "order": 69,
      "type": "term",
      "category": "동력전달·변속기",
      "title": "솔레노이드 제어",
      "subtitle": "동력전달·변속기",
      "bullets": [
        "자동변속기 변속충격이 발생할 때 실제 변속 반응과 비교하는 전기적 구동 요소는 솔레노이드 제어이다.",
        "유압·ATF와 솔레노이드 제어를 함께 확인한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-chassis-117"
      ],
      "linkedQuestionIds": [
        "auto-made-r02-s02-q04"
      ],
      "sourceLabel": "학습 문제은행 · concept-chassis-117",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-chassis-070",
      "subject": "chassis",
      "order": 70,
      "type": "term",
      "category": "동력전달·변속기",
      "title": "압력 조절밸브",
      "subtitle": "동력전달·변속기",
      "bullets": [
        "자동변속기 라인압이 낮을 때 펌프·내부 누설과 함께 점검할 압력 제어 부품은 압력 조절밸브이다.",
        "라인압 저하는 공급·제어·누설 원인을 구별한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-chassis-125"
      ],
      "linkedQuestionIds": [
        "auto-made-r04-s02-q02"
      ],
      "sourceLabel": "학습 문제은행 · concept-chassis-125",
      "examHitCount": 2,
      "examSampleRefs": [
        "auto-r07-s02-q02",
        "auto-r07-s02-q17"
      ],
      "importance": 2
    },
    {
      "id": "auto-card-chassis-071",
      "subject": "chassis",
      "order": 71,
      "type": "term",
      "category": "동력전달·변속기",
      "title": "변속 충격과 유압 완충",
      "subtitle": "동력전달·변속기",
      "bullets": [
        "특정 변속단에서만 큰 충격이 발생하면 공통 원인 외에 해당 단의 유압 완충 계통을 검토한다.",
        "해당 변속단의 압력 제어와 충격 완화 계통을 확인한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-chassis-134"
      ],
      "linkedQuestionIds": [
        "auto-made-r06-s02-q02"
      ],
      "sourceLabel": "학습 문제은행 · concept-chassis-134",
      "examHitCount": 7,
      "examSampleRefs": [
        "auto-r01-s02-q01",
        "auto-r03-s02-q03",
        "auto-r05-s02-q09",
        "auto-r06-s02-q05",
        "auto-r07-s02-q01",
        "auto-r07-s02-q14",
        "auto-r08-s02-q20"
      ],
      "importance": 4
    },
    {
      "id": "auto-card-chassis-072",
      "subject": "chassis",
      "order": 72,
      "type": "term",
      "category": "동력전달·변속기",
      "title": "토크 컨버터 조립",
      "subtitle": "동력전달·변속기",
      "bullets": [
        "토크 컨버터와 변속기를 엔진에 결합하기 전 컨버터의 완전 삽입 상태를 확인한다.",
        "차량별 결합 절차에 맞춰 컨버터의 삽입 상태를 확인한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-chassis-139"
      ],
      "linkedQuestionIds": [
        "auto-made-r07-s02-q03"
      ],
      "sourceLabel": "학습 문제은행 · concept-chassis-139",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-chassis-073",
      "subject": "chassis",
      "order": 73,
      "type": "term",
      "category": "동력전달·변속기",
      "title": "ATF 금속입자 오염",
      "subtitle": "동력전달·변속기",
      "bullets": [
        "ATF에서 금속입자를 발견하면 변속기 내부 외에 오일라인과 토크 컨버터의 오염도 확인한다.",
        "오염물은 연결된 변속기 유체 계통을 따라 이동할 수 있다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-chassis-145"
      ],
      "linkedQuestionIds": [
        "auto-made-r08-s02-q20"
      ],
      "sourceLabel": "학습 문제은행 · concept-chassis-145",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-chassis-074",
      "subject": "chassis",
      "order": 74,
      "type": "term",
      "category": "동력전달·변속기",
      "title": "ATF 물성시험",
      "subtitle": "동력전달·변속기",
      "bullets": [
        "ATF의 실제 점도를 정확히 평가하려면 스캔 데이터가 아닌 물성시험이 필요하다.",
        "오일 물성은 별도의 시험으로 평가한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-chassis-146"
      ],
      "linkedQuestionIds": [
        "auto-made-r09-s02-q01"
      ],
      "sourceLabel": "학습 문제은행 · concept-chassis-146",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-chassis-075",
      "subject": "chassis",
      "order": 75,
      "type": "formula",
      "category": "계산 공식",
      "title": "파스칼의 원리·유압 증력",
      "subtitle": "계산 공식",
      "bullets": [
        "마스터 실린더 압력은 브레이크액을 통해 전달된다.",
        "같은 압력에서 힘은 면적에 비례하므로 150×12÷3=600N이다.",
        "같은 유압이 전달된다고 가정하면 힘의 비는 피스톤 면적비와 같다. 100×10÷2=500N이다."
      ],
      "formula": "F₁/A₁ = F₂/A₂",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-chassis-101",
        "concept-chassis-73",
        "original-chassis-21"
      ],
      "linkedQuestionIds": [
        "original-chassis-01",
        "original-chassis-21"
      ],
      "sourceLabel": "학습 문제은행 · concept-chassis-101 외 2문항",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-chassis-076",
      "subject": "chassis",
      "order": 76,
      "type": "formula",
      "category": "계산 공식",
      "title": "선형 스프링 상수",
      "subtitle": "계산 공식",
      "bullets": [
        "선형 탄성 범위에서는 힘과 변위의 비가 스프링 상수다.",
        "k=400÷0.02=20,000N/m이다.",
        "선형 탄성 범위에서 k=F/x이다. 600÷0.03=20,000N/m이다."
      ],
      "formula": "k = F ÷ x",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-chassis-46",
        "concept-chassis-74",
        "original-chassis-22"
      ],
      "linkedQuestionIds": [
        "auto-made-r05-s02-q08",
        "original-chassis-22"
      ],
      "sourceLabel": "학습 문제은행 · concept-chassis-46 외 2문항",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-chassis-077",
      "subject": "chassis",
      "order": 77,
      "type": "formula",
      "category": "계산 공식",
      "title": "변속비와 출력 회전수",
      "subtitle": "계산 공식",
      "bullets": [
        "변속비는 2,000÷500=4이다.",
        "입력/출력 회전수 비가 4이면 출력은 2,400÷4=600rpm이다."
      ],
      "formula": "변속비 = 입력 회전수 ÷ 출력 회전수",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-chassis-28",
        "original-chassis-24"
      ],
      "linkedQuestionIds": [
        "auto-made-r02-s02-q05"
      ],
      "sourceLabel": "학습 문제은행 · concept-chassis-28 외 1문항",
      "examHitCount": 1,
      "examSampleRefs": [
        "original-chassis-24"
      ],
      "importance": 2
    },
    {
      "id": "auto-card-chassis-078",
      "subject": "chassis",
      "order": 78,
      "type": "formula",
      "category": "계산 공식",
      "title": "슬립 회전수",
      "subtitle": "계산 공식",
      "bullets": [
        "두 회전수의 차는 1,800−1,650=150rpm이다."
      ],
      "formula": "슬립 회전수 = 엔진측 rpm − 터빈측 rpm",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-chassis-45"
      ],
      "linkedQuestionIds": [
        "auto-made-r05-s02-q03"
      ],
      "sourceLabel": "학습 문제은행 · concept-chassis-45",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-chassis-079",
      "subject": "chassis",
      "order": 79,
      "type": "formula",
      "category": "계산 공식",
      "title": "전체 토",
      "subtitle": "계산 공식",
      "bullets": [
        "좌우 개별 토의 합은 +0.10−0.03=+0.07°이다.",
        "부호를 포함해 +0.12−0.04=+0.08°이다. 실제 규정은 장비 부호 기준과 차량 규격을 적용한다."
      ],
      "formula": "전체 토 = 좌측 토 + 우측 토 (동일 부호 기준)",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-chassis-59",
        "original-chassis-27"
      ],
      "linkedQuestionIds": [
        "auto-made-r07-s02-q09"
      ],
      "sourceLabel": "학습 문제은행 · concept-chassis-59 외 1문항",
      "examHitCount": 1,
      "examSampleRefs": [
        "original-chassis-27"
      ],
      "importance": 2
    },
    {
      "id": "auto-card-chassis-080",
      "subject": "chassis",
      "order": 80,
      "type": "formula",
      "category": "계산 공식",
      "title": "휠속도 센서 주파수",
      "subtitle": "계산 공식",
      "bullets": [
        "40×5=200펄스/s이다.",
        "300rpm은 초당 5회전이다. 36×5=180Hz이다. 실제 펄스 수는 센서 설계별로 다르다."
      ],
      "formula": "f = 회전당 펄스 수 × rpm ÷ 60",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-chassis-61",
        "original-chassis-28"
      ],
      "linkedQuestionIds": [
        "auto-made-r07-s02-q12"
      ],
      "sourceLabel": "학습 문제은행 · concept-chassis-61 외 1문항",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-chassis-081",
      "subject": "chassis",
      "order": 81,
      "type": "formula",
      "category": "계산 공식",
      "title": "차륜 회전수와 차속",
      "subtitle": "계산 공식",
      "bullets": [
        "200÷40×2=10m/s이다.",
        "1m/s=3.6km/h이므로 20×3.6=72이다.",
        "10×1.8=18m/s이며, 3.6을 곱해 64.8km/h로 환산한다."
      ],
      "formula": "v = 유효 구름둘레 × 초당 회전수",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-chassis-62",
        "concept-chassis-75",
        "original-chassis-23"
      ],
      "linkedQuestionIds": [
        "auto-made-r07-s02-q20",
        "original-chassis-23"
      ],
      "sourceLabel": "학습 문제은행 · concept-chassis-62 외 2문항",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-chassis-082",
      "subject": "chassis",
      "order": 82,
      "type": "formula",
      "category": "계산 공식",
      "title": "선형 댐퍼 감쇠계수",
      "subtitle": "계산 공식",
      "bullets": [
        "c=F/v=600÷0.3=2,000N·s/m이다.",
        "F=c×v=1,500×0.2=300N이다."
      ],
      "formula": "F = c × v",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-chassis-67",
        "concept-chassis-88"
      ],
      "linkedQuestionIds": [
        "auto-made-r08-s02-q17",
        "auto-made-r04-s02-q09"
      ],
      "sourceLabel": "학습 문제은행 · concept-chassis-67 외 1문항",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-chassis-083",
      "subject": "chassis",
      "order": 83,
      "type": "formula",
      "category": "계산 공식",
      "title": "EPS 전기 입력 전력",
      "subtitle": "계산 공식",
      "bullets": [
        "P=VI=12×25=300W이다."
      ],
      "formula": "P = V × I",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-chassis-70"
      ],
      "linkedQuestionIds": [
        "auto-made-r09-s02-q09"
      ],
      "sourceLabel": "학습 문제은행 · concept-chassis-70",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-chassis-084",
      "subject": "chassis",
      "order": 84,
      "type": "formula",
      "category": "계산 공식",
      "title": "회전수 기준 슬립률",
      "subtitle": "계산 공식",
      "bullets": [
        "200÷2,000×100=10%이다."
      ],
      "formula": "슬립률 = (기준 회전수 − 실제 회전수) ÷ 기준 회전수 × 100%",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-chassis-76"
      ],
      "linkedQuestionIds": [
        "original-chassis-25"
      ],
      "sourceLabel": "학습 문제은행 · concept-chassis-76",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-chassis-085",
      "subject": "chassis",
      "order": 85,
      "type": "formula",
      "category": "계산 공식",
      "title": "조향 토크",
      "subtitle": "계산 공식",
      "bullets": [
        "토크는 힘×수직 반지름=30×0.2이다.",
        "힘이 반지름에 수직일 때 토크 크기는 반지름과 힘의 곱이다.",
        "힘이 반지름에 수직이므로 0.18×20=3.6N·m이다."
      ],
      "formula": "T = r × F (힘이 반지름에 수직)",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-chassis-77",
        "concept-chassis-89",
        "original-chassis-26"
      ],
      "linkedQuestionIds": [
        "original-chassis-26",
        "auto-made-r04-s02-q11"
      ],
      "sourceLabel": "학습 문제은행 · concept-chassis-77 외 2문항",
      "examHitCount": 2,
      "examSampleRefs": [
        "original-chassis-26",
        "auto-r01-s02-q16"
      ],
      "importance": 2
    },
    {
      "id": "auto-card-chassis-086",
      "subject": "chassis",
      "order": 86,
      "type": "formula",
      "category": "계산 공식",
      "title": "공기스프링 지지력",
      "subtitle": "계산 공식",
      "bullets": [
        "F=P×A=300,000×0.02=6,000N이다."
      ],
      "formula": "F = 유효 압력 × 유효 면적",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-chassis-95"
      ],
      "linkedQuestionIds": [
        "auto-made-r06-s02-q09"
      ],
      "sourceLabel": "학습 문제은행 · concept-chassis-95",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-chassis-087",
      "subject": "chassis",
      "order": 87,
      "type": "formula",
      "category": "계산 공식",
      "title": "영점 오프셋 보정",
      "subtitle": "계산 공식",
      "bullets": [
        "정의된 모델에서는 5−2=3°이다.",
        "보정각=12−(-2)=14°이다."
      ],
      "formula": "보정각 = 표시각 − 영점 오프셋",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-chassis-99",
        "concept-chassis-198"
      ],
      "linkedQuestionIds": [
        "auto-made-r09-s02-q16"
      ],
      "sourceLabel": "학습 문제은행 · concept-chassis-99 외 1문항",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-chassis-088",
      "subject": "chassis",
      "order": 88,
      "type": "formula",
      "category": "계산 공식",
      "title": "제동력 불균형률",
      "subtitle": "계산 공식",
      "bullets": [
        "정의에 따라 (3,000−2,400)÷3,000×100=20%이다. 이는 가상 계산이며 실제 법정 검사 판정 기준을 뜻하지 않는다."
      ],
      "formula": "불균형률 = 두 제동력의 차이 ÷ 큰 제동력 × 100%",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "original-chassis-25"
      ],
      "linkedQuestionIds": [],
      "sourceLabel": "학습 문제은행 · original-chassis-25",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-electrical-001",
      "subject": "electrical",
      "order": 1,
      "type": "term",
      "category": "전기 기초·계측",
      "title": "퓨즈",
      "subtitle": "전기 기초·계측",
      "bullets": [
        "퓨즈는 정해진 전류 조건에서 회로를 차단해 과전류로 인한 손상을 줄여.",
        "퓨즈는 과전류 조건에서 가용체가 녹아 배선을 보호한다.",
        "퓨즈는 부하 및 배선 보호에 맞는 지정 정격을 사용한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-electrical-01",
        "concept-electrical-101",
        "concept-electrical-143"
      ],
      "linkedQuestionIds": [
        "original-electrical-01",
        "auto-made-r07-s03-q02"
      ],
      "sourceLabel": "학습 문제은행 · concept-electrical-01 외 2문항",
      "examHitCount": 16,
      "examSampleRefs": [
        "original-electrical-01",
        "auto-r01-s03-q06",
        "auto-r01-s03-q17",
        "auto-r01-s03-q19",
        "auto-r04-s03-q01",
        "auto-r04-s03-q03",
        "auto-r04-s03-q14",
        "auto-r04-s03-q15"
      ],
      "importance": 5
    },
    {
      "id": "auto-card-electrical-002",
      "subject": "electrical",
      "order": 2,
      "type": "term",
      "category": "전기 기초·계측",
      "title": "릴레이",
      "subtitle": "전기 기초·계측",
      "bullets": [
        "릴레이를 사용하면 제어 회로가 부하 전류를 직접 개폐하지 않아도 된다.",
        "코일의 자력으로 접점이 움직여 부하 회로를 제어한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-electrical-02",
        "concept-electrical-102"
      ],
      "linkedQuestionIds": [
        "original-electrical-02"
      ],
      "sourceLabel": "학습 문제은행 · concept-electrical-02 외 1문항",
      "examHitCount": 6,
      "examSampleRefs": [
        "original-electrical-02",
        "auto-r01-s03-q06",
        "auto-r04-s03-q14",
        "auto-r05-s03-q18",
        "auto-r06-s03-q10",
        "auto-r07-s03-q03"
      ],
      "importance": 3
    },
    {
      "id": "auto-card-electrical-003",
      "subject": "electrical",
      "order": 3,
      "type": "term",
      "category": "전기 기초·계측",
      "title": "다이오드",
      "subtitle": "전기 기초·계측",
      "bullets": [
        "정류 회로에서 정방향 전류를 주로 통과시키고 역방향 전류를 제한하는 소자는 다이오드이다.",
        "정류 다이오드는 항복 전까지 역방향 전류를 제한한다.",
        "다이오드는 순방향으로 전류를 통과시키고 역방향은 제한한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-electrical-05",
        "concept-electrical-105"
      ],
      "linkedQuestionIds": [
        "original-electrical-05"
      ],
      "sourceLabel": "학습 문제은행 · concept-electrical-05 외 1문항",
      "examHitCount": 2,
      "examSampleRefs": [
        "original-electrical-05",
        "auto-r08-s03-q02"
      ],
      "importance": 2
    },
    {
      "id": "auto-card-electrical-004",
      "subject": "electrical",
      "order": 4,
      "type": "formula",
      "category": "전기 기초·계측",
      "title": "저항과 옴의 법칙",
      "subtitle": "전기 기초·계측",
      "bullets": [
        "저항의 단위는 Ω이며 기본 관계는 R=V/I다.",
        "저항은 전압을 전류로 나눈 값이다."
      ],
      "formula": "R = V ÷ I",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-electrical-06",
        "concept-electrical-80"
      ],
      "linkedQuestionIds": [
        "original-electrical-06"
      ],
      "sourceLabel": "학습 문제은행 · concept-electrical-06 외 1문항",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-electrical-005",
      "subject": "electrical",
      "order": 5,
      "type": "term",
      "category": "전기 기초·계측",
      "title": "직렬 회로",
      "subtitle": "전기 기초·계측",
      "bullets": [
        "직렬 회로는 전류 경로가 하나이므로 모든 소자에 같은 전류가 흐른다.",
        "직렬 회로의 전체 전압은 개별 전압강하를 합한 값이다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-electrical-07",
        "concept-electrical-106"
      ],
      "linkedQuestionIds": [
        "original-electrical-07"
      ],
      "sourceLabel": "학습 문제은행 · concept-electrical-07 외 1문항",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-electrical-006",
      "subject": "electrical",
      "order": 6,
      "type": "term",
      "category": "전기 기초·계측",
      "title": "병렬 회로",
      "subtitle": "전기 기초·계측",
      "bullets": [
        "병렬 소자는 동일한 두 노드 사이에 연결되므로 양단 전위차가 같다.",
        "전류는 각 분기로 나뉘며 전체 전류는 분기 전류의 합이다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-electrical-08",
        "concept-electrical-107"
      ],
      "linkedQuestionIds": [
        "original-electrical-08"
      ],
      "sourceLabel": "학습 문제은행 · concept-electrical-08 외 1문항",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-electrical-007",
      "subject": "electrical",
      "order": 7,
      "type": "term",
      "category": "전기 기초·계측",
      "title": "전압계 연결",
      "subtitle": "전기 기초·계측",
      "bullets": [
        "직류 전압을 측정할 때 전압계는 측정 대상 두 지점에 병렬로 연결한다.",
        "전압계는 두 지점 간 전위차를 측정하기 위해 병렬로 연결한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-electrical-09"
      ],
      "linkedQuestionIds": [
        "original-electrical-09"
      ],
      "sourceLabel": "학습 문제은행 · concept-electrical-09",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-electrical-008",
      "subject": "electrical",
      "order": 8,
      "type": "term",
      "category": "전기 기초·계측",
      "title": "전류계 연결",
      "subtitle": "전기 기초·계측",
      "bullets": [
        "삽입형 전류계를 전류 측정 대상 회로에 연결하는 방식은 직렬이다.",
        "삽입형 전류계는 측정 경로에 직렬로 연결한다.",
        "전류계의 낮은 내부저항으로 큰 전류가 흐를 수 있다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-electrical-14",
        "concept-electrical-108"
      ],
      "linkedQuestionIds": [
        "original-electrical-10"
      ],
      "sourceLabel": "학습 문제은행 · concept-electrical-14 외 1문항",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-electrical-009",
      "subject": "electrical",
      "order": 9,
      "type": "term",
      "category": "전기 기초·계측",
      "title": "개방 회로·단선",
      "subtitle": "전기 기초·계측",
      "bullets": [
        "단일 회로에서 전선이 끊어져 전류의 폐경로가 사라진 상태는 개방이다.",
        "개방 회로는 전류가 흐를 수 있는 닫힌 경로가 없어진 상태다.",
        "회로가 끊어지면 저항이 매우 커질 수 있다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-electrical-10",
        "concept-electrical-48"
      ],
      "linkedQuestionIds": [
        "original-electrical-11",
        "auto-made-r04-s03-q04"
      ],
      "sourceLabel": "학습 문제은행 · concept-electrical-10 외 1문항",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-electrical-010",
      "subject": "electrical",
      "order": 10,
      "type": "term",
      "category": "전기 기초·계측",
      "title": "단락",
      "subtitle": "전기 기초·계측",
      "bullets": [
        "의도하지 않은 낮은 저항 경로로 큰 전류가 흐르는 회로 고장은 단락이다.",
        "단락은 과전류를 일으켜 보호장치가 작동할 수 있다.",
        "낮은 저항 경로의 과전류로 배선이 과열될 수 있다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-electrical-15",
        "concept-electrical-109"
      ],
      "linkedQuestionIds": [
        "original-electrical-12"
      ],
      "sourceLabel": "학습 문제은행 · concept-electrical-15 외 1문항",
      "examHitCount": 8,
      "examSampleRefs": [
        "original-electrical-09",
        "original-electrical-10",
        "original-electrical-12",
        "original-electrical-20",
        "auto-r04-s03-q01",
        "auto-r04-s03-q04",
        "auto-r04-s03-q20",
        "auto-r08-s03-q05"
      ],
      "importance": 4
    },
    {
      "id": "auto-card-electrical-011",
      "subject": "electrical",
      "order": 11,
      "type": "term",
      "category": "전기 기초·계측",
      "title": "차체 접지",
      "subtitle": "전기 기초·계측",
      "bullets": [
        "일반적인 차체 접지 회로에서 금속 차체는 공통 전류 귀환 경로로 사용된다.",
        "차체를 공통 귀환 경로로 활용하면 배선이 단순해질 수 있다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-electrical-16"
      ],
      "linkedQuestionIds": [
        "original-electrical-13"
      ],
      "sourceLabel": "학습 문제은행 · concept-electrical-16",
      "examHitCount": 1,
      "examSampleRefs": [
        "original-electrical-13"
      ],
      "importance": 2
    },
    {
      "id": "auto-card-electrical-012",
      "subject": "electrical",
      "order": 12,
      "type": "concept",
      "category": "전기 기초·계측",
      "title": "전압강하 진단",
      "subtitle": "전기 기초·계측",
      "bullets": [
        "같은 전류에서 저항이 커지면 V=IR에 따라 전압강하가 커진다.",
        "접촉 저항 증가는 부하가 작동하는 중 비정상적인 전압 강하를 유발할 수 있으므로 해당 구간을 점검한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-electrical-18",
        "original-electrical-17"
      ],
      "linkedQuestionIds": [
        "original-electrical-17"
      ],
      "sourceLabel": "학습 문제은행 · concept-electrical-18 외 1문항",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-electrical-013",
      "subject": "electrical",
      "order": 13,
      "type": "term",
      "category": "전기 기초·계측",
      "title": "트랜지스터",
      "subtitle": "전기 기초·계측",
      "bullets": [
        "전기 신호의 증폭 또는 스위칭에 활용되는 반도체 부품은 트랜지스터이다.",
        "트랜지스터는 전기 신호 제어에 활용된다.",
        "트랜지스터는 증폭과 전자 스위칭에 활용된다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-electrical-42",
        "concept-electrical-124"
      ],
      "linkedQuestionIds": [
        "auto-made-r03-s03-q05"
      ],
      "sourceLabel": "학습 문제은행 · concept-electrical-42 외 1문항",
      "examHitCount": 1,
      "examSampleRefs": [
        "auto-r03-s03-q05"
      ],
      "importance": 2
    },
    {
      "id": "auto-card-electrical-014",
      "subject": "electrical",
      "order": 14,
      "type": "term",
      "category": "전기 기초·계측",
      "title": "전력의 단위",
      "subtitle": "전기 기초·계측",
      "bullets": [
        "전력의 SI 유도단위는 와트(W)이다.",
        "전력은 에너지 전달률이며 W로 나타낸다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-electrical-66"
      ],
      "linkedQuestionIds": [
        "auto-made-r07-s03-q12"
      ],
      "sourceLabel": "학습 문제은행 · concept-electrical-66",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-electrical-015",
      "subject": "electrical",
      "order": 15,
      "type": "term",
      "category": "전기 기초·계측",
      "title": "전압 측정 극성",
      "subtitle": "전기 기초·계측",
      "bullets": [
        "직류전압 측정에서 실제 전압의 방향과 프로브 연결 방향이 반대이면 표시값에 음수 부호가 나타날 수 있다.",
        "전압계는 기준 단자와 측정 단자 사이의 전위차를 표시한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-electrical-54"
      ],
      "linkedQuestionIds": [
        "auto-made-r05-s03-q01"
      ],
      "sourceLabel": "학습 문제은행 · concept-electrical-54",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-electrical-016",
      "subject": "electrical",
      "order": 16,
      "type": "term",
      "category": "전기 기초·계측",
      "title": "ESD 보호와 절연 보호구",
      "subtitle": "전기 기초·계측",
      "bullets": [
        "ESD 보호구는 전자부품 보호 목적이며 고전압 절연 보호구를 대체하지 않는다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-electrical-84"
      ],
      "linkedQuestionIds": [
        "auto-made-r01-s03-q07"
      ],
      "sourceLabel": "학습 문제은행 · concept-electrical-84",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-electrical-017",
      "subject": "electrical",
      "order": 17,
      "type": "term",
      "category": "전기 기초·계측",
      "title": "퓨즈 반복 단선",
      "subtitle": "전기 기초·계측",
      "bullets": [
        "동일 정격 퓨즈가 반복 단선되면 단순 교환보다 회로의 과전류 원인을 찾아야 한다.",
        "반복 단선은 단락이나 과부하 등 전기적 이상을 시사한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-electrical-128"
      ],
      "linkedQuestionIds": [
        "auto-made-r04-s03-q01"
      ],
      "sourceLabel": "학습 문제은행 · concept-electrical-128",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-electrical-018",
      "subject": "electrical",
      "order": 18,
      "type": "term",
      "category": "전기 기초·계측",
      "title": "회로도와 하네스",
      "subtitle": "전기 기초·계측",
      "bullets": [
        "전기 회로도에서 확인할 수 있는 대표 정보는 부품 사이의 전기적 연결 관계다.",
        "회로도는 부품과 전원·접지의 연결 구조를 보여준다.",
        "센서 단품 검사와 신호 전달 경로는 별개이다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-electrical-121",
        "concept-electrical-129"
      ],
      "linkedQuestionIds": [
        "auto-made-r02-s03-q15",
        "auto-made-r04-s03-q03"
      ],
      "sourceLabel": "학습 문제은행 · concept-electrical-121 외 1문항",
      "examHitCount": 15,
      "examSampleRefs": [
        "auto-r01-s03-q02",
        "auto-r01-s03-q11",
        "auto-r01-s03-q15",
        "auto-r01-s03-q18",
        "auto-r02-s03-q02",
        "auto-r02-s03-q11",
        "auto-r02-s03-q15",
        "auto-r02-s03-q18"
      ],
      "importance": 5
    },
    {
      "id": "auto-card-electrical-019",
      "subject": "electrical",
      "order": 19,
      "type": "term",
      "category": "전원·발전·제어",
      "title": "12V 납축전지",
      "subtitle": "전원·발전·제어",
      "bullets": [
        "일반적인 12 V 납축전지는 직렬로 연결된 6개의 셀로 이루어진다.",
        "납축전지의 셀당 공칭전압은 약 2V이며 6개가 직렬 연결된다.",
        "공칭 2V 셀 여섯 개를 직렬 연결한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-electrical-03",
        "concept-electrical-13",
        "concept-electrical-103"
      ],
      "linkedQuestionIds": [
        "original-electrical-03"
      ],
      "sourceLabel": "학습 문제은행 · concept-electrical-03 외 2문항",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-electrical-020",
      "subject": "electrical",
      "order": 20,
      "type": "term",
      "category": "전원·발전·제어",
      "title": "알터네이터",
      "subtitle": "전원·발전·제어",
      "bullets": [
        "알터네이터는 엔진 운전 중 전기를 생산하여 부하와 배터리 충전을 지원한다.",
        "회전에 따른 자속 변화가 유도전압을 발생시킨다.",
        "기계적 회전에 따른 자속 변화를 전기에너지로 변환한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-electrical-04",
        "concept-electrical-30",
        "concept-electrical-104"
      ],
      "linkedQuestionIds": [
        "original-electrical-04",
        "auto-made-r01-s03-q09"
      ],
      "sourceLabel": "학습 문제은행 · concept-electrical-04 외 2문항",
      "examHitCount": 2,
      "examSampleRefs": [
        "original-electrical-04",
        "auto-r02-s03-q05"
      ],
      "importance": 2
    },
    {
      "id": "auto-card-electrical-021",
      "subject": "electrical",
      "order": 21,
      "type": "term",
      "category": "전원·발전·제어",
      "title": "정류 회로",
      "subtitle": "전원·발전·제어",
      "bullets": [
        "알터네이터 내부의 교류 발전 전력을 직류로 변환하는 과정은 정류이다.",
        "정류 다이오드로 발전기 교류를 직류로 변환한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-electrical-36"
      ],
      "linkedQuestionIds": [
        "auto-made-r02-s03-q05"
      ],
      "sourceLabel": "학습 문제은행 · concept-electrical-36",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-electrical-022",
      "subject": "electrical",
      "order": 22,
      "type": "term",
      "category": "전원·발전·제어",
      "title": "충전전압 리플",
      "subtitle": "전원·발전·제어",
      "bullets": [
        "알터네이터의 정류 다이오드 이상이 있을 때 충전전압에서 증가할 수 있는 교류 성분은 리플이다.",
        "정류 이상은 출력 전압 파형의 리플을 증가시킬 수 있다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-electrical-61"
      ],
      "linkedQuestionIds": [
        "auto-made-r06-s03-q13"
      ],
      "sourceLabel": "학습 문제은행 · concept-electrical-61",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-electrical-023",
      "subject": "electrical",
      "order": 23,
      "type": "term",
      "category": "전원·발전·제어",
      "title": "전압 조정기",
      "subtitle": "전원·발전·제어",
      "bullets": [
        "알터네이터에서 정류 후 출력전압을 제어하는 장치는 전압 조정기이다.",
        "발전·정류·전압제어가 충전계통을 구성한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-electrical-117"
      ],
      "linkedQuestionIds": [
        "auto-made-r02-s03-q05"
      ],
      "sourceLabel": "학습 문제은행 · concept-electrical-117",
      "examHitCount": 1,
      "examSampleRefs": [
        "auto-r02-s03-q05"
      ],
      "importance": 2
    },
    {
      "id": "auto-card-electrical-024",
      "subject": "electrical",
      "order": 24,
      "type": "term",
      "category": "전원·발전·제어",
      "title": "ECU·센서·액추에이터",
      "subtitle": "전원·발전·제어",
      "bullets": [
        "ECU의 출력 명령을 받아 물리적 작동을 수행하는 부품은 액추에이터이다.",
        "인젝터나 모터 같은 액추에이터는 제어 명령을 실행한다.",
        "센서는 운전 상태를 감지하고 제어장치는 해당 정보를 처리해 인젝터나 모터 같은 작동기를 제어한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-electrical-17",
        "original-electrical-15"
      ],
      "linkedQuestionIds": [
        "original-electrical-15"
      ],
      "sourceLabel": "학습 문제은행 · concept-electrical-17 외 1문항",
      "examHitCount": 12,
      "examSampleRefs": [
        "original-electrical-15",
        "auto-r01-s03-q03",
        "auto-r03-s03-q01",
        "auto-r03-s03-q10",
        "auto-r04-s03-q04",
        "auto-r04-s03-q06",
        "auto-r05-s03-q14",
        "auto-r05-s03-q18"
      ],
      "importance": 5
    },
    {
      "id": "auto-card-electrical-025",
      "subject": "electrical",
      "order": 25,
      "type": "term",
      "category": "전원·발전·제어",
      "title": "홀 센서",
      "subtitle": "전원·발전·제어",
      "bullets": [
        "홀 효과 센서는 자기장을 이용해 위치나 회전 속도 정보를 검출할 수 있다.",
        "홀 효과를 이용해 위치나 속도 등의 정보를 얻는다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-electrical-12",
        "concept-electrical-110"
      ],
      "linkedQuestionIds": [
        "original-electrical-16"
      ],
      "sourceLabel": "학습 문제은행 · concept-electrical-12 외 1문항",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-electrical-026",
      "subject": "electrical",
      "order": 26,
      "type": "term",
      "category": "전원·발전·제어",
      "title": "5V 공유 기준전원",
      "subtitle": "전원·발전·제어",
      "bullets": [
        "공통 기준전원을 공유하는 여러 센서의 코드가 함께 나타날 때 확인할 공통 공급전압의 대표값은 5V이다.",
        "5V 기준전원 이상은 복수 센서의 신호에 영향을 줄 수 있다.",
        "공통 기준전원 이상은 연결 센서 여러 개에 영향을 줄 수 있다.",
        "여러 센서가 같은 기준전원을 공유하면 공통 전원 계통의 이상으로 복수 코드가 나타날 수 있다. 회로도와 제조사 진단 절차에 따라 공유 5V 공급, 배선 및 연결된 부하를 확인하고 개별 센서의 결함을 구별한다. 정격보다 높은 전압을 직접 공급하면 안 된다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-electrical-19",
        "concept-electrical-111",
        "original-electrical-20"
      ],
      "linkedQuestionIds": [
        "original-electrical-20"
      ],
      "sourceLabel": "학습 문제은행 · concept-electrical-19 외 2문항",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-electrical-027",
      "subject": "electrical",
      "order": 27,
      "type": "term",
      "category": "전원·발전·제어",
      "title": "배터리 상태 점검",
      "subtitle": "전원·발전·제어",
      "bullets": [
        "배터리 단자전압을 비교할 때 측정 조건 중 하나는 충방전 직후가 아닌 휴지시간이다.",
        "배터리 전압은 휴지시간, 온도, 부하 조건에 따라 달라진다.",
        "부하 조건과 온도 등을 함께 고려한다.",
        "배터리의 전압만으로 모든 상태를 확정할 수 없으며 휴지시간, 온도, 종류, 부하 조건을 고려해야 한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-electrical-82",
        "concept-electrical-120",
        "original-electrical-18"
      ],
      "linkedQuestionIds": [
        "original-electrical-18",
        "auto-made-r02-s03-q14"
      ],
      "sourceLabel": "학습 문제은행 · concept-electrical-82 외 2문항",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-electrical-028",
      "subject": "electrical",
      "order": 28,
      "type": "term",
      "category": "전원·발전·제어",
      "title": "충전계통 단자전압 비교",
      "subtitle": "전원·발전·제어",
      "bullets": [
        "알터네이터 충전 상태를 평가할 때 비교하는 값은 엔진 정지 및 작동 중 배터리의 단자전압이다.",
        "차량 조건에 따른 충전 전압을 비교한다.",
        "발전기가 정상 작동하면 차량 조건에 따라 충전 중 단자 전압이 달라지므로 정지·작동 전압을 비교해 진단할 수 있다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-electrical-83",
        "original-electrical-19"
      ],
      "linkedQuestionIds": [
        "original-electrical-19"
      ],
      "sourceLabel": "학습 문제은행 · concept-electrical-83 외 1문항",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-electrical-029",
      "subject": "electrical",
      "order": 29,
      "type": "term",
      "category": "전원·발전·제어",
      "title": "DC 모터와 극성",
      "subtitle": "전원·발전·제어",
      "bullets": [
        "일반 브러시형 직류모터의 회전 방향은 공급 전압의 극성을 반대로 하여 바꿀 수 있다.",
        "전류의 방향을 바꾸면 회전 방향이 달라질 수 있다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-electrical-32"
      ],
      "linkedQuestionIds": [
        "auto-made-r01-s03-q18"
      ],
      "sourceLabel": "학습 문제은행 · concept-electrical-32",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-electrical-030",
      "subject": "electrical",
      "order": 30,
      "type": "term",
      "category": "전원·발전·제어",
      "title": "CPU",
      "subtitle": "전원·발전·제어",
      "bullets": [
        "ECU 내부에서 프로그램의 연산 및 처리 명령을 실행하는 핵심 부품은 CPU이다.",
        "제어기는 연산부와 메모리 및 입출력 회로를 포함한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-electrical-149"
      ],
      "linkedQuestionIds": [
        "auto-made-r09-s03-q20"
      ],
      "sourceLabel": "학습 문제은행 · concept-electrical-149",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-electrical-031",
      "subject": "electrical",
      "order": 31,
      "type": "concept",
      "category": "차량 통신·진단",
      "title": "고속 CAN 차동 신호",
      "subtitle": "차량 통신·진단",
      "bullets": [
        "고속 CAN 통신의 CAN-H와 CAN-L은 내잡음성을 높이는 차동 신호 방식에 사용된다.",
        "차동 신호는 두 선 사이의 전위차를 이용해 통신한다.",
        "우성 상태와 열성 상태는 차동전압으로 구별된다.",
        "차동 신호는 두 선의 전위차를 이용해 공통 잡음의 영향을 줄인다.",
        "차동전압 크기로 우성·열성 상태를 구별한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-electrical-11",
        "concept-electrical-46",
        "concept-electrical-81",
        "concept-electrical-126"
      ],
      "linkedQuestionIds": [
        "original-electrical-14",
        "auto-made-r03-s03-q14"
      ],
      "sourceLabel": "학습 문제은행 · concept-electrical-11 외 3문항",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-electrical-032",
      "subject": "electrical",
      "order": 32,
      "type": "concept",
      "category": "차량 통신·진단",
      "title": "CAN 버스 중재",
      "subtitle": "차량 통신·진단",
      "bullets": [
        "동일 표준 CAN 데이터 프레임에서 0x080과 0x100 중 중재 우선순위가 높은 ID는 0x080이다.",
        "표준 프레임끼리 중재할 때 낮은 ID가 우선한다.",
        "식별자에 따른 비파괴적 중재를 사용한다.",
        "동일 표준 데이터 프레임에서는 낮은 ID가 우선한다. 0x080이 가장 작고 우성 0이 열성 1보다 우선한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-electrical-25",
        "concept-electrical-112",
        "original-electrical-26"
      ],
      "linkedQuestionIds": [
        "original-electrical-26",
        "auto-made-r01-s03-q01"
      ],
      "sourceLabel": "학습 문제은행 · concept-electrical-25 외 2문항",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-electrical-033",
      "subject": "electrical",
      "order": 33,
      "type": "concept",
      "category": "차량 통신·진단",
      "title": "CAN 종단저항",
      "subtitle": "차량 통신·진단",
      "bullets": [
        "정상적으로 두 개가 병렬이면 60Ω이며 하나만 남으면 120Ω이다.",
        "동일 저항 두 개의 병렬 합성저항은 각각의 절반이다.",
        "종단은 전송선의 반사 영향을 줄인다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-electrical-26",
        "concept-electrical-96",
        "concept-electrical-113"
      ],
      "linkedQuestionIds": [
        "original-electrical-27",
        "auto-made-r07-s03-q01",
        "auto-made-r01-s03-q03"
      ],
      "sourceLabel": "학습 문제은행 · concept-electrical-26 외 2문항",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-electrical-034",
      "subject": "electrical",
      "order": 34,
      "type": "concept",
      "category": "차량 통신·진단",
      "title": "100BASE-T1",
      "subtitle": "차량 통신·진단",
      "bullets": [
        "차량용 100BASE-T1 이더넷에서 사용하는 신호 배선은 단일 트위스트페어이다.",
        "100BASE-T1은 단일 꼬임선 쌍을 사용한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-electrical-28"
      ],
      "linkedQuestionIds": [
        "auto-made-r01-s03-q02"
      ],
      "sourceLabel": "학습 문제은행 · concept-electrical-28",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-electrical-035",
      "subject": "electrical",
      "order": 35,
      "type": "concept",
      "category": "차량 통신·진단",
      "title": "ACK",
      "subtitle": "차량 통신·진단",
      "bullets": [
        "CAN 프레임에서 정상 수신 노드의 수신 확인에 해당하는 필드는 ACK이다.",
        "ACK는 정상 수신 노드의 프레임 수신 확인을 위한 것이다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-electrical-29"
      ],
      "linkedQuestionIds": [
        "auto-made-r01-s03-q04"
      ],
      "sourceLabel": "학습 문제은행 · concept-electrical-29",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-electrical-036",
      "subject": "electrical",
      "order": 36,
      "type": "concept",
      "category": "차량 통신·진단",
      "title": "DLC",
      "subtitle": "차량 통신·진단",
      "bullets": [
        "진단기를 차량 통신망에 접속하기 위한 진단용 단자는 DLC이다.",
        "DLC는 데이터 링크 커넥터다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-electrical-33"
      ],
      "linkedQuestionIds": [
        "auto-made-r02-s03-q01"
      ],
      "sourceLabel": "학습 문제은행 · concept-electrical-33",
      "examHitCount": 1,
      "examSampleRefs": [
        "auto-r02-s03-q01"
      ],
      "importance": 2
    },
    {
      "id": "auto-card-electrical-037",
      "subject": "electrical",
      "order": 37,
      "type": "concept",
      "category": "차량 통신·진단",
      "title": "물리 계층",
      "subtitle": "차량 통신·진단",
      "bullets": [
        "통신 시스템에서 비트 신호와 전기적 연결 특성을 정의하는 계층은 물리 계층이다.",
        "물리 계층은 전기적 신호 및 연결 방식에 관한 것이다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-electrical-34"
      ],
      "linkedQuestionIds": [
        "auto-made-r02-s03-q02"
      ],
      "sourceLabel": "학습 문제은행 · concept-electrical-34",
      "examHitCount": 1,
      "examSampleRefs": [
        "auto-r02-s03-q02"
      ],
      "importance": 2
    },
    {
      "id": "auto-card-electrical-038",
      "subject": "electrical",
      "order": 38,
      "type": "concept",
      "category": "차량 통신·진단",
      "title": "CRC",
      "subtitle": "차량 통신·진단",
      "bullets": [
        "이더넷 프레임의 CRC가 담당하는 기능은 오류 검출이다.",
        "CRC는 수신 데이터 오류를 검출하는 데 사용된다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-electrical-35"
      ],
      "linkedQuestionIds": [
        "auto-made-r02-s03-q04"
      ],
      "sourceLabel": "학습 문제은행 · concept-electrical-35",
      "examHitCount": 1,
      "examSampleRefs": [
        "auto-r08-s03-q20"
      ],
      "importance": 2
    },
    {
      "id": "auto-card-electrical-039",
      "subject": "electrical",
      "order": 39,
      "type": "concept",
      "category": "차량 통신·진단",
      "title": "MAC 주소",
      "subtitle": "차량 통신·진단",
      "bullets": [
        "이더넷 스위치가 목적지 포트를 판단하는 대표적인 주소는 MAC 주소이다.",
        "스위치는 MAC 주소를 기반으로 프레임을 전달한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-electrical-40"
      ],
      "linkedQuestionIds": [
        "auto-made-r03-s03-q02"
      ],
      "sourceLabel": "학습 문제은행 · concept-electrical-40",
      "examHitCount": 1,
      "examSampleRefs": [
        "auto-r03-s03-q02"
      ],
      "importance": 2
    },
    {
      "id": "auto-card-electrical-040",
      "subject": "electrical",
      "order": 40,
      "type": "concept",
      "category": "차량 통신·진단",
      "title": "패킷 교환",
      "subtitle": "차량 통신·진단",
      "bullets": [
        "데이터를 작은 단위로 나눠 통신 자원을 유연하게 공유하는 방식은 패킷 교환이다.",
        "패킷 교환은 네트워크 자원 공유를 가능하게 한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-electrical-41"
      ],
      "linkedQuestionIds": [
        "auto-made-r03-s03-q04"
      ],
      "sourceLabel": "학습 문제은행 · concept-electrical-41",
      "examHitCount": 1,
      "examSampleRefs": [
        "auto-r03-s03-q04"
      ],
      "importance": 2
    },
    {
      "id": "auto-card-electrical-041",
      "subject": "electrical",
      "order": 41,
      "type": "concept",
      "category": "차량 통신·진단",
      "title": "게이트웨이",
      "subtitle": "차량 통신·진단",
      "bullets": [
        "차량 내 서로 다른 통신 네트워크 사이의 정보 전달을 담당하는 제어기는 게이트웨이이다.",
        "게이트웨이는 복수 네트워크를 연결한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-electrical-51"
      ],
      "linkedQuestionIds": [
        "auto-made-r04-s03-q13"
      ],
      "sourceLabel": "학습 문제은행 · concept-electrical-51",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-electrical-042",
      "subject": "electrical",
      "order": 42,
      "type": "concept",
      "category": "차량 통신·진단",
      "title": "LIN",
      "subtitle": "차량 통신·진단",
      "bullets": [
        "코디네이터 중심으로 작동하는 비교적 저속의 차량용 통신 방식은 LIN이다.",
        "LIN은 주로 단순한 차량 편의장치 통신에 쓰인다.",
        "LIN은 코디네이터가 통신을 주도하는 구조를 사용한다.",
        "전원·접지·배선과 노드 응답을 함께 확인한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-electrical-69",
        "concept-electrical-115",
        "concept-electrical-86"
      ],
      "linkedQuestionIds": [
        "auto-made-r08-s03-q01",
        "auto-made-r01-s03-q14"
      ],
      "sourceLabel": "학습 문제은행 · concept-electrical-69 외 2문항",
      "examHitCount": 4,
      "examSampleRefs": [
        "auto-r01-s03-q01",
        "auto-r02-s03-q01",
        "auto-r08-s03-q01",
        "auto-r09-s03-q15"
      ],
      "importance": 3
    },
    {
      "id": "auto-card-electrical-043",
      "subject": "electrical",
      "order": 43,
      "type": "concept",
      "category": "차량 통신·진단",
      "title": "MOST",
      "subtitle": "차량 통신·진단",
      "bullets": [
        "인포테인먼트용 차량 네트워크의 대표적인 명칭은 MOST이다.",
        "MOST는 멀티미디어 정보 전송에 활용되는 네트워크다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-electrical-75"
      ],
      "linkedQuestionIds": [
        "auto-made-r09-s03-q01"
      ],
      "sourceLabel": "학습 문제은행 · concept-electrical-75",
      "examHitCount": 2,
      "examSampleRefs": [
        "auto-r01-s03-q01",
        "auto-r09-s03-q01"
      ],
      "importance": 2
    },
    {
      "id": "auto-card-electrical-044",
      "subject": "electrical",
      "order": 44,
      "type": "concept",
      "category": "차량 통신·진단",
      "title": "CAN 프레임과 IP 주소",
      "subtitle": "차량 통신·진단",
      "bullets": [
        "기본 CAN 데이터 프레임에는 일반 인터넷 프로토콜의 IP 주소 필드가 없다.",
        "CAN 프레임과 IP 패킷의 구조는 다르다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-electrical-98"
      ],
      "linkedQuestionIds": [
        "auto-made-r08-s03-q20"
      ],
      "sourceLabel": "학습 문제은행 · concept-electrical-98",
      "examHitCount": 2,
      "examSampleRefs": [
        "auto-r03-s03-q02",
        "auto-r08-s03-q20"
      ],
      "importance": 2
    },
    {
      "id": "auto-card-electrical-045",
      "subject": "electrical",
      "order": 45,
      "type": "concept",
      "category": "차량 통신·진단",
      "title": "FlexRay",
      "subtitle": "차량 통신·진단",
      "bullets": [
        "시간 결정형 차량 통신 방식으로 채널당 최대 약 10Mbps를 제공하는 것은 FlexRay이다.",
        "FlexRay는 시간 결정형 통신을 지원한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-electrical-99"
      ],
      "linkedQuestionIds": [
        "auto-made-r09-s03-q11"
      ],
      "sourceLabel": "학습 문제은행 · concept-electrical-99",
      "examHitCount": 1,
      "examSampleRefs": [
        "auto-r09-s03-q11"
      ],
      "importance": 2
    },
    {
      "id": "auto-card-electrical-046",
      "subject": "electrical",
      "order": 46,
      "type": "concept",
      "category": "차량 통신·진단",
      "title": "복수 ECU 통신 불량",
      "subtitle": "차량 통신·진단",
      "bullets": [
        "여러 ECU와 동시에 CAN 통신이 불가능하면 개별 ECU 외에 공통 통신망 전원·배선을 먼저 확인한다.",
        "공통 네트워크 및 전원·접지 문제를 구분한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-electrical-116"
      ],
      "linkedQuestionIds": [
        "auto-made-r02-s03-q03"
      ],
      "sourceLabel": "학습 문제은행 · concept-electrical-116",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-electrical-047",
      "subject": "electrical",
      "order": 47,
      "type": "concept",
      "category": "차량 통신·진단",
      "title": "이더넷 허브와 스위치",
      "subtitle": "차량 통신·진단",
      "bullets": [
        "이더넷 스위치와 달리 입력 신호를 여러 포트로 반복 전달하는 장비는 허브이다.",
        "허브는 신호 반복 기능을 수행한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-electrical-123"
      ],
      "linkedQuestionIds": [
        "auto-made-r03-s03-q02"
      ],
      "sourceLabel": "학습 문제은행 · concept-electrical-123",
      "examHitCount": 26,
      "examSampleRefs": [
        "auto-r01-s03-q17",
        "auto-r01-s03-q18",
        "auto-r01-s03-q19",
        "auto-r01-s03-q20",
        "auto-r02-s03-q15",
        "auto-r02-s03-q20",
        "auto-r03-s03-q02",
        "auto-r03-s03-q06"
      ],
      "importance": 5
    },
    {
      "id": "auto-card-electrical-048",
      "subject": "electrical",
      "order": 48,
      "type": "concept",
      "category": "차량 통신·진단",
      "title": "OBD DTC 진단 원칙",
      "subtitle": "차량 통신·진단",
      "bullets": [
        "OBD 진단기가 제공하는 고장 정보는 정비 부품 확정이 아니라 원인 진단의 단서이다.",
        "실측 데이터와 회로 점검 등 추가 확인이 필요하다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-electrical-114"
      ],
      "linkedQuestionIds": [
        "auto-made-r01-s03-q08"
      ],
      "sourceLabel": "학습 문제은행 · concept-electrical-114",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-electrical-049",
      "subject": "electrical",
      "order": 49,
      "type": "term",
      "category": "냉난방·공조",
      "title": "블로워 레귤레이터",
      "subtitle": "냉난방·공조",
      "bullets": [
        "일부 송풍기 회로에서 최대 풍량만 작동할 때 우선 확인할 풍량 제어 부품은 블로워 레귤레이터이다.",
        "풍량 제어회로와 레귤레이터 고장이 원인일 수 있다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-electrical-37"
      ],
      "linkedQuestionIds": [
        "auto-made-r02-s03-q08"
      ],
      "sourceLabel": "학습 문제은행 · concept-electrical-37",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-electrical-050",
      "subject": "electrical",
      "order": 50,
      "type": "term",
      "category": "냉난방·공조",
      "title": "히터 코어",
      "subtitle": "냉난방·공조",
      "bullets": [
        "엔진 냉각수의 열을 실내 공기에 전달하는 공조 부품은 히터 코어이다.",
        "온수식 난방은 냉각수와 공기의 열교환을 이용한다.",
        "히터 코어가 냉각수의 열을 실내로 전달한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-electrical-38",
        "concept-electrical-122"
      ],
      "linkedQuestionIds": [
        "auto-made-r02-s03-q13",
        "auto-made-r02-s03-q16"
      ],
      "sourceLabel": "학습 문제은행 · concept-electrical-38 외 1문항",
      "examHitCount": 8,
      "examSampleRefs": [
        "auto-r01-s03-q15",
        "auto-r01-s03-q20",
        "auto-r02-s03-q16",
        "auto-r02-s03-q19",
        "auto-r05-s03-q08",
        "auto-r05-s03-q10",
        "auto-r05-s03-q11",
        "auto-r05-s03-q12"
      ],
      "importance": 4
    },
    {
      "id": "auto-card-electrical-051",
      "subject": "electrical",
      "order": 51,
      "type": "term",
      "category": "냉난방·공조",
      "title": "실내온도 센서",
      "subtitle": "냉난방·공조",
      "bullets": [
        "자동 공조장치가 목표 실내온도를 유지하기 위해 이용하는 입력은 실내온도 센서이다.",
        "실내온도 검출값은 공조의 온도 제어에 활용된다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-electrical-39"
      ],
      "linkedQuestionIds": [
        "auto-made-r02-s03-q19"
      ],
      "sourceLabel": "학습 문제은행 · concept-electrical-39",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-electrical-052",
      "subject": "electrical",
      "order": 52,
      "type": "term",
      "category": "냉난방·공조",
      "title": "압력 릴리프 밸브",
      "subtitle": "냉난방·공조",
      "bullets": [
        "압력 릴리프 밸브는 규정된 과압에서 안전 방출 기능을 수행한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-electrical-45"
      ],
      "linkedQuestionIds": [
        "auto-made-r03-s03-q13"
      ],
      "sourceLabel": "학습 문제은행 · concept-electrical-45",
      "examHitCount": 1,
      "examSampleRefs": [
        "auto-r03-s03-q13"
      ],
      "importance": 2
    },
    {
      "id": "auto-card-electrical-053",
      "subject": "electrical",
      "order": 53,
      "type": "term",
      "category": "냉난방·공조",
      "title": "증발기 드레인 호스",
      "subtitle": "냉난방·공조",
      "bullets": [
        "증발기에 맺힌 응축수를 차량 외부로 배출하는 부품은 드레인 호스이다.",
        "응축수 배수 불량은 습기나 악취의 원인이 될 수 있다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-electrical-49"
      ],
      "linkedQuestionIds": [
        "auto-made-r04-s03-q08"
      ],
      "sourceLabel": "학습 문제은행 · concept-electrical-49",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-electrical-054",
      "subject": "electrical",
      "order": 54,
      "type": "term",
      "category": "냉난방·공조",
      "title": "응축기",
      "subtitle": "냉난방·공조",
      "bullets": [
        "응축기 냉각팬이 작동하지 않으면 냉매의 응축 효율이 저하될 수 있다.",
        "응축기는 외부로 열을 방출하므로 냉각풍이 중요하다.",
        "응축기는 냉매의 열을 외부로 방출한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-electrical-50",
        "concept-electrical-76"
      ],
      "linkedQuestionIds": [
        "auto-made-r04-s03-q11",
        "auto-made-r09-s03-q07"
      ],
      "sourceLabel": "학습 문제은행 · concept-electrical-50 외 1문항",
      "examHitCount": 2,
      "examSampleRefs": [
        "auto-r04-s03-q11",
        "auto-r06-s03-q11"
      ],
      "importance": 2
    },
    {
      "id": "auto-card-electrical-055",
      "subject": "electrical",
      "order": 55,
      "type": "term",
      "category": "냉난방·공조",
      "title": "과냉각",
      "subtitle": "냉난방·공조",
      "bullets": [
        "액체 냉매의 온도가 해당 압력에서의 포화온도보다 낮은 상태는 과냉각이다.",
        "과냉각도는 포화온도와 액체온도의 차이다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-electrical-55"
      ],
      "linkedQuestionIds": [
        "auto-made-r05-s03-q09"
      ],
      "sourceLabel": "학습 문제은행 · concept-electrical-55",
      "examHitCount": 1,
      "examSampleRefs": [
        "auto-r08-s03-q18"
      ],
      "importance": 2
    },
    {
      "id": "auto-card-electrical-056",
      "subject": "electrical",
      "order": 56,
      "type": "term",
      "category": "냉난방·공조",
      "title": "혼합도어 액추에이터",
      "subtitle": "냉난방·공조",
      "bullets": [
        "열원은 정상인데 실내 토출온도가 조절되지 않을 때 확인할 공기 혼합 제어 부품은 혼합도어 액추에이터이다.",
        "혼합도어의 명령과 실제 위치를 비교한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-electrical-56"
      ],
      "linkedQuestionIds": [
        "auto-made-r05-s03-q11"
      ],
      "sourceLabel": "학습 문제은행 · concept-electrical-56",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-electrical-057",
      "subject": "electrical",
      "order": 57,
      "type": "term",
      "category": "냉난방·공조",
      "title": "증발기와 결빙 방지",
      "subtitle": "냉난방·공조",
      "bullets": [
        "증발기 결빙을 억제하는 공조 제어에 중요한 입력은 증발기 온도이다.",
        "증발기 온도 정보를 활용해 냉방을 제어할 수 있다.",
        "증발기에서 냉매가 열을 흡수한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-electrical-60",
        "concept-electrical-63"
      ],
      "linkedQuestionIds": [
        "auto-made-r06-s03-q09",
        "auto-made-r07-s03-q08"
      ],
      "sourceLabel": "학습 문제은행 · concept-electrical-60 외 1문항",
      "examHitCount": 3,
      "examSampleRefs": [
        "auto-r06-s03-q09",
        "auto-r07-s03-q08",
        "auto-r08-s03-q17"
      ],
      "importance": 3
    },
    {
      "id": "auto-card-electrical-058",
      "subject": "electrical",
      "order": 58,
      "type": "term",
      "category": "냉난방·공조",
      "title": "블로워 모터",
      "subtitle": "냉난방·공조",
      "bullets": [
        "공조장치에서 실내 송풍량을 만드는 구동 부품은 블로워 모터이다.",
        "블로워 모터는 실내 공기 순환을 담당한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-electrical-64"
      ],
      "linkedQuestionIds": [
        "auto-made-r07-s03-q09"
      ],
      "sourceLabel": "학습 문제은행 · concept-electrical-64",
      "examHitCount": 5,
      "examSampleRefs": [
        "auto-r02-s03-q16",
        "auto-r05-s03-q08",
        "auto-r06-s03-q08",
        "auto-r06-s03-q10",
        "auto-r07-s03-q09"
      ],
      "importance": 3
    },
    {
      "id": "auto-card-electrical-059",
      "subject": "electrical",
      "order": 59,
      "type": "term",
      "category": "냉난방·공조",
      "title": "팽창밸브",
      "subtitle": "냉난방·공조",
      "bullets": [
        "냉매를 감압하고 증발기로 공급되는 양을 조절하는 부품은 팽창밸브이다.",
        "팽창밸브는 냉매 감압과 공급량 제어를 수행한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-electrical-68"
      ],
      "linkedQuestionIds": [
        "auto-made-r07-s03-q18"
      ],
      "sourceLabel": "학습 문제은행 · concept-electrical-68",
      "examHitCount": 9,
      "examSampleRefs": [
        "auto-r03-s03-q13",
        "auto-r04-s03-q09",
        "auto-r04-s03-q10",
        "auto-r04-s03-q11",
        "auto-r04-s03-q12",
        "auto-r06-s03-q12",
        "auto-r07-s03-q18",
        "auto-r08-s03-q17"
      ],
      "importance": 4
    },
    {
      "id": "auto-card-electrical-060",
      "subject": "electrical",
      "order": 60,
      "type": "term",
      "category": "냉난방·공조",
      "title": "컴프레서 전자클러치",
      "subtitle": "냉난방·공조",
      "bullets": [
        "전자클러치가 있는 냉방 압축기에서 엔진 동력을 연결하거나 차단하는 부품은 전자클러치이다.",
        "전자클러치는 압축기 구동 여부를 제어한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-electrical-70"
      ],
      "linkedQuestionIds": [
        "auto-made-r08-s03-q08"
      ],
      "sourceLabel": "학습 문제은행 · concept-electrical-70",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-electrical-061",
      "subject": "electrical",
      "order": 61,
      "type": "term",
      "category": "냉난방·공조",
      "title": "컴프레서 오일",
      "subtitle": "냉난방·공조",
      "bullets": [
        "냉방 컴프레서 오일의 주요 역할 중 하나는 압축기 내부의 윤활이다.",
        "압축기 오일은 마찰면의 윤활과 열관리를 돕는다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-electrical-74"
      ],
      "linkedQuestionIds": [
        "auto-made-r08-s03-q18"
      ],
      "sourceLabel": "학습 문제은행 · concept-electrical-74",
      "examHitCount": 2,
      "examSampleRefs": [
        "auto-r06-s03-q12",
        "auto-r08-s03-q18"
      ],
      "importance": 2
    },
    {
      "id": "auto-card-electrical-062",
      "subject": "electrical",
      "order": 62,
      "type": "term",
      "category": "냉난방·공조",
      "title": "리시버드라이어",
      "subtitle": "냉난방·공조",
      "bullets": [
        "액상 냉매의 수분과 이물을 관리하는 부품은 리시버드라이어이다.",
        "건조제와 필터로 냉매의 수분 및 이물을 관리한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-electrical-79"
      ],
      "linkedQuestionIds": [
        "auto-made-r09-s03-q17"
      ],
      "sourceLabel": "학습 문제은행 · concept-electrical-79",
      "examHitCount": 5,
      "examSampleRefs": [
        "auto-r04-s03-q08",
        "auto-r04-s03-q12",
        "auto-r05-s03-q09",
        "auto-r09-s03-q07",
        "auto-r09-s03-q17"
      ],
      "importance": 3
    },
    {
      "id": "auto-card-electrical-063",
      "subject": "electrical",
      "order": 63,
      "type": "term",
      "category": "냉난방·공조",
      "title": "형광제·자외선 누설 검사",
      "subtitle": "냉난방·공조",
      "bullets": [
        "형광제를 이용한 냉매 누설 확인에 사용하는 광원은 자외선이다.",
        "형광제는 적절한 UV 광원으로 관찰한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-electrical-31"
      ],
      "linkedQuestionIds": [
        "auto-made-r01-s03-q13"
      ],
      "sourceLabel": "학습 문제은행 · concept-electrical-31",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-electrical-064",
      "subject": "electrical",
      "order": 64,
      "type": "term",
      "category": "냉난방·공조",
      "title": "히터 냉각수 순환·누설",
      "subtitle": "냉난방·공조",
      "bullets": [
        "온수식 히터에서 입구와 출구의 비정상적 온도차는 냉각수 유량 이상을 판단하는 단서다.",
        "히터 코어의 냉각수 흐름 상태를 함께 확인한다.",
        "히터 코어 내부 냉각수가 실내 쪽으로 새어 습기 등이 발생할 수 있다.",
        "에어록은 냉각수 순환을 방해할 수 있다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-electrical-87",
        "concept-electrical-93",
        "concept-electrical-133"
      ],
      "linkedQuestionIds": [
        "auto-made-r01-s03-q20",
        "auto-made-r05-s03-q10",
        "auto-made-r05-s03-q08"
      ],
      "sourceLabel": "학습 문제은행 · concept-electrical-87 외 2문항",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-electrical-065",
      "subject": "electrical",
      "order": 65,
      "type": "term",
      "category": "냉난방·공조",
      "title": "냉매 정량 충전",
      "subtitle": "냉난방·공조",
      "bullets": [
        "냉매 누설을 수리한 후 규정된 냉매 종류와 질량으로 충전하는 방식은 정량 충전이다.",
        "제조사 지정 냉매와 규정량을 적용한다.",
        "냉매량은 지정 정량 충전과 누설 진단을 통해 평가한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-electrical-94",
        "concept-electrical-139"
      ],
      "linkedQuestionIds": [
        "auto-made-r06-s03-q12",
        "auto-made-r06-s03-q11"
      ],
      "sourceLabel": "학습 문제은행 · concept-electrical-94 외 1문항",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-electrical-066",
      "subject": "electrical",
      "order": 66,
      "type": "term",
      "category": "냉난방·공조",
      "title": "R-1234yf와 R-134a",
      "subtitle": "냉난방·공조",
      "bullets": [
        "R-1234yf는 낮은 GWP의 냉매이며 안전 분류와 호환 조건을 확인해야 한다.",
        "A2L은 낮은 독성과 약가연성 계열의 안전 분류다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-electrical-97",
        "concept-electrical-148"
      ],
      "linkedQuestionIds": [
        "auto-made-r08-s03-q07"
      ],
      "sourceLabel": "학습 문제은행 · concept-electrical-97 외 1문항",
      "examHitCount": 2,
      "examSampleRefs": [
        "auto-r08-s03-q07",
        "auto-r09-s03-q18"
      ],
      "importance": 2
    },
    {
      "id": "auto-card-electrical-067",
      "subject": "electrical",
      "order": 67,
      "type": "concept",
      "category": "냉난방·공조",
      "title": "냉매 압력 진단",
      "subtitle": "냉난방·공조",
      "bullets": [
        "에어컨 냉매 압력은 고압과 저압 외에도 온도 등 운전 조건과 함께 판단한다.",
        "압력만으로 고장 부품을 단정할 수 없다.",
        "팽창장치나 유로 제한 등의 원인을 조건과 함께 확인한다.",
        "냉매 압력·센서 신호와 제어 명령을 비교한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-electrical-130",
        "concept-electrical-131",
        "concept-electrical-138"
      ],
      "linkedQuestionIds": [
        "auto-made-r04-s03-q09",
        "auto-made-r04-s03-q12",
        "auto-made-r06-s03-q08"
      ],
      "sourceLabel": "학습 문제은행 · concept-electrical-130 외 2문항",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-electrical-068",
      "subject": "electrical",
      "order": 68,
      "type": "term",
      "category": "편의·안전·ADAS",
      "title": "TCS",
      "subtitle": "편의·안전·ADAS",
      "bullets": [
        "가속 시 구동바퀴의 헛돎을 억제하는 제어 시스템은 TCS이다.",
        "TCS는 구동토크 및 제동력을 제어해 구동 슬립을 줄인다.",
        "구동 출력과 제동력 조절로 헛돎을 줄인다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-electrical-43",
        "concept-electrical-125"
      ],
      "linkedQuestionIds": [
        "auto-made-r03-s03-q09"
      ],
      "sourceLabel": "학습 문제은행 · concept-electrical-43 외 1문항",
      "examHitCount": 3,
      "examSampleRefs": [
        "auto-r03-s03-q09",
        "auto-r06-s03-q02",
        "auto-r09-s03-q06"
      ],
      "importance": 3
    },
    {
      "id": "auto-card-electrical-069",
      "subject": "electrical",
      "order": 69,
      "type": "term",
      "category": "편의·안전·ADAS",
      "title": "LDW",
      "subtitle": "편의·안전·ADAS",
      "bullets": [
        "카메라로 차선을 감지하여 의도하지 않은 이탈을 경고하는 장치는 LDW이다.",
        "LDW는 차선 이탈 경고 시스템이다.",
        "전방 카메라 시야와 보정 상태를 확인한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-electrical-44",
        "concept-electrical-145"
      ],
      "linkedQuestionIds": [
        "auto-made-r03-s03-q11",
        "auto-made-r07-s03-q15"
      ],
      "sourceLabel": "학습 문제은행 · concept-electrical-44 외 1문항",
      "examHitCount": 1,
      "examSampleRefs": [
        "auto-r03-s03-q11"
      ],
      "importance": 2
    },
    {
      "id": "auto-card-electrical-070",
      "subject": "electrical",
      "order": 70,
      "type": "term",
      "category": "편의·안전·ADAS",
      "title": "크루즈 컨트롤",
      "subtitle": "편의·안전·ADAS",
      "bullets": [
        "기본 정속주행 제어가 설정 속도를 유지하는 데 이용하는 정보는 차속이다.",
        "차속을 설정 속도와 비교해 구동을 조절한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-electrical-47"
      ],
      "linkedQuestionIds": [
        "auto-made-r03-s03-q19"
      ],
      "sourceLabel": "학습 문제은행 · concept-electrical-47",
      "examHitCount": 3,
      "examSampleRefs": [
        "auto-r03-s03-q19",
        "auto-r07-s03-q10",
        "auto-r08-s03-q11"
      ],
      "importance": 3
    },
    {
      "id": "auto-card-electrical-071",
      "subject": "electrical",
      "order": 71,
      "type": "term",
      "category": "편의·안전·ADAS",
      "title": "파워윈도우",
      "subtitle": "편의·안전·ADAS",
      "bullets": [
        "파워윈도우 모터는 회전하지만 유리가 움직이지 않을 때 확인할 기계적 전달 장치는 윈도우 레귤레이터이다.",
        "레귤레이터는 모터의 운동을 유리의 상하 이동으로 전달한다.",
        "차종에 따라 유리 위치 학습 또는 초기화가 필요하다.",
        "레귤레이터 및 가이드의 마찰이나 걸림을 확인한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-electrical-52",
        "concept-electrical-58",
        "concept-electrical-92"
      ],
      "linkedQuestionIds": [
        "auto-made-r04-s03-q14",
        "auto-made-r05-s03-q16",
        "auto-made-r04-s03-q18"
      ],
      "sourceLabel": "학습 문제은행 · concept-electrical-52 외 2문항",
      "examHitCount": 9,
      "examSampleRefs": [
        "auto-r01-s03-q17",
        "auto-r01-s03-q18",
        "auto-r01-s03-q19",
        "auto-r02-s03-q20",
        "auto-r04-s03-q14",
        "auto-r04-s03-q15",
        "auto-r04-s03-q18",
        "auto-r05-s03-q16"
      ],
      "importance": 4
    },
    {
      "id": "auto-card-electrical-072",
      "subject": "electrical",
      "order": 72,
      "type": "term",
      "category": "편의·안전·ADAS",
      "title": "스마트키·리모트키",
      "subtitle": "편의·안전·ADAS",
      "bullets": [
        "스마트키 모듈 교체 후 차종별로 필요한 인증 설정 작업은 키 등록이다.",
        "스마트키의 인증 정보는 지정 등록 절차가 필요할 수 있다.",
        "리모트키 전원 저하는 무선 신호 송신에 영향을 줄 수 있다.",
        "RF 간섭 등 무선 환경을 함께 고려한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-electrical-53",
        "concept-electrical-88",
        "concept-electrical-140"
      ],
      "linkedQuestionIds": [
        "auto-made-r04-s03-q16",
        "auto-made-r02-s03-q17",
        "auto-made-r06-s03-q14"
      ],
      "sourceLabel": "학습 문제은행 · concept-electrical-53 외 2문항",
      "examHitCount": 5,
      "examSampleRefs": [
        "auto-r02-s03-q17",
        "auto-r04-s03-q16",
        "auto-r06-s03-q17",
        "auto-r08-s03-q10",
        "auto-r08-s03-q19"
      ],
      "importance": 3
    },
    {
      "id": "auto-card-electrical-073",
      "subject": "electrical",
      "order": 73,
      "type": "term",
      "category": "편의·안전·ADAS",
      "title": "도어 스위치",
      "subtitle": "편의·안전·ADAS",
      "bullets": [
        "도어 개폐 상태를 제어기에 입력하는 부품은 도어 스위치이다.",
        "도어 스위치는 문이 열렸는지 닫혔는지를 감지한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-electrical-57"
      ],
      "linkedQuestionIds": [
        "auto-made-r05-s03-q15"
      ],
      "sourceLabel": "학습 문제은행 · concept-electrical-57",
      "examHitCount": 1,
      "examSampleRefs": [
        "auto-r05-s03-q15"
      ],
      "importance": 2
    },
    {
      "id": "auto-card-electrical-074",
      "subject": "electrical",
      "order": 74,
      "type": "term",
      "category": "편의·안전·ADAS",
      "title": "ADAS 정적·동적 보정",
      "subtitle": "편의·안전·ADAS",
      "bullets": [
        "ADAS 카메라를 지정된 표적 앞에서 정지 상태로 보정하는 방식은 정적 보정이다.",
        "정적 보정과 주행 중 동적 보정은 제조사 기준으로 구분한다.",
        "동적 보정은 제조사가 정한 주행 조건을 이용한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-electrical-59",
        "concept-electrical-137"
      ],
      "linkedQuestionIds": [
        "auto-made-r06-s03-q04"
      ],
      "sourceLabel": "학습 문제은행 · concept-electrical-59 외 1문항",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-electrical-075",
      "subject": "electrical",
      "order": 75,
      "type": "term",
      "category": "편의·안전·ADAS",
      "title": "도어 체커",
      "subtitle": "편의·안전·ADAS",
      "bullets": [
        "도어 개방각에서 발생하는 소음과 유지 이상은 체커 상태를 살핀다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-electrical-62"
      ],
      "linkedQuestionIds": [
        "auto-made-r06-s03-q19"
      ],
      "sourceLabel": "학습 문제은행 · concept-electrical-62",
      "examHitCount": 1,
      "examSampleRefs": [
        "auto-r06-s03-q19"
      ],
      "importance": 2
    },
    {
      "id": "auto-card-electrical-076",
      "subject": "electrical",
      "order": 76,
      "type": "term",
      "category": "편의·안전·ADAS",
      "title": "오토라이트 조도",
      "subtitle": "편의·안전·ADAS",
      "bullets": [
        "오토라이트의 자동 점등 판단에 사용하는 입력은 외부 조도이다.",
        "외부 조도 변화에 따라 점등을 제어한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-electrical-65"
      ],
      "linkedQuestionIds": [
        "auto-made-r07-s03-q11"
      ],
      "sourceLabel": "학습 문제은행 · concept-electrical-65",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-electrical-077",
      "subject": "electrical",
      "order": 77,
      "type": "term",
      "category": "편의·안전·ADAS",
      "title": "AEB",
      "subtitle": "편의·안전·ADAS",
      "bullets": [
        "충돌 위험을 판단해 자동으로 제동에 개입하는 장치는 AEB이다.",
        "AEB는 위험 시 제동을 보조하거나 자동으로 개입한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-electrical-67"
      ],
      "linkedQuestionIds": [
        "auto-made-r07-s03-q16"
      ],
      "sourceLabel": "학습 문제은행 · concept-electrical-67",
      "examHitCount": 1,
      "examSampleRefs": [
        "auto-r07-s03-q16"
      ],
      "importance": 2
    },
    {
      "id": "auto-card-electrical-078",
      "subject": "electrical",
      "order": 78,
      "type": "term",
      "category": "편의·안전·ADAS",
      "title": "ACC",
      "subtitle": "편의·안전·ADAS",
      "bullets": [
        "설정 속도 유지와 앞차와의 거리 추종을 함께 수행하는 기능은 ACC이다.",
        "ACC는 차간거리까지 고려하는 적응형 정속주행 제어다.",
        "ACC는 속도와 앞차와의 거리 등을 고려한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-electrical-71",
        "concept-electrical-144"
      ],
      "linkedQuestionIds": [
        "auto-made-r08-s03-q11",
        "auto-made-r07-s03-q10"
      ],
      "sourceLabel": "학습 문제은행 · concept-electrical-71 외 1문항",
      "examHitCount": 2,
      "examSampleRefs": [
        "auto-r03-s03-q01",
        "auto-r07-s03-q01"
      ],
      "importance": 2
    },
    {
      "id": "auto-card-electrical-079",
      "subject": "electrical",
      "order": 79,
      "type": "term",
      "category": "편의·안전·ADAS",
      "title": "FCW",
      "subtitle": "편의·안전·ADAS",
      "bullets": [
        "전방 충돌 위험을 운전자에게 경고하는 기능은 FCW이다.",
        "FCW는 경고 기능이며 AEB의 자동 제동 기능과 구별한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-electrical-72"
      ],
      "linkedQuestionIds": [
        "auto-made-r08-s03-q15"
      ],
      "sourceLabel": "학습 문제은행 · concept-electrical-72",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-electrical-080",
      "subject": "electrical",
      "order": 80,
      "type": "term",
      "category": "편의·안전·ADAS",
      "title": "레인 센서",
      "subtitle": "편의·안전·ADAS",
      "bullets": [
        "빗물의 유무나 정도를 감지해 와이퍼 작동에 활용하는 센서는 레인 센서이다.",
        "레인 센서의 입력으로 자동 와이퍼를 제어할 수 있다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-electrical-77"
      ],
      "linkedQuestionIds": [
        "auto-made-r09-s03-q10"
      ],
      "sourceLabel": "학습 문제은행 · concept-electrical-77",
      "examHitCount": 2,
      "examSampleRefs": [
        "auto-r02-s03-q18",
        "auto-r09-s03-q10"
      ],
      "importance": 2
    },
    {
      "id": "auto-card-electrical-081",
      "subject": "electrical",
      "order": 81,
      "type": "term",
      "category": "편의·안전·ADAS",
      "title": "TPMS",
      "subtitle": "편의·안전·ADAS",
      "bullets": [
        "타이어의 낮은 공기압을 감시하고 운전자에게 경고하는 장치는 TPMS이다.",
        "TPMS는 타이어 공기압 감시 시스템이다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-electrical-78"
      ],
      "linkedQuestionIds": [
        "auto-made-r09-s03-q14"
      ],
      "sourceLabel": "학습 문제은행 · concept-electrical-78",
      "examHitCount": 1,
      "examSampleRefs": [
        "auto-r09-s03-q14"
      ],
      "importance": 2
    },
    {
      "id": "auto-card-electrical-082",
      "subject": "electrical",
      "order": 82,
      "type": "term",
      "category": "편의·안전·ADAS",
      "title": "SRS",
      "subtitle": "편의·안전·ADAS",
      "bullets": [
        "에어백 점화회로는 일반 회로처럼 임의 측정하지 않고 제조사의 안전 진단 절차를 따른다.",
        "SRS에는 특별한 안전 조건과 정비 절차가 적용된다.",
        "SRS는 보조 승객 보호 시스템이며 지정 안전 절차가 필요하다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-electrical-85",
        "concept-electrical-90"
      ],
      "linkedQuestionIds": [
        "auto-made-r01-s03-q12",
        "auto-made-r03-s03-q12"
      ],
      "sourceLabel": "학습 문제은행 · concept-electrical-85 외 1문항",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-electrical-083",
      "subject": "electrical",
      "order": 83,
      "type": "term",
      "category": "편의·안전·ADAS",
      "title": "전동 미러",
      "subtitle": "편의·안전·ADAS",
      "bullets": [
        "전동 미러 메모리에서 저장 위치로 복귀하기 위해 제어기에 필요한 입력은 위치 피드백이다.",
        "위치 피드백과 저장 명령이 실제 위치 제어에 활용된다.",
        "접힘 구동 기어 및 힌지의 이상을 확인한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-electrical-91",
        "concept-electrical-142"
      ],
      "linkedQuestionIds": [
        "auto-made-r04-s03-q17",
        "auto-made-r06-s03-q20"
      ],
      "sourceLabel": "학습 문제은행 · concept-electrical-91 외 1문항",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-electrical-084",
      "subject": "electrical",
      "order": 84,
      "type": "term",
      "category": "편의·안전·ADAS",
      "title": "전동시트",
      "subtitle": "편의·안전·ADAS",
      "bullets": [
        "전동시트가 한 방향으로만 움직이지 않으면 모터 회로와 함께 방향 선택 스위치을 확인한다.",
        "방향별 제어 입력과 모터 회로를 비교한다.",
        "구동기와 기계적 전달계 이상을 구분한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-electrical-127",
        "concept-electrical-132"
      ],
      "linkedQuestionIds": [
        "auto-made-r03-s03-q17",
        "auto-made-r04-s03-q19"
      ],
      "sourceLabel": "학습 문제은행 · concept-electrical-127 외 1문항",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-electrical-085",
      "subject": "electrical",
      "order": 85,
      "type": "term",
      "category": "편의·안전·ADAS",
      "title": "도어 잠금장치",
      "subtitle": "편의·안전·ADAS",
      "bullets": [
        "한 개 도어만 잠금이 불량할 경우 공통 제어기 외에 해당 도어의 잠금 액추에이터을 점검한다.",
        "개별 도어 구동기 및 배선 등을 확인한다.",
        "공통 경로 문제와 각 구동기 문제를 구분한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-electrical-134",
        "concept-electrical-135"
      ],
      "linkedQuestionIds": [
        "auto-made-r05-s03-q14",
        "auto-made-r05-s03-q18"
      ],
      "sourceLabel": "학습 문제은행 · concept-electrical-134 외 1문항",
      "examHitCount": 1,
      "examSampleRefs": [
        "auto-r05-s03-q17"
      ],
      "importance": 2
    },
    {
      "id": "auto-card-electrical-086",
      "subject": "electrical",
      "order": 86,
      "type": "term",
      "category": "편의·안전·ADAS",
      "title": "선루프와 끼임 방지",
      "subtitle": "편의·안전·ADAS",
      "bullets": [
        "선루프가 움직일 때 걸리거나 소음이 나면 전기 신호 외에 가이드 레일의 윤활 상태를 점검한다.",
        "레일과 구동 케이블 등 기계적 상태를 확인한다.",
        "닫힘 과정의 안전 제어와 기계 상태를 구분한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-electrical-136",
        "concept-electrical-141"
      ],
      "linkedQuestionIds": [
        "auto-made-r05-s03-q19",
        "auto-made-r06-s03-q18"
      ],
      "sourceLabel": "학습 문제은행 · concept-electrical-136 외 1문항",
      "examHitCount": 5,
      "examSampleRefs": [
        "auto-r03-s03-q20",
        "auto-r05-s03-q19",
        "auto-r05-s03-q20",
        "auto-r06-s03-q16",
        "auto-r06-s03-q18"
      ],
      "importance": 3
    },
    {
      "id": "auto-card-electrical-087",
      "subject": "electrical",
      "order": 87,
      "type": "term",
      "category": "편의·안전·ADAS",
      "title": "후방 카메라",
      "subtitle": "편의·안전·ADAS",
      "bullets": [
        "후방 카메라의 기본 역할은 차량 뒤쪽의 영상 정보를 표시장치로 전달하는 것이다.",
        "후방 영상의 촬영과 표시를 지원한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-electrical-146"
      ],
      "linkedQuestionIds": [
        "auto-made-r07-s03-q19"
      ],
      "sourceLabel": "학습 문제은행 · concept-electrical-146",
      "examHitCount": 1,
      "examSampleRefs": [
        "auto-r07-s03-q19"
      ],
      "importance": 2
    },
    {
      "id": "auto-card-electrical-088",
      "subject": "electrical",
      "order": 88,
      "type": "term",
      "category": "편의·안전·ADAS",
      "title": "초음파 주차 보조 센서",
      "subtitle": "편의·안전·ADAS",
      "bullets": [
        "일반적인 초음파 주차 보조 센서는 물체에서 되돌아오는 반사파을 이용한다.",
        "초음파 반사 신호로 장애물 거리를 추정할 수 있다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-electrical-147"
      ],
      "linkedQuestionIds": [
        "auto-made-r07-s03-q20"
      ],
      "sourceLabel": "학습 문제은행 · concept-electrical-147",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-electrical-089",
      "subject": "electrical",
      "order": 89,
      "type": "formula",
      "category": "계산 공식",
      "title": "직렬 합성저항",
      "subtitle": "계산 공식",
      "bullets": [
        "직렬 연결의 합성저항은 개별 저항의 합이다.",
        "직렬 합성저항은 9Ω이다. 옴의 법칙에 따라 12÷9=4/3A이다."
      ],
      "formula": "R = R₁ + R₂ + …",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-electrical-20",
        "original-electrical-21"
      ],
      "linkedQuestionIds": [
        "original-electrical-21"
      ],
      "sourceLabel": "학습 문제은행 · concept-electrical-20 외 1문항",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-electrical-090",
      "subject": "electrical",
      "order": 90,
      "type": "formula",
      "category": "계산 공식",
      "title": "병렬 합성저항·전체 전류",
      "subtitle": "계산 공식",
      "bullets": [
        "각 가지에 1A씩 흐르므로 전체 전류는 2A다.",
        "각 가지에 12÷12=1A가 흐른다. 전체 전류는 두 가지의 합인 2A이다.",
        "R=(10×15)÷(10+15)=6Ω이다."
      ],
      "formula": "1/R = 1/R₁ + 1/R₂ + …; I = V/R",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-electrical-21",
        "original-electrical-22",
        "concept-electrical-161"
      ],
      "linkedQuestionIds": [
        "original-electrical-22"
      ],
      "sourceLabel": "학습 문제은행 · concept-electrical-21 외 2문항",
      "examHitCount": 1,
      "examSampleRefs": [
        "original-electrical-22"
      ],
      "importance": 2
    },
    {
      "id": "auto-card-electrical-091",
      "subject": "electrical",
      "order": 91,
      "type": "formula",
      "category": "계산 공식",
      "title": "직류 전력",
      "subtitle": "계산 공식",
      "bullets": [
        "P=VI=12×5=60W이다.",
        "직류 전력 P=VI이다. 12×4=48W이다."
      ],
      "formula": "P = V × I",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-electrical-22",
        "original-electrical-23"
      ],
      "linkedQuestionIds": [
        "original-electrical-23"
      ],
      "sourceLabel": "학습 문제은행 · concept-electrical-22 외 1문항",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-electrical-092",
      "subject": "electrical",
      "order": 92,
      "type": "formula",
      "category": "계산 공식",
      "title": "저항의 전압강하",
      "subtitle": "계산 공식",
      "bullets": [
        "V=IR=5×0.2=1V이다.",
        "V=IR이므로 5×0.1=0.5V이다. 주어진 값으로 계산하는 문제이며 통전 회로에 저항계를 연결하는 측정법을 의미하지 않는다.",
        "개별 저항 전압강하는 공통 전류×저항이다."
      ],
      "formula": "V = I × R",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-electrical-23",
        "original-electrical-24",
        "concept-electrical-100"
      ],
      "linkedQuestionIds": [
        "original-electrical-24",
        "auto-made-r09-s03-q12"
      ],
      "sourceLabel": "학습 문제은행 · concept-electrical-23 외 2문항",
      "examHitCount": 5,
      "examSampleRefs": [
        "original-electrical-17",
        "original-electrical-24",
        "auto-r05-s03-q15",
        "auto-r07-s03-q05",
        "auto-r09-s03-q13"
      ],
      "importance": 3
    },
    {
      "id": "auto-card-electrical-093",
      "subject": "electrical",
      "order": 93,
      "type": "formula",
      "category": "계산 공식",
      "title": "PWM 듀티비",
      "subtitle": "계산 공식",
      "bullets": [
        "듀티비=ON 시간÷주기×100이다.",
        "듀티비는 ON 시간÷전체 주기×100이다. 5÷20×100=25%이다.",
        "ON 시간=10×70/100=7ms이다."
      ],
      "formula": "듀티비 = ON 시간 ÷ 주기 × 100%",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-electrical-24",
        "original-electrical-25",
        "concept-electrical-171"
      ],
      "linkedQuestionIds": [
        "original-electrical-25"
      ],
      "sourceLabel": "학습 문제은행 · concept-electrical-24 외 2문항",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-electrical-094",
      "subject": "electrical",
      "order": 94,
      "type": "formula",
      "category": "계산 공식",
      "title": "일정 각속도에서 각변위",
      "subtitle": "계산 공식",
      "bullets": [
        "각변위는 일정 각속도와 시간의 곱이다.",
        "각속도가 일정하므로 12×2.5=30°이다. 실제 센서값은 시간에 따라 적분하고 오차를 고려한다."
      ],
      "formula": "θ = ω × t",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-electrical-27",
        "original-electrical-28"
      ],
      "linkedQuestionIds": [
        "original-electrical-28"
      ],
      "sourceLabel": "학습 문제은행 · concept-electrical-27 외 1문항",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-electrical-095",
      "subject": "electrical",
      "order": 95,
      "type": "formula",
      "category": "계산 공식",
      "title": "증발기 열흡수율",
      "subtitle": "계산 공식",
      "bullets": [
        "열전달률은 질량유량×비엔탈피 변화량=0.02×150=3kW이다."
      ],
      "formula": "Q̇ = ṁ × Δh",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-electrical-73"
      ],
      "linkedQuestionIds": [
        "auto-made-r08-s03-q17"
      ],
      "sourceLabel": "학습 문제은행 · concept-electrical-73",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-electrical-096",
      "subject": "electrical",
      "order": 96,
      "type": "formula",
      "category": "계산 공식",
      "title": "PWM 주파수",
      "subtitle": "계산 공식",
      "bullets": [
        "주파수와 듀티비는 PWM 제어의 별도 특성이다."
      ],
      "formula": "주파수 = 1 ÷ 주기",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-electrical-89"
      ],
      "linkedQuestionIds": [
        "auto-made-r03-s03-q15"
      ],
      "sourceLabel": "학습 문제은행 · concept-electrical-89",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-electrical-097",
      "subject": "electrical",
      "order": 97,
      "type": "formula",
      "category": "계산 공식",
      "title": "냉매 과냉각도",
      "subtitle": "계산 공식",
      "bullets": [
        "과냉각도=40−34=6K이다."
      ],
      "formula": "과냉각도 = 포화온도 − 액체 냉매 온도",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-electrical-191"
      ],
      "linkedQuestionIds": [
        "auto-made-r05-s03-q09"
      ],
      "sourceLabel": "학습 문제은행 · concept-electrical-191",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-eco-001",
      "subject": "eco",
      "order": 1,
      "type": "term",
      "category": "친환경 자동차 구동 방식",
      "title": "회생제동",
      "subtitle": "친환경 자동차 구동 방식",
      "bullets": [
        "회생제동은 감속 시 모터를 발전기로 작동시켜 전기에너지를 회수하는 방식이야.",
        "감속 운동에너지 일부를 전기로 회수한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-eco-01",
        "concept-eco-107"
      ],
      "linkedQuestionIds": [
        "original-eco-08"
      ],
      "sourceLabel": "학습 문제은행 · concept-eco-01 외 1문항",
      "examHitCount": 11,
      "examSampleRefs": [
        "original-eco-08",
        "auto-r02-s04-q12",
        "auto-r02-s04-q18",
        "auto-r03-s04-q05",
        "auto-r03-s04-q07",
        "auto-r04-s04-q10",
        "auto-r06-s04-q19",
        "auto-r07-s04-q07"
      ],
      "importance": 4
    },
    {
      "id": "auto-card-eco-002",
      "subject": "eco",
      "order": 2,
      "type": "term",
      "category": "친환경 자동차 구동 방식",
      "title": "PHEV",
      "subtitle": "친환경 자동차 구동 방식",
      "bullets": [
        "플러그인 하이브리드(PHEV)는 외부 충전 기능을 갖춘 하이브리드 자동차다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [
        "플러그인 하이브리드"
      ],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-eco-11"
      ],
      "linkedQuestionIds": [
        "original-eco-18"
      ],
      "sourceLabel": "학습 문제은행 · concept-eco-11",
      "examHitCount": 1,
      "examSampleRefs": [
        "original-eco-18"
      ],
      "importance": 2
    },
    {
      "id": "auto-card-eco-003",
      "subject": "eco",
      "order": 3,
      "type": "term",
      "category": "친환경 자동차 구동 방식",
      "title": "BEV",
      "subtitle": "친환경 자동차 구동 방식",
      "bullets": [
        "외부에서 충전한 구동 배터리를 유일한 주행 에너지원으로 사용하는 전기자동차의 약칭은 BEV이다.",
        "BEV는 배터리에 저장된 전기에너지를 주행에 이용한다.",
        "BEV는 고전압 배터리의 전력을 사용해 구동 전동기로 바퀴를 돌린다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [
        "배터리 전기자동차"
      ],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-eco-13",
        "original-eco-01"
      ],
      "linkedQuestionIds": [
        "original-eco-01"
      ],
      "sourceLabel": "학습 문제은행 · concept-eco-13 외 1문항",
      "examHitCount": 1,
      "examSampleRefs": [
        "original-eco-01"
      ],
      "importance": 2
    },
    {
      "id": "auto-card-eco-004",
      "subject": "eco",
      "order": 4,
      "type": "term",
      "category": "친환경 자동차 구동 방식",
      "title": "HEV",
      "subtitle": "친환경 자동차 구동 방식",
      "bullets": [
        "내연기관과 전기모터를 함께 활용하지만 반드시 외부 충전을 요구하지 않는 대표 차량 분류는 HEV이다.",
        "일반 HEV는 내연기관과 전기구동을 조합한다.",
        "하이브리드 자동차는 내연기관과 전기모터를 함께 이용해 주행할 수 있다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [
        "하이브리드"
      ],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-eco-18",
        "original-eco-17"
      ],
      "linkedQuestionIds": [
        "original-eco-17"
      ],
      "sourceLabel": "학습 문제은행 · concept-eco-18 외 1문항",
      "examHitCount": 68,
      "examSampleRefs": [
        "original-eco-17",
        "original-eco-18",
        "auto-r01-s04-q01",
        "auto-r01-s04-q02",
        "auto-r01-s04-q03",
        "auto-r01-s04-q04",
        "auto-r01-s04-q10",
        "auto-r01-s04-q12"
      ],
      "importance": 5
    },
    {
      "id": "auto-card-eco-005",
      "subject": "eco",
      "order": 5,
      "type": "term",
      "category": "친환경 자동차 구동 방식",
      "title": "FCEV",
      "subtitle": "친환경 자동차 구동 방식",
      "bullets": [
        "FCEV는 연료전지로 전력을 생산하고 바퀴는 일반적으로 전동모터로 구동한다.",
        "연료전지 전력으로 전기 구동계를 작동시킨다.",
        "연료전지는 수소와 산소의 전기화학 반응으로 전력을 만들며, 주된 부산물은 물이다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [
        "연료전지 전기자동차"
      ],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-eco-149",
        "original-eco-19"
      ],
      "linkedQuestionIds": [
        "auto-made-r07-s04-q15"
      ],
      "sourceLabel": "학습 문제은행 · concept-eco-149 외 1문항",
      "examHitCount": 1,
      "examSampleRefs": [
        "original-eco-19"
      ],
      "importance": 2
    },
    {
      "id": "auto-card-eco-006",
      "subject": "eco",
      "order": 6,
      "type": "term",
      "category": "친환경 자동차 구동 방식",
      "title": "감속기",
      "subtitle": "친환경 자동차 구동 방식",
      "bullets": [
        "전기차 모터의 높은 회전속도를 바퀴에 적합한 속도로 낮추는 기계 장치는 감속기이다.",
        "모터의 회전력은 감속기와 차동장치를 거쳐 바퀴로 전달된다.",
        "전기 모터와 감속기 등 기계적 원인을 분리해 진단한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-eco-29",
        "concept-eco-143"
      ],
      "linkedQuestionIds": [
        "auto-made-r01-s04-q07",
        "auto-made-r06-s04-q12"
      ],
      "sourceLabel": "학습 문제은행 · concept-eco-29 외 1문항",
      "examHitCount": 1,
      "examSampleRefs": [
        "auto-r01-s04-q07"
      ],
      "importance": 2
    },
    {
      "id": "auto-card-eco-007",
      "subject": "eco",
      "order": 7,
      "type": "term",
      "category": "친환경 자동차 구동 방식",
      "title": "하이브리드 구동 토크·동력 협조",
      "subtitle": "친환경 자동차 구동 방식",
      "bullets": [
        "하이브리드 가속 보조 시 구동모터가 추가하는 물리량은 구동 토크이다.",
        "배터리 전력을 활용해 모터 토크를 더할 수 있다.",
        "운전 조건에 따라 엔진과 모터의 역할을 조절한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-eco-59",
        "concept-eco-115"
      ],
      "linkedQuestionIds": [
        "auto-made-r05-s04-q05",
        "original-eco-17"
      ],
      "sourceLabel": "학습 문제은행 · concept-eco-59 외 1문항",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-eco-008",
      "subject": "eco",
      "order": 8,
      "type": "term",
      "category": "친환경 자동차 구동 방식",
      "title": "동력분기장치",
      "subtitle": "친환경 자동차 구동 방식",
      "bullets": [
        "파워스플릿형 하이브리드에서 엔진·발전기·구동계의 동력을 분기하는 기계 장치는 동력분기장치이다.",
        "동력분기장치는 여러 구동원의 동력 경로를 연계한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-eco-61"
      ],
      "linkedQuestionIds": [
        "auto-made-r05-s04-q12"
      ],
      "sourceLabel": "학습 문제은행 · concept-eco-61",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-eco-009",
      "subject": "eco",
      "order": 9,
      "type": "term",
      "category": "친환경 자동차 구동 방식",
      "title": "병렬형 하이브리드",
      "subtitle": "친환경 자동차 구동 방식",
      "bullets": [
        "엔진과 모터가 모두 기계적으로 차량 구동에 참여할 수 있는 하이브리드 구성은 병렬형이다.",
        "병렬형은 엔진과 모터의 동력으로 구동이 가능하다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-eco-77"
      ],
      "linkedQuestionIds": [
        "auto-made-r08-s04-q04"
      ],
      "sourceLabel": "학습 문제은행 · concept-eco-77",
      "examHitCount": 1,
      "examSampleRefs": [
        "auto-r08-s04-q04"
      ],
      "importance": 2
    },
    {
      "id": "auto-card-eco-010",
      "subject": "eco",
      "order": 10,
      "type": "term",
      "category": "친환경 자동차 구동 방식",
      "title": "차동장치",
      "subtitle": "친환경 자동차 구동 방식",
      "bullets": [
        "감속기를 지난 구동력이 좌우 바퀴로 전달되면서 회전수 차이를 허용하는 부품은 차동장치이다.",
        "차동장치는 선회 시 좌우 구동바퀴의 회전차를 허용한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-eco-117"
      ],
      "linkedQuestionIds": [
        "auto-made-r01-s04-q07"
      ],
      "sourceLabel": "학습 문제은행 · concept-eco-117",
      "examHitCount": 1,
      "examSampleRefs": [
        "original-eco-08"
      ],
      "importance": 2
    },
    {
      "id": "auto-card-eco-011",
      "subject": "eco",
      "order": 11,
      "type": "term",
      "category": "친환경 자동차 구동 방식",
      "title": "하이브리드 배터리 SOC와 동력 분담",
      "subtitle": "친환경 자동차 구동 방식",
      "bullets": [
        "하이브리드 차량의 동력 분담은 운전자 요구 토크 외에 구동배터리 SOC를 고려한다.",
        "충전 상태에 따라 엔진과 모터의 역할이 달라질 수 있다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-eco-151"
      ],
      "linkedQuestionIds": [
        "auto-made-r08-s04-q19"
      ],
      "sourceLabel": "학습 문제은행 · concept-eco-151",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-eco-012",
      "subject": "eco",
      "order": 12,
      "type": "term",
      "category": "배터리·전력변환",
      "title": "BMS",
      "subtitle": "배터리·전력변환",
      "bullets": [
        "배터리관리시스템(BMS)은 셀 상태를 감시하고 배터리 보호에 사용된다.",
        "충전 허용전류는 온도와 SOC 등 보호 조건에 따라 달라질 수 있다.",
        "개별 셀 상태가 충방전 보호에 중요하다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [
        "배터리관리시스템"
      ],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-eco-02",
        "concept-eco-19",
        "concept-eco-102"
      ],
      "linkedQuestionIds": [
        "original-eco-03",
        "original-eco-20"
      ],
      "sourceLabel": "학습 문제은행 · concept-eco-02 외 2문항",
      "examHitCount": 11,
      "examSampleRefs": [
        "original-eco-03",
        "auto-r01-s04-q13",
        "auto-r02-s04-q05",
        "auto-r02-s04-q07",
        "auto-r02-s04-q08",
        "auto-r02-s04-q17",
        "auto-r04-s04-q10",
        "auto-r07-s04-q01"
      ],
      "importance": 4
    },
    {
      "id": "auto-card-eco-013",
      "subject": "eco",
      "order": 13,
      "type": "term",
      "category": "배터리·전력변환",
      "title": "인버터",
      "subtitle": "배터리·전력변환",
      "bullets": [
        "구동 배터리의 직류 전력을 교류 모터 구동용 전력으로 변환·제어하는 장치는 인버터이다.",
        "교류 구동 모터용 인버터는 DC를 AC로 변환·제어한다.",
        "배터리 직류 전력을 모터에 적합한 교류로 변환한다.",
        "구동 인버터는 발전 모드에서 교류 전력을 직류로 변환한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-eco-03",
        "concept-eco-103",
        "concept-eco-81"
      ],
      "linkedQuestionIds": [
        "original-eco-04",
        "auto-made-r09-s04-q04"
      ],
      "sourceLabel": "학습 문제은행 · concept-eco-03 외 2문항",
      "examHitCount": 23,
      "examSampleRefs": [
        "original-eco-04",
        "original-eco-24",
        "auto-r01-s04-q04",
        "auto-r01-s04-q05",
        "auto-r01-s04-q07",
        "auto-r02-s04-q03",
        "auto-r02-s04-q04",
        "auto-r02-s04-q13"
      ],
      "importance": 5
    },
    {
      "id": "auto-card-eco-014",
      "subject": "eco",
      "order": 14,
      "type": "term",
      "category": "배터리·전력변환",
      "title": "DC-DC 컨버터·LDC",
      "subtitle": "배터리·전력변환",
      "bullets": [
        "고전압 직류 전력을 저전압 직류 전원 계통에 맞게 변환하는 장치는 DC-DC 컨버터이다.",
        "DC-DC 컨버터는 직류 전압을 저전압 계통에 맞게 변환한다.",
        "LDC는 저전압 보조전원 계통에 전력을 공급한다.",
        "고전압 DC에서 저전압 DC로 전압을 변환한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-eco-04",
        "concept-eco-65",
        "concept-eco-104"
      ],
      "linkedQuestionIds": [
        "original-eco-05",
        "auto-made-r05-s04-q18"
      ],
      "sourceLabel": "학습 문제은행 · concept-eco-04 외 2문항",
      "examHitCount": 6,
      "examSampleRefs": [
        "original-eco-05",
        "auto-r04-s04-q10",
        "auto-r05-s04-q18",
        "auto-r05-s04-q19",
        "auto-r08-s04-q06",
        "auto-r09-s04-q05"
      ],
      "importance": 3
    },
    {
      "id": "auto-card-eco-015",
      "subject": "eco",
      "order": 15,
      "type": "term",
      "category": "배터리·전력변환",
      "title": "OBC",
      "subtitle": "배터리·전력변환",
      "bullets": [
        "OBC는 차량에 탑재된 충전기로 교류 입력을 직류 충전 전력으로 변환한다.",
        "OBC는 외부 교류를 배터리 충전에 필요한 직류로 변환한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-eco-05",
        "concept-eco-105"
      ],
      "linkedQuestionIds": [
        "original-eco-06"
      ],
      "sourceLabel": "학습 문제은행 · concept-eco-05 외 1문항",
      "examHitCount": 6,
      "examSampleRefs": [
        "original-eco-06",
        "original-eco-07",
        "auto-r08-s04-q02",
        "auto-r08-s04-q06",
        "auto-r09-s04-q14",
        "auto-r09-s04-q18"
      ],
      "importance": 3
    },
    {
      "id": "auto-card-eco-016",
      "subject": "eco",
      "order": 16,
      "type": "term",
      "category": "배터리·전력변환",
      "title": "SOC",
      "subtitle": "배터리·전력변환",
      "bullets": [
        "SOC(State of Charge)는 전하량을 기준으로 한 충전 상태다. SOE는 에너지 상태, SOH는 건전성, SOP는 가용 출력 상태를 나타내는 지표로 사용된다.",
        "정의된 기준 용량 대비 남은 전하량을 비율로 표시한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-eco-06",
        "concept-eco-108"
      ],
      "linkedQuestionIds": [
        "original-eco-09"
      ],
      "sourceLabel": "학습 문제은행 · concept-eco-06 외 1문항",
      "examHitCount": 10,
      "examSampleRefs": [
        "original-eco-09",
        "original-eco-20",
        "auto-r01-s04-q19",
        "auto-r04-s04-q02",
        "auto-r04-s04-q08",
        "auto-r05-s04-q01",
        "auto-r05-s04-q09",
        "auto-r07-s04-q01"
      ],
      "importance": 4
    },
    {
      "id": "auto-card-eco-017",
      "subject": "eco",
      "order": 17,
      "type": "term",
      "category": "배터리·전력변환",
      "title": "SOH",
      "subtitle": "배터리·전력변환",
      "bullets": [
        "SOH는 State of Health로 배터리 성능과 건전성의 상태를 나타낸다.",
        "용량 감소와 저항 변화는 배터리 열화의 지표가 될 수 있다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-eco-07",
        "concept-eco-109"
      ],
      "linkedQuestionIds": [
        "original-eco-10"
      ],
      "sourceLabel": "학습 문제은행 · concept-eco-07 외 1문항",
      "examHitCount": 1,
      "examSampleRefs": [
        "original-eco-10"
      ],
      "importance": 2
    },
    {
      "id": "auto-card-eco-018",
      "subject": "eco",
      "order": 18,
      "type": "term",
      "category": "배터리·전력변환",
      "title": "배터리 열관리계통",
      "subtitle": "배터리·전력변환",
      "bullets": [
        "배터리 열관리는 온도에 따른 출력·충전·수명·안전 문제를 줄이는 데 필요하다.",
        "적정 작동 온도를 유지하기 위한 열관리가 필요하다.",
        "온도 보호에는 냉각 및 충방전 출력 제한이 포함될 수 있다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-eco-08",
        "concept-eco-110",
        "concept-eco-146"
      ],
      "linkedQuestionIds": [
        "original-eco-11",
        "auto-made-r07-s04-q02"
      ],
      "sourceLabel": "학습 문제은행 · concept-eco-08 외 2문항",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-eco-019",
      "subject": "eco",
      "order": 19,
      "type": "term",
      "category": "배터리·전력변환",
      "title": "열폭주",
      "subtitle": "배터리·전력변환",
      "bullets": [
        "열폭주는 셀 내부 발열 반응이 연쇄적으로 확대되는 위험한 현상이다.",
        "발열 반응이 제어되지 않고 연쇄적으로 확대되는 현상이다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-eco-09",
        "concept-eco-111"
      ],
      "linkedQuestionIds": [
        "original-eco-12"
      ],
      "sourceLabel": "학습 문제은행 · concept-eco-09 외 1문항",
      "examHitCount": 1,
      "examSampleRefs": [
        "original-eco-12"
      ],
      "importance": 2
    },
    {
      "id": "auto-card-eco-020",
      "subject": "eco",
      "order": 20,
      "type": "term",
      "category": "배터리·전력변환",
      "title": "메인 컨택터",
      "subtitle": "배터리·전력변환",
      "bullets": [
        "메인 컨택터는 고전압 배터리와 회로를 전기적으로 연결 또는 분리하도록 제어된다.",
        "컨택터는 제어에 따라 고전압 계통을 연결하거나 분리한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-eco-10",
        "concept-eco-87"
      ],
      "linkedQuestionIds": [
        "original-eco-15"
      ],
      "sourceLabel": "학습 문제은행 · concept-eco-10 외 1문항",
      "examHitCount": 1,
      "examSampleRefs": [
        "original-eco-15"
      ],
      "importance": 2
    },
    {
      "id": "auto-card-eco-021",
      "subject": "eco",
      "order": 21,
      "type": "term",
      "category": "배터리·전력변환",
      "title": "배터리 전기화학 반응",
      "subtitle": "배터리·전력변환",
      "bullets": [
        "충전식 배터리가 전기에너지를 저장하는 기본 원리는 전기화학 반응이다.",
        "충전식 배터리는 전기화학 반응으로 에너지를 저장하고 방전한다.",
        "배터리는 전기화학 반응을 이용해 전력을 공급한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-eco-14",
        "concept-eco-101"
      ],
      "linkedQuestionIds": [
        "original-eco-02"
      ],
      "sourceLabel": "학습 문제은행 · concept-eco-14 외 1문항",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-eco-022",
      "subject": "eco",
      "order": 22,
      "type": "term",
      "category": "배터리·전력변환",
      "title": "셀 밸런싱",
      "subtitle": "배터리·전력변환",
      "bullets": [
        "직렬 배터리 셀 사이의 충전상태나 전압 편차를 줄이는 BMS 기능은 셀 밸런싱이다.",
        "셀 밸런싱은 셀 간 불균형을 완화한다.",
        "셀 밸런싱으로 셀 간 제한 차이를 완화한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-eco-36",
        "concept-eco-91"
      ],
      "linkedQuestionIds": [
        "auto-made-r02-s04-q07",
        "auto-made-r03-s04-q18"
      ],
      "sourceLabel": "학습 문제은행 · concept-eco-36 외 1문항",
      "examHitCount": 4,
      "examSampleRefs": [
        "auto-r02-s04-q07",
        "auto-r05-s04-q08",
        "auto-r07-s04-q03",
        "auto-r07-s04-q09"
      ],
      "importance": 3
    },
    {
      "id": "auto-card-eco-023",
      "subject": "eco",
      "order": 23,
      "type": "term",
      "category": "배터리·전력변환",
      "title": "회생제동 수용전력 제한",
      "subtitle": "배터리·전력변환",
      "bullets": [
        "SOC와 온도에 따른 충전 수용 한계가 회생제동량에 영향을 준다.",
        "충전 가능 에너지 및 전력이 제한되면 회생제동도 제한될 수 있다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-eco-48",
        "concept-eco-84"
      ],
      "linkedQuestionIds": [
        "auto-made-r03-s04-q17",
        "auto-made-r09-s04-q13"
      ],
      "sourceLabel": "학습 문제은행 · concept-eco-48 외 1문항",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-eco-024",
      "subject": "eco",
      "order": 24,
      "type": "term",
      "category": "배터리·전력변환",
      "title": "저 SOC 구동출력 제한",
      "subtitle": "배터리·전력변환",
      "bullets": [
        "SOC가 지나치게 낮을 때 배터리 보호를 위해 BMS가 제한할 수 있는 것은 구동 출력이다.",
        "방전 하한 보호에 따라 구동 전력이 제한될 수 있다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-eco-49"
      ],
      "linkedQuestionIds": [
        "auto-made-r04-s04-q02"
      ],
      "sourceLabel": "학습 문제은행 · concept-eco-49",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-eco-025",
      "subject": "eco",
      "order": 25,
      "type": "term",
      "category": "배터리·전력변환",
      "title": "배터리 모듈 검사",
      "subtitle": "배터리·전력변환",
      "bullets": [
        "배터리 모듈 교체 후 모듈 간 전압 균형 상태를 확인하는 이유는 불균형을 줄이기 위해서다.",
        "모듈 전압과 BMS 관리 및 절연 상태를 확인한다.",
        "셀 전압은 SOC, 온도, 부하 등에 따라 달라질 수 있다.",
        "모듈 전압·저항·온도를 종합해 평가한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-eco-51",
        "concept-eco-95",
        "concept-eco-137"
      ],
      "linkedQuestionIds": [
        "auto-made-r04-s04-q09",
        "auto-made-r06-s04-q08",
        "auto-made-r05-s04-q06"
      ],
      "sourceLabel": "학습 문제은행 · concept-eco-51 외 2문항",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-eco-026",
      "subject": "eco",
      "order": 26,
      "type": "term",
      "category": "배터리·전력변환",
      "title": "저온·급속 충전 전류 제한",
      "subtitle": "배터리·전력변환",
      "bullets": [
        "저온 배터리의 충전속도가 제한되는 경우 BMS가 고려하는 주요 상태량은 배터리 온도이다.",
        "낮은 배터리 온도는 충전 허용전류에 영향을 줄 수 있다.",
        "배터리 온도와 SOC에 따라 허용 충전전류를 관리한다.",
        "배터리 보호와 열관리를 위해 BMS와 충전기가 충전 상태·온도에 따라 전류와 전력을 조절할 수 있다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-eco-63",
        "concept-eco-100",
        "original-eco-20"
      ],
      "linkedQuestionIds": [
        "auto-made-r05-s04-q14",
        "auto-made-r09-s04-q18"
      ],
      "sourceLabel": "학습 문제은행 · concept-eco-63 외 2문항",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-eco-027",
      "subject": "eco",
      "order": 27,
      "type": "term",
      "category": "배터리·전력변환",
      "title": "프리차지 회로",
      "subtitle": "배터리·전력변환",
      "bullets": [
        "고전압 컨택터 본 연결 전 커패시터 충전의 돌입전류를 제한하는 회로는 프리차지 회로이다.",
        "프리차지 저항을 통해 초기 커패시터 충전 전류를 제한한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-eco-74"
      ],
      "linkedQuestionIds": [
        "auto-made-r07-s04-q14"
      ],
      "sourceLabel": "학습 문제은행 · concept-eco-74",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-eco-028",
      "subject": "eco",
      "order": 28,
      "type": "term",
      "category": "배터리·전력변환",
      "title": "배터리 냉각수 펌프",
      "subtitle": "배터리·전력변환",
      "bullets": [
        "액체 냉각 방식의 구동 배터리 열관리 회로에서 냉각수를 순환시키는 부품은 냉각수 펌프이다.",
        "냉각수 순환은 배터리 온도 관리에 필요하다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-eco-82"
      ],
      "linkedQuestionIds": [
        "auto-made-r09-s04-q07"
      ],
      "sourceLabel": "학습 문제은행 · concept-eco-82",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-eco-029",
      "subject": "eco",
      "order": 29,
      "type": "term",
      "category": "배터리·전력변환",
      "title": "BMS 등록·학습",
      "subtitle": "배터리·전력변환",
      "bullets": [
        "구동 배터리 교환 뒤 차종에 따라 수행할 수 있는 BMS 설정 작업은 등록·학습이다.",
        "제작사 지침에 따른 배터리 정보 등록·학습을 확인한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-eco-83"
      ],
      "linkedQuestionIds": [
        "auto-made-r09-s04-q11"
      ],
      "sourceLabel": "학습 문제은행 · concept-eco-83",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-eco-030",
      "subject": "eco",
      "order": 30,
      "type": "term",
      "category": "배터리·전력변환",
      "title": "배터리 가용 용량 시험",
      "subtitle": "배터리·전력변환",
      "bullets": [
        "배터리 실제 성능은 회로도만으로 판단하지 않고 지정된 용량 시험을 통해 평가할 수 있다.",
        "전기적 상태와 열적 조건을 고려한 성능시험이 필요하다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-eco-123"
      ],
      "linkedQuestionIds": [
        "auto-made-r02-s04-q14"
      ],
      "sourceLabel": "학습 문제은행 · concept-eco-123",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-eco-031",
      "subject": "eco",
      "order": 31,
      "type": "term",
      "category": "배터리·전력변환",
      "title": "BMS 온도센서와 보호 제한",
      "subtitle": "배터리·전력변환",
      "bullets": [
        "BMS의 온도센서 신호가 실제와 다를 때 충전 제어에 나타날 수 있는 결과는 보호 제한이다.",
        "잘못된 온도값은 배터리 보호 제한을 유발할 수 있다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-eco-144"
      ],
      "linkedQuestionIds": [
        "auto-made-r06-s04-q14"
      ],
      "sourceLabel": "학습 문제은행 · concept-eco-144",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-eco-032",
      "subject": "eco",
      "order": 32,
      "type": "term",
      "category": "배터리·전력변환",
      "title": "SOC 운용 범위",
      "subtitle": "배터리·전력변환",
      "bullets": [
        "온도와 전류 및 SOC 운용 범위는 배터리 열화에 영향을 준다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-eco-73"
      ],
      "linkedQuestionIds": [
        "auto-made-r07-s04-q10"
      ],
      "sourceLabel": "학습 문제은행 · concept-eco-73",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-eco-033",
      "subject": "eco",
      "order": 33,
      "type": "term",
      "category": "전동기·충전·제어",
      "title": "DC 급속충전",
      "subtitle": "전동기·충전·제어",
      "bullets": [
        "일반적인 DC 급속충전에서 교류를 직류로 변환하는 주체는 외부 충전 설비이다.",
        "DC 충전 설비에서 변환한 직류를 배터리 충전에 공급한다.",
        "직류 급속충전은 차량의 충전 허용 조건을 따른다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-eco-15",
        "concept-eco-106"
      ],
      "linkedQuestionIds": [
        "original-eco-07"
      ],
      "sourceLabel": "학습 문제은행 · concept-eco-15 외 1문항",
      "examHitCount": 4,
      "examSampleRefs": [
        "original-eco-07",
        "auto-r07-s04-q08",
        "auto-r08-s04-q02",
        "auto-r09-s04-q18"
      ],
      "importance": 3
    },
    {
      "id": "auto-card-eco-034",
      "subject": "eco",
      "order": 34,
      "type": "term",
      "category": "전동기·충전·제어",
      "title": "전동기 권선",
      "subtitle": "전동기·충전·제어",
      "bullets": [
        "전기모터의 전기적 상태 검사에서 코일 자체의 상태와 관련된 부위는 권선이다.",
        "모터 권선과 절연, 연결 배선을 구분해 진단한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-eco-38"
      ],
      "linkedQuestionIds": [
        "auto-made-r02-s04-q13"
      ],
      "sourceLabel": "학습 문제은행 · concept-eco-38",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-eco-035",
      "subject": "eco",
      "order": 35,
      "type": "term",
      "category": "전동기·충전·제어",
      "title": "구동 토크",
      "subtitle": "전동기·충전·제어",
      "bullets": [
        "전기차 모터 제어에서 회전력의 크기를 나타내는 물리량은 토크이다.",
        "모터 제어는 운전자 요구 등에 따라 토크와 속도를 조절한다.",
        "모터의 성능은 속도와 토크, 전기 입력 및 운전 조건에 따라 달라진다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-eco-40",
        "concept-eco-120"
      ],
      "linkedQuestionIds": [
        "auto-made-r02-s04-q17",
        "auto-made-r02-s04-q04"
      ],
      "sourceLabel": "학습 문제은행 · concept-eco-40 외 1문항",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-eco-036",
      "subject": "eco",
      "order": 36,
      "type": "term",
      "category": "전동기·충전·제어",
      "title": "EVCU",
      "subtitle": "전동기·충전·제어",
      "bullets": [
        "차량의 전기 구동 관련 제어를 통합·조정하는 제어장치는 EVCU이다.",
        "EVCU는 전기차 구동 제어를 조정한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-eco-41"
      ],
      "linkedQuestionIds": [
        "auto-made-r03-s04-q05"
      ],
      "sourceLabel": "학습 문제은행 · concept-eco-41",
      "examHitCount": 6,
      "examSampleRefs": [
        "auto-r01-s04-q05",
        "auto-r01-s04-q19",
        "auto-r02-s04-q05",
        "auto-r02-s04-q19",
        "auto-r03-s04-q05",
        "auto-r03-s04-q19"
      ],
      "importance": 3
    },
    {
      "id": "auto-card-eco-037",
      "subject": "eco",
      "order": 37,
      "type": "term",
      "category": "전동기·충전·제어",
      "title": "인버터 냉각계통",
      "subtitle": "전동기·충전·제어",
      "bullets": [
        "구동 인버터의 열 상태를 관리하는 기능은 전력 변환과 별도의 냉각 계통이다.",
        "인버터 성능과 보호를 위해 냉각 및 제어 상태를 확인한다.",
        "냉각계통의 공기 혼입은 순환에 영향을 줄 수 있다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-eco-47",
        "concept-eco-93"
      ],
      "linkedQuestionIds": [
        "auto-made-r03-s04-q13",
        "auto-made-r05-s04-q04"
      ],
      "sourceLabel": "학습 문제은행 · concept-eco-47 외 1문항",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-eco-038",
      "subject": "eco",
      "order": 38,
      "type": "term",
      "category": "전동기·충전·제어",
      "title": "인버터 과전류 보호",
      "subtitle": "전동기·충전·제어",
      "bullets": [
        "인버터 과전류가 감지될 때 보호 제어가 수행할 수 있는 조치는 출력 제한이다.",
        "과전류 보호는 출력 제한이나 정지로 장치를 보호할 수 있다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-eco-56"
      ],
      "linkedQuestionIds": [
        "auto-made-r04-s04-q19"
      ],
      "sourceLabel": "학습 문제은행 · concept-eco-56",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-eco-039",
      "subject": "eco",
      "order": 39,
      "type": "term",
      "category": "전동기·충전·제어",
      "title": "전동 컴프레서",
      "subtitle": "전동기·충전·제어",
      "bullets": [
        "엔진이 정지한 상태에서도 전기를 사용해 냉방을 유지할 수 있는 부품은 전동 컴프레서이다.",
        "전동 압축기는 엔진의 직접 구동과 독립적으로 작동 가능하다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-eco-58"
      ],
      "linkedQuestionIds": [
        "auto-made-r05-s04-q02"
      ],
      "sourceLabel": "학습 문제은행 · concept-eco-58",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-eco-040",
      "subject": "eco",
      "order": 40,
      "type": "term",
      "category": "전동기·충전·제어",
      "title": "리졸버",
      "subtitle": "전동기·충전·제어",
      "bullets": [
        "전기모터 회전자의 위치를 사인·코사인 신호 등으로 검출하는 센서는 리졸버이다.",
        "리졸버 피드백은 회전자 위치와 속도 추정에 쓰인다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-eco-62"
      ],
      "linkedQuestionIds": [
        "auto-made-r05-s04-q13"
      ],
      "sourceLabel": "학습 문제은행 · concept-eco-62",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-eco-041",
      "subject": "eco",
      "order": 41,
      "type": "term",
      "category": "전동기·충전·제어",
      "title": "토크 맥동",
      "subtitle": "전동기·충전·제어",
      "bullets": [
        "모터의 전자기적 불균형은 토크 변동의 원인 후보가 될 수 있다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-eco-66"
      ],
      "linkedQuestionIds": [
        "auto-made-r06-s04-q02"
      ],
      "sourceLabel": "학습 문제은행 · concept-eco-66",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-eco-042",
      "subject": "eco",
      "order": 42,
      "type": "term",
      "category": "전동기·충전·제어",
      "title": "CP 신호",
      "subtitle": "전동기·충전·제어",
      "bullets": [
        "Control Pilot 신호는 충전 가능 조건과 전류 허용 정보 전달에 쓰인다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [
        "Control Pilot"
      ],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-eco-71"
      ],
      "linkedQuestionIds": [
        "auto-made-r06-s04-q15"
      ],
      "sourceLabel": "학습 문제은행 · concept-eco-71",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-eco-043",
      "subject": "eco",
      "order": 43,
      "type": "term",
      "category": "전동기·충전·제어",
      "title": "전동기 저속 토크",
      "subtitle": "전동기·충전·제어",
      "bullets": [
        "구동 전동기는 설계와 제어 조건에 따라 저속 회전 영역에서 큰 토크를 활용할 수 있다.",
        "전동기는 저속 구동 영역에서 높은 토크를 제공할 수 있다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-eco-99"
      ],
      "linkedQuestionIds": [
        "auto-made-r08-s04-q15"
      ],
      "sourceLabel": "학습 문제은행 · concept-eco-99",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-eco-044",
      "subject": "eco",
      "order": 44,
      "type": "term",
      "category": "전동기·충전·제어",
      "title": "DTC와 실시간 상태값",
      "subtitle": "전동기·충전·제어",
      "bullets": [
        "전기차 구동 이상을 진단할 때 관련 ECU의 DTC와 함께 확인하는 데이터는 실시간 상태값이다.",
        "구동 제어 상태와 실제 운전 데이터를 함께 평가한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-eco-118"
      ],
      "linkedQuestionIds": [
        "auto-made-r01-s04-q08"
      ],
      "sourceLabel": "학습 문제은행 · concept-eco-118",
      "examHitCount": 1,
      "examSampleRefs": [
        "auto-r06-s04-q01"
      ],
      "importance": 2
    },
    {
      "id": "auto-card-eco-045",
      "subject": "eco",
      "order": 45,
      "type": "term",
      "category": "전동기·충전·제어",
      "title": "구동·회생 전력 제한",
      "subtitle": "전동기·충전·제어",
      "bullets": [
        "전원에서 공급할 수 있는 전력에 맞춰 구동 출력을 제한할 수 있다.",
        "토크·전력·운전 조건을 함께 확인해야 한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-eco-125",
        "concept-eco-127"
      ],
      "linkedQuestionIds": [
        "auto-made-r02-s04-q19",
        "auto-made-r03-s04-q04"
      ],
      "sourceLabel": "학습 문제은행 · concept-eco-125 외 1문항",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-eco-046",
      "subject": "eco",
      "order": 46,
      "type": "term",
      "category": "전동기·충전·제어",
      "title": "수랭식 구동모터",
      "subtitle": "전동기·충전·제어",
      "bullets": [
        "수랭식 구동모터의 정비에서는 고전압 안전 외에 냉각 회로 연결 상태도 확인한다.",
        "모터 구조에 따라 냉각과 기계적 장착 조건도 고려한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-eco-126"
      ],
      "linkedQuestionIds": [
        "auto-made-r03-s04-q03"
      ],
      "sourceLabel": "학습 문제은행 · concept-eco-126",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-eco-047",
      "subject": "eco",
      "order": 47,
      "type": "term",
      "category": "전동기·충전·제어",
      "title": "하이브리드 제어기 통신·학습",
      "subtitle": "전동기·충전·제어",
      "bullets": [
        "하이브리드 동력 전환 이상은 단일 ECU 외에도 관련 제어기 사이의 통신·협조 문제인지 확인한다.",
        "여러 제어기의 상태와 협조 명령을 비교한다.",
        "제어기 설정 및 학습은 차량 설계에 따라 다르다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-eco-129",
        "concept-eco-134"
      ],
      "linkedQuestionIds": [
        "auto-made-r03-s04-q12",
        "auto-made-r04-s04-q11"
      ],
      "sourceLabel": "학습 문제은행 · concept-eco-129 외 1문항",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-eco-048",
      "subject": "eco",
      "order": 48,
      "type": "concept",
      "category": "전동기·충전·제어",
      "title": "AC 충전 불량 진단",
      "subtitle": "전동기·충전·제어",
      "bullets": [
        "교류 완속충전이 안 될 때 OBC 입력·출력과 함께 확인할 제어 조건은 충전 허가이다.",
        "충전기와 차량의 허가 조건 및 BMS 제한을 비교한다.",
        "연결 상태와 충전 보호 조건을 확인한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-eco-131",
        "concept-eco-139"
      ],
      "linkedQuestionIds": [
        "auto-made-r04-s04-q05",
        "auto-made-r05-s04-q09"
      ],
      "sourceLabel": "학습 문제은행 · concept-eco-131 외 1문항",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-eco-049",
      "subject": "eco",
      "order": 49,
      "type": "term",
      "category": "전동기·충전·제어",
      "title": "12V 보조전원",
      "subtitle": "전동기·충전·제어",
      "bullets": [
        "전기차 진단 포트 통신이 불가능할 때 고전압 팩보다 먼저 확인할 수 있는 제어기 공통 공급전원은 12V 보조전원 계통이다.",
        "보조전원·접지·진단 포트는 통신의 기본 조건이다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-eco-142"
      ],
      "linkedQuestionIds": [
        "auto-made-r06-s04-q01"
      ],
      "sourceLabel": "학습 문제은행 · concept-eco-142",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-eco-050",
      "subject": "eco",
      "order": 50,
      "type": "term",
      "category": "전동기·충전·제어",
      "title": "충전 규격 호환성",
      "subtitle": "전동기·충전·제어",
      "bullets": [
        "전기차 충전기 선택 시 AC/DC 방식 외에 차량과 충전기의 충전 규격 호환성을 확인한다.",
        "충전 규격은 지역과 차량·충전기 방식에 따라 달라진다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-eco-147"
      ],
      "linkedQuestionIds": [
        "auto-made-r07-s04-q08"
      ],
      "sourceLabel": "학습 문제은행 · concept-eco-147",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-eco-051",
      "subject": "eco",
      "order": 51,
      "type": "term",
      "category": "연료전지·대체연료",
      "title": "연료전지 스택",
      "subtitle": "연료전지·대체연료",
      "bullets": [
        "연료전지 스택은 전기화학 반응으로 전력을 생성하며 주된 부산물은 물이다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-eco-12"
      ],
      "linkedQuestionIds": [
        "original-eco-19"
      ],
      "sourceLabel": "학습 문제은행 · concept-eco-12",
      "examHitCount": 13,
      "examSampleRefs": [
        "original-eco-19",
        "auto-r01-s04-q10",
        "auto-r02-s04-q10",
        "auto-r04-s04-q17",
        "auto-r06-s04-q17",
        "auto-r06-s04-q18",
        "auto-r07-s04-q15",
        "auto-r07-s04-q17"
      ],
      "importance": 5
    },
    {
      "id": "auto-card-eco-052",
      "subject": "eco",
      "order": 52,
      "type": "term",
      "category": "연료전지·대체연료",
      "title": "PEM 연료전지 캐소드",
      "subtitle": "연료전지·대체연료",
      "bullets": [
        "PEM 연료전지에서 산소의 환원 반응이 일어나는 전극은 캐소드이다.",
        "캐소드에서 산소와 양성자, 전자가 반응해 물을 만든다.",
        "수소와 산소의 반응으로 물과 전기, 열이 생성된다.",
        "캐소드에서 산소 환원으로 물이 생성된다. 애노드에서는 수소가 산화된다. 캐소드 반응식은 O₂+4H⁺+4e⁻→2H₂O이다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-eco-25",
        "concept-eco-45",
        "original-eco-26"
      ],
      "linkedQuestionIds": [
        "original-eco-26",
        "auto-made-r03-s04-q10"
      ],
      "sourceLabel": "학습 문제은행 · concept-eco-25 외 2문항",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-eco-053",
      "subject": "eco",
      "order": 53,
      "type": "term",
      "category": "연료전지·대체연료",
      "title": "PEM 연료전지 애노드",
      "subtitle": "연료전지·대체연료",
      "bullets": [
        "PEM 연료전지에서 수소가 산화되는 전극은 애노드이다.",
        "애노드에서 수소가 양성자와 전자로 분리된다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-eco-31"
      ],
      "linkedQuestionIds": [
        "auto-made-r01-s04-q10"
      ],
      "sourceLabel": "학습 문제은행 · concept-eco-31",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-eco-054",
      "subject": "eco",
      "order": 54,
      "type": "term",
      "category": "연료전지·대체연료",
      "title": "연료전지 외부 회로 전자",
      "subtitle": "연료전지·대체연료",
      "bullets": [
        "애노드에서 수소가 산화되면 전자는 외부 회로를 통해 이동하고 양성자는 막을 통과한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-eco-116"
      ],
      "linkedQuestionIds": [
        "original-eco-26"
      ],
      "sourceLabel": "학습 문제은행 · concept-eco-116",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-eco-055",
      "subject": "eco",
      "order": 55,
      "type": "term",
      "category": "연료전지·대체연료",
      "title": "TPRD",
      "subtitle": "연료전지·대체연료",
      "bullets": [
        "수소 저장 용기가 과도한 열에 노출될 때 열에 의해 작동하는 안전방출장치는 TPRD이다.",
        "TPRD는 열 작동식 압력 방출장치다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-eco-37"
      ],
      "linkedQuestionIds": [
        "auto-made-r02-s04-q09"
      ],
      "sourceLabel": "학습 문제은행 · concept-eco-37",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-eco-056",
      "subject": "eco",
      "order": 56,
      "type": "term",
      "category": "연료전지·대체연료",
      "title": "수소 가스 센서",
      "subtitle": "연료전지·대체연료",
      "bullets": [
        "수소 누출 여부를 감지하는 전용 검출 장비의 핵심 부품은 수소 가스 센서이다.",
        "수소 전용 센서를 사용해 누출 위험을 판단한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-eco-44"
      ],
      "linkedQuestionIds": [
        "auto-made-r03-s04-q09"
      ],
      "sourceLabel": "학습 문제은행 · concept-eco-44",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-eco-057",
      "subject": "eco",
      "order": 57,
      "type": "term",
      "category": "연료전지·대체연료",
      "title": "연료전지 공기 압축기",
      "subtitle": "연료전지·대체연료",
      "bullets": [
        "연료전지 캐소드에 필요한 산소를 포함한 공기를 공급하는 대표 구동 부품은 공기 압축기이다.",
        "공기 압축기는 스택에 필요한 공기 공급을 돕는다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-eco-52"
      ],
      "linkedQuestionIds": [
        "auto-made-r04-s04-q12"
      ],
      "sourceLabel": "학습 문제은행 · concept-eco-52",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-eco-058",
      "subject": "eco",
      "order": 58,
      "type": "term",
      "category": "연료전지·대체연료",
      "title": "막 수분 관리와 플러딩",
      "subtitle": "연료전지·대체연료",
      "bullets": [
        "PEM 연료전지에서 전해질막의 양성자 전도성 유지를 위해 중요한 관리 요소는 막 수분이다.",
        "적절한 막 가습과 물 배출을 관리해야 한다.",
        "수분 관리는 막 가습과 과도한 물 축적 방지를 함께 고려한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-eco-54",
        "concept-eco-135"
      ],
      "linkedQuestionIds": [
        "auto-made-r04-s04-q15"
      ],
      "sourceLabel": "학습 문제은행 · concept-eco-54 외 1문항",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-eco-059",
      "subject": "eco",
      "order": 59,
      "type": "term",
      "category": "연료전지·대체연료",
      "title": "애노드 퍼지",
      "subtitle": "연료전지·대체연료",
      "bullets": [
        "PEM 스택의 애노드 쪽 축적된 비반응 기체와 수분을 배출·관리하는 과정은 애노드 퍼지이다.",
        "퍼지는 애노드의 반응 환경 유지에 기여한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-eco-70"
      ],
      "linkedQuestionIds": [
        "auto-made-r06-s04-q13"
      ],
      "sourceLabel": "학습 문제은행 · concept-eco-70",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-eco-060",
      "subject": "eco",
      "order": 60,
      "type": "term",
      "category": "연료전지·대체연료",
      "title": "수소 감압 레귤레이터",
      "subtitle": "연료전지·대체연료",
      "bullets": [
        "저장용기의 고압 수소를 공급계통 요구 압력으로 낮추는 장치는 감압 레귤레이터이다.",
        "감압기는 저장계와 연료전지 공급계 사이 압력을 제어한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-eco-72"
      ],
      "linkedQuestionIds": [
        "auto-made-r06-s04-q16"
      ],
      "sourceLabel": "학습 문제은행 · concept-eco-72",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-eco-061",
      "subject": "eco",
      "order": 61,
      "type": "term",
      "category": "연료전지·대체연료",
      "title": "MEA",
      "subtitle": "연료전지·대체연료",
      "bullets": [
        "PEM 연료전지의 막과 전극을 결합한 핵심 조립체는 MEA이다.",
        "MEA는 막전극접합체로 전기화학 반응의 핵심 구성이다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-eco-75"
      ],
      "linkedQuestionIds": [
        "auto-made-r07-s04-q17"
      ],
      "sourceLabel": "학습 문제은행 · concept-eco-75",
      "examHitCount": 1,
      "examSampleRefs": [
        "auto-r07-s04-q17"
      ],
      "importance": 2
    },
    {
      "id": "auto-card-eco-062",
      "subject": "eco",
      "order": 62,
      "type": "term",
      "category": "연료전지·대체연료",
      "title": "수소 충전 압력·온도 조건",
      "subtitle": "연료전지·대체연료",
      "bullets": [
        "고압 수소 저장용기에 수소를 공급할 때 유동을 만드는 기본적인 물리적 조건은 압력 차이이다.",
        "충전 설비는 압력 차와 온도 등 조건을 제어한다.",
        "수소 충전은 저장용기의 압력과 온도 조건을 고려한다.",
        "압력 등급과 지정 충전 조건을 확인한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-eco-30",
        "concept-eco-55",
        "concept-eco-150"
      ],
      "linkedQuestionIds": [
        "auto-made-r01-s04-q09",
        "auto-made-r04-s04-q16",
        "auto-made-r07-s04-q16"
      ],
      "sourceLabel": "학습 문제은행 · concept-eco-30 외 2문항",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-eco-063",
      "subject": "eco",
      "order": 63,
      "type": "term",
      "category": "연료전지·대체연료",
      "title": "스택 온도와 셀 전압 편차",
      "subtitle": "연료전지·대체연료",
      "bullets": [
        "스택 성능은 수소·산소 공급, 물 관리, 온도 등 운전 조건에 영향을 받는다.",
        "셀별 전압은 스택 내 불균형을 파악하는 자료다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-eco-98",
        "concept-eco-145"
      ],
      "linkedQuestionIds": [
        "auto-made-r07-s04-q19",
        "auto-made-r06-s04-q18"
      ],
      "sourceLabel": "학습 문제은행 · concept-eco-98 외 1문항",
      "examHitCount": 1,
      "examSampleRefs": [
        "auto-r06-s04-q08"
      ],
      "importance": 2
    },
    {
      "id": "auto-card-eco-064",
      "subject": "eco",
      "order": 64,
      "type": "term",
      "category": "연료전지·대체연료",
      "title": "바이오디젤 전이에스터화",
      "subtitle": "연료전지·대체연료",
      "bullets": [
        "유지와 메탄올의 전이에스터화로 바이오디젤을 생산할 때 발생하는 부산물은 글리세롤이다.",
        "지방산 메틸에스터와 글리세롤이 생성된다.",
        "전이에스터화는 유지와 알코올을 반응시켜 에스터를 생성한다.",
        "트라이글리세라이드와 메탄올의 전이에스터화에서 지방산 메틸에스터와 글리세롤이 생성된다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-eco-26",
        "concept-eco-57",
        "original-eco-27"
      ],
      "linkedQuestionIds": [
        "original-eco-27",
        "auto-made-r04-s04-q20"
      ],
      "sourceLabel": "학습 문제은행 · concept-eco-26 외 2문항",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-eco-065",
      "subject": "eco",
      "order": 65,
      "type": "term",
      "category": "연료전지·대체연료",
      "title": "바이오디젤 원료",
      "subtitle": "연료전지·대체연료",
      "bullets": [
        "바이오디젤 제조에 쓰이는 대표 원료는 식물성 유지이다.",
        "유지류를 화학적으로 전환해 바이오디젤을 만들 수 있다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-eco-32"
      ],
      "linkedQuestionIds": [
        "auto-made-r01-s04-q11"
      ],
      "sourceLabel": "학습 문제은행 · concept-eco-32",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-eco-066",
      "subject": "eco",
      "order": 66,
      "type": "term",
      "category": "연료전지·대체연료",
      "title": "B100",
      "subtitle": "연료전지·대체연료",
      "bullets": [
        "B100은 비혼합 바이오디젤을 뜻하며 모든 차량에서 사용 가능한 것은 아니다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-eco-76"
      ],
      "linkedQuestionIds": [
        "auto-made-r07-s04-q20"
      ],
      "sourceLabel": "학습 문제은행 · concept-eco-76",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-eco-067",
      "subject": "eco",
      "order": 67,
      "type": "term",
      "category": "연료전지·대체연료",
      "title": "전과정 평가",
      "subtitle": "연료전지·대체연료",
      "bullets": [
        "바이오연료의 온실가스 감축 효과를 생산부터 사용까지 평가하는 방식은 전과정 평가이다.",
        "원료 생산과 가공 등 전체 과정에 따라 효과가 달라진다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-eco-46"
      ],
      "linkedQuestionIds": [
        "auto-made-r03-s04-q11"
      ],
      "sourceLabel": "학습 문제은행 · concept-eco-46",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-eco-068",
      "subject": "eco",
      "order": 68,
      "type": "term",
      "category": "고전압·수소 안전",
      "title": "고전압 케이블 식별",
      "subtitle": "고전압·수소 안전",
      "bullets": [
        "많은 전기차에서 고전압 케이블을 식별하기 위해 사용하는 대표적인 피복 색은 주황색이다.",
        "색상은 식별용이며 무전압 여부를 증명하지 않는다.",
        "피복 색은 식별용이며 실제 전압 상태를 보증하지 않는다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-eco-16",
        "concept-eco-112"
      ],
      "linkedQuestionIds": [
        "original-eco-13"
      ],
      "sourceLabel": "학습 문제은행 · concept-eco-16 외 1문항",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-eco-069",
      "subject": "eco",
      "order": 69,
      "type": "term",
      "category": "고전압·수소 안전",
      "title": "절연저항 감시",
      "subtitle": "고전압·수소 안전",
      "bullets": [
        "고전압 절연 감시는 누설과 감전 위험을 파악하기 위한 기능이다.",
        "고전압 회로와 차체 간 절연 이상을 파악한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-eco-17",
        "concept-eco-114"
      ],
      "linkedQuestionIds": [
        "original-eco-16"
      ],
      "sourceLabel": "학습 문제은행 · concept-eco-17 외 1문항",
      "examHitCount": 1,
      "examSampleRefs": [
        "original-eco-16"
      ],
      "importance": 2
    },
    {
      "id": "auto-card-eco-070",
      "subject": "eco",
      "order": 70,
      "type": "term",
      "category": "고전압·수소 안전",
      "title": "절연장갑",
      "subtitle": "고전압·수소 안전",
      "bullets": [
        "고전압 작업용 절연장갑을 선택할 때 해당 회로와 대조하는 보호구의 핵심 사양은 전압 등급이다.",
        "절연 보호구는 정격과 상태가 작업 조건에 적합해야 한다.",
        "육안 확인 및 규정된 누설·유효시험 상태를 점검한다.",
        "보호구는 유효한 검사 상태와 적정 정격을 확인한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-eco-28",
        "concept-eco-50",
        "concept-eco-133"
      ],
      "linkedQuestionIds": [
        "auto-made-r01-s04-q01",
        "auto-made-r04-s04-q07"
      ],
      "sourceLabel": "학습 문제은행 · concept-eco-28 외 2문항",
      "examHitCount": 13,
      "examSampleRefs": [
        "auto-r01-s04-q01",
        "auto-r01-s04-q02",
        "auto-r01-s04-q03",
        "auto-r01-s04-q06",
        "auto-r02-s04-q02",
        "auto-r02-s04-q15",
        "auto-r02-s04-q16",
        "auto-r04-s04-q01"
      ],
      "importance": 5
    },
    {
      "id": "auto-card-eco-071",
      "subject": "eco",
      "order": 71,
      "type": "term",
      "category": "고전압·수소 안전",
      "title": "고전압 격리와 무전압 확인",
      "subtitle": "고전압·수소 안전",
      "bullets": [
        "고전압 전원을 차단한 뒤 안전 상태를 별도로 검증하는 필수 단계는 무전압 확인이다.",
        "고전압 차단과 무전압 검증은 서로 다른 단계다.",
        "전원 표시와 실제 무전압 검증은 별개이다.",
        "전원 차단 후 지정 대기 및 무전압 검증이 필요하다.",
        "지정 대기와 검전 절차를 거쳐야 한다.",
        "고전압 장치는 감전·아크 위험이 있으므로 전문 교육과 제조사 정비절차에 따른 차단, 대기, 무전압 검증 등이 필요하다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-eco-35",
        "concept-eco-92",
        "concept-eco-113",
        "concept-eco-138",
        "original-eco-14"
      ],
      "linkedQuestionIds": [
        "auto-made-r01-s04-q16",
        "auto-made-r04-s04-q03",
        "original-eco-14",
        "auto-made-r05-s04-q07"
      ],
      "sourceLabel": "학습 문제은행 · concept-eco-35 외 4문항",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-eco-072",
      "subject": "eco",
      "order": 72,
      "type": "term",
      "category": "고전압·수소 안전",
      "title": "HVIL",
      "subtitle": "고전압·수소 안전",
      "bullets": [
        "HVIL은 연결부 감시에 사용하며 무전압 검증을 대체하지 않는다.",
        "인터록 개방은 연결 이상을 검출하여 보호 제어를 유발할 수 있다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-eco-39",
        "concept-eco-90"
      ],
      "linkedQuestionIds": [
        "auto-made-r02-s04-q15",
        "auto-made-r03-s04-q15"
      ],
      "sourceLabel": "학습 문제은행 · concept-eco-39 외 1문항",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-eco-073",
      "subject": "eco",
      "order": 73,
      "type": "term",
      "category": "고전압·수소 안전",
      "title": "금속 장신구와 고전압 위험",
      "subtitle": "고전압·수소 안전",
      "bullets": [
        "고전압 작업 시 단락 및 감전 위험을 줄이기 위해 제거하는 개인 물품은 금속 장신구이다.",
        "도전성 장신구는 고전압 작업에 위험을 더할 수 있다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-eco-42"
      ],
      "linkedQuestionIds": [
        "auto-made-r03-s04-q06"
      ],
      "sourceLabel": "학습 문제은행 · concept-eco-42",
      "examHitCount": 1,
      "examSampleRefs": [
        "auto-r03-s04-q06"
      ],
      "importance": 2
    },
    {
      "id": "auto-card-eco-074",
      "subject": "eco",
      "order": 74,
      "type": "term",
      "category": "고전압·수소 안전",
      "title": "절연저항계",
      "subtitle": "고전압·수소 안전",
      "bullets": [
        "고전압 회로의 절연 상태를 제작사 지정 시험 조건에서 평가하는 계측기는 절연저항계이다.",
        "시험 전압과 회로 조건에 맞는 절연저항계를 사용한다.",
        "절연시험은 지정 회로 분리 및 시험전압 조건을 따른다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-eco-43",
        "concept-eco-128"
      ],
      "linkedQuestionIds": [
        "auto-made-r03-s04-q08"
      ],
      "sourceLabel": "학습 문제은행 · concept-eco-43 외 1문항",
      "examHitCount": 1,
      "examSampleRefs": [
        "auto-r04-s04-q04"
      ],
      "importance": 2
    },
    {
      "id": "auto-card-eco-075",
      "subject": "eco",
      "order": 75,
      "type": "term",
      "category": "고전압·수소 안전",
      "title": "고전압 계측기 정격",
      "subtitle": "고전압·수소 안전",
      "bullets": [
        "회로를 삽입형 계기로 끊지 않고 정격에 맞는 직류 전류를 검출하는 계측기 유형은 DC 클램프 전류계이다.",
        "고전압 전류 측정은 정격 장비와 지정 절차가 필요하다.",
        "계측기의 전압 정격과 지정 절차가 안전의 기본이다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-eco-67",
        "concept-eco-94"
      ],
      "linkedQuestionIds": [
        "auto-made-r06-s04-q06",
        "auto-made-r06-s04-q04"
      ],
      "sourceLabel": "학습 문제은행 · concept-eco-67 외 1문항",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-eco-076",
      "subject": "eco",
      "order": 76,
      "type": "term",
      "category": "고전압·수소 안전",
      "title": "퓨저블 링크",
      "subtitle": "고전압·수소 안전",
      "bullets": [
        "고전압 전원 회로에서 과전류에 의해 회로를 보호하는 소모성 보호 부품은 퓨저블 링크이다.",
        "퓨저블 링크는 규정 과전류에서 회로를 차단한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-eco-68"
      ],
      "linkedQuestionIds": [
        "auto-made-r06-s04-q07"
      ],
      "sourceLabel": "학습 문제은행 · concept-eco-68",
      "examHitCount": 1,
      "examSampleRefs": [
        "auto-r06-s04-q07"
      ],
      "importance": 2
    },
    {
      "id": "auto-card-eco-077",
      "subject": "eco",
      "order": 77,
      "type": "term",
      "category": "고전압·수소 안전",
      "title": "충전설비 누전 보호",
      "subtitle": "고전압·수소 안전",
      "bullets": [
        "충전 설비 설치 시 접지와 함께 전기 누설 위험을 줄이는 보호 기능은 누전 보호이다.",
        "충전 설비의 안전은 적합한 보호장치와 접지 등을 필요로 한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-eco-69"
      ],
      "linkedQuestionIds": [
        "auto-made-r06-s04-q09"
      ],
      "sourceLabel": "학습 문제은행 · concept-eco-69",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-eco-078",
      "subject": "eco",
      "order": 78,
      "type": "term",
      "category": "고전압·수소 안전",
      "title": "전기 아크",
      "subtitle": "고전압·수소 안전",
      "bullets": [
        "고전압 계통은 전기적 방전에 의한 위험도 있어 전문 절차가 필요하다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-eco-86"
      ],
      "linkedQuestionIds": [
        "original-eco-14"
      ],
      "sourceLabel": "학습 문제은행 · concept-eco-86",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-eco-079",
      "subject": "eco",
      "order": 79,
      "type": "term",
      "category": "고전압·수소 안전",
      "title": "무전원 저항 측정",
      "subtitle": "고전압·수소 안전",
      "bullets": [
        "연속성 측정은 적절히 전원이 차단된 회로에서 지정 절차에 따라 실시한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-eco-96"
      ],
      "linkedQuestionIds": [
        "auto-made-r06-s04-q11"
      ],
      "sourceLabel": "학습 문제은행 · concept-eco-96",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-eco-080",
      "subject": "eco",
      "order": 80,
      "type": "term",
      "category": "고전압·수소 안전",
      "title": "수소 누출 안전",
      "subtitle": "고전압·수소 안전",
      "bullets": [
        "수소는 가연성이 있으므로 누설을 확인하는 목적으로 불꽃을 사용하면 안 된다.",
        "불꽃은 수소에 점화될 위험이 있으므로 사용하지 않는다.",
        "누출 가능성은 안전을 확보하고 전문 절차에 따라 대응한다.",
        "전문 진단에서는 검지기 신호와 배선 및 DTC를 확인한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-eco-119",
        "concept-eco-136",
        "concept-eco-141"
      ],
      "linkedQuestionIds": [
        "auto-made-r01-s04-q20",
        "auto-made-r04-s04-q17",
        "auto-made-r05-s04-q17"
      ],
      "sourceLabel": "학습 문제은행 · concept-eco-119 외 2문항",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-eco-081",
      "subject": "eco",
      "order": 81,
      "type": "term",
      "category": "고전압·수소 안전",
      "title": "고전압 이상 시 안전 격리",
      "subtitle": "고전압·수소 안전",
      "bullets": [
        "고전압 구동 계통의 심각한 경고가 발생하면 계속 운행하기보다 우선 안전한 정지을 확보한다.",
        "안전한 정지 후 지정 진단 절차에 따른다.",
        "안전 상태를 확보하고 절연 이상 원인을 진단한다.",
        "제작사 절차에 따라 절연과 안전 조건을 확인한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-eco-122",
        "concept-eco-130",
        "concept-eco-132"
      ],
      "linkedQuestionIds": [
        "auto-made-r02-s04-q12",
        "auto-made-r03-s04-q16",
        "auto-made-r04-s04-q06"
      ],
      "sourceLabel": "학습 문제은행 · concept-eco-122 외 2문항",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-eco-082",
      "subject": "eco",
      "order": 82,
      "type": "term",
      "category": "고전압·수소 안전",
      "title": "고전압 작업 구역 통제",
      "subtitle": "고전압·수소 안전",
      "bullets": [
        "고전압 정비 구역에서 작업자 외 사람의 접근을 막기 위한 기본 관리는 작업 구역 표시·통제이다.",
        "표시와 출입 통제, 정격 장비 및 절차 준수가 필요하다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-eco-124"
      ],
      "linkedQuestionIds": [
        "auto-made-r02-s04-q16"
      ],
      "sourceLabel": "학습 문제은행 · concept-eco-124",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-eco-083",
      "subject": "eco",
      "order": 83,
      "type": "term",
      "category": "고전압·수소 안전",
      "title": "전기차 화재 대피·신고",
      "subtitle": "고전압·수소 안전",
      "bullets": [
        "전기차 화재 발생 시 일반인의 우선 행동은 접근하여 고전압 부품을 조작하는 것이 아니라 대피 및 신고이다.",
        "차량에서 떨어져 안전을 확보하고 신고한다."
      ],
      "formula": "",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-eco-148"
      ],
      "linkedQuestionIds": [
        "auto-made-r07-s04-q11"
      ],
      "sourceLabel": "학습 문제은행 · concept-eco-148",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-eco-084",
      "subject": "eco",
      "order": 84,
      "type": "formula",
      "category": "계산 공식",
      "title": "거리당 소비 에너지",
      "subtitle": "계산 공식",
      "bullets": [
        "16×50÷100=8kWh이다.",
        "거리당 소비량이 일정하다는 가정에서 18×50÷100=9kWh이다."
      ],
      "formula": "소비 에너지 = 100km당 소비량 × 주행거리 ÷ 100",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-eco-20",
        "original-eco-21"
      ],
      "linkedQuestionIds": [
        "original-eco-21"
      ],
      "sourceLabel": "학습 문제은행 · concept-eco-20 외 1문항",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-eco-085",
      "subject": "eco",
      "order": 85,
      "type": "formula",
      "category": "계산 공식",
      "title": "충전 에너지와 시간",
      "subtitle": "계산 공식",
      "bullets": [
        "저장 에너지 증가량은 실제 저장 전력×시간이다.",
        "30분=0.5시간이며 8×0.5=4kWh이다.",
        "에너지 증가량은 저장 에너지의 시간당 증가율(전력)×시간이다. 6kW×3h=18kWh이다. 외부 충전기 입력전력과 실제 저장 에너지 증가율은 충전 손실 때문에 다를 수 있다.",
        "시간=에너지/저장전력=45÷9=5h이다."
      ],
      "formula": "E = P × t (kWh, kW, h)",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-eco-21",
        "concept-eco-97",
        "original-eco-22",
        "concept-eco-161"
      ],
      "linkedQuestionIds": [
        "original-eco-22",
        "auto-made-r06-s04-q19"
      ],
      "sourceLabel": "학습 문제은행 · concept-eco-21 외 3문항",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-eco-086",
      "subject": "eco",
      "order": 86,
      "type": "formula",
      "category": "계산 공식",
      "title": "질량당 에너지 밀도",
      "subtitle": "계산 공식",
      "bullets": [
        "60,000Wh÷300kg=200Wh/kg이다.",
        "50kWh=50,000Wh이다. 50,000÷250=200Wh/kg이다."
      ],
      "formula": "비에너지 = 에너지(Wh) ÷ 질량(kg)",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-eco-22",
        "original-eco-23"
      ],
      "linkedQuestionIds": [
        "original-eco-23"
      ],
      "sourceLabel": "학습 문제은행 · concept-eco-22 외 1문항",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-eco-087",
      "subject": "eco",
      "order": 87,
      "type": "formula",
      "category": "계산 공식",
      "title": "변환 효율과 입출력 전력",
      "subtitle": "계산 공식",
      "bullets": [
        "출력은 25×0.96=24kW이다.",
        "출력 전력은 입력 전력×효율이다. 20×0.95=19kW이며 손실 전력은 1kW이다.",
        "입력=출력/효율=24÷0.8=30kW이다."
      ],
      "formula": "η = P출력 ÷ P입력; P출력 = η × P입력",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-eco-23",
        "original-eco-24",
        "concept-eco-199"
      ],
      "linkedQuestionIds": [
        "original-eco-24",
        "auto-made-r05-s04-q10"
      ],
      "sourceLabel": "학습 문제은행 · concept-eco-23 외 2문항",
      "examHitCount": 2,
      "examSampleRefs": [
        "original-eco-24",
        "auto-r03-s04-q13"
      ],
      "importance": 2
    },
    {
      "id": "auto-card-eco-088",
      "subject": "eco",
      "order": 88,
      "type": "formula",
      "category": "계산 공식",
      "title": "회생제동 회수 에너지",
      "subtitle": "계산 공식",
      "bullets": [
        "250×0.40=100kJ이다.",
        "300×0.40=120kJ이다. 실제 회생제동에서는 배터리 수용 전력 및 제동 배분 등에 따라 저장량이 달라진다.",
        "저장되지 않은 양=240×(1−0.25)=180kJ이다."
      ],
      "formula": "저장 에너지 = 감소한 운동에너지 × 저장 효율",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-eco-24",
        "original-eco-25",
        "concept-eco-171"
      ],
      "linkedQuestionIds": [
        "original-eco-25"
      ],
      "sourceLabel": "학습 문제은행 · concept-eco-24 외 2문항",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-eco-089",
      "subject": "eco",
      "order": 89,
      "type": "formula",
      "category": "계산 공식",
      "title": "연료전지 직렬 스택 전압",
      "subtitle": "계산 공식",
      "bullets": [
        "직렬 전압은 각 셀 전압의 합이다.",
        "직렬 스택 전압은 셀 전압의 합이므로 150×0.6=90V이다.",
        "직렬 셀의 전압을 합산하면 240×0.65=156V이다. 실제 전압은 셀 상태와 부하에 따라 다르다."
      ],
      "formula": "스택 전압 = 단위 셀 전압 × 직렬 셀 수",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-eco-27",
        "concept-eco-80",
        "original-eco-28"
      ],
      "linkedQuestionIds": [
        "original-eco-28",
        "auto-made-r09-s04-q03"
      ],
      "sourceLabel": "학습 문제은행 · concept-eco-27 외 2문항",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-eco-090",
      "subject": "eco",
      "order": 90,
      "type": "formula",
      "category": "계산 공식",
      "title": "용량 기준 SOH",
      "subtitle": "계산 공식",
      "bullets": [
        "48÷60×100=80%이다.",
        "현재 가용 에너지=50×90/100=45kWh이다."
      ],
      "formula": "SOH = 현재 가용 에너지 ÷ 신품 가용 에너지 × 100%",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-eco-53",
        "concept-eco-181"
      ],
      "linkedQuestionIds": [
        "auto-made-r04-s04-q13"
      ],
      "sourceLabel": "학습 문제은행 · concept-eco-53 외 1문항",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-eco-091",
      "subject": "eco",
      "order": 91,
      "type": "formula",
      "category": "계산 공식",
      "title": "직렬 팩의 가용 전하량",
      "subtitle": "계산 공식",
      "bullets": [
        "직렬 연결에서 가용 전하량은 가장 작은 셀 용량의 제한을 받는다.",
        "직렬 팩의 가용 전하량은 최소 셀 용량 72Ah에 제한된다."
      ],
      "formula": "동일 조건에서 최소 셀 가용 전하량으로 제한",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-eco-60",
        "concept-eco-198"
      ],
      "linkedQuestionIds": [
        "auto-made-r05-s04-q08"
      ],
      "sourceLabel": "학습 문제은행 · concept-eco-60 외 1문항",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-eco-092",
      "subject": "eco",
      "order": 92,
      "type": "formula",
      "category": "계산 공식",
      "title": "수소 압력 단위 환산",
      "subtitle": "계산 공식",
      "bullets": [
        "1MPa=10bar이므로 70MPa=700bar이다.",
        "1MPa=10bar이므로 350÷10=35MPa이다."
      ],
      "formula": "1 MPa = 10 bar",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-eco-78",
        "concept-eco-191"
      ],
      "linkedQuestionIds": [
        "auto-made-r08-s04-q14"
      ],
      "sourceLabel": "학습 문제은행 · concept-eco-78 외 1문항",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-eco-093",
      "subject": "eco",
      "order": 93,
      "type": "formula",
      "category": "계산 공식",
      "title": "운동에너지 감소량",
      "subtitle": "계산 공식",
      "bullets": [
        "½×1,000×(400−100)=150,000J이다."
      ],
      "formula": "ΔE = ½m(v₁² − v₂²)",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-eco-79"
      ],
      "linkedQuestionIds": [
        "auto-made-r09-s04-q02"
      ],
      "sourceLabel": "학습 문제은행 · concept-eco-79",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-eco-094",
      "subject": "eco",
      "order": 94,
      "type": "formula",
      "category": "계산 공식",
      "title": "연료전지 순전력",
      "subtitle": "계산 공식",
      "bullets": [
        "순전력은 총 발전전력에서 보조장치 소비전력을 뺀 78kW이다."
      ],
      "formula": "순전력 = 총 발전전력 − 보조장치 소비전력",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-eco-85"
      ],
      "linkedQuestionIds": [
        "auto-made-r09-s04-q20"
      ],
      "sourceLabel": "학습 문제은행 · concept-eco-85",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-eco-095",
      "subject": "eco",
      "order": 95,
      "type": "formula",
      "category": "계산 공식",
      "title": "전력변환 손실",
      "subtitle": "계산 공식",
      "bullets": [
        "손실전력은 입력−출력=2kW이다."
      ],
      "formula": "손실전력 = 입력전력 − 출력전력",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-eco-88"
      ],
      "linkedQuestionIds": [
        "original-eco-24"
      ],
      "sourceLabel": "학습 문제은행 · concept-eco-88",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    },
    {
      "id": "auto-card-eco-096",
      "subject": "eco",
      "order": 96,
      "type": "formula",
      "category": "계산 공식",
      "title": "회생제동 저장 효율",
      "subtitle": "계산 공식",
      "bullets": [
        "효율은 실제 저장전력을 입력전력으로 나눈 값이므로 12÷20×100=60%이다."
      ],
      "formula": "효율 = 배터리 저장전력 ÷ 기계적 입력전력 × 100%",
      "visual": "none",
      "aliases": [],
      "sourceKind": "study-bank",
      "sourceQuestionIds": [
        "concept-eco-89"
      ],
      "linkedQuestionIds": [
        "original-eco-24"
      ],
      "sourceLabel": "학습 문제은행 · concept-eco-89",
      "examHitCount": 0,
      "examSampleRefs": [],
      "importance": 1
    }
  ]
};
