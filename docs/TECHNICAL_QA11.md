# QA11 — 2회차 섀시정비 20문항·80선지 기술근거 1차 검토

작성: 2026-11-23. 기준: QA10 병합 이후 자체 재작성 편집 초안.

## 확인한 범위

`data/past/drafts/round02/chassis.json` 20문항의 정답 20·오답 60선지를 각각 검토하고 참·거짓 이유를 해설 `option_analysis_qa11` 및 [QA11 감사 JSON](../data/qa/technical-qa11-chassis-r02-option-audit.json)에 기록했어.

| 항목 | 결과 |
|---|---:|
| 2회차 섀시정비 문항 | 20 |
| 개별 선택지 1차 판단 이유 | 80 |
| 기본 원리와 참고자료 1차 부합 | **11문항** |
| 차종별 정비·안전·과목경계 추가 보류 | **9문항** (2,4,6,7,9,12,14,15,16) |
| 이번 배치의 실제 문제/해설 문장 수정 | **0** |
| 독립 기술 최종승인 / 신규 공개 출제 | **각각 0** |

**1차 참조근거가 있다는 것과 전체4선지의 모든 적용 모델 기술 최종승인은 다르다.** 해당 문제은행의 `editorial_draft`, `pending_independent_review`, `publishable:false`를 유지한다.

## 주요 보류 및 추가교정 후보

- **2회 섀시2 (블로워 소음)**: 편의장치·공조계 소음으로 기존 `hold_do_not_publish` 유지. 변속기 내부 소음과 별개의 학습목표일 수 있으나 과목 조정은 아직 확정하지 않았어.
- **2회 섀시4 (P0300 실화코드)**: 엔진정비 분야와 맞는 내용이라는 기존 분류보류 유지. [Innova 실화 DTC 해설](https://www.innova.com/blogs/fix-advices/spark-plug-essentials-a-comprehensive-guide)에 P0300이 랜덤 실화 코드임을 설명함.
- **6·7번 유압식 현가**: 실측 압력 저하·누유·고압 작동유 잔압의 안전 절차는 OEM 정비매뉴얼/해당 유압 시스템의 규격을 확인해야 해. 일반 유압 파워스티어링 자료는 해당 현가 안전 매뉴얼을 대신할 수 없음.
- **9번 공압현가 센서**: 실제 공기압 센서와 차고센서는 다른 종류일 수 있어 출력 유형·압력값을 차종별로 구별해야 함.
- **12번 현가 부품 교환 후 토크**, **14번 EPS 센서 규격**, **15번 ECU 저전압 진단**, **16번 전원/SRS 차단**: 모두 서비스 매뉴얼의 체결·학습·전원·대기 절차를 추가 확인해야 함.
- **13번 EPS 조향토크 센서 역할**: 1회차 섀시 19번에서 다룬 개념과 *서로 다른 회차 사이의 유사도 후보*. 동일 문자열 중복은 아니므로 자동 삭제·정답 변경은 하지 않고 이후 문제은행 품질 검토 후보로 기록.

기본 원리 1차 근거 부합 문항은 1·3·5·8·10·11·13·17·18·19·20번이지만, 기술 최종승인 대상은 아직 아니야.

## 참고 자료

- [ZF 자동변속기 ATF 점검](https://aftermarket.zf.com/en/aftermarket-portal/knowledge-hub/transmission-oil-check/), [ZF ATF FAQ](https://aftermarket.zf.com/sg/aftermarket-portal/faq/faq-oils/)
- [HELLA ABS/ESP 3단계 유압 제어](https://www.hella.com/techworld/en/technical/car-electronics-and-electrics/abs-esp-control-units-for-braking-and-driving-dynamics/)
- [ZF CDC 댐퍼와 차체 센서](https://www.zf.com/products/en/cars/stories/2025_05_08_smotion_q5.html)
- [HELLA 차고센서](https://www.hella.com/techworld/en/technical/sensors-and-actuators/ride-height-sensor/)
- [Bosch EPS 조향토크 센서](https://www.bosch-mobility.com/en/solutions/steering/electric-power-steering-systems/)
- [MOOG 타이로드 및 기계적 유격](https://www.moogparts.com/en-eu/support/the-problem-solver/technical-support/educational-articles/front-end-assembly-check.html)
- [HELLA 브레이크 유압 및 ABS 진단](https://www.hella.com/techworld/en/technical/brakes/changing-the-brake-fluid/)

## 누적 현황

QA10 2회 엔진 20문항/80선지에 이어 QA11 2회 섀시 20문항/80선지 기록. **누적 역사적 선지별 1차 검토 120문항·480선지**, 아직 개별 기술 검토가 이뤄지지 않은 **600문항**(2회 전기20·친환경20 및 3~9회 560). QA9 재작성 4문항의 최신 버전 선지 재검수는 따로 남아 있음.

**현재 과목 분류 보류48, 기술 독립 최종 승인0/720, 기출 복원 신규 공개0/720.** 기존 자체제작 학습용 80문항 모의고사만 공개 상태 그대로 유지.

다음: 2회차 **전기·전자장치정비20문항**의 선택지별 검토, 이어 친환경20문항, 3~9회차 순으로 QA를 진행하고 법령·안전 보류는 차량별 매뉴얼과 전문 기술 검수로 별도 확인.
