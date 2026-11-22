# 자동차정비산업기사 필기 문제은행

공인중개사 기출문제 사이트 `jejuzipsa/gichul-quiz`를 참고한 독립 반응형 자동차정비산업기사 학습 사이트.

- 과목: 자동차 엔진정비 / 자동차 섀시정비 / 자동차 전기·전자장치정비 / 친환경 자동차정비
- 데이터 분리: 기존 공개 기출 / 예상문제 / 핵심 개념 퀴즈
- 4지선다 문제풀이, 정답·오답, 해설, 결과, 오답 복습, 실전 모의고사 화면
- 초기 배포에는 직접 작성한 시연 문제만 포함. 상업용 출판사 교재 OCR/스캔 원문은 **공개 저장소 또는 GitHub Pages로 배포하지 않음**

## GitHub Pages
Settings → Pages → Deploy from a branch → main → /(root) → Save.

주의: GitHub Pages 웹사이트는 인터넷에 공개된다. GitHub 저장소를 Private으로 변경한다고 기존 Pages에 올린 콘텐츠가 자동으로 비공개가 되는 것은 아니다.

## 작업 재개 — 다음 채팅에서 반드시 읽을 것

**[인계 문서](docs/HANDOFF.md)** → [진행 기록](docs/WORK_LOG.md) → [문제은행 상태](docs/DATA_BANK.md) → [검수 기준](docs/REVIEW_PROTOCOL.md)

- 기계적으로 처리된 전체 데이터 상태: [data/bank-status.json](data/bank-status.json)
- 원본 교재 문제 720문항: QA6 개인 백업에만 보관, **공개 Pages에는 0문항**
- 다음 검수 시작점: `auto-r01-s01-q11` (1회 엔진정비 11번부터 20문항 단위)
- 새 채팅 지시문: `automotive-quiz 저장소의 docs/HANDOFF.md부터 읽고 QA6 문제 검수 이어서 진행해줘.`

## 아이콘 / 공통 디자인

2026-11-22에 `gichul-quiz/assets`의 기존 섹션 아이콘 PNG 6개를 `assets/`로 그대로 복사했어. 섹션·시험·개념·복습 등에 사용하고, **자동차정비의 메인 톱니바퀴 아이콘은 유지**해. 원본 아이콘 재동기화는 `.github/workflows/sync-reference-icons.yml`에서 담당해.

## 현재 테스트

`node tests/validate.cjs`

샘플 문제 데이터와 UI 코드의 구조를 검사한다. 실제 사용자의 모든 기기에서의 브라우저 동작이나 QA6의 기술적 정답을 검증하는 테스트는 아니다.
