# LLM Space

> 에이전트 개발자용 실행 추적 — 에이전트 개발자용 맥 데스크톱 앱 — 모든 모델 호출·도구 실행을 추적하고, 실패한 실행을 되감아 단계별로 봅니다.

- 페이지: https://tesign.com/item/llm-space/
- JSON: https://tesign.com/item/llm-space/index.json
- 영어 마크다운: https://tesign.com/en/item/llm-space/index.md
- 생성 시각: 2026-09-19 23:10 UTC

## 숫자

- 별 1,912 — GitHub에서 2026-09-19 22:58 UTC 확인
- 7일 +2은 GH Archive 관측 (기준 2026-09-19 18:00 UTC)
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.

## 한눈에 보는 사실

- 라이선스: MIT (허용적) — https://spdx.org/licenses/MIT.html
- 사용 범위: 상업 이용·수정·재배포 가능. 저작권 고지는 유지.
- 오픈소스: 예
- 언어: TypeScript
- 플랫폼: macos
- 분류: AI · 개발 도구
- 태그: agent-debugging · llm-tracing · desktop-app · macos · deerflow · langgraph
- 바로 쓰기: 설치해서 쓰기
- 출처: GitHub https://github.com/deer-flow/llm-space
- INSTALL: https://deer-flow.github.io/llm-space

## 활동

- 마지막 커밋: 2026-09-13 08:39 UTC
- 최근 릴리스: v4.18.1 (2026-09-07)
- 기여자: 25
- 열린 이슈 (PR 포함): 21
- 만든 이: 조직
- GitHub 확인 시각: 2026-09-19 22:58 UTC

## 선정 신호와 근거

- 과거 기록

## TESIGN TAKE

에이전트 디버깅을 '로그 뒤지기'에서 '실행을 되감아 보기'로 바꾼 앱이며, 2023년 3월부터 개발해 왔고 DeerFlow 팀이 매 버전을 이 앱으로 디버깅한다는 점이 신뢰의 근거입니다.

## 왜 볼 만한가

에이전트를 만들다 보면 '왜 이 단계에서 틀렸나'를 보는 도구가 필요한데, LLM Space는 모델 호출과 도구 실행을 하나씩 기록하고 과거 실행을 다시 재생해 단계별로 짚어 볼 수 있습니다. DeerFlow의 자매 프로젝트로 DeerFlow 모든 버전이 이 앱으로 만들어지고 디버깅됐다고 README에 적혀 있고, 2023년 3월에 시작해 지금 네 번째 메이저 버전(v4)입니다. 스레드와 API 키는 내 컴퓨터에 파일로 남습니다.

## 이걸로 무엇을 만들 수 있나

- 프롬프트·도구·모델 설정을 버전 관리하며 에이전트 시안을 빠르게 돌려 보는 작업대로 쓰고, 완성된 스레드는 실행 가능한 LangGraph 에이전트로 내보낼 수 있습니다. 플러그인 예제(atlas-plugin)를 따라 스킬·MCP 서버·모델 제공자를 추가하는 확장도 가능합니다.

## 누구에게 맞나

- 에이전트 개발자 — 모델 호출·도구 실행을 단계별로 추적하고 실패한 실행을 재생
- 프롬프트 엔지니어 — 프롬프트·시스템 메시지·도구를 버전 관리하며 여러 실행 간 성능 비교
- DeerFlow·LangGraph 사용자 — 스레드를 실행 가능한 LangGraph 에이전트로 변환

## 5분 안에 시작하기

```
# 1. 최신 릴리스에서 DMG 다운로드(macOS, Apple Silicon·Intel): https://github.com/deer-flow/llm-space/releases/latest
# 2. 소스에서 빌드하려면 Bun과 mise 설치 뒤 저장소 루트에서:
# bun install
# mise run dev
```

## 주의할 점

- 라이선스 MIT. 배포 바이너리는 macOS DMG만(두 에디션: 시스템 WebView ~27MB, 자체 렌더링 엔진 ~130MB); Windows·Linux 빌드는 README에 없음.
- 익명 사용 데이터를 수집하며 TELEMETRY.md에 수집 항목과 끄는 방법이 적혀 있음. 모델 API 비용은 사용자 부담.
- PR은 DeerFlow 핵심 팀만 병합(외부는 이슈로 참여). README에 스폰서 배너와 특정 모델 요금제 추천이 실려 있음.

## 영수증

- TESIGN이 처음 본 시각: 2026-09-13 08:47 UTC
- 출처 등록: 2026-06-28 03:39 UTC
- 선정: 2026-09-14 19:27 UTC
- TESIGN 게재: 2026-09-14 19:27 UTC
- 소개 글 마지막 수정: 2026-09-15 04:36 UTC
- ◌ 과거 기록: 과거 데이터를 되짚어 채운 항목입니다. 라이브 발견이 아닙니다.

## 읽는 법

- 이 파일은 tesign.com 항목 페이지와 같은 빌드에서 같은 데이터로 만들어졌습니다. 소개 글은 편집자가 쓴 것이고, 숫자는 저장된 관측값입니다.
- JSON의 null은 관측하지 않았다는 뜻입니다 — 0이 아닙니다. 마크다운에서는 [확인 필요]로 적습니다.
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.
- 과거 데이터를 되짚어 채운 항목입니다. 라이브 발견이 아닙니다.
- 요약이며 법적 조언이 아닙니다.

[대표 이미지] https://tesign.com/img/llm-space-5c2ca93df9.png
