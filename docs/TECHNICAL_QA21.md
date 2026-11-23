# QA21 — 5회차 전기·전자장치정비 20문항·80선지 기술근거 1차 검토

작성: 2026-11-23 / 최신 QA20 이후 5회차 전기·전자 자체 재작성 초안 기준

## 선택지별 검사

5회 전기·전자 20문항의 정답 20개·오답 60개를 구분해 개별 기술적 이유를 검수 기록으로 작성했다. [QA21 80선지 감사 JSON](../data/qa/technical-qa21-r05-electrical-option-audit.json)에 질문·선지 텍스트·판정 이유·참고 URL과 보류 사유를 남겼다.

| 내용 | 결과 |
| --- | ---: |
| 4선지 개별 이유 작성 | 20문항·80선지 |
| 외부자료와 기초 원리 1차 부합 | 9문항 |
| OEM/법령/과목/편집품질 추가 보류 | 11문항(4·5·7·8·11·12·13·16·17·19·20) |
| 신규 질문/보기/해설 원문 교정 | 0 |
| 독립 기술 최종승인 / 공개 기출문제 출제 | 0 / 0 |

## 문항별 중요한 보류

- **7번 리콜 제도:** 2026년 10월 2일 시행 버전의 [자동차관리법](https://www.law.go.kr/LSW/lsInfoP.do?ancNo=21857&ancYd=20260804&efYd=20261002&lsiSeq=290737) 제31조와 2026년 9월 15일 시행 [동법 시행규칙](https://www.law.go.kr/LSW/lsInfoP.do?ancYnChk=0&chrClsCd=010202&efYd=20260915&lsiSeq=289865&urlMode=lsInfoP) 참조. **시험 출제기준일, 법령 이후 개정 사항, 담당기관 통지·시정조치 기한을 다시 확인하기 전에는 최종승인하지 않는다.**
- **4번 조향각 센서 학습:** 차종/교체작업별 영점 보정 조건을 OEM 서비스 절차로 확인.
- **5번 진단기 DLC:** 장비와 차종별 통신·점화 조건의 안전한 해제 절차 추가 확인.
- **8번 냉각수 흐름·공조:** 히터코어 유량 진단은 실제 차종 냉각회로/온도조건 확인; 오답의 관련성이 낮아 품질 재검토.
- **11번 블렌드도어:** QA19에서 재작성한 질문과 4선지 **최신 버전**을 기준으로 판정 이유 기록. 혼합도어 액추에이터의 목표/현재 위치 비교에 대한 OEM 진단 절차 추가 검토.
- **12번 히터코어:** 냉매 회수는 공조케이스/냉매 회로 분리 여부에 따라 달라 추가 차종별 안전 확인.
- **13번 디젤 MAF:** 기존 엔진정비 범위 의심으로 `hold_do_not_publish` 유지.
- **16·17번 파워윈도 원터치:** 끼임 방지 안전과 초기화 절차는 차종별 서비스 메뉴얼 검토 필요.
- **19·20번 선루프 소음:** 두 문항은 기계적 구동레일 마찰/덜컹거림을 유사하게 반복해서 묻는다. 다음 편집 단계에서 개별 학습 목표로 조정할지 검토할 것.

기초 자료가 부합하는 9문항은 **1·2·3·6·9·10·14·15·18번**. 이는 독립 기술·저작권 승인이 아니다.

## 참고자료

- [Fluke 디지털 멀티미터 DC 전압 측정](https://www.fluke.com/en/learn/blog/electrical/how-to-measure-dc-voltage-with-a-digital-multimeter)
- [HELLA ABS 휠속도 센서](https://www.hella.com/techworld/en/technical/sensors-and-actuators/check-and-change-abs-and-wheel-speed-sensors/)
- [HELLA ABS/ESC 원리](https://www.hella.com/techworld/en/technical/car-electronics-and-electrics/abs-esp-control-units-for-braking-and-driving-dynamics/)
- [HELLA 중앙잠금장치](https://www.hella.com/techworld/en/technical/car-electronics-and-electrics/central-locking-system/)
- [HELLA 공조장치](https://www.hella.com/techworld/en/technical/car-air-conditioning/car-air-conditioning/)

## 누적 상태

QA20까지 **360문항/1440선지** 이력, 이번 QA21 추가 **380문항/1520선지**. 개별 4선지 1차 대조가 없는 문항은 **340문항**(5회 친환경20 + 6~9회 320). 기존 과목 분류 보류 **53건**, 신규 과목 보류0. 전체 기술 독립 최종승인 **0/720**, 기출 복원 웹 공개 **0/720** 유지.

다음: **5회차 친환경 자동차정비20문항**, 6~9회차 순차 기술 검수, QA21에서 표시한 법령/안전/중복 문항 수작업 품질개선. 공개 모의고사 예상문제80은 기존대로 유지한다.

검증: `node tests/technical-qa21.test.cjs` + CI 전체 QA 및 공개 승인 게이트.
