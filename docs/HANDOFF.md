# 다음 채팅 인계 — 현재 작업 상태

## 홈 UX 통일 — 2026-11-26

2026-11-26 홈 UX: 공인중개사 gichul-quiz의 홈 배치를 기준으로 자동차정비 전용 4과목 카드(10·20/전체 보기), 큰 실전 시험 메뉴와 우측 문제은행·오답 메뉴, 홈에 과목별 괄호문제 200개 직접 출제(10·20 또는 전체), 기존 톱니바퀴 브랜드와 녹색 테마 유지. 중복 상단 아이콘과 안내문, 홈 샘플 체험을 숨김. 샘플 시험 및 데이터는 유지. 기존 문제/정답/해설, 로테이션·학습 기록·모의고사 로직 불변. Node 및 Chromium 홈/모바일 회귀검사 갱신; 최신 Actions 결과 확인 필요.


## 괄호퀴즈 확장 2차 — 2026-11-26

PR #64(400문항)는 main 9a26ffd에 병합. PR #65는 병합 전 Node 및 Chromium 검사 성공 후 main `730b78d62bc52a73f7eb8fe272b8c0d0263c6608`에 병합 완료. main의 실제 `data/concept.json`에서 과목별 200개, 총 800개 및 고유 ID 800개를 확인했다. 기존 400문항을 보존하고 400개를 추가한 목표 달성 상태다. 추가 400개 중 201개는 개념·진단 질문, 199개는 기존 공식과 수치를 이용한 가상 응용 계산 문제다. 수치 변형은 독립 개념 400개를 의미하지 않는다. source_question_id, 4지선다, 한 개 빈칸, 정답 및 해설을 갖추고 별도 순환 대기열을 사용한다. 기존 1,440문항·예상 112·시연 8은 그대로 유지. 기술 전문가 인증을 의미하지 않으며 전수 감수 단계는 추가하지 않는다. 이전 확장 1차 내용은 이력이다.

병합 전 [JSON 검사](https://github.com/jejuzipsa/automotive-quiz/actions/runs/45687639655) 및 [Chromium 검사](https://github.com/jejuzipsa/automotive-quiz/actions/runs/45687639710) 성공. 최신 배포 `7ebe626`: [Pages](https://github.com/jejuzipsa/automotive-quiz/actions/runs/45764814053) 및 [JSON 검사](https://github.com/jejuzipsa/automotive-quiz/actions/runs/45764814509) 성공. [Chromium 검사](https://github.com/jejuzipsa/automotive-quiz/actions/runs/45764814346)는 실제 운영 사이트 성공, 로컬 모바일 실패(버튼 번호 1과 80kPa의 결합 문자열이 180kPa와 충돌). 자동 테스트에서 `.choice-text` 요소에만 정확히 일치하도록 수정하고 재현 회귀검사를 추가했다. 재검사 결과는 최신 main Actions에서 확인한다. 문제은행 및 앱 동작 변경 없음. 실제 iPhone Safari 실기기 확인은 아직 미실시.

## 괄호퀴즈 확장 1차 — 2026-11-26 (과거 기록)

사용자 승인 목표는 과목당 200문항, 총 800문항. 이번 변경은 과목당 100개, 총 400개(기존 48개 ID·내용 유지, 신규 352개). 기존 재작성 문제/해설 및 예상문제의 핵심 개념과 공식에 기반해 독립적인 짧은 빈칸 문제를 작성하고 source_question_id로 연결. 기존 1,440문항 및 예상 112문항, 데모 8문항은 변경하지 않는다. 10·20·전체 풀기, 과목별 순환 대기열 및 브라우저 저장, 정오답/해설/오답복습 기능 연결. 학습용이며 기술 전문가 인증을 주장하지 않는다. 남은 목표 400문항은 실제로 새로운 학습 개념과 적용 사례를 중심으로 확장한다. 단순 중복 및 불필요한 검수 단계는 추가하지 않는다.

기준: 2026-11-26. 프로젝트는 공인중개사가 아닌 자동차정비산업기사 문제풀이 사이트다.

- 저장소: https://github.com/jejuzipsa/automotive-quiz
- 운영: https://jejuzipsa.github.io/automotive-quiz/
- UI 참고: https://github.com/jejuzipsa/gichul-quiz

## 현재 완료

기본 문제은행 연결 기준 PR #61 (`30fc3f94`), 괄호퀴즈 최신 반영 기준 PR #65 (`730b78d`). 기본 화면에서 자동으로 1,440문항을 불러온다. 4과목 각 360문항. 파일 선택 없음. 별도 예상 112, 개념 800, 시연 8, 전체 2,360문항. 두 세트는 학습용이며 공식 인증·독립 감수 완료를 의미하지 않는다.

- Node: [45565065208](https://github.com/jejuzipsa/automotive-quiz/actions/runs/45565065208) 성공
- GitHub Pages: [45565064708](https://github.com/jejuzipsa/automotive-quiz/actions/runs/45565064708) 성공
- 실제 Pages PC 1440×900·모바일 390×844 Chromium: [45565065171](https://github.com/jejuzipsa/automotive-quiz/actions/runs/45565065171) 성공. 제공 파일과 배포본 및 앱 파일 비교, 360문항 표시, 자동 로딩, 정오답/해설/오답 복습, 두 버전 로테이션, 80문항 모의고사 확인.

## 데이터와 실행 경로

| 데이터 | 위치 | 수량 |
|---|---|---:|
| 재작성본 | `data/past/drafts/`, `data/explanations/drafts/`, 회차 01~09 | 720 |
| 후속 수정 | `data/qa/technical-qa{51,54,55,57,58,59,60,61,62,63,65}-*.json` | 82개 수정 |
| 최소 표현 수정본 | `data/rotation/light/{engine,chassis,electrical,eco}.json` | 720 |
| 예상/개념/시연 | `data/manifest.json` 및 연결 파일 | 920 |

`app.js`의 `loadPublicBank`, `loadRebuilt`, `normalizeLight`, `personalRotation`이 출제를 담당한다. 최소 표현 수정본과 제공된 JSON의 학습 필드 720개 일치 확인 완료. QA23 원본 OCR은 라이브러리의 별도 자료로 보존한다.

## 다음 작업

괄호퀴즈 800문항 작성·병합 완료. 최종 운영 배포 및 브라우저 검사는 최신 main의 Actions 결과를 기준으로 확인한다. 기존 학습 기능은 유지한다. 사용자에게서 구체적인 오류나 개선 요청이 들어오면 그 부분부터 처리한다. 반복적인 전수 기술 검수나 과목 재분류를 자동으로 이어가지 않는다. 이전 PR #58(과목 보류 재검토)과 #60(파일 선택 방식 브라우저 검사)은 현행 #61에 더 이상 필요하지 않다. 과거 작업은 Git 이력에 보존한다.

현재 제한: 로테이션은 세션 배정 기준으로 대기열을 소비한다(중간 종료한 미응답 문항 포함). 학습기록은 같은 브라우저 기준이며 PC와 iPhone 간 동기화 없음. 실제 iPhone Safari 실기기는 아직 직접 시험하지 않았다. 문항의 기술적 정확성/공식 출제 여부/권리는 독립 검증 완료로 표시하지 않는다.

[현재 지침](../AGENTS.md) · [사용법](ROTATION.md) · [작업 이력](WORK_LOG.md) · [이전 인수인계 원문](https://github.com/jejuzipsa/automotive-quiz/blob/30fc3f94e4004d18e2c099e6d3daff6dbb274d26/docs/HANDOFF.md)
