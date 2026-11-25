# 다음 채팅 인계 — 현재 작업 상태

## 괄호퀴즈 확장 1차 — 2026-11-26

사용자 승인 목표는 과목당 200문항, 총 800문항. 이번 변경은 과목당 100개, 총 400개(기존 48개 ID·내용 유지, 신규 352개). 기존 재작성 문제/해설 및 예상문제의 핵심 개념과 공식에 기반해 독립적인 짧은 빈칸 문제를 작성하고 source_question_id로 연결. 기존 1,440문항 및 예상 112문항, 데모 8문항은 변경하지 않는다. 10·20·전체 풀기, 과목별 순환 대기열 및 브라우저 저장, 정오답/해설/오답복습 기능 연결. 학습용이며 기술 전문가 인증을 주장하지 않는다. 남은 목표 400문항은 실제로 새로운 학습 개념과 적용 사례를 중심으로 확장한다. 단순 중복 및 불필요한 검수 단계는 추가하지 않는다.

기준: 2026-11-25. 프로젝트는 공인중개사가 아닌 자동차정비산업기사 문제풀이 사이트다.

- 저장소: https://github.com/jejuzipsa/automotive-quiz
- 운영: https://jejuzipsa.github.io/automotive-quiz/
- UI 참고: https://github.com/jejuzipsa/gichul-quiz

## 현재 완료

PR #61, main `30fc3f94e4004d18e2c099e6d3daff6dbb274d26`. 기본 화면에서 자동으로 1,440문항을 불러온다. 4과목 각 360문항. 파일 선택 없음. 별도 예상 112, 개념 400, 시연 8, 전체 1,960문항. (괄호퀴즈 첫 확장 352개, 최종 목표 800개.) 두 세트는 학습용이며 공식 인증·독립 감수 완료를 의미하지 않는다.

- Node: [45565065208](https://github.com/jejuzipsa/automotive-quiz/actions/runs/45565065208) 성공
- GitHub Pages: [45565064708](https://github.com/jejuzipsa/automotive-quiz/actions/runs/45565064708) 성공
- 실제 Pages PC 1440×900·모바일 390×844 Chromium: [45565065171](https://github.com/jejuzipsa/automotive-quiz/actions/runs/45565065171) 성공. 제공 파일과 배포본 및 앱 파일 비교, 360문항 표시, 자동 로딩, 정오답/해설/오답 복습, 두 버전 로테이션, 80문항 모의고사 확인.

## 데이터와 실행 경로

| 데이터 | 위치 | 수량 |
|---|---|---:|
| 재작성본 | `data/past/drafts/`, `data/explanations/drafts/`, 회차 01~09 | 720 |
| 후속 수정 | `data/qa/technical-qa{51,54,55,57,58,59,60,61,62,63,65}-*.json` | 82개 수정 |
| 최소 표현 수정본 | `data/rotation/light/{engine,chassis,electrical,eco}.json` | 720 |
| 예상/개념/시연 | `data/manifest.json` 및 연결 파일 | 520 |

`app.js`의 `loadPublicBank`, `loadRebuilt`, `normalizeLight`, `personalRotation`이 출제를 담당한다. 최소 표현 수정본과 제공된 JSON의 학습 필드 720개 일치 확인 완료. QA23 원본 OCR은 라이브러리의 별도 자료로 보존한다.

## 다음 작업

지금은 사이트에서 실제 공부할 수 있는 상태다. 사용자에게서 구체적인 오류나 개선 요청이 들어오면 그 부분부터 처리한다. 반복적인 전수 기술 검수나 과목 재분류를 자동으로 이어가지 않는다. 이전 PR #58(과목 보류 재검토)과 #60(파일 선택 방식 브라우저 검사)은 현행 #61에 더 이상 필요하지 않다. 과거 작업은 Git 이력에 보존한다.

현재 제한: 로테이션은 세션 배정 기준으로 대기열을 소비한다(중간 종료한 미응답 문항 포함). 학습기록은 같은 브라우저 기준이며 PC와 iPhone 간 동기화 없음. 실제 iPhone Safari 실기기는 아직 직접 시험하지 않았다. 문항의 기술적 정확성/공식 출제 여부/권리는 독립 검증 완료로 표시하지 않는다.

[현재 지침](../AGENTS.md) · [사용법](ROTATION.md) · [작업 이력](WORK_LOG.md) · [이전 인수인계 원문](https://github.com/jejuzipsa/automotive-quiz/blob/30fc3f94e4004d18e2c099e6d3daff6dbb274d26/docs/HANDOFF.md)
