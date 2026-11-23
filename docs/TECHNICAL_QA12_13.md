# QA12–QA13 — 2회차 전기·전자 및 친환경정비 선택지별 1차 근거 검수

작성: 2026-11-23. **외부 기술자료와 1차 원리 비교이며 독립 최종 정답 승인이나 안전 정비 지침 인증이 아니다.**

## 처리한 문제은행

| 검수 | 문항 | 선지별 이유 | 일반원리 1차 부합 | 추가 검토 보류 |
|---|---:|---:|---:|---:|
| QA12 전기·전자장치정비 2회차 | 20 | 80 | **12** | **8** (2,7,8,10,13,16,18,19) |
| QA13 친환경 자동차정비 2회차 | 20 | 80 | **11** | **9** (1,2,3,6,9,12,13,16,20) |
| **합계** | **40** | **160** | **23** | **17** |

상세 선지·정답번호·각 4개 근거·외부 참고 URL은 [전기 QA12](../data/qa/technical-qa12-r02-electrical-option-audit.json), [친환경 QA13](../data/qa/technical-qa13-r02-eco-option-audit.json)에 있어. 각 문항의 문제·해설 본문에 `technical_verification_qa12/qa13`, `option_analysis_qa12/qa13`를 연결해 실제 표시된 선지와 정합성을 테스트한다.

## 실제 수정 2문항, 새 과목 보류 1건

[QA12·13 변경 전후 상세 이력](../data/qa/technical-qa12-13-edits-and-holds.json)

1. **2회 전기3**: CAN 통신 장애 질문이 기존에는 오일색·타이어 밸브캡이라는 이질적인 오답 위주였어. 이를 **복수 ECU 동시 통신불능의 공통 원인 진단 판단형**으로 바꿨어. CAN 배선·종단·제어기 전원·접지 확인을 정답2로 유지하고, 나머지 3개 보기도 ECU 무조건 교환, CAN 단락, 한 ECU 응답만으로 물리층 정상 단정 등 실제 진단에서 피해야 하는 오개념으로 교정. [Pico CAN 물리층·종단저항](https://www.picoauto.com/library/automotive-guided-tests/communication/can-bus/AGT-126-can-bus-physical-layer/) 참고.
2. **2회 친환경15**: 같은 회차의 고전압 차단·서비스 플러그·검전 문제가 반복되어, [TE Connectivity HVIL](https://www.te.com/en/products/connectors/automotive-connectors/intersection/hva-hd-accessories.html) 및 [Aptiv HVIL](https://www.aptiv.com/en/insights/article/what-is-hvil)에 근거한 **고전압 인터록 저전압 루프 감시 기능**으로 교정. 기존 정답위치2 보존. 주의: 인터록이 검전을 대신하지 않는다.
3. **2회 전기8**: 캠버·토 조정 후 휠얼라인먼트는 전기전자장치보다 **섀시·조향/현가 정비 관련**일 가능성이 커 질문을 임의 이동하지 않고 문제·해설에 `hold_do_not_publish` 추가. 기존 과목보류48 → **현행49**. 이전 QA1/QA2 47건 기록은 불변.

## 최종승인을 보류한 기술·안전 문제

- **전기2**: 일반 OSI 네트워크 계층만 묻고 자동차 현장 진단과 관련성이 떨어질 수 있어 별도 편집 품질검토.
- **전기7**: 고전압 전원 차단 후 무전압 측정과 작업 안전 — [Fluke 측정안전](https://www.fluke.com/en-vn/learn/blog/automotive/hybrid-vehicle-measurement-safety-basics-taking-high-voltage-readings) 자료는 *일반 안전 원리*이고 차종별 OEM 검사 위치·장비·작업자 자격의 최종 검증을 대신하지 않는다.
- **전기8** 과목 경계, **전기10** SAS 영점 보정의 차종별 절차, **전기13·16** 엔진 냉각계/공조 난방의 과목 경계, **전기18** 지나치게 다른 오답, **전기19** 자동공조 냉난방 운전조건을 특정하지 않은 센서 오류 문항 보류.
- **친환경1·2·3·6·12·13·16**: 고전압 차단, PPE, 시동·인버터·모터 절연 검사, HV경고/작업구역 안전에 관한 차종별 OEM 및 국내 안전수칙 필요. 1·3·6번은 특히 **같은 회차 유사한 고전압 무전압 확인 문제 중복** 가능성도 있어 편집 후보.
- **친환경9**: 수소 저장탱크 PRD/TPRD의 *압력/온도 방출 트리거*가 서로 다를 수 있으므로 기존 '압력이나 온도' 질문의 보편성 주의. [미국 DOE 고압 수소탱크 시험](https://www.energy.gov/cmei/fuels/high-pressure-hydrogen-tank-testing) 자료와 [수소 저장 안전 표준](https://www.energy.gov/cmei/fuels/articles/pressure-relief-devices-compressed-hydrogen-vehicle-fuel-containers) 참고. 명칭·적용조건 재작성 후보.
- **친환경20**: 수소 고압용기 계측 시 누설·점화·장비 정격 및 안전절차의 기술 전문가 추가 감수 필요.

## 핵심 교차근거

- [Bosch ESP 요레이트·조향각·휠속도](https://www.bosch-mobility.com/en/solutions/braking-systems/electronic-stability-program/)
- [Teledyne LeCroy 자동차 Ethernet CRC FCS](https://www.teledynelecroy.com/doc/100base-t1-ethernet-appnote)
- [HELLA 발전기 및 충전계통](https://www.hella.com/techworld/en/technical/car-electronics-and-electrics/starting-and-charging-system/service-work-on-the-charging-system/)
- [HELLA 엔진 냉각 및 난방](https://www.hella.com/techworld/uk/technical/car-cooling-system/cooling-system-check/)
- [TE Connectivity HVIL](https://www.te.com/en/products/connectors/automotive-connectors/intersection/hva-hd-accessories.html)
- [DOE PEM 연료전지](https://www.energy.gov/cmei/fuels/fuel-cell-basics), [AFDC 바이오디젤 글리세롤](https://afdc.energy.gov/fuels/biodiesel-production)
- [AFDC 회생제동](https://afdc.energy.gov/vehicles/electric-basics-hev)

## 누적 진척·배포 금지선

- **1회차 80문항/320선지** (QA3/6/7/8 역사적 1차 이유 기록)
- **2회차 80문항/320선지** (QA10 엔진20, QA11 섀시20, QA12 전기20, QA13 친환경20)
- 누적 **160문항/640선지**에 1차 기술자료 비교 기록. 그중 QA9에서 개정된 **1회차 4문항의 현재 최신 선지별 재검수는 별도 미완료**.
- 3~9회차 **560문항/2240선지는 개별 기술 근거검수 전**. 현재 **과목 보류49**, 기술적 독립 최종승인 **0/720**, 실전 기출 복원 신규 공개 **0/720**.
- 공개 학습용 자체 제작 예상문제 80문항 모의고사는 그대로 유지. 원본 구매자료 OCR/QA23·기존 앱 및 공개 매니페스트 변경 없음. 독립 최종 기술검증과 게시 권리 승인 뒤에만 해당 문항을 새 공개용 승인은행으로 승격할 수 있다.

통합 회귀테스트: `node tests/technical-qa12-13.test.cjs` + 이전 QA1~QA11 + `node tests/qa5-bank-integrity.test.cjs` + `node tests/release-gate.test.cjs`.
