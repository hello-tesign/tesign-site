# aSPARK

> AI 개발팀 승인 관문 — Claude Code 위에서 기획·설계·개발·리뷰·QA 다섯 단계마다 승인 관문을 두고 진행하는 에이전트 팀.

- 페이지: https://tesign.com/item/aspark/
- JSON: https://tesign.com/item/aspark/index.json
- 영어 마크다운: https://tesign.com/en/item/aspark/index.md
- 생성 시각: 2026-09-23 02:05 UTC

## 숫자

- 별 22 — GitHub에서 2026-09-22 07:32 UTC 확인
- 7일 별 증가 관측 없음 (GH Archive) (기준 2026-09-22 21:00 UTC)
- Show HN 1점 — 2026-09-22 08:42 UTC 관측
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.

## 한눈에 보는 사실

- 라이선스: MIT (허용적) — https://spdx.org/licenses/MIT.html
- 사용 범위: 상업 이용·수정·재배포 가능. 저작권 고지는 유지.
- 오픈소스: 예
- 언어: [확인 필요]
- 플랫폼: cli
- 분류: 개발 도구 · AI
- 태그: ai 코딩 · claude code · 품질 관리 · 오픈소스
- 바로 쓰기: 설치해서 쓰기
- 출처: Show HN https://github.com/a-lottes/aSPARK
- INSTALL: https://aspark.lottes.dev/

## 활동

- 마지막 커밋: 2026-09-22 05:18 UTC
- 최근 릴리스: [확인 필요]
- 기여자: [확인 필요]
- 열린 이슈 (PR 포함): [확인 필요]
- 만든 이: [확인 필요]
- GitHub 확인 시각: 2026-09-22 07:32 UTC

## 선정 신호와 근거

- 신규 · 생성 2h 만에 포착

## TESIGN TAKE

AI 코딩 도구는 많지만, 사람이 승인해야 다음 단계로 넘어가는 관문을 다섯 번이나 두고 그 기록을 저장소에 남긴다는 점이 다르다.

## 왜 볼 만한가

AI에게 기능 하나를 통으로 맡기면 범위가 슬금슬금 늘어나거나 검증 없이 넘어가기 쉽다. aSPARK는 기획자·디자이너·엔지니어링 매니저·개발자·리뷰어·QA·릴리스 매니저 역할을 나눠, 각 단계가 승인을 받아야 다음으로 넘어가는 다섯 단계 루프를 강제한다.

## 이걸로 무엇을 만들 수 있나

- 서비스나 계정 없이, 프로젝트에 설치되는 마크다운 플러그인이다. /spark로 전체 루프를 돌리면 기획서(spec.md)·계획(plan.md)·리뷰(review.md)·QA 결과(qa.md)·릴리스 기록이 .spark/ 폴더에 그대로 남고, QA 단계는 실제 브라우저를 열어 화면을 클릭하며 확인한다.

## 누구에게 맞나

- Claude Code로 기능을 만드는 1인 개발자·소규모 팀, AI 작업을 단계별로 검토하고 싶은 사람.

## 5분 안에 시작하기

```
# Claude Code 세션에서 /plugin marketplace add a-lottes/aSPARK 뒤 /plugin install aspark@aspark로 설치하고, 새 프로젝트라면 /charter부터 실행한다.
```

## 주의할 점

- Claude Code와 Git이 있어야 하고, 화면을 직접 확인하는 QA 단계(/demo-day)를 쓰려면 브라우저 연동(Claude in Chrome, Playwright 등 MCP)이 추가로 필요하다. 별 24개로 공개된 지 얼마 안 됐다.

## 영수증

- TESIGN이 처음 본 시각: 2026-09-22 07:01 UTC
- 출처 등록: 2026-09-22 04:14 UTC
- 선정: 2026-09-23 02:05 UTC
- TESIGN 게재: 2026-09-23 02:05 UTC
- 소개 글 마지막 수정: 2026-09-23 02:05 UTC

## 읽는 법

- 이 파일은 tesign.com 항목 페이지와 같은 빌드에서 같은 데이터로 만들어졌습니다. 소개 글은 편집자가 쓴 것이고, 숫자는 저장된 관측값입니다.
- JSON의 null은 관측하지 않았다는 뜻입니다 — 0이 아닙니다. 마크다운에서는 [확인 필요]로 적습니다.
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.
- 요약이며 법적 조언이 아닙니다.

[대표 이미지] https://tesign.com/img/aspark-23216f9ee6.png
