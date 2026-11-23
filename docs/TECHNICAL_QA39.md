# QA39 — 1회 엔진 품질보류 3건 재검토 및 55건 과목배정 대기열

## 실제 수정
- 1회 엔진 13번: ECU 탈거 전 전원 차단에서 통신 정상/다른 모델 절차 차용/잔류 전압 무시 등 현장 오류 중심으로 오답3개를 교정. 정답은 2번 유지.
- 1회 엔진 16번: 공통 저압축 검사에서 공통 계측오류/밸브타이밍/크랭킹 검사조건을 생략하는 잘못된 추론 3개로 교정. 정답은 4번 유지.
- 1회 엔진 20번: 산소센서 피드백 역방향 혼동 중심의 보기 교정은 QA5에서 이미 수행됐음을 현재 데이터와 이력 비교로 확인. 중복 수정하지 않음.
- [두 건의 전후 비교 원문](../data/qa/technical-qa39-editorial-edits.json). QA1·QA3 감사는 과거 이력 그대로 남기고 최신 QA39 편집 결과를 테스트에서 별도로 인정함.

## 근거 및 검수 한계
- 13번: [Toyota 2024~25 RAV4 ECM 탈거 절차](https://estimate.mymitchell.com/t3Portal/document/rm/RM3510U/xhtml/RM100000002FPUG.html?hashId=RM100000002FPUG&linkId=d706e1446)에는 전원 끈 후 모델·사양별 대기와 배터리 분리 조건이 나타남. 특정 Toyota 한 차종 예시라서 모든 제조사에 같은 대기시간을 적용할 수 없어.
- 16번: [BMW 기술훈련 엔진진단](https://ia801005.us.archive.org/11/items/BMWTechnicalTrainingDocuments/ST501%20New%20Engine%20Technology/02_Engine%20Diagnosis.pdf)의 스로틀/크랭킹·실린더 간 비교 조건을 참고. 개별 엔진별 허용압력·시험방법은 제조사 지침이 우선이야.
- 20번: [Bosch switching lambda sensor](https://www.bosch-mobility.com/en/solutions/exhaust-gas-treatment/switching-type-lambda-sensor/)의 배기 잔류산소 피드백 원리. QA5 교정 이력은 존재하지만 **최종 전문가 승인 아님**.
- 3건의 QA3 역사상 `needs_additional_model_or_quality_review` 상태는 과거 감사 판정으로 보존됨. 2건은 편집 개선, 1건 QA5 기개선 확인일 뿐 3건 모두 기술·법령·안전·사용권리는 미승인이야.

## 55개 과목 배정 검토
- Q-net 공식 [2025-27 산업기사 출제기준 게시물](https://www.q-net.or.kr/cst006.do?artlSeq=5213442&brdId=Q006&code=1202&gId=&gSite=Q&id=cst00602)에서 적용기간 확인. [2차 해설자료의 18개 주요항목 정리](https://shcomms12.com/2026/10/24/auto-mechanic-industrial-engineer-written-exam/)는 엔진(과급·가솔린/디젤 전자제어·엔진본체·배출), 섀시(자동변속기·현가·전자제어조향/제동), 전기전자(통신·회로·주행안전·냉난방·편의), 친환경(하이브리드 HV·전기차·수소차)을 열거함. **2차 자료를 공식 HWP 직접 검토로 오인하면 안 돼.**
- [55건 전수 검토용 분류 테스트](../tests/qa39-subject-triage.test.cjs)는 기존 보류 55건 모두에 잠정 과목·분류사유/재작성 방침을 부여하고 `qa39-subject-review-55` Actions 아티팩트로 내보내. 자동 과목 이동·신규 공개는 없음.
- 재검토 우선: 6회 친환경20 EV 인버터의 구식 가정용 인버터 사유 오탐, 엔진의 렌터카 법적 분류, 엔진의 일반 배전반 화재, 엔진의 타이어, TCS/EPB/ABS/SAS 등 과목 경계.
- 분류 이유가 오래되거나 과목이 섞인 경우 원본/이력과 현재 질문을 연결해 전문적 확인 후 대체 또는 재배정해야 해. 과목당 20문항 편제와 원문 출처 이력을 지키지 않은 임의 이동 금지.

## 공개/철수 게이트
- 현재 자체 제작 공개 연습문항 80개·기출 재구성 공개 0·독립 기술 최종승인 0/720 유지.
- 구매교재 OCR 원본과 권리 없는 자료를 웹에 올리지 않아. 보류55/기술고위험369의 최종 확인 전 공개 초안 삭제와 Git 이력 재작성도 하지 않아.
