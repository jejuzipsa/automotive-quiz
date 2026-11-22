# 자동차정비산업기사 문제은행 데이터

현재 `questions.js`에는 **독자 작성 데모 8문항과 개념 데모 4문항만** 포함된다.

## 3개 트랙
- `past`: 공식 공개 기출 (이용 범위를 확인한 문제만)
- `expected`: 이용허락을 받거나 독립 제작하고 검증한 예상문제
- `concept`: 괄호 문제 / 핵심 개념 퀴즈
- `demo`: 실사이트 기능 시험 전용 문제

실제 `past` / `expected` 문항은 `review_status:"approved"` 및 `publishable:true`가 모두 있어야 렌더러에 표시된다.

예시 형식:

```js
{
  id: "unique-id",
  track: "expected",
  subject: "engine", // engine | chassis | electrical | eco
  question: "문제 내용",
  choices: ["보기1", "보기2", "보기3", "보기4"],
  answer: 2, // 1~4
  explanation: "검증된 정답 해설",
  review_status: "approved",
  publishable: true
}
```

**주의**: GitHub Pages에 들어가는 `data/questions.js`는 외부에서 그대로 다운로드할 수 있다. 비공개 저장소라도 공개 Pages 배포 폴더 안의 문제 데이터는 비공개가 아니다. 유료 교재의 원문·해설·스캔·OCR 초안은 업로드하지 않는다.

기존 OCR QA1~QA6 자료는 별도의 개인 백업으로 취급하며 이 공개 사이트의 소스에 포함하지 않는다.
