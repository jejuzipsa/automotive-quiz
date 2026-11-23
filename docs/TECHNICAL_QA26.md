# QA26 — 7회차 엔진정비 20문항·80선지 기술근거 1차 대조

작성: 2026-11-23 / QA25 이후의 7회차 엔진 자체 재작성 초안

## 검수 범위

7회 엔진정비 20문항/해설20개와 선택지 80개에 대해 4선지 각각 정답·오답 판단 이유와 기술·공공기관 자료를 기록했어. [QA26 선택지별 JSON](../data/qa/technical-qa26-r07-engine-option-audit.json)에 현재 질문, 보기, 정답, 참고 링크, 보류 사유가 있어.

| 항목 | 건수 |
| --- | ---: |
| 정답·오답 선택지 이유 기록 | **20문항·80선지** |
| 일반 원리와 기술자료 1차 부합 | **12문항** |
| OEM·법령·안전·추가 근거 보류 | **8문항(3·4·6·12·16·18·19·20)** |
| 실제 문안 교정·과목보류 신규 추가 | 0 / 0 |
| 독립 최종 기술승인·웹 기출 공개 | **0 / 0** |

## 주요 추가 검증 대상

- **3·4·12번 커먼레일·인젝터**: 연료레일압 제어와 분무 패턴 시험은 기계식/커먼레일 방식 및 고압 인젝터의 피부 주입·시험장비 안전을 반드시 구별해야 해. [Bosch 커먼레일](https://www.bosch-mobility.com/en/solutions/powertrain/diesel/common-rail-system-piezo/), [Delphi 분무 시험](https://www.delphiautoparts.com/en-gb/mom/how-to/article/how-to-check-diesel-injector-spray-pattern).
- **6번 디젤 매연 허용기준**: 제작연도·검사시점·검사방법을 명시해야 한다는 일반적 원리는 타당하지만 **2026년 국내 적용 법령/검사 기준일에 따른 수치 검증은 별도로 남아 있어**. 이번 배치에서 법령 허용 수치나 시험기준을 승인하지 않았어.
- **16번 실린더 누설 시험**: 압축공기 주입·크랭크 위치 고정·작업자 안전/OEM 조건이 필요해.
- **18번 저유압 경고등**: 안전한 정차 후 엔진오일량·누유·실압력 점검의 일반 원리는 맞지만 경고 시 즉시 시동 정지/재시동 금지 등은 차종별 지침 필요.
- **19번 흰 배기 수증기**: 헤드가스켓 누설 외에 저온 연료 미연소, 결로 등도 있어 냉각계 압력시험/실제 소모량으로 구별해야 해.
- **20번 크랭킹 압축압**: 점화·연료 차단과 압축압 계측은 엔진별 규정 크랭킹속도·개도·안전 조건 필요.

기초 근거 1차 부합 문항은 1·2·5·7·8·9·10·11·13·14·15·17번이야. 이는 독립 전문가의 정답 유일성 보증이 아니고 특정 차량의 정비 지침이 아냐.

## 기술자료 예시

- [Garrett 터보·인터쿨러 기본](https://www.garrettmotion.com/knowledge-center-category/oem/basic/)
- [HELLA MAP 센서](https://www.hella.com/techworld/en/technical/sensors-and-actuators/map-sensor/), [HELLA 캐니스터](https://www.hella.com/techworld/en/technical/car-electronics-and-electrics/activated-carbon-canister/)
- [MAHLE 피스톤링](https://www.mahle-aftermarket.com/eu/en/products-and-services/engine-components/piston-rings/)
- [Gates 타이밍 시스템](https://www.gates.com/us/en/knowledge-center/automotive/automotive-tips-and-techs/timing-system-installation.html)
- [Bosch SCR](https://www.bosch-mobility.com/en/solutions/exhaust-gas-treatment/denoxtronic-exhaust-gas-treatment-system/)

## 누적 및 다음 작업

QA25까지 1~6회차 **480문항/1920선지**, 이번 QA26의 7회 엔진20/80을 합쳐 **500문항/2000선지 역사적 선택지별 1차 검수 기록**. **220문항·880선지는 아직 개별 기술 1차 대조가 없는 상태**(7회 섀시·전기·친환경 60 + 8~9회 160). 현행 과목 분류 보류 **55**, 독립 기술 최종승인 **0/720**, 웹 복원기출 신규 공개 **0/720**.

검사 재현: `node tests/technical-qa26.test.cjs`, `node tests/qa5-bank-integrity.test.cjs`, `node tests/release-gate.test.cjs`. 다음은 7회 섀시20문항, 이어 전기20·친환경20, 8~9회 전과목이야.
