# caveman

> 에이전트 사용자용 토큰 절약 — 말을 최소한으로 줄여 에이전트가 쓰는 토큰을 깎습니다.

- 페이지: https://tesign.com/item/caveman/
- JSON: https://tesign.com/item/caveman/index.json
- 영어 마크다운: https://tesign.com/en/item/caveman/index.md
- 생성 시각: 2026-09-17 19:00 UTC

## 순위

- 역대 32위 · 이번 주 급상승 49위 · 개발 도구 분야 6위 (기준 2026-09-17 13:00 UTC)

## 숫자

- 별 106,309 — GitHub에서 2026-09-17 18:40 UTC 확인
- 7일 +234은 GH Archive 관측 (기준 2026-09-17 13:00 UTC)
- 24h +21 ★ · 30d +557 ★ (기준 2026-09-17 13:00 UTC)
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.

## 한눈에 보는 사실

- 라이선스: 라이선스 미확인
- 사용 범위: 미확인 — 쓰기 전에 살펴보세요.
- 언어: Go
- 플랫폼: cli
- 분류: AI · 개발 도구
- 태그: tokens · prompting · agent-skills
- 바로 쓰기: 개발자용
- 출처: GitHub https://github.com/juliusbrussee/caveman
- USE PACKAGE: https://docs.caveman.so/docs/quickstart

## 활동

- 마지막 커밋: 2026-09-17 16:46 UTC
- 최근 릴리스: v2.7.0 (2026-09-15)
- 기여자: 56
- 열린 이슈 (PR 포함): 124
- 만든 이: 개인
- GitHub 확인 시각: 2026-09-17 18:40 UTC

## TESIGN TAKE

스킬은 출력, 프록시는 입력을 줄이는 두 단계인데, 절감이 상황마다 다르다고 스스로 적어 둔 점이 믿음직합니다.

## 왜 볼 만한가

에이전트가 돌려주는 말이 길수록 토큰과 비용이 같이 늘어납니다. caveman은 에이전트의 답변을 조사와 수식 없이 최소 단어로 줄이는 Claude Code 스킬로, 같은 내용을 훨씬 짧게 받습니다. 저장소 설명은 토큰 65% 절감을 내걸지만 이는 저장소 쪽 수치입니다. Go로 쓰였고, 스킬은 MIT, 함께 제공되는 프록시 엔진은 BSL-1.1입니다.

## 이걸로 무엇을 만들 수 있나

- 답변이 장황해지는 반복 작업의 출력 토큰을 줄이는 설정
- 절감 폭을 팀의 실제 작업별로 재 보는 비용 실험

## 누구에게 맞나

- 1인 개발자 — 에이전트 답변이 길어 토큰이 새는 게 보일 때
- 팀 관리자 — 반복 작업의 토큰 비용을 먼저 재 보고 줄일 때

## 5분 안에 시작하기

```
# 스킬(MIT):
$ npx skills add JuliusBrussee/caveman
# 프록시(Node.js 22.13+):
$ npm install -g @caveman-ai/cli && caveman setup --install
$ caveman claude
```

## 주의할 점

- 스킬은 출력만 줄이고 규칙 자체가 턴마다 1~1.5k 입력 토큰을 씁니다
- 이미 간결한 작업에선 오히려 비용이 늘 수 있다고 README가 밝힙니다
- 스킬은 MIT, 프록시 엔진은 BSL-1.1(제3자 호스팅은 상용 라이선스)입니다

## 영수증

- TESIGN이 처음 본 시각: 2026-09-13 07:43 UTC
- 출처 등록: 2026-04-04 10:03 UTC
- 선정: 2026-09-13 11:32 UTC
- TESIGN 게재: 2026-09-13 11:32 UTC
- 소개 글 마지막 수정: 2026-09-15 04:36 UTC

## 읽는 법

- 이 파일은 tesign.com 항목 페이지와 같은 빌드에서 같은 데이터로 만들어졌습니다. 소개 글은 편집자가 쓴 것이고, 숫자는 저장된 관측값입니다.
- JSON의 null은 관측하지 않았다는 뜻입니다 — 0이 아닙니다. 마크다운에서는 [확인 필요]로 적습니다.
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.
- 요약이며 법적 조언이 아닙니다.

[대표 이미지] https://tesign.com/img/caveman-ade8e8e709.png
