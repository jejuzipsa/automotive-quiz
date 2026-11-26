# 2018~2020 구 기출 개인 보관 계획

- 목표: 8회차 640문항, 각 회차의 문제·보기·정답·해설·그림·원래 과목과 문항 번호 보존.
- 현재: 출처 목록 8회차 확인, **실제 원문 JSON 0/640**. PDF 링크 및 직접 HTML 접속 실패. 웹 조회에는 원문 HTML 정답 속성이 보이지 않음. 기존 교재 QA23 720문항과 별개.
- `data/past/archive-manifest.json`은 출처/회차 목록이지 출제은행이 아니다.
- 원문 파일은 사용자 제공 개인 보관 자료로 처리하며, 공개 저장소 및 Pages에 올리지 않는다. 공개 재배포 권한 확인 전 기존 시험 엔진의 공개 데이터와 분리한다.
- 자료: [전자문제집 CBT 다운로드 목록](https://www.comcbt.com/xe/nn), [CBTbank 목록](https://cbtbank.kr/category/자동차정비산업기사). 회차별 교사용 PDF(정답 포함)를 확보한다. 원문 설명 미수록 시 누락으로 표시하고 별도 해설 작성은 출처와 구분한다.
- 2020-06-06은 1·2회 통합 1세트. 2017년 이전은 제외.
- 개인 보관 폴더는 저장소 밖에 둔다. 회차별 JSON 형식은 `archive-round.schema.json`, 파일 이름은 manifest 참조. 그림은 로컬 상대경로로 함께 보관. 문항 번호·원래 과목 유지, 현행 분류는 별도 필드.
- 확인 명령: `node tools/validate-private-past.cjs <개인 보관 폴더>`. 문항 개수, 번호·ID 중복, 정답 번호 범위, 로컬 그림 누락, 해설 및 원문 대조 상태 확인. 기술 정답의 정확성이나 이용 허락을 자동 인증하지 않는다.

## HTML 우선 변환 (개인 보관)

권한 있는 HTML 자료를 Chrome/Edge에서 문제·보기 순서대로 표시한 뒤 페이지 전체 HTML과 리소스 폴더를 저장한다. 첫 회차 HTML을 제공하면 실제 선택자/정답 속성을 확인할 수 있다. 현재 예제 선택자는 합성 예시이며 실제 사이트에 검증되지 않았다.

```sh
python -m pip install beautifulsoup4
python tools/import-private-html.py inspect path/to/saved.html
python tools/import-private-html.py convert path/to/saved.html --date 2020-08-22 --config path/to/verified-config.json --out ../private-past-archive
python tests/test_private_html_import.py
```

`tools/private-html-selectors.example.json`은 설정 규격 예시다. 실제 CSS 선택자와 명시적 정답 표식 검증 전 사용 금지. 답을 AI 해설이나 선택된 응답으로 추정하지 않는다. 이미지 원본은 로컬로 저장된 경우만 복사하고 누락 시 표시한다. 보관 JSON은 원문 대조 전 pending으로 기록한다. 원문 HTML에 개인 정보가 포함되어 있을 수 있으므로 개인 폴더에만 보관한다. 변환기는 자체적으로 네트워크 접속하지 않는다.
