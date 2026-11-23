# QA23 — 6회차 엔진정비 20문항·80선지 1차 기술검토와 중복·과목분류 교정

작성: 2026-11-23 / QA22 이후 최신 편집초안

## 실제 진행한 작업

6회차 엔진정비 20문항·해설20개·보기80개를 직접 확인하고 참/거짓별 1차 이유와 기술자료를 기록했어. [QA23 선지별 감사](../data/qa/technical-qa23-r06-engine-option-audit.json)에 현재 질문과 보기, 정답, 기술 참고자료 URL, 추가 보류 사유를 모두 남겼어.

| 내용 | 문항 수 |
| --- | ---: |
| QA23 선택지별 이유 기록 | **20문항·80선지** |
| 1차 기술자료와 일반원리 부합 | **8** (5·7·8·13·15·18·19·20) |
| OEM 안전·규격·과목경계 추가보류 | **12** (1·2·3·4·6·9·10·11·12·14·16·17) |
| **직접 질문·4보기·별도해설 교정** | **1건(3번)** |
| **새 과목 분류 보류** | **2건(4·14번)** |
| 독립 기술 최종승인/신규 복원기출 출제 | **0 / 0** |

자료를 참고한 1차 정합성 판단은 **개별 차종에 적용 가능한 정비절차·모든 답의 유일성·게시권한을 보장하지 않아**. 특히 ECU, 터보차저 허용 유격, 디젤 고압 연료 및 실제 전기화재 작업은 전문 감수가 필요해.

## 직접 교정한 1문항과 새 과목 보류

- **6회 엔진3 터보차저 베어링 중복 개선**: 2번이 *축방향 유격과 스러스트 베어링*을 묻는데 3번도 사실상 같은 내용이라, 3번을 **축의 반경방향 유격·압축기 휠의 하우징 접촉·저널 베어링**으로 재작성했어. 보기 네 개와 별도 해설도 현재 학습목표에 맞춰 변경, 정답 위치 1 유지. [Garrett 기술자료](https://www.garrettmotion.com/news/newsroom/article/turbo-damage-oil-leakage-and-external-influences-from-installer-connect-experts/) 참조. 최신 네 선지의 기술 근거를 이번 QA23 감사에 포함했지만 부품별 유격 규격 독립승인은 보류.
- **6회 엔진4 CAN 진단 단자**: J1962·ISO15765-4의 CAN-H 6번/ CAN-L 14번 배정은 [NI 전장계측 자료](https://www.ni.com/en/support/documentation/supplemental/18/specifications-for-the-can-obd-ii-cable.html)에서 확인할 수 있지만 엔진정비보다 자동차 **전기·전자 네트워크 진단 과목**에 가까워 `hold_do_not_publish`를 추가함.
- **6회 엔진14 배전반 전기화재**: 일반 시설용 전원이 켜진 배전반의 화재 초동대응은 자동차 엔진정비의 직접 기술영역이 아니므로 **전기설비/안전 과목 경계 보류**를 추가. 실제 전기화재 대응은 인명 안전/신고·전원 격리/전문 소화절차를 우선해야 하며 일반 문제풀이 해설을 실무 지침으로 사용하지 않아.

수정·보류 전후는 [QA23 이력 파일](../data/qa/technical-qa23-r06-engine-edits-and-holds.json)에 보존했어. 과거 QA1~QA22 이력과 원래 출처ID·정답 원래 위치는 변경하지 않았다.

**QA22까지 현행 과목분류 보류53 + QA23 신규2 = 현행55**, 확정 과목 이동0. 과목보류 검증은 역사적 QA1의 47건 등 기존 감사 스냅샷을 그대로 유지하되 **최신 실제 JSON 초안은 55건**을 검사하도록 테스트를 변경했어.

## 나머지 주요 보류

- **1~3 터보**: 냉각/윤활, 축방향/반경방향 베어링 허용 유격과 휠 접촉 조건은 차량·터보 제조사 규격 필요.
- **6 ECU 교환**: 코딩·이모빌라이저·학습 절차 및 보안 권한 차종별 추가 확인.
- **9 인젝터 보정코드, 10 SCV 코일**: 연료계통/실린더 코딩 및 저항 수치는 OEM 부품번호·진단조건별 정밀 검증 필요.
- **11 분사펌프 시기**: 다이얼 게이지 방향·백래시·사전 위치는 기계식 펌프별 매뉴얼 기준.
- **12 커먼레일 압력**: 고압 연료 점검은 인체 주입·누설 위험이 있으므로 전문 OEM 안전 절차 확인.
- **16 크랭크축 메인캡, 17 저유압 진단**: 체결 토크/볼트 재사용/오일압 측정온도·회전수·측정위치 차종별 규정 필요.

## 주요 근거

- [Garrett 터보 냉각](https://www.garrettmotion.com/tr/racing-and-performance/choosing-a-turbocharger/water-cooling-for-your-turbo/)
- [Garrett 오일/베어링 마모](https://www.garrettmotion.com/news/newsroom/article/turbo-damage-oil-leakage-and-external-influences-from-installer-connect-experts/)
- [NI J1962 CAN 핀](https://www.ni.com/en/support/documentation/supplemental/18/specifications-for-the-can-obd-ii-cable.html)
- [HELLA TPS](https://www.hella.com/techworld/en/technical/sensors-and-actuators/throttle-potentiometer/)
- [HELLA EGR](https://www.hella.com/techworld/en/technical/car-electronics-and-electrics/exhaust-gas-recirculation/)
- [미국 EPA 디젤 황 기준](https://www.epa.gov/diesel-fuel-standards)

## 누적 진행

QA22 1~5회 400문항·1600선지 후, QA23 6회 엔진20·80선을 더해 **420문항/1680선지의 역사적 1차 기술자료 검수 기록**을 남겼어. **아직 선택지별 1차 대조가 없는 문항은 300개(6회 섀시·전기·친환경60 + 7~9회 240)**. QA19 위험 대기열 자동검사는 완료했으나 수동 기술검수와 같지 않아.

**현재 과목 분류 보류 55, 독립 최종 기술승인0/720, 기출 복원문제 공개0/720**. 기존 자체 제작 80문항 모의고사와 웹 출제 `data/manifest.json`, 구매 원본/OCR은 변경하지 않았어.

다음: 6회차 **섀시→전기전자→친환경** 각 20문항, 7~9회 순차 검수. 보류 문항은 별도 OEM 정비지침/시험규정·법령·게시 권리를 검증한 후만 공개 후보로 승격.

재현: `node tests/technical-qa23.test.cjs`, 기존 QA1~22와 QA19 위험대기열/전체720 구조·출제 제한 테스트.
