# QA18 — 4회차 네 과목 80문항·320선지 1차 기술 근거 검토

작성: 2026-11-23. 기존 1~3회차 QA3~17의 **독립 최종 승인 없는 기술자료 1차 대조 기록**에 이은 작업이다.

| 과목 | 1차 자료부합 | 추가 차종·안전·법령·과목 보류 | 선지별 근거 |
|---|---:|---:|---:|
| 엔진정비 | **8** | **12** | [선택지 감사](../data/qa/technical-qa18-r04-engine-option-audit.json) |
| 섀시정비 | **10** | **10** | [선택지 감사](../data/qa/technical-qa18-r04-chassis-option-audit.json) |
| 전기·전자장치정비 | **12** | **8** | [선택지 감사](../data/qa/technical-qa18-r04-electrical-option-audit.json) |
| 친환경 자동차정비 | **5** | **15** | [선택지 감사](../data/qa/technical-qa18-r04-eco-option-audit.json) |
| **합계** | **35** | **45** | **80문항/320선지** |

각 감사 JSON은 현재 질문·정답 위치·정답과 오답 4개 각각의 판단 이유·OEM/공공기관 자료 URL·보류 사유를 포함하며 질문과 별도해설에 `technical_verification_qa18`, `option_analysis_qa18`로 연결했다. **기초 기술원리 1차 대조는 독립 전문 기술정답 최종 승인과 다르다.**

## 실제 수정한 3문항

수정 전/후 이력은 [섀시 QA18](../data/qa/technical-qa18-r04-chassis-edits.json), [전기 QA18](../data/qa/technical-qa18-r04-electrical-edits-and-holds.json)에서 확인할 수 있다.

- **4회 섀시8**: 섀시6과 반복되는 바운스 시험 정상 판정 문제를 **스프링(하중·탄성)과 댐퍼(진동 감쇠) 역할 구분**으로 재작성. 정답1 유지. [ZF 감쇠제어](https://www.zf.com/products/en/cars/stories/systematic_damping.html).
- **4회 섀시12**: 섀시11과 중복된 EPS 토크센서 역할 문제를 **실제 조향 입력·차종별 센서 출력·전원·DTC 비교 진단**으로 변경. 정답2 유지. 이전 QA2 편집 이력은 덮어쓰지 않고 두 버전을 정확히 연결했다. [Bosch EPS](https://www.bosch-mobility.com/en/solutions/steering/electric-power-steering-systems/), [HELLA 토크센서](https://www.hella.com/microsite-electronics/en/Products/Steering-Torque-and-Angle-Sensor-4917/).
- **4회 전기10**: 바로 뒤 11번과 반복된 응축기 냉각팬 정지의 고압원리 문항을 **팬 지령·전원·접지·퓨즈/릴레이·배선 비교 진단**으로 수정. 정답2 유지, QA2 이전 기록 보존. [HELLA 자동차 공조/컴프레서 진단](https://www.hella.com/techworld/en/technical/car-air-conditioning/car-air-conditioning/).

**4회 전기13 전자스로틀 공회전 제어**는 엔진정비 과목일 가능성이 높아 새로운 `hold_do_not_publish` 추가. 기존51→**현재52건**. 기존 보류 47개와 QA10/12/17 추가 보류는 이력을 보존하며 과목 임의 이동 없음.

## 중대한 기술 검토 보류

- **엔진2 밸브심 조정 계산**: 주어진 구조에서는 (0.35−0.25)=0.10mm 두꺼운 심으로 간극이 줄어드는 방향. 다만 OEM 심 구조·실물 규격과 측정조건은 별도 확인.
- **엔진5 협대역 산소센서**: [Bosch 람다센서](https://www.boschaftermarket.com/xrm/media/images/country_specific/sg/services_and_support_6/downloads_18/lambda_sensors.pdf)에 따르면 0.8V→0.2V는 상대적으로 린 쪽으로 해석되는 기본원리. 센서 종류/온도·샘플링 조건 미검수.
- **엔진18 검사기한**: 한국 자동차관리법 및 한국교통안전공단 자동차검사 안내의 2026년 차량별 구분/시행시점 확인 필요. 구형 숫자 일괄 적용 금지.
- **섀시1 스톨 속도**: [Mitsubishi 서비스 자료](https://charm.li/Mitsubishi/1998/Eclipse%20GSX%20AWD%20L4-1997cc%202.0L%20DOHC%20Turbo%20MFI/Repair%20and%20Diagnosis/Transmission%20and%20Drivetrain/Automatic%20Transmission%2FTransaxle/Testing%20and%20Inspection/Converter%20Stall%20Speed%20Test/)에서 엔진 출력 부족/토크컨버터 고장 가능성을 모두 언급하지만 *위험한 고부하 시험*이므로 차종별 시간·고정·온도 지침 없이는 수행 지시로 사용 금지.
- **섀시16~20**: 터보차저·엔진 전기 진단 문제가 섀시에 배치돼 있어 기존 과목 분류 보류 유지.
- **전기7 ESC 의무장착 관련 법령**, **전기9·12 고저압 냉매 상태**, **전기16 스마트키 등록**은 법령/차종별 OEM 안전·권한 검증 필요.
- **친환경1·3·4·6·7·9·11 고전압 절연/PPE/팩**은 OEM 고전압 안전, **친환경5 EPB**, **12·13 토크컨버터/ATF**, **14·15 SRS**는 기존 과목분류 보류, **16·17 수소 고압/누출**은 전문 안전규격, **19 인버터 과전류**는 OEM 제어 기준 검증 후 승인.

## 진행도

- **1~4회차 320문항·1280선지**에 최신 버전의 1차 근거 기록을 남겼다.
- **5~9회차 400문항·1600선지**는 개별 기술 근거 비교 전(구조·정답 연결 자동검사는 통과).
- **현행 과목 분류 보류52**, 독립 전문 기술최종승인 **0/720**, 신규 기출 복원문제 사이트 출제 **0/720**. 공개 매니페스트와 사용자 학습용 예상문제80 모의고사는 변함없다.

다음은 5회차 4과목 80문항·320선지 검수, 2026 법령·고전압 안전 및 차종별 OEM 최종감수 보강. `node tests/technical-qa18.test.cjs` 및 모든 QA1~17 회귀테스트로 이력을 검증.
