# QA17 — 3회차 전기·전자 및 친환경 40문항·160선지 1차 근거 대조

날짜: 2026-11-23

| 구간 | 선지별 이유 | 기초자료 1차 부합 문항 | 추가 검토 보류 문항 |
|---|---:|---:|---:|
| 3회 전기·전자 20문항 | 80 | 8 | 12 |
| 3회 친환경 20문항 | 80 | 5 | 15 |
| **합계** | **160** | **13** | **27** |

모든 선지의 판단 이유·자료 URL·현재 질문·정답 위치는 [QA17 전기 자료](../data/qa/technical-qa17-r03-electrical-option-audit.json), [QA17 친환경 자료](../data/qa/technical-qa17-r03-eco-option-audit.json)에 작성했고 JSON 질문·별도해설에 `technical_verification_qa17`, `option_analysis_qa17`로 연결했어.

## 직접 발견·조치한 4건

[QA17 전후 및 과목 보류 기록](../data/qa/technical-qa17-edits-and-holds.json)

- **3회 친환경16**: 같은 회차 6번과 사실상 중복된 금속 장신구 제거/보호구 문제를 **고전압 절연이상 경고·접촉기 강제 폐쇄 금지/안전진단** 문제로 교정. 정답 위치4 보존. [AFDC 전기차 정비안전](https://afdc.energy.gov/vehicles/electric-maintenance), [Fluke 계측안전](https://www.fluke.com/en-vn/learn/blog/automotive/hybrid-vehicle-measurement-safety-basics-taking-high-voltage-readings).
- **3회 친환경17**: 친환경 7번과 중복되던 일반 회생제동의 에너지효율 질문을 **높은 SOC·낮은 배터리온도의 충전수용전력 제한과 회생제동 감소** 문제로 교정. 정답 위치1 보존. [AFDC 회생제동 원리](https://afdc.energy.gov/vehicles/electric-basics-ev), [Bosch 브레이크 블렌딩](https://www.bosch-mobility.com/en/solutions/braking-systems/brake-by-wire/).
- **3회 전기·전자8**: ABS 유압조절기 교환 후 공기빼기·제동점검은 섀시정비 관련성이 높아 **새 과목 분류 `hold_do_not_publish`**. 원래 정답 변경/과목 확정 이동 없음.
- **3회 친환경15**: 퓨즈·릴레이의 일반 역할은 전기·전자장치정비 과목 관련성이 커 **새 과목 분류 보류**. 49개 → **51개 현행 과목 보류**. 역사적 QA1·QA2 47건은 그대로 보존.

## 추가 보류/편집 후보

- 전기 2·4번은 일반 LAN/OSI·패킷교환 문제로 자동차 정비 실무와 직접 관련성이 낮아 수정 후보.
- 전기 7번 배터리 팽창, 12번 SRS 안전, 13번 냉매 고압, 16번 A/C 냉방, 19번 크루즈 제어의 차종별 안전/측정 조건 확인 필요.
- 전기 11번 ADAS 카메라, 14번 ICP 엔진오일 원소분석(과목보류 기존), 18번 인체공학은 자격시험 세부범위·오답 난도 확인.
- 친환경 1·2·3번 고전압 작업 안전은 같은 회차에 반복되는 주제가 많아 개별 학습 목표 다양화 후보. **8번 절연시험**, **9·20번 수소안전**, **11번 바이오디젤 전과정 CO2**, **12번 하이브리드 동력·통신**, **14번 고전압 절연검사**, **16번 안전 차단**, **17번 회생제동 제한**, **18번 LKA 과목 보류**, **19번 EVCU 통신**도 차종·안전·출제기준 추가 검토.

기초 참고자료는 [Bosch ESP·TCS](https://www.bosch-mobility.com/en/solutions/braking-systems/electronic-stability-program/), [미국 DOE 수소 안전](https://www.energy.gov/cmei/fuels/safe-use-hydrogen), [DOE 연료전지](https://www.energy.gov/cmei/fuels/fuel-cell-basics), [AFDC 바이오디젤 전과정](https://afdc.energy.gov/vehicles/diesels-emissions), [HELLA 자동차 공조](https://www.hella.com/techworld/en/technical/car-air-conditioning/car-air-conditioning/) 등으로, **기술정답 최종독립감수·한국 법령 최신성 검증이나 차량별 정비지침 검증이 아니다.**

## 진행상황

- 1회차 80 + 2회차80 + 3회차80 = **240문항·960선지 최신판 1차 근거 기록**.
- 남은 **4~9회차 480문항·1920선지**는 개별 기술 1차 근거 대조 미실시. 관련 회차의 기존 720/720 전수 구조·연결검사는 별도로 완료됐지만 정답 유일성·안전성을 증명하는 작업은 아니다.
- **현재 과목 분류 보류 51**, 독립 최종 기술승인 **0/720**, 기출 복원문제 신규 공개 **0/720**. 사용자용 자체제작 예상문제 80문항 학습 모의고사와 공개 `data/manifest.json`은 그대로야.

재현: `node tests/technical-qa17.test.cjs` 및 기존 QA1~QA16 전체 CI 테스트.
