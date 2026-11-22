# 자동차정비산업기사 우리 문제은행 — 기술·편집 QA2 보고서

날짜: 2026-11-23

## 기준 자료 및 작업 범위

- **원본 QA23 OCR**: 720문항의 질문·보기·정답·해설 원문 이미지 대조 완료 자료. QA2에서 수정하지 않음.
- **우리 문제/해설 초안**: QA1 교정본을 기준으로 총 720개의 질문·4지선다와 720개의 별도 해설을 개별 비교.
- **이번 중점**: QA1에서 자동 탐지한 `potentially_off_topic_distractor` 후보 129문항을 **모두 개별 읽고 처리**. 자동 판정 결과를 그대로 오류로 간주하지 않음.

## 확인 결과

| 항목 | 결과 |
|---|---:|
| 원본 문제·해설 연결 및 객관식 스키마 검사 | 720/720 통과 |
| QA1에서 오답 보기 부적합 후보로 표시한 문항 | 129 |
| 후보 중 질문·선택지를 직접 수정 | **128** |
| 후보 중 의도된 부정형 문제로 정상 판정(그대로 유지) | **1** |
| 오답 보기 후보 후속 1차 편집 검토 미처리 | **0** |
| 후보 외 시험범위 이탈 문항 별도 재작성 | **1** |
| **QA2에서 실제 내용이 변경된 고유 문항** | **129** |
| 과목 분류 의심 47문항 개별 재확인 | 47 |
| 분류 변경이 유력한 후보(최종 미확정) | 39 |
| 과목 경계에 있어 세부 출제기준 확인 필요 | 7 |
| 가정용 인버터 → 전기차 구동 인버터 재작성, 출제 보류 유지 | 1 |
| 1차 제조사·기술자료 근거 대조 | 7문항 |
| **독립 기술정답 최종 승인** | **0/720** |
| **모의고사 출제 승인 / 사이트 연결** | **0/720** |

QA1 기존 변경 28건은 작업 이력으로 유지하며, QA2에서 그 문항을 추가 수정한 경우 QA1 이전/이후 기록과 QA2 이전/이후 기록을 계보로 연결한다. QA1 및 QA2의 작업 건수를 중복 합산해 고유 수정 문항 수라고 주장하지 않는다.

## 검수 방식과 실질적 교정 사례

1. 오답을 지나치게 쉽게 하는 ‘시트 색상·라디오 설정·와이퍼 고무’ 등 관련 없는 선택지를 같은 정비 계통의 **잘못된 진단 방법 또는 다른 기능의 정비 장치**로 교체. 정답 지문도 필요한 경우 용어를 명확히 수정함.
2. **정답 유일성을 명확히 하도록 질문 조건 보완**: 특정 변속단의 유압 지연, 냉각수 유출 흔적, 센서 출력·실측값의 범위 등을 질문에 명시.
3. **부정형 문제를 무조건 제거하지 않음**: `auto-made-r02-s03-q18`은 차량 편의장치 계통에 ‘속하지 않는’ 항목을 고르는 문항이므로, 변속기 유온센서가 정답인 것은 의도된 구조. 자동 휴리스틱은 오탐으로 기록.
4. **시험범위 이탈 정리**: `auto-made-r06-s04-q20`의 ‘가정용 태양광 패널 DC→교류 부하’ 질문은 기존 친환경 자동차정비와 맞지 않아 ‘전기차 구동배터리 DC→3상 교류 구동모터’ 질문으로 다시 씀. 인버터·OBC·DC/DC·종감속기 사이의 기능 구분을 네 보기로 반영. Bosch·기아·미 에너지부 자료를 참고하였으나 정식 출제 승인은 여전히 보류.
5. **원본 과목 배치 판단의 한계 명시**: 큐넷 자동차정비산업기사 필기는 엔진·섀시·전기전자·친환경 네 과목이며 2025.1.1~2027.12.31 출제기준이 공지되어 있음. 47건에 대해 주제가 맞을 것으로 보이는 과목을 분리 기록했지만, 세부 능력단위와 실제 시험의 과목 배치까지 독립적으로 확정하지는 않았음. **47건 모두 보류 상태를 유지하고 기존 원본의 과목·회차/문항 ID는 변경하지 않음**.

