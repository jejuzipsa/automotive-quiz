# QA9 — 전기·전자·친환경 4문항의 선택지 품질·중복 직접 교정

2026-11-23

## 실제 변경 4건

선행 QA7/QA8에서 발견한 출제 범위·오답 품질·중복 문제를 직접 수정했어. [QA9 수정 전후 기록](../data/qa/technical-qa9-changes.json)에 이전 질문·4보기·정답위치·해설과 변경 후를 모두 보존했어.

| 문항 | 이전 문제 | 이번 재작성 |
|---|---|---|
| **전기 2번** | 자동차 이더넷 수업에서 일반 PC의 RJ45 케이블을 묻는 출제범위 모호함 | 차량용 **100BASE-T1 단일 트위스트페어 전이중 통신**으로 변경 ([NXP](https://www.nxp.com/products/TJA1102A), [Tektronix](https://www.tek.com/en/solutions/industry/automotive-test-solutions/in-vehicle-networks/automotive-ethernet)) |
| **전기 3번** | 통신 고장 보기 중 엔진 오일필터 여과지처럼 터무니없이 무관한 항목 | 고속 CAN 양쪽 종단저항 120Ω 병렬 합성저항 **60Ω** 문제 ([Kvaser](https://kvaser.com/developer-blog/how-to-test-your-can-termination-works-correctly/)) |
| **전기 6번** | 회로 이상 진단 보기 중 타이어 트레드 깊이 점검 | 부하 인가 시 접촉저항 증가를 **전압강하로 평가**하는 문제 ([Fluke](https://www.fluke.com/en/learn/blog/automotive/electrical-automotive-troubleshooting)) |
| **친환경 17번** | 친환경 7번과 동일한 모터→감속기→차륜 기계적 동력전달 순서 반복 | 단일 모터·기계식 차동장치 차량에서 선회 중 **좌우 차륜 회전속도 차이 허용 기능** ([Protean Electric](https://www.proteanelectric.com/wheel-torque-and-speed-in-vehicles-with-in-wheel-motors/)) |

네 문항 모두 **원래 JSON의 정답 번호(3·4·4·1)를 유지**하고 질문·4선지·정답지문·별도 해설을 함께 수정했어. 이력은 QA1/QA7/QA8의 원본 감사 JSON을 바꾸지 않고 QA9의 변경 전 스냅샷과 연결했어.

## 기술 검증 및 게시 제한

선행 QA7/QA8의 선택지별 분석은 **수정 이전 버전의 역사적 감사 결과**이므로, 변경된 네 문항의 `technical_verification_qa7/qa8`, `option_analysis_qa7/qa8` 메타데이터는 현재 초안에서 제거했어. 대신 `qa9_revision.status:"editorial_revised_pending_new_option_review"`로 표시했으니 **신규 4선지 재검수 전에는 이전 1차 판정을 이 문항에 재사용하면 안 돼.**

재작성할 때 참고한 제조사/계측기 자료는 기초 물리 원리·진단 방법을 뒷받침하지만, 독립 최종 기술감수 또는 시험 게시 승인을 대신하지 않아. 기존 전체 720문항 모두 `publishable:false`를 유지하고 47개 과목 분류 보류도 그대로야.

## 테스트

- `node tests/technical-qa9.test.cjs`: 수정 전후/정답 재매핑/선행 감사 역사성/미승인 상태 검사
- `node tests/technical-qa1.test.cjs`, `node tests/technical-qa7.test.cjs`, `node tests/technical-qa8.test.cjs`: QA1/7/8 역사 보존·QA9 개정 상태 검증
- `node tests/qa5-bank-integrity.test.cjs`: 720문항/해설 전수 구조·중복/위험 후보 재검사

다음: 네 문항의 수정된 선택지에 대한 별도 새 기술근거 재검토, 2~9회차 640문항의 각 선택지별 검수, 과목·법규·안전 보류 해제 후 최종 독립 기술 승인 및 저작권 사용권 확인을 거쳐 출제.
