# QA20 — 5회차 섀시정비 20문항·80선지 기술자료 1차 검토

작성: 2026-11-23 / 기준: QA19 이후 최신 편집 초안

## 결과

5회차 섀시정비 문제 20문항과 개별 해설 20개, 선택지 80개 각각의 이유를 작성했어. 상세 기록은 [QA20 4선지 감사 JSON](../data/qa/technical-qa20-r05-chassis-option-audit.json)이야. 본 감사는 모든 시험 문항의 **독립 전문기술 정답 유일성 최종 승인이나 게시권리 승인과 다름**.

| 항목 | 수량 |
| --- | ---: |
| 4선지별 이유와 기술자료 참조 작성 | 20문항·80선지 |
| 일반 원리와 참고자료의 1차 부합 | 8문항 |
| OEM·안전·규격·출제범위 추가보류 | 12문항 (1·2·4·5·6·13·15·16·17·18·19·20) |
| 실제 문항/보기/해설 직접 교정 | 0 |
| 독립 기술 최종 승인 / 기출 복원 공개 | 0 / 0 |

## 중요한 보류

- **1·2·5번 자동변속기 스톨·슬립**: 실제 마찰요소·유압·차량별 스톨 속도·온도·브레이크 고정·시험 시간은 OEM 매뉴얼 조건이 필수야. 스톨 시험은 과열·차량 이탈 위험이 있어 일반 설명만으로 수행하지 않아.
- **4번 오일팬 밀봉**: 변속기 종류마다 일체형 팬·고무 가스켓·액상 실런트 등의 설계 차이가 있어 모든 차량에서 같은 결합방법을 강제할 수 없어.
- **6번 에어현가 누설**: 가압 상태의 배관 분해·손상은 위험하고 실제 차고센서 신호·에어밸브·누출 검사는 차종별 절차가 필요해.
- **13번 캐스터 각**: 양의 캐스터·자기복원력의 일반원리는 타당해도 특정 수치·조향력은 차종/지오메트리 등에 좌우돼.
- **15번 롤러 제동력시험**: 장비 허용속도, 검사 중 차량 고정, 구동방식/회생제동과 4WD 차종별 시퀀스가 달라 안전 매뉴얼 우선.
- **16~20번 기존 과목 분류 보류**: 16·17·18번 과급장치/터보, 19번 엔진 진단 스캐너, 20번 TPS 조정은 섀시정비라기보다 엔진/전기 계통의 내용일 수 있어. **원래 5건 모두 `hold_do_not_publish` 유지**, 과목 임의 이동/게시하지 않았어.
- **3번** 스캔툴로 마찰재 실제 두께는 직접 실측하기 어려운 반면 입·출력 회전수와 솔레노이드 명령은 읽을 수 있다는 원리를 확인.
- **7~12번과 14·17번** 중 일부는 일반 기술 자료와 일치하는 수준으로 1차 판단했지만 OEM 최종 승인이 아니야.

## 대표 참고자료

- [ZF 자동변속기 오일과 점검](https://aftermarket.zf.com/en/aftermarket-portal/knowledge-hub/transmission-oil-check/)
- [ZF 자동변속기 매뉴얼/스톨 시험](https://manualzilla.com/doc/6030085/zf-automatic-transmissions-service-manual) — 특정 모델의 참고 사례로만 사용.
- [HELLA 전기식 조향 토크·각도센서](https://www.hella.com/microsite-electronics/en/Products/Steering-Torque-and-Angle-Sensor-4917/)
- [HELLA ABS 잠김방지 제어](https://www.hella.com/techworld/us/technical/car-electronics-and-electrics/overview-of-driver-assistance-systems/)
- [KYB 댐퍼 누유와 마모](https://kyb.co.za/knowledge-base/shock-absorber-failure-reasons/)
- [Garrett 웨이스트게이트 개요](https://www.garrettmotion.com/knowledge-center-category/racing-and-performance/how-turbocharger-wastegates-work-internal-vs-external/)

## 누적 현황

이전 QA19 시점까지 **340문항·1360선지의 역사적 1차 검수**, 이번 QA20 추가로 **360문항·1440선지**. **360문항·1440선지는 선택지별 1차 검수가 남아 있어.**

기존 과목 분류 보류 **53건 유지**, QA20 신규 보류 0건(기술 1차 재검토 플래그 12와 구분). 전체 **720문항의 독립 기술 최종승인 0**, 기출 복원 신규 공개 0이야. 기존 학습용 자체 제작 예상문제 80문항 모의고사는 유지하고 공개 매니페스트도 수정하지 않았어.

다음: 5회차 **전기·전자장치정비20 → 친환경 자동차정비20**, 이후 6~9회차 과목별 20문항 단위 선지 검사. 5회 전기11과 친환경17·18은 QA19가 재작성했으므로 **재작성된 최신판 선택지**를 기준으로 검수해야 해.

검증: `node tests/technical-qa20.test.cjs` 및 전체 GitHub Actions QA 통합 테스트.
