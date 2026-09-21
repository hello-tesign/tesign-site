# Spec Kit

> 에이전트 사용자용 개발 절차 — 코딩 에이전트에 '무엇을 왜 만들지'를 먼저 문서로 정하게 하고, 그 문서대로 계획·구현·검증까지 이끕니다.

- 페이지: https://tesign.com/item/spec-kit/
- JSON: https://tesign.com/item/spec-kit/index.json
- 영어 마크다운: https://tesign.com/en/item/spec-kit/index.md
- 생성 시각: 2026-09-21 05:58 UTC

## 순위

- 역대 16위 · AI 분야 14위 · 개발 도구 분야 3위 (기준 2026-09-21 00:00 UTC)

## 숫자

- 별 137,961 — GitHub에서 2026-09-19 22:58 UTC 확인
- 7일 +101은 GH Archive 관측 (기준 2026-09-21 00:00 UTC)
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.

## 한눈에 보는 사실

- 라이선스: MIT (허용적) — https://spdx.org/licenses/MIT.html
- 사용 범위: 상업 이용·수정·재배포 가능. 저작권 고지는 유지.
- 오픈소스: 예
- 언어: Python
- 플랫폼: cli · windows · macos · linux
- 분류: 개발 도구 · AI
- 태그: spec-driven-development · coding-agents · cli · workflow · github · agent-skills
- 바로 쓰기: 설치해서 쓰기
- 출처: GitHub https://github.com/github/spec-kit
- INSTALL: https://github.github.com/spec-kit

## 활동

- 마지막 커밋: 2026-09-18 21:02 UTC
- 최근 릴리스: v1.0.8 (2026-09-17)
- 기여자: 299
- 열린 이슈 (PR 포함): 307
- 만든 이: 조직
- GitHub 확인 시각: 2026-09-19 22:58 UTC

## TESIGN TAKE

에이전트 결과물이 돌릴 때마다 달라 답답했다면, 코드보다 먹이는 문서를 먼저 고정하라는 GitHub의 답입니다.

## 왜 볼 만한가

Spec Kit은 코딩 에이전트에 즉석 프롬프트 대신 구조화된 문맥을 주고, 의도와 근거를 구현보다 앞에 두자는 도구입니다. 헌법(원칙) → 명세 → 계획 → 작업 → 구현 → 수렴 순서를 에이전트 채팅 안의 /speckit-* 스킬로 고정하고, 단계마다 결과를 문서로 남깁니다. GitHub가 직접 만든 MIT 도구로, 저장소는 2025년 8월에 열렸고 2026-09-10에 v1.0.6이 나왔습니다.

## 이걸로 무엇을 만들 수 있나

- Python으로 만든 터미널 도구 specify-cli를 uv로 설치하면, `specify init`이 고른 에이전트에 맞는 명령 파일과 `.specify/` 폴더 구조를 만들어 줍니다. 세 가지 절차가 각각 독립된 입구입니다: 스펙 주도 개발(SDD)은 기본 포함, 버그 수정(`specify extension add bug` → assess → fix → test)과 아이디어 평가(`specify extension add assess` → intake → research → define → shape → decide)는 필요할 때 넣는 확장입니다. 확장·프리셋·워크플로·번들로 절차를 바꾸거나 자기 조직의 카탈로그를 직접 호스팅할 수 있고, 공식 문서 기준 38종의 에이전트 통합(Copilot·Claude Code·Codex·Gemini·Cursor·Zed 등)에 통합 키 하나로 붙습니다.

## 누구에게 맞나

- 코딩 에이전트로 사이드 프로젝트를 만드는 1인 개발자 — 명세·계획·작업 문서를 먼저 만들고 그대로 구현시키기
- 버그가 되풀이되는 팀 — assess → fix → test로 원인 진단·수정·검증을 분리해 `.specify/bugs/`에 기록 남기기
- 만들지 말지 고민하는 기획자 — 코드가 없는 폴더에서도 intake → decide 절차로 go / needs-clarification / kill 판단 받기

## 5분 안에 시작하기

```
# 준비물(README): Python 3.11+, uv, 지원되는 AI 코딩 에이전트 — Linux·macOS·Windows
# 터미널:
# uv tool install specify-cli
# specify init my-project --integration copilot
# cd my-project
# → 그 폴더에서 코딩 에이전트를 열고, 채팅에 스킬을 하나씩 입력해 결과를 확인하며 진행:
# /speckit-constitution Create principles focused on code quality, testing, and maintainability.
# /speckit-specify Build a photo organizer with albums grouped by date and a tile preview of each album.
# /speckit-plan Use Vite with vanilla JavaScript. Keep images local and store metadata in SQLite.
# /speckit-tasks
# /speckit-implement
# /speckit-converge
# (copilot 자리에 claude, codex, gemini 등 다른 통합 키를 넣으면 다른 에이전트용으로 설정됨)
```

## 주의할 점

- MIT 라이선스 — 상업 이용·수정·재배포 가능. Spec Kit 자체는 무료지만 코딩 에이전트는 포함되지 않아 따로 준비해야 하며(README 요구사항), 실제 코드는 그 에이전트가 씁니다. Python 3.11+와 uv가 먼저 설치되어야 하는 터미널 도구이고, /speckit-* 는 터미널 명령이 아니라 에이전트 채팅에서 부르는 스킬입니다 — 에이전트에 따라 /speckit-…, $speckit-…, /skill:speckit-… 처럼 표기가 다릅니다. 공식 페이지는 Windows·macOS·Linux 지원과 오프라인·방화벽 환경 동작을 명시합니다. GitHub Copilot 예시가 기본이라 다른 에이전트는 통합 문서를 한 번 봐야 합니다. 현재 v1.0.6(2026-09-10) 정식 릴리스이며, 1.0대에 들어선 지 얼마 되지 않아 명령·폴더 구조가 릴리스마다 바뀔 수 있습니다 — 업그레이드 문서를 확인하세요.

## 영수증

- TESIGN이 처음 본 시각: 2026-09-13 07:43 UTC
- 출처 등록: 2025-08-21 22:54 UTC
- 선정: 2026-09-15 14:07 UTC
- TESIGN 게재: 2026-09-15 14:07 UTC
- 소개 글 마지막 수정: 2026-09-15 14:07 UTC

## 읽는 법

- 이 파일은 tesign.com 항목 페이지와 같은 빌드에서 같은 데이터로 만들어졌습니다. 소개 글은 편집자가 쓴 것이고, 숫자는 저장된 관측값입니다.
- JSON의 null은 관측하지 않았다는 뜻입니다 — 0이 아닙니다. 마크다운에서는 [확인 필요]로 적습니다.
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.
- 요약이며 법적 조언이 아닙니다.

[대표 이미지] https://tesign.com/img/spec-kit-d6ed4d1559.png
