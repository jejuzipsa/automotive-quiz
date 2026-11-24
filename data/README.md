# 자동차정비산업기사 JSON 문제은행

공인중개사 기출 사이트(`jejuzipsa/gichul-quiz`)처럼 **과목별 JSON을 GitHub에 두고 사이트가 자동 읽는 구조**야. 파일 수동 선택이나 ZIP은 사용하지 않아.

## 현재 배포되는 JSON

- `manifest.json` — 자동 로딩 목록
- `expected/engine.json`, `expected/chassis.json`, `expected/electrical.json`, `expected/eco.json` — 자체제작 연습문제 각28개, 총112개
- `demo.json` — 기능 시연 8개
- `concept.json` — 핵심 개념 퀴즈 4개

## 실제 기출 복원 문제 편집 자료

- QA20 실기출 복원 OCR **720개**는 개인 라이브러리 `/기출문제_자동차정비산업기사/JSON문제은행/`에 **과목별 JSON 각180개**로 정리함.
- `track: "past"`, `source_type: "reconstructed_past_exam"`. QA23 원문 대조 기록 720 / 720. 독립 기술 승인 0 / 720, 게시 승인 0 / 720.
- OCR 대조와 문항 수정·정답 검증을 구분해 기록한 뒤 웹사이트 배포용 `data/past/approved/{subject}.json`에 기술·권리·과목 최종 승인 후에만 추가해 `manifest.json`으로 연결한다.
- **문제를 추가하거나 검수할 때 ZIP을 생성하지 말고 JSON 파일을 직접 수정하고 저장한다.**

## 문제 구조 예시

```json
{
  "id": "auto-example",
  "track": "past",
  "subject": "engine",
  "round": 1,
  "question_number": 1,
  "question": "검수·재작성한 질문",
  "choices": ["보기 1", "보기 2", "보기 3", "보기 4"],
  "answer": 1,
  "explanation": "검수·재작성한 해설",
  "source_type": "reconstructed_past_exam",
  "transcription_status": "source_compared",
  "technical_answer_status": "independently_approved",
  "rights_cleared": true,
  "review_status": "approved",
  "publishable": true
}
```
