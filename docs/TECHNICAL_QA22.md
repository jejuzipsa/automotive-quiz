# QA22 — 5회차 친환경 자동차정비 20문항·80선지 1차 기술검토

작성: 2026-11-23 / 최신 QA21 이후 자체 재작성 편집 초안 기준

## 검토 결과

5회차 친환경 자동차정비 **20문항의 4개 보기 80개**를 각각 읽고 기본원리/오답 이유/제조사·정부 기술자료를 기록했어. [QA22 80선지 감사](../data/qa/technical-qa22-r05-eco-option-audit.json)는 질문·원래 정답 위치·현재 보기·판정 이유와 추가 보류를 포함해.

| 구분 | 건수 |
| --- | ---: |
| 선택지별 이유 기록 | 20문항·80선지 |
| 참고자료와 일반원리 1차 부합 | **5문항** (1·2·8·10·19) |
| 전문 안전/OEM·과목/품질 보류 | **15문항** (3·4·5·6·7·9·11·12·13·14·15·16·17·18·20) |
| 실제 문안 직접 수정 | **0문항** |
| 독립 기술 최종 승인 | **0문항** |
| 복원 기출 신규 공개 출제 | **0문항** |

**기술자료 대조를 실제로 했다는 것과, 정답 유일성·실차 절차·사용권까지 최종 검증했다는 것은 다르다.** 고전압/수소 안전문항을 포함해 5회차 모든 기출 복원 초안은 계속 `publishable:false`이고 일반 현장 작업 지침으로 사용할 수 없어.

## 중요 보류

- **3·7번 고전압 케이블·서비스 플러그**: 주황색은 시각 식별 표지이며 무전압 보증이 아니고, 인버터 저장 전하도 남을 수 있어. [Fluke 고전압 검측 기본](https://www.fluke.com/en-us/learn/blog/automotive/hybrid-vehicle-measurement-safety-basics-taking-high-voltage-readings). 차종별 지정된 격리 위치·대기시간·안전장비·작업자 자격 필요.
- **4·6번 인버터 열관리와 배터리 모듈**: OEM 냉각수 회로 펌프·에어빼기 방식 및 BMS 진단 데이터를 특정 모델 기준으로 추가 확인.
- **9번 급속충전 커넥터 잠금**: 고전압 충전 중 강제 분리 위험, 차량·충전기 개별 안전 매뉴얼 필요.
- **5·12~15번 기존 과목 분류 보류**: 타이밍벨트, 유성기어, CVT, TPMS, EPS 조향각은 친환경이 아닌 엔진·섀시·전기장치 영역 가능성이 있어 기존 `hold_do_not_publish` **5건 유지**. 과목을 임의로 변경하지 않았어.
- **11번 회로도 점선**: 실제 도면과 범례 없이 점선 의미를 일반화할 수 없으므로 편집·출제 품질 검토.
- **16·17번 수소 안전/누출경보**: [미국 DOE 수소 안전 원칙](https://www.energy.gov/cmei/fuels/hydrogen-safe) 및 [센서 기술](https://www.energy.gov/cmei/fuels/how-advanced-hydrogen-leak-detection-are-technologies-used-sufficiently-accurate-and)을 참고했지만 실제 고압가스 조치는 OEM·관련 법령·전문자격 재검토 필수.
- **17번 수소 경고 원인진단·18번 DC-DC 충전이상**: QA19에서 각각 다시 작성한 **최신 질문·4선지·해설**을 대상으로 이번 QA22의 개별 선택지 판정 이유를 기록. 과거 QA19 버전 정보와 혼동하지 않도록 테스트도 연동.
- **20번 수소차 경제성**: 수소가격·충전소 운영·유지관리 비용 등은 지역·시점별로 바뀌어 일반론 외의 비용·가격 결론은 유보.

## 참고기술자료

- [미국 AFDC 하이브리드 구동계 구조](https://afdc.energy.gov/vehicles/how-do-hybrid-electric-cars-work)
- [AFDC 전기차/DC-DC](https://afdc.energy.gov/vehicles/how-do-all-electric-cars-work)
- [Fluke 차량 HV 계측](https://www.fluke.com/en-us/learn/blog/automotive/hybrid-vehicle-measurement-safety-basics-taking-high-voltage-readings)
- [미국 DOE 수소 안전](https://www.energy.gov/cmei/fuels/hydrogen-safe)
- [DOE 수소 누출 검지 연구](https://www.energy.gov/cmei/fuels/how-advanced-hydrogen-leak-detection-are-technologies-used-sufficiently-accurate-and)

## 누적 기록

QA19 당시 누적 340문항 이후 QA20 섀시20, QA21 전기20, QA22 친환경20을 더해 **5회차 80문항·320선지 전체에 1차 판단 이유 기록 완료**. 전체 누적 **400문항·1600선지 / 720문항·2880선지**. **6~9회차 320문항·1280선지는 아직 개별 4선지 검수 미완료**이고 QA19 자동 위험대기열로만 구조/위험 후보가 분류돼 있어.

**현행 과목 분류 보류 53, 독립 최종 기술승인 0/720, 공개 기출 복원 출제 0/720.** 현재 80문항 학습용 예상문제 모의고사와 공개 `data/manifest.json`은 변경되지 않았어.

다음: 6회차 **엔진→섀시→전기→친환경 각 20문항**, 이어 7~9회차. 또한 이미 편집된 중복/고전압/법령/차종별 OEM 보류를 전문가 근거·게시권리와 결합한 별도 최종 검수가 필요해.

테스트: `node tests/technical-qa22.test.cjs`, `node tests/qa19-round05-09-risk-queue.test.cjs`, `node tests/release-gate.test.cjs`.
