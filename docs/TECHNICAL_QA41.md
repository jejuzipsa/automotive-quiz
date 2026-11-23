# QA41 — 섀시정비 4·5·6회 과목 이탈 15문항 전면 재작성

일시: 2026-11-23. 공개 출제되지 않은 편집초안을 대상으로 한 **자체 제작 학습문제 교정**이야. 기존 수록 기출원문 그대로라는 의미가 아니며, 기술·안전·법령·게시권리 독립 최종승인이 아냐.

| 회차·위치 | 독립 재작성한 5개 세부학습 목표 |
|---|---|
| 4회 섀시 16~20 | 쇽업소버 로드·씰 손상, ABS 휠속도 신호, EPS 토크센서, 공기현가 누설, ATF 레벨 검사 |
| 5회 섀시 16~20 | TCC 결합 슬립, 전자댐퍼 단선, 타이로드 교체 얼라인먼트, EPB 패드교체, ESC 차량거동 |
| 6회 섀시 16~20 | P/N 변속레인지 신호, 스트럿 상부마운트 소음, ABS 자성 엔코더, EPS 제한제어, 공기현가 차고센서 보정 |

- [문항 15개 수정 전후 및 최신 옵션별 근거](../data/qa/technical-qa41-chassis-scope-replacements.json): 질문·4보기·해설·핵심요약·정오 이유·참고 URL 포함. 기존 정답위치와 ID 유지. QA18/QA20/QA24의 시점별 감사 JSON 자체는 수정하지 않았고 해당 테스트는 역사적 스냅샷을 확인하도록 수정.

## 기술 참고 및 확인범위
- [HELLA ABS 휠속도 센서](https://www.hella.com/techworld/en/technical/sensors-and-actuators/check-and-change-abs-and-wheel-speed-sensors/)·[Bosch ESP](https://www.bosch-mobility.com/en/solutions/braking-systems/electronic-stability-program/): 신호/차륜별 제어를 설명한 일반원리.
- [Bosch EPS](https://www.bosch-mobility.com/en/solutions/steering/electric-power-steering-systems/)·[Hunter SAS 보정](https://www.hunter.com/en-int/media-center/industry-insights/steering-angle-sensor-reset/): 조향토크와 센서 교정.
- [ZF ATF 레벨](https://aftermarket.zf.com/sg/aftermarket-portal/for-workshops/useful-tips/transmission-oil-change-pc/)·[Bosch 변속기 솔레노이드](https://www.bosch-mobility.com/en/solutions/transmission-technology/variable-force-transmission-solenoid/): 자동변속기 동작.
- [KYB 쇽업소버 진단](https://www.kyb.com/resources/shocks-struts-101/for-diyers/diagnose-your-shocks/)·[Arnott 공기현가 FAQ](https://www.arnottsuspension.com/pages/faq/): 감쇠/공기현가와 보정.
- [Q-net 자동차정비산업기사 출제기준 2025~27](https://www.q-net.or.kr/cst006.do?artlSeq=5213442&brdId=Q006&code=1202&gId=&gSite=Q&id=cst00602) 게시 적용기간 확인, **세부 HWP 본문을 직접 확인한 것은 아니야**. 차종별 OEM 작업법과 국가법령은 별도 독립 검토해야 해.

## 제한 및 후속
- 15건 최신 해설 개선은 기본 학습원리 검토단계. **55개 기존 과목 보류해제0**, 독립 최종 기술승인0/720, 공개 기출 재구성0/720.
- 공개 예상문제80 및 `data/manifest.json` 변경 없음. 다음 잠정 교차과목 후보 32개·경계 4건·과거 보류 오탐 의심 1건을 편집/확인해야 해.
