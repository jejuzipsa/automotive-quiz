# QA28 — 7회 전기·전자장치정비 20문항·80선지 기술 근거 1차 검수

검수 기준: 2026-11-23, QA27 다음 회차. 대상은 구매 원문의 OCR이 아닌 자체 재작성 `editorial_draft`야.

## 개요
- 전기·전자 20문항, 80선지의 정답·오답 이유를 각각 기록했어. [검수 JSON](../data/qa/technical-qa28-r07-electrical-option-audit.json).
- 외부 기술자료와 일반 원리 1차 부합 **11문항**: 1·2·3·5·9·10·11·12·13·14·19.
- OEM/안전/출제범위·편집 추가 검증 **9문항**: 4·6·7·8·15·16·17·18·20.
- [실제 교정 3건](../data/qa/technical-qa28-r07-electrical-edits.json): 4번 ABS 다이어그램에 엔진 산소센서가 나온다는 불가능한 상황 제거, 10번 일반 크루즈의 속도 제어 목표를 명확화, 20번 주차 카메라 영상과 '직접 거리계측'의 혼동 수정. 원본 정답번호·4선지·해설ID는 유지했어.
- 이번에 신규 확정 과목분류 보류는 만들지 않았어. 4·6·7·8·17·18번은 과목 경계 **검토 후보**이며 기술 정답 오류 확정이 아니야.

## 핵심 미해결점
- **4번** 원본 문장 자체가 ABS 전기배선도에 엔진 배기관 산소센서를 발견했다는 모순. 계통 구별 문제로 수정했지만 과목 학습목표가 불명확해서 보류.
- **6·17번** ABS/ESC의 유압·차량자세 제어는 섀시와 전기 과목의 경계가 있어 공식 출제기준에 의한 분류 필요.
- **7번** ESC 요율·횡가속 센서 영점학습의 정지/평지 조건은 제조사·차종마다 다르고 센서/ECU 교환만으로 모두 같은 절차를 요구하진 않아.
- **8·18번** 냉매 증발·팽창장치 기능은 일반원리로 성립하나 전기전자정비에서 순수 냉동사이클을 묻는 게 맞는지 검토 필요. 냉매 취급 고압 안전은 별도.
- **15번** 차선인식 카메라 오염·교체·차량 보정 절차는 차종별 OEM 기준 확인 전까지 기술 최종승인 보류.
- **16번** AEB는 모든 충돌을 예방하지 않아. 성능 한계·환경·운전자 책임을 포함한 안전 맥락 검증 보류.
- **20번** 카메라는 영상 인식 및 주변 표시를 제공하지만 직접 물체거리 계측 여부는 구성에 따라 달라. 지문을 수정했으나 세부 기능은 차종별 확인 필요.
- **12번** 암페어 단위, **13번** 직렬전류, **14번** P=VI는 기본원리상 맞지만 오답의 난이도가 낮아 편집 개선 후보.

## 외부 참고 근거 — 독립 최종 기술 승인과 구분
- [Kvaser CAN 비트 중재](https://kvaser.com/lesson/addressing-arbitration-identification-message-reaches-controller/), [Littelfuse 퓨즈 선택](https://www.littelfuse.com/en/products/fuses-overcurrent-protection/fuses), [Fluke 시동전압강하](https://www.fluke.com/en-us/learn/blog/digital-multimeters/how-to-check-starter-circuit-voltage-drop-with-a-multimeter)
- [Bosch ABS](https://www.bosch-mobility.com/en/solutions/braking-systems/antilock-braking-system/), [Bosch ESP](https://www.bosch-mobility.com/en/solutions/braking-systems/electronic-stability-program/), [Bosch 크루즈 관련 전자스로틀](https://www.bosch-mobility.com/en/solutions/air-management/electronic-throttle-valve/)
- [HELLA 냉방 원리](https://www.hella.com/techworld/en/technical/car-air-conditioning/car-air-conditioning/), [HELLA 블로워](https://www.hella.com/techworld/en/car-parts/thermal-management/a-c-interior-blowers/), [BIPM 암페어](https://www.bipm.org/en/si-base-units/ampere)
- [NHTSA 운전자 보조기술](https://www.nhtsa.gov/vehicle-safety/driver-assistance-technologies), [Bosch 주차 센서 융합](https://www.bosch-mobility.com/en/solutions/sensors/sensor-data-fusion/), [HELLA 팽창밸브](https://www.hella.com/techworld/en/car-parts/thermal-management/ac-expansion-valve/)

## 누적 및 배포 보호
- 7회 엔진/섀시/전기까지 역사적 선택지 1차 검수 **540문항/2160선지**, 남은 **180문항/720선지**: 7회 친환경20 + 8~9회160.
- 과목 분류 확정보류55 유지(이번 QA28 추가확정0). 최종 독립 기술승인0/720·기출 복원 웹 출제승격0/720.
- `data/manifest.json`과 사이트 공개 자체예상문제 80문항/모의고사, 별도 개인 QA23 OCR 소스 불변.
- 신규 감사/test가 **공개 저장소**에 올라가면 출제 UI에서 감춰도 `data/past/drafts/` JSON은 누구나 GitHub로 직접 접근 가능. [공개초안 철수 계획](DRAFT_RETIREMENT.md) 참고.
- 다음 검수: 7회차 친환경 20문항/80선지; 그 다음 8·9회차 총160.

재현: `node tests/technical-qa28.test.cjs`, 기존 release-gate 및 Actions 전체 검사.
