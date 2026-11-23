# QA10 — 2회차 엔진정비 20문항·80선지 기술자료 1차 대조

작성: 2026-11-23 / 기준: GitHub QA9까지의 초안 / 공개 출제 승인 전

## 실제 수행한 검수

`data/past/drafts/round02/engine.json` 20문항과 대응하는 별도 해설 20개를 직접 읽고 선택지 80개에 대해 각각 정답/오답의 이유를 기술자료와 대조하여 기록했다. [선택지별 QA10 이력](../data/qa/technical-qa10-engine-r02-option-audit.json)에 **원문·기록된 정답·선지별 이유·참고 URL·추가보류 사유**가 있다.

| 구분 | 수량 |
|---|---:|
| 질문·해설 연결 및 4선지 1차 판정 이유 | 20문항 · 80선지 |
| 참고자료와 기초 원리가 부합하는 1차 판단 | 12문항 |
| 과목·차종·안전·보기 품질 추가보류 | 8문항(1·6·7·11·12·13·14·16) |
| **새 과목 분류 보류 추가** | 1건(2회차 엔진1) |
| **질문/보기/해설 실제 교정** | 1문항(2회차 엔진7) |
| 독립 전문기술 최종승인 | **0문항** |
| 사이트 기출문제 신규 출제 | **0문항** |

선행 QA1/QA2에서 식별한 **과목 보류 47건은 역사적 기록 그대로**이고, 이번에 새로 확인된 1건을 더해 **현행 초안의 과목 보류는 48건**이다. 아직 Q-Net 세부 출제범위를 대조해 확정한 과목 이동은 0건이다.

## 실제 발견한 문항과 처리

- **2회 엔진1 타이어 냉간 공기압**: 정답 내용 자체는 [NHTSA 타이어 안전정보](https://www.nhtsa.gov/vehicle-safety/tires)에 부합하지만 엔진정비보다 **섀시·타이어 정비 영역일 가능성이 높음**. 그래서 질문과 정답은 그대로 두고 `subject_classification_review.status="hold_do_not_publish"`를 문제·해설 양쪽에 추가했다. 과목을 확정 이동하지 않았다. [Q-Net 산업기사 출제기준](https://www.q-net.or.kr/cst006.do?artlSeq=5213442&brdId=Q006&gSite=Q&id=cst00602)을 추후 세부 항목과 대조해야 한다.
- **2회 엔진7 디젤 인젝터 시험**: 원문은 디젤 인젝터라는 넓은 표현으로 **기계식 노즐 개방압 시험과 커먼레일 인젝터 시험을 혼동할 수 있음**. `기계식 디젤 분사노즐의 개방압·분무형상 시험`으로 조건을 특정하고, 정답 선택지 1번과 다른 선택지 2~4번도 실제 관련 진단과 구별되도록 재작성했다. 별도 해설·정답 텍스트를 함께 교정했고 원래 정답 번호 1은 유지했다. [Delphi 분사 패턴 시험](https://www.delphiautoparts.com/en-gb/mom/how-to/article/how-to-check-diesel-injector-spray-pattern), [Bosch EPS205 시험대](https://ap.boschaftermarket.com/sg/en/equipment/test-equipment/test-benches-and-tools/eps-205) 참고. 아직 차종별 고압 장비·정비절차 독립 검수는 보류.
- **2회 엔진6·11·12·13·14·16**: 각각 리턴리스 연료압 조절기 배치, 뜨거운 냉각계 안전, 부스트 압력 비교조건/절대압 단위, ECU 전원 복구 제조사 절차, 밸브구동계 소음 진단, 오일 누유 발생 위치 등 **차종별·안전·실제 진단 조건** 추가 확인이 필요해 별도 보류했다. 질문/보기는 임의로 바꾸지 않았다.

[변경 전후 QA10 교정 기록](../data/qa/technical-qa10-r02-engine-changes.json)은 원래 소스 ID·정답 번호·선택지·해설과 수정 후를 보존한다.

## 핵심 검토 근거

- [Garrett 웨이스트게이트 기술](https://www.garrettmotion.com/knowledge-center-category/oem/basic/), [터보 설치·초기 윤활](https://www.garrettmotion.com/knowledge-center-category/turbo-replacement/part-2-garrett-turbocharger-installation-guide/)
- [Bosch 엔진 센서/CKP](https://www.boschautoparts.com/g/engine-management-sensors), [Bosch OBD 프리즈프레임](https://www.boschdiagnostics.com/products/bosch-obd-1150)
- [HELLA TPS](https://www.hella.com/techworld/en/technical/sensors-and-actuators/throttle-potentiometer/), [Fluke 오실로스코프와 간헐신호](https://www.fluke.com/en/learn/blog/predictive-maintenance/beyond-the-multimeter-part-4)
- [NGK 예열플러그](https://www.ngkntk.com/products/glow-plugs/), [HELLA EGR](https://www.hella.com/techworld/en/technical/car-electronics-and-electrics/exhaust-gas-recirculation/)
- [Bosch SCR 요소수→암모니아](https://www.bosch-mobility.com/en/solutions/exhaust-gas-treatment/denoxtronic-exhaust-gas-treatment-system/), [EPA DPF 포집](https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=P10073LT.TXT), [EPA CO의 불완전 연소](https://www.epa.gov/indoor-air-quality-iaq/what-carbon-monoxide)

**주의:** 제조사 자료가 기초 원리를 뒷받침해도 각 문항의 모든 상황에서 정답이 유일하다는 공식 검증이 아니야. 12건의 1차 부합도 최종 기술 승인으로 계산하지 않는다.

## 누적 상태와 다음 차례

- 기존 QA3/6/7/8: **1회차 80문항·320선지**의 역사적 1차 검수 이력(이 중 QA9 4문항 새 버전은 재검수 대상).
- QA10: **2회 엔진 20문항·80선지** 신규 1차 검수 기록.
- 따라서 **역사적 1차 선지별 검수 100문항·400선지** (최신 문항 기준으로 유효 검수가 필요한 QA9 4문항은 별도 보류). **남은 무검수 620문항** = 2회 섀시·전기·친환경 60문항 + 3~9회차 560문항.
- 현행 과목 보류 **48건**. 기술 최종승인 **0/720**, 공개 기출 복원 출제 **0/720**.
- 다음: **2회차 섀시정비 1~20번** 선지별 검토, 엔진 보류8건의 전문기술자료 보강, QA9 재작성 4문항 재검수. 최종승인·권리 승인 후 해당 문항만 별도 공개은행으로 승격.

전체 전수 자동검사는 구조·정답·해설 연결을 확인하는 것으로, **720문항의 기술 정확성 전수 검증과 다르다**.

재현 테스트: `node tests/technical-qa10.test.cjs`, `node tests/qa5-bank-integrity.test.cjs`, 기존 QA1~QA9 및 공개 승인 게이트 테스트.
