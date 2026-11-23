# QA14 — QA9 재작성 4문항 최신 버전의 16개 선택지 독립 1차 재확인

일자: 2026-11-23

## 왜 다시 검수했나?

QA9에서 수정한 **1회 전기·전자 2·3·6번, 친환경 17번**은 기존 QA7·QA8의 선지별 감사가 **수정 전 질문과 선택지**에만 적용됐어. 따라서 그 결과를 그대로 새 보기로 이월하면 안 돼. QA14에서는 **수정 후의 실제 질문·각 4개 보기**를 다시 읽고 기존 이력과 분리해 [QA14 최신판 감사 JSON](../data/qa/technical-qa14-qa9-four-latest-option-audit.json)에 16선지의 정답·오답 근거와 제조사 자료 링크를 기록했어.

| QA9 개정 ID | 최신판 기술자료 1차 대조 | 근거 |
| --- | --- | --- |
| `auto-made-r01-s03-q02` | 자동차용 100BASE-T1 **단일 트위스트페어 전이중**과 PC 100BASE-TX 차이 | [NXP](https://www.nxp.com/products/TJA1102A), [onsemi](https://www.onsemi.com/pub/Collateral/TND6015-D.PDF) |
| `auto-made-r01-s03-q03` | 주어진 120Ω×2 병렬 종단저항의 이론값 **60Ω** | [Pico CAN](https://www.picoauto.com/library/automotive-guided-tests/communication/can-bus/AGT-126-can-bus-physical-layer/) |
| `auto-made-r01-s03-q06` | **부하 상태 전압강하**로 연결부 접촉저항 이상 진단 | [Fluke 자동차 전원](https://www.fluke.com/en/learn/blog/automotive/electrical-automotive-troubleshooting) |
| `auto-made-r01-s04-q17` | **기계식 차동장치**가 선회 시 좌우바퀴 회전속도 차이를 허용 | [Eaton 디퍼렌셜](https://www.eaton.com/us/en-us/products/differentials-traction-control.html) |

4문항 모두 **기초 기술원리의 1차 자료 부합**으로 기록했지만 모든 차종/시험조건에서 유일한 정답이라는 공식 승인으로 계산하지 않았어. 추가 질문/보기/해설의 재작성은 없음.

## 이력과 안전장치

- QA7/QA8의 예전 감사 JSON은 변경하지 않았어. QA9에서 수정할 때 삭제한 이전의 `technical_verification_qa7/qa8` 메타데이터를 복구하지 않았어.
- 이번 최신판 기술대조는 `technical_verification_qa14`, `option_analysis_qa14`에 별도로 기재. 기존 `qa9_revision.status`는 당시의 **'편집 직후 재검수 대기'** 이력으로 보존하면서 `qa9_revision.qa14_latest_recheck_status`에 **'새 선택지 1차 자료검토 완료, 전문 최종승인 미실시'**를 명시했어.
- `tests/technical-qa14.test.cjs`로 현재 문항의 4개 보기와 새 감사, QA9 수정 후 이력, QA7/8 옛 감사가 정확히 연결되는지 확인.
- 현재 **1~2회차 160문항/640선지 모두 최신판에 대한 1차 기술자료 대조 이력**이 존재해. 하지만 **전체720 기술적 독립 최종승인 0개**, **기출 복원 신규 사이트 출제 0개** 유지. 과목분류 보류 49개도 그대로.

다음은 3~9회차의 **560문항/2240개 선택지**의 첫 독립 자료 대조. 단순 형식 검사는 이미 통과했으나 기술 정답의 유일성·중복성·안전·법령·공식 출제범위를 검증하는 작업은 아직 필요하다.
