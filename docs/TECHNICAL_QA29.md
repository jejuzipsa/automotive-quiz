# QA29 — 7회 친환경 자동차정비 20문항·80선지 1차 기술근거 검수

작성: 2026-11-23. 검수 대상은 교재 원본 OCR이 아닌 `independently_reconstructed_from_exam_concepts` 자체 재작성 초안. **기술원리의 1차 근거 기록은 독립 기술 최종승인이 아니다.**

## 정합성·검수 결과
- [20문항×4선지 정오 이유·자료 URL](../data/qa/technical-qa29-r07-eco-option-audit.json)에 현재 질문·정답·개별 오답 이유·보류 사유 보존.
- 기본원리 자료 1차 부합 **6문항**: 1(BMS 역할), 3(셀 밸런싱), 9(SOH), 12(인버터), 15(FCEV 전동모터), 17(연료전지 구성).
- 안전·차종/OEM·충전규격·최종 과목검토 **14문항**: 2·4·5·6·7·8·10·11·13·14·16·18·19·20.
- **실제 문항 교정 1건**: 1번과 9번이 똑같이 'BMS가 하지 않는 엔진제어'를 물어 중복. 9번을 배터리 SOH 측정지표(신품대비 용량감소·내부저항 변화와 SOC 구별)로 문제·4보기·별도해설까지 재작성. 답번호4 유지, 문항 고유ID·출처ID 불변. [원문 전후 기록](../data/qa/technical-qa29-r07-eco-edits.json).

## 집중 안전·법령·품질 보류
- **2·4·10·13번**: 배터리 열·노화·충전속도 변화는 SOC·셀온도·C-rate·충전기 협상 및 제품 구조에 좌우됨. 특히 '배터리팩 단순 추가'는 개조승인이 아님.
- **5번** 수소 누설 시에는 호환 검지기, 점화원 통제와 안전한 환기·대피가 기본. 일반인이 불꽃이나 용기 분해로 탐지해선 안 됨.
- **6·7번** 엔진 정지 중 전동식 냉방 및 수냉식 모터는 차종 장착 유무·고전압 냉매/열관리 안전을 따로 확인.
- **8번** CCS/CHAdeMO/J3400 등 지역·차종별 실제 충전기와 차량의 프로토콜 및 공식 어댑터 승인 확인.
- **11번** 구동배터리 화재 시 승객은 대피·신고. 고전압 격리, 화재 진압·재발화 및 견인은 전문 구조대와 제조사 대응 매뉴얼 영역.
- **14번** 과전류 용단형 퓨즈와 접촉기/인터록 구분. 차단용량·교체·무전압 확인 등 HV 작업은 OEM 안전 준수.
- **16번** SAE J2601의 H35(35 MPa)/H70(70 MPa) 일반 원리는 확인되나, 한국 승용차 모델·충전소 승인 등급과 온도 프로토콜의 독립 대조 필요.
- **18번** USCAR의 TPRD 열작동식 규격을 통해 열 노출 후 지정 방출 경로 개념 확인. **단순 압력 설정식 릴리프 밸브와 혼동 금지**, OEM 작동온도·방출방향은 최종 보류.
- **19번** PEM 연료전지는 반응 가스 공급·막 수분과 온도/압력이 출력을 좌우하므로 차량별 원인 규명이 필요.
- **20번** AFDC의 B100 규격·OEM 혼합비 확인 원칙은 부합하나 B100의 국내 승인/연료부품 호환성 및 친환경 vs 엔진정비 과목 배정은 최종 검토 보류. 기존 현행 과목분류 보류55에 **이번에는 신규 확정보류를 추가하지 않았어**.

## 공개 참고 근거
- [National Academies BEV 배터리 열화](https://www.nationalacademies.org/read/26092/chapter/7), [Nature Energy 2026 셀편차/SOC](https://www.nature.com/articles/s41560-026-02131-5), [AFDC HEV](https://afdc.energy.gov/vehicles/how-do-hybrid-electric-cars-work), [AFDC EV](https://afdc.energy.gov/vehicles/how-do-all-electric-cars-work)
- [DOE 수소 안전](https://www.energy.gov/cmei/fuels/safe-use-hydrogen), [DOE EV 열관리](https://www.energy.gov/cmei/vehicles/thermal-control-system-integration), [NHTSA 차량별 응급 가이드](https://www.nhtsa.gov/emergency-response-guides), [AFDC 충전기](https://afdc.energy.gov/fuels/electricity-stations)
- [Littelfuse HV 퓨즈](https://www.littelfuse.com/products/fuses-overcurrent-protection/fuses/automotive-fuses/high-voltage-fuses/20ev), [DOE FCEV 구성](https://afdc.energy.gov/vehicles/how-do-fuel-cell-electric-cars-work), [DOE 연료전지 스택](https://www.energy.gov/cmei/fuels/parts-fuel-cell), [DOE 연료전지 시스템](https://www.energy.gov/cmei/fuels/fuel-cell-systems)
- [SAE J2601 35/70MPa](https://saemobilus.sae.org/standards/j2601_201612-fueling-protocols-light-duty-gaseous-hydrogen-surface-vehicles), [USCAR TPRD 관련 탱크밸브](https://uscar.org/download/53/hydrogen-fuel-cell/11771/uscar-tank-valve-requirement-version-3-2.pdf), [AFDC 바이오디젤 혼합비](https://afdc.energy.gov/fuels/biodiesel-blends), [AFDC B100 규격](https://afdc.energy.gov/fuels/biodiesel-specifications)

참고 URL은 일반원리 판단의 보조자료야. 개별 OEM 정비 매뉴얼·국내 현행 법령·독립 전문감수 및 게시권리 최종 승인은 수행하지 않았어.

## 누적/인계
- 7회 4과목까지 개별 1차 이유 기록 **560문항·2240선지**. 미검수 **8~9회차 160문항·640선지**.
- 전체 720문항의 기술 독립 최종승인 **0**, 사이트의 공식 복원 기출 출제 **0**. 과목 분류 확정 보류 **55**.
- 공개 자체예상문제80·모의고사 및 `data/manifest.json`을 수정하지 않음. 사용자 개인용 교재 OCR QA23 별도 보존.
- **다음: 8회 엔진정비 20문항**부터 섀시·전기·친환경 순으로, 이후 9회 80문항. 최종 검수 후 [공개 초안 철수 계획](DRAFT_RETIREMENT.md) 준수.

테스트: `node tests/technical-qa29.test.cjs`, 기존 전체 CI 및 `node tests/release-gate.test.cjs`.
