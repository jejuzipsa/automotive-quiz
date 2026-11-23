# QA7 — 1회차 자동차 전기·전자장치정비 20문항·80선지 1차 검토

일자: 2026-11-23

## 범위

1회차 전기·전자 20문항의 **정답 20개와 오답 60개를 개별로 읽고** 기술적 이유를 기록했어. [문항별 4선지 감사 JSON](../data/qa/technical-qa7-electrical-r01-option-audit.json)에 현재 질문·정답·선지별 판정 이유와 참고자료 URL, 추가 검토 이유를 보존했어.

| 항목 | 건수 |
|---|---:|
| 보기별 판단 이유 기록 | **20문항·80선지** |
| 외부 기술자료와 일반 원리가 부합한다고 1차 판단 | **10문항** |
| 차종별 절차·안전·과목 또는 보기 품질 추가 보류 | **10문항** |
| 이번에 실제 질문/해설 문장 변경 | 0 |
| 독립 기술 최종 승인 및 사이트 기출문제 게시 | **각각 0** |

기술자료의 링크가 있다는 이유만으로 모든 오답의 기술적 거짓이 전 차종에서 증명되었다고 보아서는 안 돼. 원본 QA23의 구매 교재 자료를 그대로 게시하지 않았고, 해당 자체작성 문제들은 여전히 `editorial_draft` / `pending_independent_review` / `publishable:false`야.

## 우선 보류할 10문항

- **2번 — 일반 RJ45 대 자동차 이더넷**: 일반 PC RJ45 배선의 설명은 맞을 수 있지만, [NXP 100BASE-T1](https://www.nxp.com/products/TJA1102A)은 차량용 **단일 트위스트페어** PHY를 사용하므로 자격시험 관련성·표현 교정이 필요해.
- **3·6번 — 지나치게 무관한 오답**: 엔진 오일필터, 타이어 트레드 깊이처럼 전기통신·회로와 다른 영역의 선택지로 정답을 쉽게 소거하는 구성이라 편집 품질 개선 권장.
- **10번 — 조향각 보정**: 차종/작업에 따라 보정 요구 여부가 달라 정비 매뉴얼 교차 확인.
- **12번 — SRS/에어백**: 진단·전원 차단·대기시간은 위험한 안전절차이므로 반드시 차종별 전문자료로 최종 재검토.
- **14번 — 연료 분사 보정**: 엔진정비 과목 가능성이 있어 기존 과목 분류 `hold_do_not_publish` 그대로 유지.
- **15번 — HVAC 관련 선택지**: 배기 매니폴드가 지나치게 다른 영역이므로 오답 난도 재작성 후보.
- **16번 — 냉매 취급**: 진단 원리와 별개로 냉매 종류, 회수·취급장비, 법규와 안전을 추가 대조.
- **17번 — 파워윈도우 보호**: 단일 퓨즈·전자식 과전류 제한 등 차량별 구성 차이 검토.
- **20번 — 히터코어**: 출구 온도차와 유량·막힘 판단은 운전조건별 오진 가능성을 고려.

나머지 10문항(1,4,5,7,8,9,11,13,18,19)은 일반 원리를 1차 자료로 대조했지만 **최종 독립 기술 검수는 미실시**야.

## 핵심 참고자료

- [Analog Devices CAN 중재 설명](https://www.analog.com/en/resources/app-notes/an-1123.html), [NXP CAN 표준](https://community.nxp.com/t5/NXP-Tech-Blog/101-Controller-Area-Network-CAN-standard/ba-p/1217054)
- [NXP 자동차 이더넷 100BASE-T1](https://www.nxp.com/products/TJA1102A)
- [ESD Association 전자기판 보호](https://www.esda.org/esd-overview/esd-fundamentals/part-3-basic-esd-control-procedures-and-materials/)
- [HELLA ABS 휠속도센서](https://www.hella.com/techworld/en/technical/sensors-and-actuators/check-and-change-abs-and-wheel-speed-sensors/), [ABS/ESP](https://www.hella.com/techworld/en/technical/car-electronics-and-electrics/abs-esp-control-units-for-braking-and-driving-dynamics/)
- [HELLA 자동차 A/C 형광 누설검사](https://www.hella.com/techworld/en/technical/car-air-conditioning/car-air-conditioning-leak-detection/)
- [AGCO 파워윈도우 모터 극성 진단](https://www.agcoauto.com/content/news/p2_articleid/153)
- [ALLDATA 히터코어 막힘 진단](https://www.alldata.com/ca/en/BLG/lack-of-cabin-heat)

## 누적 검수 및 인계

QA3 엔진20문항 + QA6 섀시20문항 + **QA7 전기·전자20문항**까지 총 **60문항·240개 선택지에 대한 1차 이유 기록**. 이는 720문항 중 60개에 불과하며, 아직 선택지별 1차 검수 이력이 없는 문항은 **660개**야. 다음은 1회차 친환경 자동차정비20문항부터 시작하고, 보류 항목과 해설 후보는 별도로 수작업 검수해야 해.

테스트: `node tests/technical-qa7.test.cjs`. 전체 720문항 정합성 자동검사: `node tests/qa5-bank-integrity.test.cjs`.
