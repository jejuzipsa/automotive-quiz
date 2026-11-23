# QA15 — 3회차 엔진정비 20문항/80선지 기술자료 1차 검수

작성: 2026-11-23. **제조사·기관 기본원리 대조는 독립 정답 최종승인과 다르다.**

## 수행 범위

[선택지별 QA15 감사](../data/qa/technical-qa15-engine-r03-option-audit.json)는 3회차 엔진정비 질문20개에 대해 원본 문장·정답 위치·정답/오답 보기 4개 각각의 사유 및 기술자료 URL을 담아.

| 결과 | 건수 |
|---|---:|
| 개별 판단 이유 기록 | **20문항·80선지** |
| 제조사/기관 기초 원리 자료 부합 1차 | **12문항** |
| 차종별 절차·안전·법령·다중원인 추가 검토 | **8문항** (4·5·6·12·13·14·15·18) |
| 문항·4선지·별도해설 실제 개정 | **2문항** |
| 독립 기술적 최종 승인 | **0** |
| 새 기출 복원 웹 공개 | **0** |

## 실제 교정 — 동일 회차의 학습목표 중복 축소

[수정 전후와 기술참고](../data/qa/technical-qa15-r03-engine-edits.json)

- **3회 엔진3**은 기존 2번(기계식 슈퍼차저 구동원)과 비슷하게 터보와 슈퍼차저의 에너지원을 또 묻고 있었어. 이를 터보차저 **인터쿨러가 고온 압축공기를 냉각해 밀도·충전량을 높이는 기능**으로 재작성했다. [Garrett 인터쿨러 원리](https://www.garrettmotion.com/knowledge-center-category/turbo-replacement/intercoolers-how-do-they-work/) 참고. 정답 원래 위치1 유지.
- **3회 엔진14**는 11번의 '오일 누유 시작점 세척·관찰' 개념을 다시 물었어. **크랭크케이스 과압/PCV 환기계통·블로바이**를 다른 학습목표로 바꿨다. [MS Motorservice 과압](https://www.ms-motorservice.com/int/en/technipedia/oil-consumption-caused-by-unfavourable-operating-conditions-for-turbocharger-381), [Fel-Pro PCV·오일씰](https://www.felpro.com/technical/tecblogs/how-to-install-rear-main-seal.html). 정답 위치3 유지. 원인은 PCV 이외 피스톤링 마모 등도 있으므로 최종 기술 검토는 추가 보류.

## 검토 필요 8문항

- **4번 연료압 진단**: 연료펌프·필터·레귤레이터와 계통 구성, 검사 지점 및 수치는 OEM 차종별로 달라.
- **5번 전자 스로틀/공회전**: 목표/실제 스로틀·IAC 제어, 흡기 누설과 학습 절차의 차종 차이.
- **6번 ECT 위치**: 냉각수 센서 장착 위치가 차량별로 다르며 센서 이름만으로 장소를 단정할 수 없음.
- **12번 글로우플러그 저항 검사**: 계측기·저항값·회로격리 절차가 제조사별로 다름.
- **13번 ECU 내부 기판**: 정전기 보호 및 내부 수리 가능 여부는 제조사 보안·안전·정비 허용 범위 확인 필요.
- **14번 PCV 크랭크케이스 압력**: 단일 PCV 문제만으로 과압 원인을 확정할 수 없어 추가 확인.
- **15번 폐엔진오일 처리**: 원리는 맞지만 국내 폐유 위탁·재활용·정비사업장 폐기물 분류는 현행 [폐기물관리법](https://www.law.go.kr/lsInfoP.do?lsId=001771&urlMode=lsInfoP)과 [폐기물관리법 시행규칙](https://www.law.go.kr/LSW/lsInfoP.do?lsId=008567&urlMode=lsInfoP)에 따르는 전문 법령 검증이 필요.
- **18번 배출가스 법적 적합 판정**: [대기환경보전법 시행규칙 별표21(2026. 2. 23. 개정)](https://www.law.go.kr/LSW/flDownload.do?bylClsCd=110201&flSeq=161740083&gubun=) 등 법령/검사법의 시행시점·제작연도·연료별 세부기준을 별도로 검토해야 함. [한국교통안전공단 종합검사](https://main.kotsa.or.kr/portal/contents.do?menuCode=01010300) 참고.

3회 엔진20 P0420은 [Ford 공식 OBD 감시 정의](https://www.fordservicecontent.com/Ford_Content/catalog/motorcraft/OBDSM2400OUTPUT_16Jul2024_WSM_final_V2_MCS7001.pdf)에서 Bank 1 촉매 효율 기준 미만과 대응함을 확인했지만 단일 코드로 부품교환 확정은 불가.

## 누적 진행과 남은 작업

- QA3~QA14: 현재 1~2회차 160문항/640선지의 최신판 1차 검수 이력.
- QA15: 3회 엔진 20문항·80선지 신규 1차 검수 이력.
- 합계 **180문항/720선지의 1차 검토**, 아직 **540문항/2160선지** 미검토 (3회 섀시·전기·친환경 60문항, 4~9회 480문항).
- **과목 분류 보류49건**, 독립 기술 최종승인 **0/720**, 새 기출 복원 공개 **0/720**. `data/manifest.json`과 현재 서비스 중인 별도 학습용 예상문제 80문항 모의고사는 그대로 유지.
- 다음: **3회차 섀시정비** 20문항/80선지, 법령·고전압·차종별 수치·미흡한 오답보기 후보의 계속 교정.

검증: `node tests/technical-qa15.test.cjs`, 모든 이전 QA1~QA14 및 `node tests/qa5-bank-integrity.test.cjs`, `node tests/release-gate.test.cjs`.
