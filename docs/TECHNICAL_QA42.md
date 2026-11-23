# QA42 — 친환경 자동차정비 4~6회 과목 이탈 15문항 재작성

작성: 2026-11-23. **기존 실제 시험 문항의 재현이 아니라 자체 작성 학습문항으로 교체한 것이고, OEM·전문가·사용권리 최종 승인 전까지 전체 출제 보류를 유지**해.

| 회차 | 위치 | 현재 재작성 주제 |
|---|---|---|
| 4회 | 5·12·13·14·15 | AC 완속충전 OBC, 연료전지 공기압축기, SOH/SOC, DC 급속충전 경로, PEM 막 수분관리 |
| 5회 | 5·12·13·14·15 | HEV 구동모터 보조토크, 파워스플릿 동력분기, EV 리졸버, 저온 충전제한, FCEV 배터리 출력지원 |
| 6회 | 5·12·13·14·15 | PHEV 엔진/모터 분담, EV 감속기 소음, FCEV 애노드 퍼지, BMS 온도센서, AC 충전 제어파일럿 |

- [문항 전후 원장](../data/qa/technical-qa42-eco-scope-replacements.json): 15개 질문·60개 선택지·정답/오답 이유·기술자료 링크. 기존 문항ID·정답번호·과거 QA18/22/25 감사 문서 보존.
- DOE AFDC [BEV](https://afdc.energy.gov/vehicles/how-do-all-electric-cars-work), [HEV](https://afdc.energy.gov/vehicles/how-do-hybrid-electric-cars-work), [PHEV](https://afdc.energy.gov/vehicles/how-do-plug-in-hybrid-electric-cars-work), [FCEV](https://afdc.energy.gov/vehicles/how-do-fuel-cell-electric-cars-work): 차종 구성·전력 흐름·기본 에너지관리.
- DOE [연료전지 시스템](https://www.energy.gov/cmei/fuels/fuel-cell-systems), [PEM 구성](https://www.energy.gov/cmei/fuels/parts-fuel-cell), [EV 배터리](https://afdc.energy.gov/vehicles/electric-batteries), [충전](https://afdc.energy.gov/fuels/electricity-stations): 기본 작동 및 관리 원리.
- [Infineon 구동 인버터 리졸버](https://documentation.infineon.com/aurixtc3xx/docs/nnc1745576047829), [TI BMS 온도/전류/전압 모니터](https://www.ti.com/product/ADS131B24-Q1): 전기적 측정과 센서·제어 원리.
- 기술 링크는 개념 단위 공개자료. **현재 문항별 OEM 고전압 안전·차종별 오류진단·국내 법령/시험 세부범위 일치·저작권을 독립 확인한 것이 아님**.

## 보류와 출제 차단
- 55개 과목 분류 보류는 전부 그대로 유지. QA40~42에서 **33문항**을 해당 과목에 맞는 주제로 재작성한 단계이며 55건 전체 승인 완료가 아니야.
- 잠정 보류 분류: 과목 정합성 개선했으나 보류 33, 과목 교차 미교정 후보 18, 경계후보 3, 옛 오탐의심 1.
- 720문항 중 독립 기술 최종승인 **0**, 복원기출 공개 **0**, 공개 자체예상문제 **80** 불변. 공개 `data/manifest.json`도 수정하지 않아.
- 다음: 남은 과목 혼입 18개와 경계/오탐 후보 4개 및 기술·안전 검토 369개, 비공개 백업·권리 확인 후 공개 미사용 초안 철수.
