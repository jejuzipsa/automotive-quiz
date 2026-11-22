# 자동차정비산업기사 기출 복원문제 사이트

[공인중개사 문제은행 사이트](https://github.com/jejuzipsa/gichul-quiz)의 과목별 JSON 관리 방식을 참고한 모바일·PC 반응형 자동차정비산업기사 필기 문제풀이 사이트.

## 기술·편집 검수 QA2 (2026-11-23)

**오답 보기 품질 의심 129문항을 모두 다시 읽어 128문항 수정하고, 1문항은 의도된 ‘속하지 않는 것’을 고르는 부정형 문제로 확인해 유지했어.** 별도로 가정용 태양광 인버터 1문항을 전기차 구동 인버터로 재작성해 **이번 고유 수정 129문항**이야.

- 질문·보기·해설 수정 전후: [QA2 129개 변경내역](data/qa/technical-qa2-changes.json), [부정형 오탐1개](data/qa/technical-qa2-false-positive.json), [상세 보고서](docs/TECHNICAL_QA2.md).
- 과목 분류 검토 47건 계속 보류: [QA2 분류 47개 평가](data/qa/technical-qa2-classifications.json) (39건 다른 과목 의심·7건 경계영역·1건 EV 구동개념으로 재작성).
- Bosch·Garrett·Fluke·기아 등 1차 기술 근거와 보기 4개를 확인한 [7문항 자료 대조](data/qa/technical-qa2-firstpass-evidence.json). 이는 기술 정답 최종 승인과는 별개야.
- **720문항·720해설 연결 자동검사 통과, 기술적 정답 최종승인 0/720, 실전 모의고사 신규 연결 0/720**. `publishable:false` 유지. 기존 QA23 원본과 사이트 출제 매니페스트는 변경하지 않았어.
- 최신 QA2 합본은 개인 라이브러리 `/기출문제_자동차정비산업기사/우리문제은행_QA2_오답보기검수/`의 `questions_all_720.json`, `explanations_all_720.json`. ZIP 없음.
- 회귀테스트: `node tests/technical-qa1.test.cjs` 및 `node tests/technical-qa2.test.cjs`.

## 정밀 기술·편집 검수 QA1 (2026-11-23)

**우리 문제 720문항과 별도 해설 720개에 대해 스키마/연결 전체 검사**, 1회차 80문항을 직접 읽고 주요 오답 보기 등을 포함해 **28문항 실제 수정**(1회차25+기타3), **과목/시험범위 분류 의심 47문항 전부 출제 보류**로 표시했어. 47건은 검토 후보이지 공식 분류가 확정된 게 아니야.

- [기술·편집 QA1 보고서](docs/TECHNICAL_QA1.md) 및 [28문항 수정 전후 내역](data/qa/technical-qa1-changes.json), [47개 과목 보류 목록](data/qa/technical-qa1-subject-holds-expanded.json), [위험 신호 요약](data/qa/technical-qa1-triage.json).
- 검토 후보: 해설 80자 미만 431, 주제와 무관한 오답보기 가능성 129, 안전 112, 법령·기준일 48, 수치·계산 24 (중복 가능). 이 수치들은 **자동 탐지된 검토 후보**이므로 확정 오류 개수가 아니야.
- QA1 최종 JSON/검토 대기열은 개인 라이브러리 `/기출문제_자동차정비산업기사/우리문제은행_QA1_기술검수/`에 보관해. 원본 QA23 OCR은 그대로 유지, ZIP 없음.
- **기술 정답 최종 승인 0/720·실전 모의고사 반영 0/720**, 전 문항 `publishable:false`. 내용 검수 승인 전까지 `data/manifest.json`에 `drafts/`를 넣지 마.
- 검증 명령: `node tests/technical-qa1.test.cjs`(720 ID/정답/해설, 직접 수정28, 과목 보류47), 기존 회차별 `node tests/draft-bank-rounds.test.cjs`.

## 우리 문제은행 및 별도 해설은행 — 720문항 편집 초안 완료 (2026-11-23)

- **QA23 원본 OCR 이미지 대조 720/720**(개인 자료)은 변형하지 않고 보관.
- 원본을 학습 참고자료로 사용하여 **우리 문제 720문항 + 별도 해설 720개를 새로 작성**했어. 9회차 × 4과목 × 20, 과목당 180문항. 모든 문제와 해설은 동일한 `id`로 1:1 연결돼.
- **GitHub 질문 데이터**: 1회차 `data/past/drafts/{subject}.json`, 2~9회 `data/past/drafts/roundXX/{subject}.json`. **GitHub 해설 데이터**: 1회차 `data/explanations/drafts/{subject}.json`, 2~9회 `data/explanations/drafts/roundXX/{subject}.json`.
- **최신 합본 JSON**은 개인 파일 라이브러리 `/기출문제_자동차정비산업기사/우리문제은행_v9/`: `questions_all_720.json` / `explanations_all_720.json`. 과목별 각 180문항·해설, 720문항 진행표, 기술 검토 대기 목록도 보관.
- **내용 상태는 편집 초안**: `review_status:"editorial_draft"`, `technical_answer_status:"pending_independent_review"`, `publishable:false` (720개 모두). 질문·보기·정답/해설 연결의 스키마 검사 **720/720 통과**. **기술 정답 최종 승인 0/720**이며 오답선택지의 개연성, 정답 유일성, 차종·법령 등 기술 근거 검토가 별도로 남아 있음.
- **현재 사이트의 모의고사에는 새 720개를 아직 연결하지 않았어.** 공개된 `data/manifest.json`은 승인되지 않은 `drafts/`를 읽지 않음. 승인본에 한해서 자동 출제 연결하고, 해설 기반 괄호형 객관식 문제를 별도 생성할 계획.
- 최종 집계 확인: `node tests/draft-bank-rounds.test.cjs`(1~9회 720 문제·해설 1:1), `node tests/validate.cjs`, `node tests/json-bank.test.cjs`.
- **ZIP 없이** 질문/해설/검수/진행 이력을 전부 JSON으로 관리.

## 데이터 저장 및 출제

- 사이트에 접속하면 `data/manifest.json`을 통해 **과목별 JSON 파일을 자동으로 읽음**. 사용자 ZIP/JSON 파일 선택·업로드 기능 없음.
- 현재 배포된 자체제작 연습문제 **80문항**: `data/expected/engine.json`, `chassis.json`, `electrical.json`, `eco.json`, 각 20문항. 시연용 8문항 `data/demo.json`, 개념 4문항 `data/concept.json`.
- **기출 시험 복원 자료 720문항(9회 × 4과목 × 20)**: QA23 **4개 JSON 파일(과목별 180)**로 개인 라이브러리 `/기출문제_자동차정비산업기사/JSON문제은행/`에 저장. OCR 원문 대조 **720/720**, 미대조 0. 현재 사이트에 720개가 배포되어 있다는 의미는 아님.
- OCR 원본 확인 → 기출 복원 내용 정리 → 질문·보기·해설 문장 재작성 → 정답·해설 검증 → 사이트용 과목별 JSON에 누적 등록. 원본 이미지 문제풀이·ZIP 백업을 다시 도입하지 않음.
- 문항형식: `id, track, subject, round, question_number, question, choices[4], answer(1~4), explanation, source_type, transcription_status, technical_answer_status, review_status`. 편집용 JSON에서 출제용 JSON으로 승격할 때 검수 상태를 확인.
- 보기를 새로 출제하거나 오답 복습할 때마다 섞되, 정답 번호는 원본 보기 인덱스로 재계산. 정답 파랑, 오답 빨강, 해설·결과·오답복습 제공.
- JSON 추가·변경 후 `node tests/validate.cjs` 및 `node tests/json-bank.test.cjs` 실행.

## 관련 링크

- [사이트](https://jejuzipsa.github.io/automotive-quiz/)
- [자동차정비 저장소](https://github.com/jejuzipsa/automotive-quiz)
- [공인중개사 레퍼런스](https://github.com/jejuzipsa/gichul-quiz)
- [필수 개발 지침](AGENTS.md) · [진행 인계](docs/HANDOFF.md) · [검수 기록](docs/WORK_LOG.md)

> **원본 OCR 전수 대조 720/720 완료.** 다음은 QA23 원본 JSON을 기준으로 질문·보기·해설을 재작성하고 기술적 정답/복수 정답을 검증하는 작업이야. 승인한 문항을 공개 사이트의 `data/past/`에 모의고사로 연결하고 해설에서 괄호형 객관식 문제를 만들 것. 데이터 저장은 과목별 **JSON/TXT**, ZIP 없이 진행.
