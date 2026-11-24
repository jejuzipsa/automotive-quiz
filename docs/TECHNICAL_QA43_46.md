# QA43~QA46 — 18개 과목 이탈과 3개 경계 문항의 실질 교정, 최종 전문감수 준비

2026-11-24. **현재 결과는 편집교정/전문가 리뷰 대기열 준비이지, 기술·국내법령·정답 유일성·출제권리의 최종 승인이 아님**.

## 1. 실제 교정 내용

| 구간 | 교정 건수 | 변경한 학습목표 요약 |
|---|---:|---|
| 1회 섀시2·4 / 전기14 / 친환경18·19 | 5 | ABS·EPS 전기진단, LIN, HEV 회생제동, EV DC/DC |
| 2회 섀시2·4 / 전기8 | 3 | EPS 전원·토크, 자동변속기 솔레노이드, 송풍기 레귤레이터 |
| 3회 섀시2 / 전기14 / 친환경15·18 | 4 | 전자댐퍼, CAN, EV HVIL, 배터리 셀밸런싱 |
| 4회 전기13 / 5회 전기13 | 2 | 차량 게이트웨이 CAN↔LIN 통신, A/C 컴프레서 구동허가 |
| 6회 엔진4 / 6회 전기13 | 2 | 커먼레일 목표·실측압, 발전기 정류 리플 |
| 8회 친환경20 / 9회 친환경20 | 2 | EV 배터리 열관리, FCEV 수소압력 레귤레이터 |
| **QA43~44 합계** | **18** | **18문항·72선지 전면 신규작성 및 해설 교정** |
| 3회 전기8 / 9회 전기6·19 | 3 | ABS 전기센서, TCS 전자제어, EPB 구동기 회로 |

QA45의 3개 경계 문제도 4선지씩 교정(총 12선지)하여, **QA43~45 합계 21문항·84선지**를 재작성했어.

관련 원장: [QA43 변경 12건](../data/qa/technical-qa43-remaining-scope-edits.json), [QA44 변경 6건](../data/qa/technical-qa44-later-scope-edits.json), [QA45 변경 3건](../data/qa/technical-qa45-overlap-edits.json). 정답번호·문항 ID·당시 QA 감사원본은 보존, 현행 문항의 선지 해설은 최신화.

## 2. 오래된 인버터 보류 사유

- 6회 친환경20은 현행 문항이 **구동배터리 DC→3상 AC 인버터**의 차량기술을 묻는 것으로 확인됐어. 과거 **가정용 태양광 인버터** 과목이탈 이유가 수정 전 문항에 대한 것이란 사실을 [QA45 이력 감사](../data/qa/technical-qa45-stale-hold-review.json)에 남겼어.
- 상세 공식 출제범위 미확인 및 독립 감수 전까지 이 문항도 `hold_do_not_publish`로 유지. **해제 승인 아님**.

## 3. 근거 및 독립검수 제한

- [Q-net 공식 자동차정비산업기사 출제기준 2025.1.1~2027.12.31](https://www.q-net.or.kr/cst006.do?artlSeq=5213442&brdId=Q006&code=1202&gId=&gSite=Q&id=cst00602) 페이지와 HWP 첨부 존재 확인. **HWP 세부 출제항목 본문 자체를 아직 직접 열람하지 못했으므로 55건의 과목 최종판정을 승인하지 않아**.
- [Bosch ESP/ABS/TCS](https://www.bosch-mobility.com/en/solutions/braking-systems/electronic-stability-program/), [Bosch 디젤 커먼레일](https://www.bosch-mobility.com/en/solutions/powertrain/diesel/common-rail-system-solenoid/), [HELLA ABS 센서](https://www.hella.com/techworld/us/technical/sensors-and-actuators/check-and-change-abs-and-wheel-speed-sensors/), [HELLA EPB](https://www.hella.com/techworld/en/technical/brakes/electric-parking-brake/), [HELLA 발전기 리플](https://www.hella.com/techworld/en/technical/car-electronics-and-electrics/starting-and-charging-system/checking-an-alternator-regulator/), [Vector CAN·LIN](https://www.vector.com/en/industries/automotive/application-areas/networks/), [TI EV BMS 인터록·셀밸런싱](https://www.ti.com/en-us/applications/automotive/hev-ev-powertrain/hev-ev-battery-management-system-bms), [DOE BEV](https://afdc.energy.gov/vehicles/how-do-all-electric-cars-work), [DOE FCEV](https://afdc.energy.gov/vehicles/how-do-fuel-cell-electric-cars-work) 등 일반 기술자료 참고.
- 공통 URL은 **독립 근거의 완전성 증명이 아니야**. 문항별 수치·제조사 차종 적용·고전압/수소/브레이크 안전·대한민국 관련 법령·권리 검토는 전문검수 대상.

## 4. QA46 720문항 전문가 검수 대기열

- [QA46 스크립트](../tests/qa46-specialist-review-queue.test.cjs)로 각 문항의 **현재 지문, 과거 1차 검증등급, 과목 보류, 최신 재작성 이력, 안전 우선순위, 필요 승인 항목**을 결합해 `qa46-specialist-review-720` CI 아티팩트를 작성.
- 과거 1차 출처 부합 **351문항 / 추가 검토 369문항**. 독립 기술 최종승인 **0/720**. 특히 QA40~45의 **새로 작성한 54문항은 과거 선택지 검증등급을 현재 문장에 그대로 전용하지 말고 독립 재검증해야 해**.
- 큐의 위험군 판정은 키워드 기반 편집 우선순위이지 전문 안전감수 완료 판정이 아니야.

## 5. 게시·저작권·보존

- 공인되지 않은 기출 재구성 **사이트 출제 0/720**, 자체예상문제 80 유지. 공개 GitHub 저장소에서 `data/manifest.json`은 미수정.
- 모든 55건의 과목 분류 보류 유지. 전문가 기술·법령·정답 유일성·사용권리 검토 및 비공개 백업 확인 전 초안 제거 금지. 삭제 후에도 공개 Git 과거이력은 남을 수 있어.

## 다음 작업
QA46 전문가 검수 대기열에서 고전압·수소·제동/조향·제조사 의존 수치·법령의 우선문항 순서대로 현재 버전의 4지선다 정답 유일성과 출처 원문을 독립 검증하고 기록해. 공식 Q-net HWP 상세항목, 개별 게시권리, 비공개 보존 및 과거 공개 Git 기록 처리 방식은 여전히 외부 확인이 필요해.
