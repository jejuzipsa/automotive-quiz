# QA48 — QA47 잔여 11문항 출처 대조 및 정답 논리 검토
2026-11-24. QA47 기록은 역사 스냅샷으로 유지한다. 아래는 모델의 문헌·논리 검토이며 독립 전문가 승인이나 OEM 작업 지침이 아니다.

| 1회 문항 | 기존 출처 판정 | 정답 및 보완 근거 |
|---|---|---|
| 엔진 3 | 관련 | ③ Garrett [설치 안내](https://www.garrettmotion.com/knowledge-center-category/turbo-replacement/part-1-garrett-turbocharger-installation-guide/)는 오일 공급·제조사 규격의 중요성을 설명. ① 냉각수 제거, ② 공급 차단, ④ 배기관 미체결은 적합하지 않음. |
| 엔진 6 | 부분 | ③ Bosch [람다센서](https://www.bosch-mobility.com/en/solutions/exhaust-gas-treatment/switching-type-lambda-sensor/)는 센서 기능을 설명하나 전단 위치 직접 명시 없음. [NTK](https://www.ngkntk.com/products/oxygen-lambda-sensors/?fb=emea)는 전단/후단 위치 구분을 명시. ① 흡기, ② 후단, ④ 연료레일 제외. |
| 섀시 4 | 부분 | ① [Bosch EPS](https://www.bosch-mobility.com/en/solutions/steering/electric-power-steering-systems/)는 전동 조향 원리만 뒷받침. 저전압 진단 순서는 OEM 필요. ② 전압 무시, ③ 단락, ④ 유압으로 전압 회복은 부적절. |
| 섀시 6 | 부분 | ② [ZF 섀시](https://www.zf.com/products/en/cars/chassis_solutions/chassis_solutions.html)는 제품 개요이며 유압 현가 누설 점검 지침은 아님. HELLA 센서 소개 역시 직접 근거 부족. ① 계속 주행, ③ 임의 오일, ④ 잔압 배관 분리 부적절. 액면·유량 점검 가능 여부도 차종별 확인. |
| 섀시 8 | 부분 | ③ [HELLA 브레이크](https://www.hella.com/techworld/en/technical/brakes/diagnosing-brake-problems/)는 디스크·패드 중심, 기존 브레이크액 링크 접근 실패. [BSF 마스터실린더](https://aftermarket.bsf.es/en/faulty-brake-master-cylinder-symptoms/) 검색 결과에서 내부 누설과 페달 하강 관련 확인. ① 부스터 호스, ② 스위치, ④ 디스크 거칠기는 유압 누설 확정 근거 아님. 실제 차량의 정상 페달 변화와 ABS 유압장치도 고려. |
| 섀시 12 | 불충분 | ① HELLA [센서·액추에이터 소개](https://www.hella.com/techworld/us/lounge/sensors-actuators/)는 전원 격리 절차 직접 확인 불가. ② 임의 분리, ③ 임의 제어기, ④ 단락은 부적절. OEM 모듈 교환 지침 필요. |
| 전기 14 | 접근 불가 | ④ 기존 Vector 링크 접근 실패. 대체 [Vector LIN 물리계층](https://certification.vector.com/mod/page/view.php?id=316), [구조](https://certification.vector.com/mod/page/view.php?id=314) 검색 결과는 단선 통신·전원/접지 기준·마스터를 뒷받침. ① 외장색, ② CAN 종단저항, ③ 압축압은 LIN 진단과 무관. |
| 전기 10 | 불충분 | ④ [HELLA 휠속도센서](https://www.hella.com/techworld/en/technical/sensors-and-actuators/check-and-change-abs-and-wheel-speed-sensors/)에서 조향각 영점보정 직접 근거를 찾지 못함. ① 센서교환, ② 자세제어 부품, ③ 지정 얼라인먼트는 조건에 따라 관련. ④ 일반 오일교환은 직접 관련 낮음. |
| 전기 15 | 부분 | ① [HELLA 공조](https://www.hella.com/techworld/en/technical/car-air-conditioning/car-air-conditioning/)는 응축기·증발기 등 냉매계통 설명. 히터코어는 별도 난방 열교환기. ②③④는 공조 열교환기, ①은 배기계통. |
| 전기 16 | 관련 | ③ 같은 HELLA 자료의 Troubleshooting 압력표는 냉매 부족, 압축기, 응축기 팬 등 여러 원인을 제시. ① 대기 방출, ② 즉시 교환, ④ 충전량 배제는 부적절. 냉매 취급 규정·차종별 조건은 별도. |
| 친환경 3 | 관련 | ④ [DOE BEV](https://afdc.energy.gov/vehicles/how-do-all-electric-cars-work)는 내연기관 및 통상적 액체연료 부품이 없음을 명시. ① 안전조치, ② 체결, ③ 해당 차량 냉각액은 교환 관련. 실제 교환 절차는 OEM 필요. |

## 상태
잔여 11건 모두 기존 출처 접근 또는 내용 적합성 확인을 시도했다. 관련 3, 부분 5, 불충분 2, 접근 불가 1. 정답 번호 변경 없음. 44선지 논리 검토, 독립 기술승인 0/720, 과목보류 55, 공개 기출 0, 예상문제 80 유지. 공식 [Q-net 게시물](https://www.q-net.or.kr/cst006.do?artlSeq=5213442&brdId=Q006&code=1202&gId=&gSite=Q&id=cst00602)의 HWP 첨부 존재 재확인, 본문 미확보. 다음: 기존 9문항까지 현행 보기별 논리 재검토 및 OEM 근거 보강, 이후 다음 20문항. 원본 및 manifest 변경 금지.
