# QA27 — 7회 섀시정비 20문항·80선지 1차 기술근거 감사

기준: 2026-11-23 / 자체 재작성 편집 초안, 개인 원본 OCR 아님.

## 검수 범위·판정
- 20문항·80선지 각각에 정오 판단 이유와 기술자료 URL 기록. [선지별 감사](../data/qa/technical-qa27-r07-chassis-option-audit.json).
- **자료 1차 부합 9문항**: 1·4·8·10·11·13·14·15·20.
- **차종/안전/편집 보류 11문항**: 2·3·5·6·7·9·12·16·17·18·19.
- **지문 4건 교정**: 5 감쇠 성능 직접 검사 표현, 6 스캔툴보다 먼저 DTC 확인한다는 모순, 9 EPS와 ESC용 조향각 혼동, 12 센서 '직접 보정' 오해. [수정 전후](../data/qa/technical-qa27-r07-chassis-edits.json). 정답번호·4보기·해설 ID 보존.

## 주요 잔여 위험
- 2·16번은 라인압과 개별 클러치 회로를 단순 동일시하면 안 되므로 OEM 유압 포트 자료 확인.
- 3번은 컨버터 미삽입 시 펌프 파손 위험이 있는 안전정비 항목이어서 차종별 삽입 규격 검증 필요.
- 5·7번은 댐퍼 성능시험·현가 ECU 영점학습 조건이 차량별로 다른 점 확인.
- 9번은 라디오 주파수 오답이 너무 쉬워 변별력 부족, 17번은 오답 3개가 모두 무관한 사물이라 편집 재작성 후보.
- 18번의 에어현가 유지비 비교는 차종·기간·가격 조건과 시험범위 적합성 확인 필요.
- 19번의 풀스로틀 스톨시험은 과열·손상 안전 위험: 차종별 시험시간·고정·냉각조건 확인 전 실습 가이드로 사용 금지.
- 11·20번 ABS 신호 기술은 주제 유사하지만 각기 전원/센서 종류와 파형 차이로 별도 유지; 중복 품질 후보.

## 확인한 기술 자료
- [ZF ATF](https://aftermarket.zf.com/en/aftermarket-portal/knowledge-hub/transmission-oil-check/), [Sonnax 라인압](https://www.sonnax.com/tech_resources/314-transmission-diagnostics-using-pressure-guages), [KYB 댐퍼](https://www.kyb.com/resources/shocks-struts-101/how-shocks-work/), [KYB 진단](https://www.kyb.com/resources/shocks-struts-101/for-service-pros/diagnose-shocks-and-struts/)
- [Bosch EPS](https://www.bosch-mobility.com/en/solutions/steering/electric-power-steering-systems/), [Hunter SAS 보정](https://www.hunter.com/en-int/media-center/industry-insights/performing-a-steering-angle-sensor-reset/), [HELLA ABS 센서](https://www.hella.com/techworld/en/technical/sensors-and-actuators/check-and-change-abs-and-wheel-speed-sensors/), [Arnott 에어현가](https://www.arnottsuspension.com/pages/faq)

## 누적과 공개 보호
- 역사적 선택지 1차 기록 520/720문항·2080/2880선지, 미검수 200문항·800선지.
- 과목 보류55, **독립 최종 정답승인 0/720, 기출 복원 공개 0/720**. 근거기록은 공식 시험 정답 승인과 다름.
- 개인용 원본 QA23, 출제용 data/manifest.json, 공개 자체제작 예상문제 80·모의고사 변경 없음.
- 다음 순서: 7회 전기20 → 친환경20 → 8·9회 160.

검사: node tests/technical-qa27.test.cjs 및 전체 CI와 release gate.
