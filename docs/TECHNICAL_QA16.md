# QA16 — 3회차 섀시정비 20문항·80선지 1차 기술근거 검수

일자: 2026-11-23

기준: GitHub의 3회차 섀시정비 편집 초안 20문항, 대응 해설 20개. 각 문제의 정답 1·오답 3, 총 80개 선택지의 참·거짓 이유를 [QA16 선지별 감사](../data/qa/technical-qa16-chassis-r03-option-audit.json)에 기록하고 제조사 기술자료를 참고했어.

| 결과 | 문항 |
| --- | ---: |
| 선지별 1차 근거 검토 | **20 / 80선지** |
| 참고 기술 원리 1차 부합 | **11** |
| 차량별 안전·기술·분류 보류 | **9** (2,3,6,7,8,12,14,16,20) |
| 실제 문제/보기/해설 교정 | 0 |
| 독립 기술 최종승인 / 기출 신규 공개 | **각각 0** |

## 보류 이유
- **2번 냉각수 누수**: 섀시정비가 아닌 엔진정비의 냉각계 점검 개념이어서 기존 과목 `hold_do_not_publish` 유지.
- **3번 토크컨버터 록업**: 차속·부하·ATF 온도·제어 상태에 따라 실제 슬립 값이 달라 차종별 OEM 기준 재확인.
- **6·7번 유압식 현가**: 유압·축압기·고압 작동유 누설의 진단·감압 조건은 모델별 안전절차 필요.
- **8번 유압 스티어링 스위치**, **12번 차고 센서**, **14번 EPS 전류**, **16번 간헐 EPS 보조력**: 제조사 서비스 정보의 전원·부하·공압/유압·센서와 기계저항 기준 확인.
- **20번 브레이크액 교환과 ABS 에어빼기**: 스캔툴 구동·유압 모듈 안전·정비순서는 OEM 차량별 절차 확인.
- **18·19번**은 모두 ESC/EPS와 조향각 센서를 다루므로 *주제 유사* 후보이며, 단순 동일문항으로 확정하지는 않았어. 이력에 기록하고 후속 출제 난도 검토 필요.
- **15번 선택지의 공조냉매 색상**은 지나치게 이질적인 쉬운 오답이라 향후 진단상 비교가능한 선택지로 재작성 고려.

## 기술 참고 자료

- [ZF ATF 교환·규격 안내](https://aftermarket.zf.com/en/aftermarket-portal/faq/faq-oils/)
- [ZF CDC 감쇠제어와 차체 센서](https://www.zf.com/products/en/cars/stories/systematic_damping.html)
- [ZF Skyhook 댐퍼 제어](https://www.zf.com/products/en/cv/products_88713.html?pageLink=service_and_support_divider658792)
- [HELLA ABS 휠속도 신호](https://www.hella.com/techworld/en/technical/sensors-and-actuators/check-and-change-abs-and-wheel-speed-sensors/)
- [Bosch EPS 전기제어](https://www.bosch-mobility.com/en/solutions/steering/electric-power-steering-systems/)

**이는 독립 최종 기술감수가 아니다.** QA16 기초자료와 부합한 11문항도 모두 `publishable:false`, `pending_independent_review`, `editorial_draft` 상태야.

## 누적

QA15 3회 엔진20에 이어 QA16 섀시20까지 기록, **1~3회차 누적 200/720문항·800선지**에 1차 개별 근거 이력. 남은 **520문항/2080선지**(3회 전기·친환경40문항 + 4~9회480문항)는 아직 선택지별 기술근거 검수를 완료하지 못했어. 과목 보류49, 최종 기술승인0, 기출 복원 신규공개0, 기존 예상문제80 모의고사 불변.

다음은 3회 전기·전자20문항, 친환경20문항, 4~9회차 480문항. 안전·법령·과목 분류는 공식 OEM/국내 자격시험 기준과 별도 검토가 필요해.
