# 자동차정비산업기사 기출 복원문제 사이트

[공인중개사 문제은행 사이트](https://github.com/jejuzipsa/gichul-quiz)의 과목별 JSON 관리 방식을 참고한 모바일·PC 반응형 자동차정비산업기사 필기 문제풀이 사이트.

## **우리 문제은행 / 별도 해설은행 (누적 400문항 편집 초안 · 320 미작성)**

QA23 원문 대조 완료 720문항을 바탕으로 1~5회차 4과목 각20씩 **우리 문제 400개와 별도 해설 400개**를 새로 작성했어. 기존 원본 OCR JSON은 참고자료로 따로 유지해.

- **문제**: `data/past/drafts/{engine,chassis,electrical,eco}.json`. 질문·보기4·정답·`explanation_id` 포함.
- **해설**: `data/explanations/drafts/{engine,chassis,electrical,eco}.json`. 같은 `id`에 정답 이유·핵심 개념·검토 참고링크 포함.
- **상태**: 400문항은 `editorial_draft` / 기술 검증 대기 / `publishable:false`이고, **미작성 320문항**은 작업 목록으로 추적해. 기출 복원 신규 400문항은 아직 사이트에서 출제되지 않아. 사이트의 기존 독립 예상문제 80개와 별개야. 2~5회차 신규 파일은 문제 `data/past/drafts/round02/*.json`, `round03/*.json`, `round04/*.json`, `round05/*.json`, 해설 `data/explanations/drafts/round02/*.json`, `round03/*.json`에 별도 저장돼.
- **검증**: `node tests/draft-bank.test.cjs`(1회차), `node tests/draft-bank-rounds.test.cjs`(1~5회차)로 파일 수, 중복 ID, 4지선다, 정답-해설 1:1 연결, 출제 미연결 상태를 확인해. 기술 내용 및 복수 정답 여부는 별도로 검수해야 해.
- 개인 Library `/기출문제_자동차정비산업기사/우리문제은행_v1/`에서 과목별 최신 작업본은 `/기출문제_자동차정비산업기사/우리문제은행_v5/`의 합본 `questions_all_400.json`과 `explanations_all_400.json`, `rewrite_tracking_720.json`에 반영했어. ZIP 생성·파일 업로드 UI 없음.

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
