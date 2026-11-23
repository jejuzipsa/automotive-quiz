# QA8 — 1회차 친환경 자동차정비 20문항·80선지 기술자료 1차 검토

일자: 2026-11-23

## 검토 범위 및 기준

1회차 친환경 자동차정비 20문항과 별도 해설의 **정답20·오답60, 총80선지를 각각 읽고** 기본 원리/오답 이유/차종·안전·과목 분류 보류 여부와 제조사·정부 참고자료 링크를 기록했어. [선택지별 JSON](../data/qa/technical-qa8-eco-r01-option-audit.json)에 판정 이유가 모두 담겨 있어.

| QA8 항목 | 수량 |
|---|---:|
| 개별 선택지 1차 이유 작성 | **20문항/80선지** |
| 1차 자료와 일반 원리가 부합한다고 판단 | **7문항** |
| 전문 안전/차종/내용·과목 범위 보류 | **13문항** |
| 이번 배치 질문/보기/해설 직접 문안 수정 | **0문항** |
| 독립 기술 최종 승인 | **0문항** |
| 신규 실전 기출 출제 연결 | **0문항** |

**문항 1·2·6·16·20은 고전압·수소 안전 관련**이므로 정답 기본 원리가 타당해 보여도 해당 모델의 정비지침, 자격/장비/절차를 독립 검증하기 전에는 안전한 작업지침으로 제시하지 않아. 이를 포함한 13건은 최종 승인과 공개 출제 대상에서 제외한 상태야.

## 후속 검토가 필요한 문항

- **1·2·6·16번 고전압 안전**: 절연 보호구, 고전압 차단, 잔류전압 대기·확인 등은 [Fluke 고전압 계측 안내](https://www.fluke.com/en/learn/blog/automotive/hybrid-vehicle-measurement-safety-basics-taking-high-voltage-readings)와 기본 개념을 대조했지만 차량별 OEM 지침 확인 필요.
- **3번 BEV 배터리팩**: 선택지 '가솔린 연료레일'이 지나치게 이질적인 정답 유도 방식이어서 오답 품질 재작성 후보.
- **8번 전용 진단기/13번 BMS**: DTC·셀 전압·온도 진단데이터는 제조사별 항목·절차 확인 필요.
- **9번 수소 충전**: 기체 충전의 압력차 기본 개념만으로 실제 압력·온도·충전통신 제어를 확정할 수 없어 안전·규정 보류.
- **14번 하이브리드 효율**: 일부 진단기는 계산된 효율 관련 정보를 제공할 수 있어 '실제 총 효율의 정밀 수치' 구분을 추가 검토.
- **17번 중복**: 친환경 7번의 '모터→감속기·차동기어→차륜'과 **동일한 구동경로 개념**을 다시 묻는다. 단일 회차 변별력 저하가 있어 다른 학습목표로 재작성해야 해.
- **18·19번 과목 이탈 후보**: AEB/BCM은 이미 `hold_do_not_publish`이고 친환경보다 조향·ADAS/전기전자 영역으로 옮길 가능성이 있음. 공식 출제과목 범위 확인 전 과목 자동 이동 금지.
- **20번 수소 누설**: 불꽃 사용은 위험하지만 보기의 오답이 지나치게 노골적이고 안전 관련 전문감수 필요.

7문항은 DOE·AFDC 등의 자료에서 EV 구성, PEM 연료전지, FAME 바이오디젤 등의 **기초 원리가 맞는다고 1차 판단**했을 뿐, 해당 문제를 정식 출제 승인한 것은 아니야.

## 주요 참조 링크

- [미국 에너지부 AFDC BEV 구조](https://afdc.energy.gov/vehicles/how-do-all-electric-cars-work) · [전기차 안전](https://afdc.energy.gov/vehicles/electric-maintenance)
- [Fluke HV 계측과 무전압 확인](https://www.fluke.com/en/learn/blog/automotive/hybrid-vehicle-measurement-safety-basics-taking-high-voltage-readings)
- [미국 에너지부 PEM 연료전지 반응](https://www.energy.gov/cmei/fuels/fuel-cell-basics)
- [AFDC 바이오디젤 원료](https://afdc.energy.gov/fuels/biodiesel-production)
- [미국 NIST 수소 안전 FAQ](https://www.nist.gov/system/files/documents/2025/02/11/nist_h2_faqs-11Feb2025_website.pdf)
- [Toyota Mirai 수소차 안전 주의](https://www.toyota.com/owners/warranty-owners-manuals/digital/article/mirai/2021/om62102u/ch02se010402)

## 누적 상태

- QA3 엔진: 20문항 80선지(17/3)
- QA6 섀시: 20문항 80선지(10/10)
- QA7 전기·전자: 20문항 80선지(10/10)
- **QA8 친환경: 20문항 80선지(7/13)**

따라서 1회차 **80문항/320선지에 1차 개별 이유 기록 완료**. 1차 일반자료 부합 44문항, 추가 보류36문항이며 이 수치를 **기술 최종승인으로 해석하면 안 됨**. 2~9회차는 **640문항/2,560선지의 개별 기술검토가 남아 있음.** 현재 720개 모두 미게시 초안(`publishable:false`), 기술 최종승인0, 기출 신규 공개0이야.

추가 검수 순서: 1회 17번 구동경로 중복 재작성 → 2~9회차 과목별 20문항 단위 기술자료 1차 대조 → 보류 문항 전문가 재검증 → 게시권리 확인 후 승인본만 출제 연결.

테스트: `node tests/technical-qa8.test.cjs`.
