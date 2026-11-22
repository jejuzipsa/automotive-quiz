/* Independently written and reviewed practice questions based on automotive concepts.
 * These are NOT publisher OCR transcriptions. Source reference IDs identify topics only.
 * QA8 purchased-text OCR is kept separately for editorial review, not shipped to Pages.
 */
window.AUTO_REVIEWED_DATA = [
  {
    "id": "reviewed-engine-20261122-q01",
    "track": "expected",
    "subject": "engine",
    "round": 1,
    "source_reference_id": "auto-r01-s01-q01",
    "question": "차종별 정비지침을 확인해 밸브 간극을 측정하려고 한다. 먼저 확인해야 할 조건으로 가장 적절한 것은?",
    "choices": [
      "주행거리와 관계없이 임의로 0.2 mm를 적용한다",
      "규정 간극과 엔진의 냉간·열간 측정 조건을 함께 확인한다",
      "라디에이터 캡을 열어 압력을 제거한 뒤 측정한다",
      "모든 엔진은 운전 직후 고온에서만 측정한다"
    ],
    "answer": 2,
    "explanation": "밸브 간극은 엔진별 규정값뿐 아니라 측정 온도 조건이 중요해. 냉간과 열간 규정을 혼용하면 잘못 조정할 수 있으므로 해당 차량의 정비지침을 따라야 해.",
    "review_status": "approved",
    "publishable": true,
    "authoring": "independently_rewritten_and_technically_checked",
    "source_url": "https://lemon-manuals.la/Volvo/2014/S60%20T5%2C%20FWD/Repair%20and%20Diagnosis%20%28Single%20Page%29/General%20Information/Engine/Engine%20Overhaul%20Procedures%20-%20General%20Information/Cylinder%20Head%20Replacement/Valve%20Adjustment/",
    "verified_on": "2026-11-22",
    "qa_batch": "QA8-engine-rewrite-01"
  },
  {
    "id": "reviewed-engine-20261122-q02",
    "track": "expected",
    "subject": "engine",
    "round": 1,
    "source_reference_id": "auto-r01-s01-q02",
    "question": "배기가스로 작동하는 일반적인 터보차저의 에너지 전달 경로는 어느 것인가?",
    "choices": [
      "크랭크축 → 전동기 → 흡기 밸브",
      "배터리 → 점화코일 → 터빈",
      "배기가스 → 터빈 → 공통 축 → 흡기 압축기",
      "냉각수 → 워터펌프 → 압축기"
    ],
    "answer": 3,
    "explanation": "배기가스의 에너지가 터빈을 회전시키고, 연결된 축이 흡기 압축기를 돌려 더 많은 공기를 엔진에 공급해.",
    "review_status": "approved",
    "publishable": true,
    "authoring": "independently_rewritten_and_technically_checked",
    "source_url": "https://www.garrettmotion.com/knowledge-center-category/oem/basic/",
    "verified_on": "2026-11-22",
    "qa_batch": "QA8-engine-rewrite-01"
  },
  {
    "id": "reviewed-engine-20261122-q04",
    "track": "expected",
    "subject": "engine",
    "round": 1,
    "source_reference_id": "auto-r01-s01-q04",
    "question": "일반적인 OBD 진단기에서 확인하는 센서 데이터와 구별해야 할, 별도 물성 측정이 필요한 항목은?",
    "choices": [
      "엔진 회전수",
      "흡입 공기량",
      "냉각수 온도",
      "실제 엔진오일의 점도"
    ],
    "answer": 4,
    "explanation": "스캔 도구는 ECU가 제공하는 데이터를 읽어. 오일 점도 자체는 일반적인 OBD 실시간 데이터로 직접 측정하는 값이 아니며 별도 시험이나 측정이 필요해.",
    "review_status": "approved",
    "publishable": true,
    "authoring": "independently_rewritten_and_technically_checked",
    "source_url": "https://www.icarsoft.com/knowledge/article/how-to-read-scan-tool-live-data",
    "verified_on": "2026-11-22",
    "qa_batch": "QA8-engine-rewrite-01"
  },
  {
    "id": "reviewed-engine-20261122-q06",
    "track": "expected",
    "subject": "engine",
    "round": 1,
    "source_reference_id": "auto-r01-s01-q06",
    "question": "가솔린 엔진의 람다(산소) 센서가 혼합비 제어에 활용하도록 감지하는 물리량은?",
    "choices": [
      "엔진오일 내부의 수분량",
      "배기가스에 남아 있는 산소 함량",
      "연료탱크의 액면 높이",
      "흡기 필터의 먼지 무게"
    ],
    "answer": 2,
    "explanation": "람다 센서는 배기관의 배기가스 산소 성분을 감지하고 엔진 ECU는 이 신호를 공기·연료비 제어에 이용해. 연소실 안에서 혼합비를 직접 측정하는 장치는 아니야.",
    "review_status": "approved",
    "publishable": true,
    "authoring": "independently_rewritten_and_technically_checked",
    "source_url": "https://www.bosch-mobility.com/en/solutions/exhaust-gas-treatment/switching-type-lambda-sensor/",
    "verified_on": "2026-11-22",
    "qa_batch": "QA8-engine-rewrite-01"
  },
  {
    "id": "reviewed-engine-20261122-q07",
    "track": "expected",
    "subject": "engine",
    "round": 1,
    "source_reference_id": "auto-r01-s01-q07",
    "question": "점화계통을 점검할 때 고압 점화 불꽃의 발생 여부를 확인하는 데 직접 사용하는 기구는?",
    "choices": [
      "타이어 공기압 게이지",
      "냉각수 비중계",
      "스파크 테스터",
      "캠버 게이지"
    ],
    "answer": 3,
    "explanation": "스파크 테스터는 점화계통에 고전압 점화 불꽃이 발생하는지 확인할 때 사용해. 단, 불꽃이 관찰된다고 점화플러그의 모든 성능이 입증되는 것은 아니야.",
    "review_status": "approved",
    "publishable": true,
    "authoring": "independently_rewritten_and_technically_checked",
    "source_url": "https://www.boschautoparts.com/g/engine-management",
    "verified_on": "2026-11-22",
    "qa_batch": "QA8-engine-rewrite-01"
  },
  {
    "id": "reviewed-engine-20261122-q09",
    "track": "expected",
    "subject": "engine",
    "round": 1,
    "source_reference_id": "auto-r01-s01-q09",
    "question": "진단기가 엔진 ECU와 간헐적으로 통신하지 못하는 상황이다. 전자회로 고장을 단정하기 전에 확인할 기본 전기 조건은?",
    "choices": [
      "ECU 전원전압과 접지 상태",
      "타이어 제조 연도",
      "머플러 표면 색상",
      "변속기 기어비 표기"
    ],
    "answer": 1,
    "explanation": "ECU는 적절한 전원 공급과 접지가 있어야 작동해. 통신 불량에서는 고장코드만으로 ECU 교환을 결정하지 말고 전원·접지·통신배선을 기본 점검해야 해.",
    "review_status": "approved",
    "publishable": true,
    "authoring": "independently_rewritten_and_technically_checked",
    "source_url": "https://www.boschaftermarket.com/xrm/media/images/services/news_3/2023_08_bosch_sensors_campaign/sensor_brochure_en_cd2016_90955.pdf",
    "verified_on": "2026-11-22",
    "qa_batch": "QA8-engine-rewrite-01"
  },
  {
    "id": "reviewed-engine-20261122-q10",
    "track": "expected",
    "subject": "engine",
    "round": 1,
    "source_reference_id": "auto-r01-s01-q10",
    "question": "크랭크축 위치 센서(CKP)의 입력 신호가 엔진 제어에 중요한 주된 이유는?",
    "choices": [
      "타이어의 마모 깊이를 측정하기 때문에",
      "충전 커넥터의 온도만 측정하기 때문에",
      "냉각수의 부동액 농도를 직접 결정하기 때문에",
      "회전수와 회전 위치를 파악해 분사·점화 시기 계산에 활용하기 때문에"
    ],
    "answer": 4,
    "explanation": "CKP 센서는 크랭크축의 속도와 위치를 감지하고 ECU가 연료 분사나 점화 시기를 판단하는 데 기초 정보를 제공해.",
    "review_status": "approved",
    "publishable": true,
    "authoring": "independently_rewritten_and_technically_checked",
    "source_url": "https://www.boschaftermarket.com/xrm/media/images/services/news_3/2023_08_bosch_sensors_campaign/sensor_brochure_en_cd2016_90955.pdf",
    "verified_on": "2026-11-22",
    "qa_batch": "QA8-engine-rewrite-01"
  },
  {
    "id": "reviewed-engine-20261122-q11",
    "track": "expected",
    "subject": "engine",
    "round": 1,
    "source_reference_id": "auto-r01-s01-q11",
    "question": "실린더 압축압력이 낮게 측정됐다. 이 결과만으로 원인을 확정하지 않고 추가 진단해야 하는 이유는?",
    "choices": [
      "압축압력 수치는 타이어 공기압과 같은 값이기 때문에",
      "밸브 누설·피스톤 링 마모·가스켓 손상 등 여러 원인이 가능하기 때문에",
      "진단 결과가 항상 냉각수 부족만을 의미하기 때문에",
      "실린더 누설은 전기장치 고장일 때만 발생하기 때문에"
    ],
    "answer": 2,
    "explanation": "낮은 압축압력은 여러 기계적 원인으로 나타날 수 있어. 습식 압축시험이나 실린더 누설시험 등 추가 점검을 통해 누설 경로를 좁혀야 해.",
    "review_status": "approved",
    "publishable": true,
    "authoring": "independently_rewritten_and_technically_checked",
    "source_url": "https://ctoprework.lms.nnanet.com/tech/EngineMechanicalTextSection.pdf",
    "verified_on": "2026-11-22",
    "qa_batch": "QA8-engine-rewrite-01"
  },
  {
    "id": "reviewed-engine-20261122-q12",
    "track": "expected",
    "subject": "engine",
    "round": 1,
    "source_reference_id": "auto-r01-s01-q12",
    "question": "커먼레일 디젤 인젝터의 실제 분사량과 리턴 유량 등을 정밀하게 측정하려면 어떤 방식이 적절한가?",
    "choices": [
      "엔진오일 점도계를 인젝터에 연결한다",
      "휠 얼라인먼트 장비로 분사량을 계산한다",
      "해당 인젝터를 지원하는 전용 시험장비의 규정 절차를 사용한다",
      "배터리 테스터만으로 분사 패턴을 확정한다"
    ],
    "answer": 3,
    "explanation": "커먼레일 인젝터의 실제 분사량·리턴량 등을 평가하려면 지원 차종과 시험 조건이 맞는 전용 장비가 필요해. 일반 고장코드 조회만으로 분사 패턴을 직접 측정했다고 볼 수 없어.",
    "review_status": "approved",
    "publishable": true,
    "authoring": "independently_rewritten_and_technically_checked",
    "source_url": "https://www.boschaftermarket.com/me/en/equipment/test-equipment/test-benches-and-tools/dci-700/",
    "verified_on": "2026-11-22",
    "qa_batch": "QA8-engine-rewrite-01"
  },
  {
    "id": "reviewed-engine-20261122-q13",
    "track": "expected",
    "subject": "engine",
    "round": 1,
    "source_reference_id": "auto-r01-s01-q13",
    "question": "엔진 ECU 커넥터를 분리하는 작업에서 가장 적절한 정비 원칙은?",
    "choices": [
      "엔진이 가동 중인 상태로 배선을 당겨 분리한다",
      "무조건 모든 차량의 배터리를 동일한 순서로 탈거한다",
      "정비지침 없이 ECU 케이스를 먼저 개봉한다",
      "차종별 정비지침에 따른 전원 차단·대기 절차를 확인한다"
    ],
    "answer": 4,
    "explanation": "전자장치 분리·교환은 차량마다 전원 차단, 대기시간, 초기화 조건 등이 다를 수 있어. 정비지침을 먼저 확인하고 지정된 안전 절차에 따라야 해.",
    "review_status": "approved",
    "publishable": true,
    "authoring": "independently_rewritten_and_technically_checked",
    "source_url": "https://www.boschautoparts.com/g/engine-management",
    "verified_on": "2026-11-22",
    "qa_batch": "QA8-engine-rewrite-01"
  },
  {
    "id": "reviewed-engine-20261122-q14",
    "track": "expected",
    "subject": "engine",
    "round": 1,
    "source_reference_id": "auto-r01-s01-q14",
    "question": "엔진 과열 후 냉각수 점검 시 화상 위험을 줄이기 위한 올바른 행동은?",
    "choices": [
      "냉각계통이 충분히 식을 때까지 압력 캡을 열지 않는다",
      "고온 상태에서 압력 캡을 즉시 완전히 연다",
      "냉각팬이 도는 동안 라디에이터에 손을 넣는다",
      "냉각수 온도와 관계없이 손으로 호스를 분리한다"
    ],
    "answer": 1,
    "explanation": "뜨겁고 압력이 걸린 냉각계통의 캡을 열면 냉각수가 분출해 심한 화상을 입을 수 있어. 냉각 후 제조사의 점검 절차를 따라야 해.",
    "review_status": "approved",
    "publishable": true,
    "authoring": "independently_rewritten_and_technically_checked",
    "source_url": "https://techinfo.honda.com/rjanisis/pubs/QS/AH/ATBA1919GW/enu/GUID-90619085-63C6-41D9-AA72-7481A26EC065.html",
    "verified_on": "2026-11-22",
    "qa_batch": "QA8-engine-rewrite-01"
  },
  {
    "id": "reviewed-engine-20261122-q15",
    "track": "expected",
    "subject": "engine",
    "round": 1,
    "source_reference_id": "auto-r01-s01-q15",
    "question": "디젤 차량의 연료필터를 교환한 뒤 시동성이 나빠졌다. 연료계통에 공기가 유입된 상황에서 적절한 조치는?",
    "choices": [
      "인젝터의 전기 커넥터를 임의로 단락한다",
      "제조사가 지정한 프라이밍 또는 공기빼기 절차를 확인한다",
      "브레이크액을 연료통에 보충한다",
      "고압 연료관을 가동 중 무조건 풀어 공기를 뺀다"
    ],
    "answer": 2,
    "explanation": "일부 디젤 연료계통은 필터 교환 후 프라이밍이나 공기빼기가 필요해. 계통별 절차가 다르고 고압 연료는 위험하므로 제조사 지침대로 처리해야 해.",
    "review_status": "approved",
    "publishable": true,
    "authoring": "independently_rewritten_and_technically_checked",
    "source_url": "https://manuals.sucatisse.com/n14/ma/ma-54",
    "verified_on": "2026-11-22",
    "qa_batch": "QA8-engine-rewrite-01"
  },
  {
    "id": "reviewed-engine-20261122-q16",
    "track": "expected",
    "subject": "engine",
    "round": 1,
    "source_reference_id": "auto-r01-s01-q16",
    "question": "압축압력 측정 결과가 모든 실린더에서 비슷하게 낮다. 원인을 추적할 때 올바른 판단은?",
    "choices": [
      "헤드 가스켓 파손으로 즉시 확정한다",
      "인젝터 고장으로 즉시 확정한다",
      "측정 조건과 밸브 타이밍 등을 먼저 확인하고 추가 진단한다",
      "모든 실린더가 정상이라고 판정한다"
    ],
    "answer": 3,
    "explanation": "모든 실린더에서 비슷하게 낮은 압축압력이 나온다고 헤드 가스켓만을 원인으로 단정할 수 없어. 측정 조건, 밸브 타이밍, 링·실린더 마모 가능성을 단계적으로 점검해야 해.",
    "review_status": "approved",
    "publishable": true,
    "authoring": "independently_rewritten_and_technically_checked",
    "source_url": "https://thelostartof.net/gsellstr/ASE%20Stuff/booka1.pdf",
    "verified_on": "2026-11-22",
    "qa_batch": "QA8-engine-rewrite-01"
  },
  {
    "id": "reviewed-engine-20261122-q17",
    "track": "expected",
    "subject": "engine",
    "round": 1,
    "source_reference_id": "auto-r01-s01-q17",
    "question": "가솔린 차량의 삼원촉매가 주로 처리하도록 설계된 세 종류의 배출가스 성분 조합은?",
    "choices": [
      "산소·질소·수증기",
      "일산화탄소·탄화수소·질소산화물",
      "이산화탄소·아르곤·헬륨",
      "질소·수소·냉매"
    ],
    "answer": 2,
    "explanation": "삼원촉매는 CO와 HC를 산화하고 NOx를 환원하는 반응을 이용해 유해 배출성분을 줄여. 반응 효율은 배기가스 온도와 혼합비 등 운전 조건에 영향을 받아.",
    "review_status": "approved",
    "publishable": true,
    "authoring": "independently_rewritten_and_technically_checked",
    "source_url": "https://www.hella.com/techworld/en/technical/exhaust-technology/exhaust-gas-aftertreatment-design-diagnostics/",
    "verified_on": "2026-11-22",
    "qa_batch": "QA8-engine-rewrite-01"
  },
  {
    "id": "reviewed-engine-20261122-q18",
    "track": "expected",
    "subject": "engine",
    "round": 1,
    "source_reference_id": "auto-r01-s01-q18",
    "question": "고온 연소 과정에서 생성될 수 있으며 광화학 스모그 형성에 기여하는 자동차 배출 성분은?",
    "choices": [
      "질소산화물(NOx)",
      "헬륨(He)",
      "아르곤(Ar)",
      "수증기(H₂O)"
    ],
    "answer": 1,
    "explanation": "질소산화물은 고온 연소 때 생성될 수 있고 대기 중 광화학 반응에 관여해 오존과 광화학 스모그 형성에 기여해.",
    "review_status": "approved",
    "publishable": true,
    "authoring": "independently_rewritten_and_technically_checked",
    "source_url": "https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=P100TSYK.TXT",
    "verified_on": "2026-11-22",
    "qa_batch": "QA8-engine-rewrite-01"
  },
  {
    "id": "reviewed-engine-20261122-q20",
    "track": "expected",
    "subject": "engine",
    "round": 1,
    "source_reference_id": "auto-r01-s01-q20",
    "question": "촉매 전단 산소 센서의 정상적인 신호를 ECU가 활용하는 가장 직접적인 목적은?",
    "choices": [
      "브레이크 패드 두께 보정",
      "토인 각도 조절",
      "연료 분사량의 피드백 제어",
      "변속기 기어의 기계적 마모 측정"
    ],
    "answer": 3,
    "explanation": "촉매 전단 산소 센서의 배기가스 산소 피드백은 ECU가 공기·연료 혼합비를 조절하는 데 활용돼. 차량에 따라 촉매 후단 센서는 촉매 성능 감시 기능도 담당해.",
    "review_status": "approved",
    "publishable": true,
    "authoring": "independently_rewritten_and_technically_checked",
    "source_url": "https://www.fleet.boschautoparts.com/documents/647135/1488055/Oxygen%20Sensors%20From%20Bosch.pdf",
    "verified_on": "2026-11-22",
    "qa_batch": "QA8-engine-rewrite-01"
  }
];
