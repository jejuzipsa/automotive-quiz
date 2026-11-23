# QA40 — 엔진정비 과목을 명백히 벗어난 3개 문항의 독립 편집 대체

2026-11-23. QA39에서 분류한 55개 과목 보류 중 '현재 네 과목 주요항목과 거리가 먼' 3건을 **현재 엔진정비로 공부할 수 있는 신규 자체 작성 문제로 교체**했어. 기존 원본 기출을 재현했다는 뜻이 아니고, `qa40_editorial_replacement.origin_is_not_original_exam_wording=true`로 명시했어.

## 수정 전후
| 위치 | 이전 주제 | 신규 개념 | 기존 정답번호 |
|---|---|---|---|
| 2회 엔진 1 | 타이어 냉간 공기압 | 목표 과급압 vs 실측 흡기압 vs 웨이스트게이트 제어 명령 | 3 |
| 5회 엔진 9 | 렌터카 법적 차량 분류 | 디젤 EGR 명령·위치/유량 피드백 비교 | 1 |
| 6회 엔진 14 | 시설 배전반 전기화재 | 가솔린 연료라인 누출 시 점화원 통제·인명 보호 | 3 |

- 질문+4선지+해설/핵심요약+선지별 정오 이유를 새로 작성했으며 ID·정답 번호·4과목×20문항 편제 불변.
- [전체 수정 전후 JSON](../data/qa/technical-qa40-out-of-scope-replacements.json). 기존 QA10·19·23 감사 JSON은 교정 전 역사 기록으로 남고, 해설 `option_analysis_qaXX`는 최신 QA40 보기와 일치하도록 조정했어.

## 기술 참고자료 및 검토 한계
- **과급 제어**: [GM 과급제어 테스트 사례](https://static.nhtsa.gov/odi/tsbs/2019/MC-10167436-9999.pdf), [Ford OBD 시스템 설명](https://www.fordservicecontent.com/ford_content/catalog/motorcraft/OBDSM1704.pdf). 실제 센서와 액추에이터 구성/허용차는 차종별로 달라.
- **EGR**: [HELLA EGR 작동 및 진단](https://www.hella.com/techworld/en/technical/car-electronics-and-electrics/exhaust-gas-recirculation/), [Bosch 차압센서 및 EGR](https://www.bosch-mobility.com/en/solutions/sensors/differential-pressure-sensor/). 모든 EGR 밸브가 동일한 피드백 구조를 가진다고 단정하지 않아.
- **휘발유 누출**: [OSHA 가연성 액체 안전](https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.106), [NHTSA 연료계 작업 안전 안내](https://static.nhtsa.gov/odi/rcl/2020/RCRIT-20V700-3257.pdf). 사람 안전·대피/전문대응 우선이며 미국 자료는 국내 법령의 직접 대체가 아니야.
- [Q-net 2025~27 공식 출제기준 게시물](https://www.q-net.or.kr/cst006.do?artlSeq=5213442&brdId=Q006&code=1202&gId=&gSite=Q&id=cst00602), [2차 출제항목 정리](https://shcomms12.com/2026/10/24/auto-mechanic-industrial-engineer-written-exam/). **공식 HWP 세부항목을 직접 확보한 것은 아니기 때문에** 과목배정/출제권리 최종 승인은 하지 않았어.

## 계속 보류
- 현재 55건의 `subject_classification_review.status=hold_do_not_publish` 중 3건은 새로운 과목 일치 가능성이 높아졌지만, 공식 HWP 대조·OEM 안전·독립 기술/권리 확인 전 **보류 해제 0건**.
- 기출 복원문항 공개 0/720, 독립 최종 기술승인 0/720. `data/manifest.json`/공개 자체예상문제 80은 유지해.
- 남은 OEM/안전·법령 기술 보류와 과목 대체 과제, 비공개 초안 이관/철수는 다음 검증 단계.
