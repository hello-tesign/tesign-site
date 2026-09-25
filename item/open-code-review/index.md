# open-code-review

> 개발자용 AI 코드 리뷰 — 규칙 검사와 LLM 리뷰를 함께 돌려 줄 단위로 지적합니다.

- 페이지: https://tesign.com/item/open-code-review/
- JSON: https://tesign.com/item/open-code-review/index.json
- 영어 마크다운: https://tesign.com/en/item/open-code-review/index.md
- 생성 시각: 2026-09-25 03:06 UTC

## 순위

- 역대 161위 · 이번 주 급상승 1위 · 보안 분야 1위 (기준 2026-09-23 20:00 UTC)

## 숫자

- 별 40,851 — GitHub에서 2026-09-25 02:58 UTC 확인
- 7일 +432은 GH Archive 관측 (기준 2026-09-23 20:00 UTC)
- 24h +6 ★ · 30d +1,332 ★ (기준 2026-09-23 20:00 UTC)
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.

## 한눈에 보는 사실

- 라이선스: Apache-2.0 (허용적) — https://spdx.org/licenses/Apache-2.0.html
- 사용 범위: 상업 이용·수정·재배포 가능. 고지 유지, 바꾼 부분은 표시.
- 오픈소스: 예
- 언어: Go
- 플랫폼: windows · macos · linux · cli
- 분류: 개발 도구 · 보안
- 태그: code-review · agents · security
- 출처: GitHub https://github.com/alibaba/open-code-review
- TRY: https://open-codereview.ai/

## 활동

- 마지막 커밋: 2026-09-24 09:59 UTC
- 최근 릴리스: v1.12.9 (2026-09-22)
- 기여자: 192
- 열린 이슈 (PR 포함): 216
- 만든 이: 조직
- GitHub 확인 시각: 2026-09-25 02:58 UTC

## TESIGN TAKE

규칙 기반 단계와 에이전트를 나눠 쓰는 설계가, 리뷰 위치가 어긋나는 흔한 문제에 대한 답으로 설득력 있습니다.

## 왜 볼 만한가

코드 리뷰는 규칙 검사만 쓰면 놓치는 것이 많고, 모델에만 맡기면 지적이 들쭉날쭉합니다. open-code-review는 결정형 파이프라인과 LLM 에이전트를 함께 쓰는 구조로 줄 단위 코멘트를 답니다. NPE·스레드 안전성·XSS·SQL 인젝션을 다루는 다국어 룰셋이 들어 있고 OpenAI·Anthropic 모델을 함께 지원합니다. 알리바바가 Apache-2.0으로 공개했습니다.

## 이걸로 무엇을 만들 수 있나

- PR마다 자동으로 도는 사내 리뷰 단계
- 보안 취약 패턴만 따로 보는 점검 리포트
- 사내 규칙을 얹은 팀 전용 룰셋

## 누구에게 맞나

- 팀 리드 — PR마다 자동 리뷰를 CI에 붙이려 할 때
- 보안 담당자 — XSS·SQL 인젝션 패턴을 정기 점검할 때
- 1인 개발자 — 머지 전에 두 번째 눈이 필요할 때

## 5분 안에 시작하기

```
# Git 2.41 이상 필요
$ npm install -g @alibaba-group/open-code-review
$ ocr config provider
$ ocr config model
$ cd your-project
$ ocr review
```

## 주의할 점

- LLM 제공자 설정과 API 키가 필요합니다(위임 모드는 예외)
- 정밀도를 우선해 재현율은 낮은 편이라고 스스로 밝힙니다
- 벤치마크 수치는 저장소가 직접 만든 데이터셋 기준입니다

## 영수증

- TESIGN이 처음 본 시각: 2026-09-13 07:43 UTC
- 출처 등록: 2026-05-18 02:16 UTC
- 선정: 2026-09-13 11:32 UTC
- TESIGN 게재: 2026-09-13 11:32 UTC
- 소개 글 마지막 수정: 2026-09-15 04:36 UTC

## 읽는 법

- 이 파일은 tesign.com 항목 페이지와 같은 빌드에서 같은 데이터로 만들어졌습니다. 소개 글은 편집자가 쓴 것이고, 숫자는 저장된 관측값입니다.
- JSON의 null은 관측하지 않았다는 뜻입니다 — 0이 아닙니다. 마크다운에서는 [확인 필요]로 적습니다.
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.
- 요약이며 법적 조언이 아닙니다.

[대표 이미지] https://tesign.com/img/open-code-review-157e8e3de1.png
