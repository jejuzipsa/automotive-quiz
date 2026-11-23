# QA6 — 1회차 섀시정비 20문항의 정답·오답 80선지 기술자료 1차 대조

날짜: 2026-11-23

## 작업 범위

QA5 이후 `data/past/drafts/chassis.json`의 1회차 20문항과 `data/explanations/drafts/chassis.json` 20해설의 **전체 선택지 80개**를 각각 읽고 정답/오답 판단 근거를 작성했어. 개별 자료 URL, 선지 텍스트, 판정 이유는 [QA6 섀시 선택지별 검수 JSON](../data/qa/technical-qa6-chassis-r01-option-audit.json)에 남겼어.

각 문제/해설의 메타데이터 `technical_verification_qa6` 및 해설 `option_analysis_qa6`로 이력을 연결했고, 이전 QA1~QA5 수정 이력은 변경하지 않았어.

| 항목 | 실제 수량 |
|---|---:|
| QA6 선지별 1차 근거 검토 | **20문항 / 80선지** |
| 제조사·부품사 자료에 일반 원리가 맞는다고 1차 판단 | **10문항** |
| 차종·부품별 규격, 고위험 작업 또는 과목 경계 추가 확인 | **10문항** |
| 기술적 정답 독립 최종 승인 | **0문항** |
| 이번 QA6 질문/보기/해설 원문 교정 | **0문항** |
| 신규 기출 복원 공개 | **0문항** |

## 추가 검토 보류 10문항

- **2·4번 과목 분류**: 2번 연료 레일 압력·공급펌프는 엔진정비, 4번 CAN 네트워크·제어기 전원은 전기·전자 계통 경계 가능성이 커 기존 `hold_do_not_publish` 유지.
- **3번 변속기 솔레노이드**: 부품별 저항 범위·온도 조건과 판정 방식은 차량별 정비정보 필요.
- **6번 유압식 현가·8번 제동유압**: 잔압 안전작업 및 누설 진단은 일반 원리만으로 정비절차를 확정할 수 없어 보류.
- **9번 차고 센서**: 출력 신호 유형과 정상범위의 차종 차이 재검토.
- **12번 모듈 교체**: 전원차단·정비절차가 제조사별로 달라 보류.
- **14·18번 조향각/EPS 보정**: 보정 필요 여부·방법의 모델별 차이 확인.
- **20번 브레이크 페달 입력 센서**: 페달 위치·행정·압력 센서의 다양한 구성 확인.

**일반 원리를 1차 참고자료와 대조한 10문항도 최종 승인된 것은 아니야.** 선지 4개의 판정과 참조 URL이 존재한다는 것은 자료 기반 1차 정합성을 뜻할 뿐, 독립된 전문감수자가 모든 차량·시험조건에서 정확하다고 확인한 상태가 아니야.

## 대표 기술 근거

- 변속기 ATF·입력축 속도·제어기 진단: [ZF 진단·수리](https://aftermarket.zf.com/en/aftermarket-portal/our-portfolio/diagnostics-repair/), [Bosch 변속기 전자모듈](https://www.bosch-mobility.com/en/solutions/transmission-technology/electronic-modules/)
- 유압제어 솔레노이드: [Bosch VTS](https://www.bosch-mobility.com/en/solutions/transmission-technology/variable-force-transmission-solenoid/)
- 공기스프링과 누설 확인: [Firestone 유지관리](https://www.firestoneairide.com/automotive/aftermarket/aftermarket-support/maintenance-warranty/)
- 가변 댐퍼·전기진단: [ZF CDC](https://aftermarket.zf.com/en/aftermarket-portal/knowledge-hub/inbrief-cdc-dampers/)
- EPS 토크·조향각 센서: [HELLA 조향 센서](https://www.hella.com/microsite-electronics/en/Products/Steering-Torque-and-Angle-Sensor-4917/)
- ABS 기능: [HELLA ABS/ESP](https://www.hella.com/techworld/en/technical/car-electronics-and-electrics/abs-esp-control-units-for-braking-and-driving-dynamics/)
- 페달 행정 입력: [Bosch iBooster](https://www.bosch-mobility.com/en/solutions/driving-safety/ibooster/)

## 누적 진행과 후속

- **QA3 엔진 1회 20문항/80선지** + **QA6 섀시 1회 20문항/80선지**: 회차당 4과목 80문항 중 두 과목 40문항의 선택지에 대한 1차 검토 이력이 생김(총 160선지). 단, QA3 엔진 중 3건 보류·QA6 섀시 중 10건 보류이며 1차 자료대조와 최종승인은 다르다.
- 미실시: 같은 1회차 **전기·전자 20문항**과 **친환경 20문항**, 2~9회차의 640문항. 이후 과목별 20문항 단위로 근거 검수를 진행.
- **결제/구매 교재 원본 OCR은 공개하지 않았고, 재작성 초안 720문항은 모두 게시 보류 유지**. 승인된 독립 재작성 문항만 웹 공개용 정답·해설과 함께 따로 승격해야 해.

재현 테스트: `node tests/technical-qa6.test.cjs`, 기존 QA1~QA5 및 `node tests/qa5-bank-integrity.test.cjs`.
