# QA5 — 720문항 전수 자동 정합성 감사 및 실제 편집 교정 3건

작성: 2026-11-23 / 기준: `main`의 QA4 후속

## 구분한 검수 범위

**① 전체 720문항/720해설 정적 검사**: `tests/qa5-bank-integrity.test.cjs`가 9회차×4과목×20문항의 JSON을 전부 읽고 고유 ID·4개 보기·회차/과목·정답 번호와 별도 해설의 정답 지문/ID 정합성·게시보류 상태를 검사한다. 유사 지문(정규화 3-gram Jaccard 0.55 이상), 동일 정답 지문, 해설 80자 미만, 수치/단위, 과도한 단정, 기존 과목 보류 47건은 **추가 검토 후보**로 보고한다.

**② 문항 3건 실제 편집 수정**: 아래 질문·보기·해설 교정은 `data/qa/technical-qa5-changes.json`에 수정 전/후를 저장했고 원래 정답 인덱스를 모두 유지했다. 이전 QA1~QA4 이력은 덮어쓰지 않았다.

**③ 개별 선지의 독립 최종 기술 승인**: **이번 QA5에서 0문항.** 출처를 인용한 재작성은 참고기술자료와 편집상 일치한다는 뜻이며 모든 차종·4선지의 최종 전문 검증/공개 승인으로 간주하지 않는다.

## 교정한 3문항

| ID | 작업 | 제조사·기술자료 참고 |
| --- | --- | --- |
| `auto-made-r01-s02-q10` | 가변 댐퍼의 감쇠력 질문 해설에서 관련 없는 엔진 연료분사 설명을 제거, 선지와 맞춘 해설로 교정 | [ZF CDC](https://www.zf.com/products/en/cars/increasing_comfort_safety/adaptive_damping_rear_axle_steering.html), [KYB DCC Pro](https://www.kyb.com/resource/press/electronically-controlled-oe-shock-absorbers-for-volkswagen-group/) |
| `auto-made-r01-s02-q13` | 기존 19번과 역할 정의가 중복된 EPS 토크 센서 문제를, **토크 센서의 차종별 진단·실시간 데이터 검토**라는 다른 학습 목표로 개정 | [HELLA 토크·각도 센서](https://www.hella.com/microsite-electronics/en/Products/Steering-Torque-and-Angle-Sensor-4917/), [HELLA 센서 진단 원칙](https://www.hella.com/techworld/us/lounge/sensors-actuators/) |
| `auto-made-r01-s01-q20` | '항상/어떤 상황에서도/반드시' 식의 비현실적 오답 선지를 **희박·농후 피드백 방향의 오개념**으로 교체, Bosch 자료를 참조하여 정답 및 해설을 연동 | [Bosch 람다센서](https://www.bosch-mobility.com/en/solutions/exhaust-gas-treatment/switching-type-lambda-sensor/) |

이 수정 3문항은 `review_status: editorial_draft`, `technical_answer_status: pending_independent_review`, `publishable: false` 상태를 유지한다. 특히 엔진20은 QA3 당시 '오답선지 품질 보류'였으므로 **품질 수정이 이뤄졌어도 최종 기술 보류는 아직 해제하지 않았다.** 엔진13/16은 차종별 매뉴얼·측정 조건 검토 보류 유지.

## 검사 실행 및 재현

```sh
node tests/validate.cjs
node tests/json-bank.test.cjs
node tests/draft-bank-rounds.test.cjs
node tests/technical-qa1.test.cjs
node tests/technical-qa2.test.cjs
node tests/technical-qa3.test.cjs
node tests/technical-qa4.test.cjs
node tests/technical-qa5.test.cjs
node tests/qa5-bank-integrity.test.cjs
node tests/release-gate.test.cjs
```

GitHub Actions의 `Validate automotive quiz JSON bank`에서 **`qa5-720-integrity-audit`라는 JSON 아티팩트**가 생성되며, 중복 후보·해설 짧음 후보·과목 보류를 문항 ID 단위로 내려받아 검토할 수 있다. 결과 수치는 실행 로그 `QA5_BANK_SUMMARY`로 별도 확인해야 한다.

## 다음 단계 — 여전히 완료되지 않은 부분

1. **실제 기술적 4선지 개별 판정**: QA3에서 엔진20문항만 1차 검토. 섀시20문항은 QA4 편집 검토 완료이지만 선지별 독립 기술검증 아직 미실시. 이후 전기·전자 및 친환경을 20문항 단위로 이어갈 것.
2. **출제 범위 보류 47문항**: 현재 분류를 임의 이동하지 않고 Q-Net 세부 범위 및 전문 자료 대조 후 검토.
3. **유사문항/짧은 해설**: 자동검출은 중복 확정이나 기술적 정답 판정이 아니다. 필요시 수작업 수정과 각 단계 이력 보존.
4. **모의고사 출제 승격**: 정식 기술 최종 승인과 게시권한 확인이 모두 완료된 자체 재작성 문제만 `data/past/approved/`에 등록하고 매니페스트에 연결. 미검수 초안 720문항은 현재 전부 공개 모의고사에서 제외.
