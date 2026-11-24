# QA47 — 1회차 4과목 균형 20문항(80선지) 전문감수 준비 및 출처 적합성 선행검토

작성: 2026-11-24. **본 단계는 공개 기술자료의 출처 주제 적합성 선행검토이며, 정답 유일성·국내 출제범위·OEM 안전·사용권리의 독립 최종 승인이 아니다.**

## 1. 검토 범위와 결과
- 최신 `main` 기반 QA46 720문항 대기열을 참고하여 1회차에서 과목별 5문항씩 고른 균형 파일럿 **20문항·80선지**. 선정 기준은 과목분류 보류, QA43 최신 교정, 안전·OEM 확인 필요성, 과거 1차 추가검토 등급이다.
- 선정/근거 원장: [data/qa/technical-qa47-first20-source-preflight.json](../data/qa/technical-qa47-first20-source-preflight.json). 20문항을 복원기출로 출제하거나 기존 정답을 승인한 것이 아니다.
- **출처 원문 접근·주제 적합성 점검 시도 9문항**: 일반원리 수준 주제 관련 5, 일부만 관련 2, 관련 없는 자료 1, 접근 불가 1. 아직 직접 접근·검사하지 않은 11문항은 `not_checked`로 유지.
- 별도 기술검수 대기열/해설의 `technical_answer_status=pending_independent_review` 및 `publishable=false` 불변. 독립 기술 최종승인 **0/720**, Q-net HWP 세부본문 검수 0, 법령/OEM/권리 승인 0.

## 2. 근거 수준 별 주요 발견

| ID (1회차) | 출처 선행확인 | 평가와 다음 조치 |
|---|---|---|
| 엔진 13 | 접근 불가 | [기존 Toyota 구조자료](https://techinfo.toyota.com/t3Portal/document/erg/T-ERG-016-D/pdf/T-ERG-016-D.pdf)를 이번 접근 경로에서 확인하지 못함. ECU 탈거 절차 직접 근거 확보 필요 |
| 엔진 16 | 일부만 관련 | [Fluke 98 ScopeMeter 매뉴얼](https://assets.fluke.com/manuals/98______umeng0300.pdf)은 상대압축 측정·시험 조건 설명(매뉴얼 제3장, 제5장)은 있으나 ‘전 실린더 저압의 공통 원인’ 자체의 직접 검증과 다름 |
| 엔진 20 | 일부만 관련 | [Bosch 람다 센서](https://www.bosch-mobility.com/en/solutions/exhaust-gas-treatment/switching-type-lambda-sensor/)는 산소 신호·공연비 피드백 원리를 설명하나, 모든 센서 고장 유형의 결과를 단정할 근거는 아님 |
| 섀시 2 | 일반원리 관련 | [HELLA ABS 휠속도 센서](https://www.hella.com/techworld/us/technical/sensors-and-actuators/check-and-change-abs-and-wheel-speed-sensors/)는 파형·배선·센서간 데이터 비교 진단 방향을 설명. 차종별 절차는 아직 미검증 |
| 전기 12 | **잘못된 참고 주제** | 기존 [HELLA ABS/ESP 제어기 문서](https://www.hella.com/techworld/en/technical/car-electronics-and-electrics/abs-esp-control-units-for-braking-and-driving-dynamics/)는 **SRS 에어백 진단 안전의 직접 근거가 아님**. [HELLA 에어백 설명 문서](https://www.hella.com/techworld/en/technical/car-electronics-and-electrics/car-airbag-system/)를 보완 후보로 기록했으나 OEM SRS 정비 지침의 대체자료는 아님 |
| 친환경 18 | 일반원리 관련 | [미국 DOE HEV](https://afdc.energy.gov/vehicles/how-do-hybrid-electric-cars-work)는 회생제동의 에너지 회수 원리 설명. 4선지 독립승인 미완료 |
| 친환경 19 | 일반원리 관련 | [미국 DOE BEV](https://afdc.energy.gov/vehicles/how-do-all-electric-cars-work)는 DC/DC 컨버터의 저전압 공급 및 보조배터리 충전 역할을 설명 |
| 친환경 1·2 | 일반원리 관련 (2건) | [Fluke HV 측정 안전](https://www.fluke.com/en/learn/blog/automotive/hybrid-vehicle-measurement-safety-basics-taking-high-voltage-readings)은 절연장갑·OEM 차단·안전 계측 원칙 설명. 국내 정비자격/규정 및 차종별 무전압 절차는 미검증 |

출처 링크가 열리고 주제가 비슷하다는 이유로 질문에 **정답이 딱 1개**임을 입증했다고 해석하면 안 된다. 기존 QA 감사 원본과 문항 ID·원래 정답위치는 유지한다. 이 단계에서 콘텐츠를 임의 수정하거나 역사 감사결과를 덮어쓰지 않았다.

## 3. 실질적인 다음 작업 도구
- [QA47 테스트/내보내기](../tests/qa47-first20-source-review-packet.test.cjs)는 현재 문제은행에서 **문제 원문·4보기·정답번호·해설·기존 선택지별 판단 근거·참고URL·보류이력·QA47 출처 판독 결과**를 하나의 JSON 패킷으로 생성한다.
- 이 검사에는 **20문항/80선지, 5문항×4과목, 고유 ID, 정답/해설 일치, 초안 공개 금지, 공개 자체예상문제80 유지**가 포함된다.
- CI는 `qa47-first20-review-packet` 아티팩트를 생성한다. 감수자는 그 결과를 기반으로 선지 4개를 차종/시대/안전 조건별 대조한 뒤 별도 승인 기록을 작성해야 한다.

## 4. 기존 배포와 보존 규칙
- 공개 사이트 `data/manifest.json`·자체 예상문제80·정답 채점 로직은 **변경하지 않는다**.
- 전체 720개 재작성 초안 중 독립 기술최종 승인 0, 과목 보류 55 그대로. 구매교재 OCR 원문/해설은 공개 저장소 추가 금지.
- 공개 Git 초안 철수는 [DRAFT_RETIREMENT.md](DRAFT_RETIREMENT.md)의 비공개 이관·해시·복원·권리검토 후에만 한다.

## 5. 다음 순서
1. **QA47 잔여 11문항**의 링크 실제 열람 및 개별 주장 근거 적합성 대조.
2. QA47 20문항 각 보기의 유일 정답·고전압/SRS/제동·제조사별 진단 조건 전문감수, 이견·복수정답 명시.
3. Q-net [2025~2027 공식 출제기준 게시물](https://www.q-net.or.kr/cst006.do?artlSeq=5213442&brdId=Q006&code=1202&gId=&gSite=Q&id=cst00602)의 **첨부 HWP 세부 분류표 본문을 실제 확보하여** 55개 보류 분류를 재판정.
4. 동일한 형식으로 나머지 700개 감수 확장; 최종 기술·사용권 승인 전 미승인 문항을 공개하지 않는다.