## 제조사 등 1차 근거로 우선 대조한 7문항

- `auto-made-r06-s02-q17`: Garrett 터보 재장착 시 규정 신품 가스켓·윤활라인 관리.
- `auto-made-r06-s04-q20`: Bosch·기아 전기차 구동 인버터의 직류→교류 변환과 OBC/DC-DC 구분.
- `auto-made-r02-s03-q09`: Bosch ESP 설명의 요레이트(수직축 회전속도)·조향각 구분.
- `auto-made-r08-s03-q11`: Bosch 적응형 크루즈 컨트롤의 차간거리 추종 기능과 AEB/LKA 차이.
- `auto-made-r09-s01-q12`: Fluke/Pico 점화 2차 파형 전용 픽업의 필요성.
- `auto-made-r09-s02-q18`: Bosch 조향 명령과 실측 요거동 비교.
- `auto-made-r02-s01-q03`: Garrett 터보 교환 직후 오일 공급·리턴과 초기 윤활 점검.

각 문항의 URL·검토 근거·정답 번호·보기를 `qa2_firstpass_technical_evidence_7.json`에 저장함. **‘제조사 자료로 원리를 1차 대조’는 전수 기술검증 승인과 같지 않다.**

## QA2 산출물

- 문제은행 `questions_all_720.json` 및 `questions_{engine,chassis,electrical,eco}_180.json`.
- 별도 해설은행 `explanations_all_720.json` 및 `explanations_{engine,chassis,electrical,eco}_180.json`.
- 고유 수정 129개 이전/이후 비교 `qa2_changes_129.json`.
- 검수 오탐 1개 `qa2_false_positive_1.json`.
- 과목 분류 후보 47개 개별 1차 판단 `qa2_classification_47.json`.
- 제조사/공식 기술자료 근거 7개 `qa2_firstpass_technical_evidence_7.json`.
- 집계 `qa2_summary.json` 및 회귀검사 `tests/technical-qa2.test.cjs`.
- ZIP 파일 생성 없음. 원본 QA23과 QA1의 역사 기록은 따로 유지.

## 이후 검수 순서

1. 남은 **720문항의 정답 단일성·보기별 참/거짓**에 대한 독립 기술검증. QA2의 129문항은 오답 보기 편집 검수를 받았지만 아직 정답 전수 승인 상태는 아님.
2. 과목 분류 검토 47문항은 자세한 큐넷 세부 기준 확인 후 기존 과목 재배치 또는 해당 과목에 맞게 문제 교체. 그전까지 출제하지 않음.
3. QA1에서 표시한 **짧은 해설 431개**, 안전·법령·수치 등의 의심 항목을 오탈자가 아니라 내용 수준에서 검증·보완.
4. 각 문항의 모든 보기와 해설에 근거를 기록하고 **승인된 문항만** 모의고사에 연결. 이어서 승인된 해설로 괄호형 4지선다 개념퀴즈 제작.

## 1차 참고 링크

- 큐넷 자동차정비산업기사 종목 및 4과목 안내: https://www.q-net.or.kr/crf005.do?gId=&gSite=Q&id=crf00503s02&jmCd=2070&jmInfoDivCcd=B0
- Bosch 구동 인버터: https://www.bosch-mobility.com/en/solutions/power-electronics/
- 기아 전기차 구성요소: https://ownersmanual.kia.com/docview/webhelp/doc/591d735b-2911-4035-9f13-f14b76381417/topics/chapter1_2.html
- Bosch ESP: https://www.bosch-mobility.com/en/solutions/braking-systems/electronic-stability-program/
- Bosch ACC: https://www.bosch-mobility.com/en/solutions/assistance-systems/adaptive-cruise-control/
- Garrett 터보 설치: https://www.garrettmotion.com/knowledge-center-category/turbo-replacement/part-1-garrett-turbocharger-installation-guide/
- Fluke 점화 픽업: https://www.fluke.com/en-us/product/accessories/test-leads/fluke-pm9096-201