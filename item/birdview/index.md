# Birdview

> AI 코딩 팀용 영향 지도 — 에이전트가 코드를 고치기 전에 건드릴 모듈을 구조도 위에 먼저 보여 줍니다.

- 페이지: https://tesign.com/item/birdview/
- JSON: https://tesign.com/item/birdview/index.json
- 영어 마크다운: https://tesign.com/en/item/birdview/index.md
- 생성 시각: 2026-09-23 02:05 UTC

## 숫자

- 별 591 — GitHub에서 2026-09-23 01:48 UTC 확인
- 7일 별 증가 관측 없음 (GH Archive) (기준 2026-09-22 21:00 UTC)
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.

## 한눈에 보는 사실

- 라이선스: MIT (허용적) — https://spdx.org/licenses/MIT.html
- 사용 범위: 상업 이용·수정·재배포 가능. 저작권 고지는 유지.
- 오픈소스: 예
- 언어: TypeScript
- 플랫폼: cli · web
- 분류: 개발 도구 · AI
- 태그: architecture · code-visualization · agents · diagram-as-code
- 바로 쓰기: 설치해서 쓰기
- 출처: GitHub https://github.com/qiuner/birdview
- INSTALL: https://qiuner.github.io/birdview

## 활동

- 마지막 커밋: 2026-09-22 01:12 UTC
- 최근 릴리스: v0.3.1 (2026-09-22)
- 기여자: 2
- 열린 이슈 (PR 포함): 1
- 만든 이: 개인
- GitHub 확인 시각: 2026-09-23 01:48 UTC

## 선정 신호와 근거

- 신규 · 생성 27h 만에 포착

## TESIGN TAKE

에이전트에 '어디를 건드릴 건지 먼저 그려라'를 강제하는 절차가 핵심입니다.

## 왜 볼 만한가

에이전트 코딩 로그는 무슨 일이 있었는지, diff는 어느 줄이 바뀌었는지만 말해 줍니다. Birdview는 그 앞에 구조 검사를 끼워, 프로젝트의 아키텍처 지도를 먼저 만들고 에이전트가 손댈 모듈과 근거를 표시한 뒤 편집하게 합니다. 결과는 서버 없이 여는 단독 HTML이고 지도와 활동 기록은 JSON 스키마로 검증합니다. MIT로 공개돼 있지만 활동은 에이전트가 스스로 선언하는 것이라 실제 편집을 자동으로 관찰하지는 않습니다.

## 이걸로 무엇을 만들 수 있나

- 에이전트 작업 전에 영향 범위를 확인하는 팀 리뷰 절차
- 온보딩용으로 걸어 두는 근거 연결 아키텍처 지도
- 변경 전후 구조를 나란히 비교하는 릴리스 노트 첨부물

## 누구에게 맞나

- 에이전트 사용 개발자 — 변경 범위가 예상 밖으로 번져 본 적이 있을 때
- 테크 리드 — 리뷰 전에 영향 모듈을 한눈에 보고 싶을 때

## 5분 안에 시작하기

```
$ npm ci
$ npm run validate:examples
$ npm test
$ npm run build:demo
# Node.js 18+ · 끝나면 examples/harness-activity.html을 브라우저로 열기
# 에이전트에 붙이는 설치는 docs/installation.md 참조
```

## 주의할 점

- 활동은 에이전트가 선언한 것이며 실제 편집을 자동 관찰하지 않습니다
- 갱신은 HTML을 다시 만들어 새로고침해야 합니다
- npm에 배포되지 않은 private 패키지입니다(v0.1)

## 영수증

- TESIGN이 처음 본 시각: 2026-09-13 10:29 UTC
- 출처 등록: 2026-09-12 06:59 UTC
- 선정: 2026-09-14 02:41 UTC
- TESIGN 게재: 2026-09-14 02:41 UTC
- 소개 글 마지막 수정: 2026-09-15 04:36 UTC

## 읽는 법

- 이 파일은 tesign.com 항목 페이지와 같은 빌드에서 같은 데이터로 만들어졌습니다. 소개 글은 편집자가 쓴 것이고, 숫자는 저장된 관측값입니다.
- JSON의 null은 관측하지 않았다는 뜻입니다 — 0이 아닙니다. 마크다운에서는 [확인 필요]로 적습니다.
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.
- 요약이며 법적 조언이 아닙니다.

[대표 이미지] https://tesign.com/img/birdview-ae29760b36.png
