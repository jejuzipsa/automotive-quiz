# 자동차정비산업기사 문제풀이

**[사이트에서 바로 문제 풀기](https://jejuzipsa.github.io/automotive-quiz/)**

PC·모바일 반응형 개인 학습용 사이트. 별도의 파일 선택 없이 자동으로 문제은행을 불러온다.

| 과목 | 기존 재작성 | 원본 기반 표현 수정 | 합계 |
|---|---:|---:|---:|
| 자동차 엔진정비 | 180 | 180 | 360 |
| 자동차 섀시정비 | 180 | 180 | 360 |
| 자동차 전기·전자장치정비 | 180 | 180 | 360 |
| 친환경 자동차정비 | 180 | 180 | 360 |
| 총계 | 720 | 720 | 1,440 |

별도 예상문제 112, 괄호 퀴즈 800(과목별 200), 시연 8문항을 포함하면 총 2,360문항이다.

2026-11-26: [PR #65](https://github.com/jejuzipsa/automotive-quiz/pull/65) 병합 (`730b78d`), 기존 400개 유지 및 400개 추가. [병합 전 JSON 검사](https://github.com/jejuzipsa/automotive-quiz/actions/runs/45687639655)와 [Chromium 검사](https://github.com/jejuzipsa/automotive-quiz/actions/runs/45687639710) 성공.

## 기능

- 과목별 10·20문항, 전체 보기 및 로테이션
- 보기 순서 섞기, 정답·오답 표시, 문제 해설
- 누적 오답 노트, 다시 풀기
- 실전 모의고사 80문항/120분, 과목별 점수 및 과락, 시험 이어 풀기
- 글자 크기와 다크모드

학습 이력은 브라우저에 저장되며 기기 간 동기화는 아직 없다. 자료는 학습용이며 공식 기출 인증, 독립 전문감수 또는 권리 확인 완료를 주장하지 않는다. 공개 GitHub Pages 및 저장소에서 접근할 수 있다.

2026-11-25: [PR #61](https://github.com/jejuzipsa/automotive-quiz/pull/61) 병합 및 [Pages 배포](https://github.com/jejuzipsa/automotive-quiz/actions/runs/45565064708) 성공. [실제 PC·모바일 Chromium 검사](https://github.com/jejuzipsa/automotive-quiz/actions/runs/45565065171) 성공.

[사용법](docs/ROTATION.md) · [개발 지침](AGENTS.md) · [현재 인수인계](docs/HANDOFF.md) · [이전 작업 일지](docs/WORK_LOG.md) · [이전 README 원문](https://github.com/jejuzipsa/automotive-quiz/blob/30fc3f94e4004d18e2c099e6d3daff6dbb274d26/README.md)
