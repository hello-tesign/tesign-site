# agent-memory

> 에이전트 사용자용 장기 기억 — 에이전트가 세션마다 잊는 것을 마크다운 파일로 남겨 다시 찾게 합니다.

- 페이지: https://tesign.com/item/agent-memory/
- JSON: https://tesign.com/item/agent-memory/index.json
- 영어 마크다운: https://tesign.com/en/item/agent-memory/index.md
- 생성 시각: 2026-09-21 05:58 UTC

## 숫자

- 별 956 — GitHub에서 2026-09-19 22:58 UTC 확인
- 7일 별 증가 관측 없음 (GH Archive) (기준 2026-09-21 00:00 UTC)
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.

## 한눈에 보는 사실

- 라이선스: MIT (허용적) — https://spdx.org/licenses/MIT.html
- 사용 범위: 상업 이용·수정·재배포 가능. 저작권 고지는 유지.
- 오픈소스: 예
- 언어: Python
- 플랫폼: cli
- 분류: AI · 개발 도구
- 태그: agent-memory · markdown · local-first · mcp
- 바로 쓰기: 설치해서 쓰기
- 출처: GitHub https://github.com/tigerless-labs/agent-memory
- INSTALL: https://github.com/tigerless-labs/agent-memory

## 활동

- 마지막 커밋: 2026-09-18 17:27 UTC
- 최근 릴리스: 릴리스 없음
- 기여자: 2
- 열린 이슈 (PR 포함): 21
- 만든 이: 조직
- GitHub 확인 시각: 2026-09-19 22:58 UTC

## TESIGN TAKE

검색 엔진과 파일 시스템 중 하나를 고르지 않고 둘을 한 저장소에 겹쳐 놓은 점이 핵심입니다.

## 왜 볼 만한가

세션을 닫는 순간 에이전트는 그 안에서 배운 것을 전부 잃습니다. agent-memory는 기억을 마크다운 파일로 저장하고 옆에 둔 SQLite 색인으로 순위를 매겨 찾되, 결과를 본문 대신 파일 경로로 돌려줘 필요한 깊이만 읽게 합니다. 대화 경계마다 자동으로 기록하고 잠자는 시간에 정리하는 층이 따로 돌며, API 키가 필요 없습니다. Claude Code와 Codex CLI가 한 저장소를 함께 쓰고 MIT로 공개돼 있으며, 아직 PyPI 배포는 없어 체크아웃에서 설치합니다.

## 이걸로 무엇을 만들 수 있나

- 팀 결정 사항을 에이전트가 다음 세션에서 다시 찾는 공용 기억 저장소
- Claude Code와 Codex가 같은 맥락을 나눠 쓰는 작업 환경
- 오래된 기억을 제안 형태로 정리하는 주간 점검 루틴

## 누구에게 맞나

- 에이전트 상시 사용자 — 세션마다 같은 설명을 반복하는 데 지쳤을 때
- 두 CLI 병용자 — Claude Code와 Codex가 맥락을 나눠 쓰길 바랄 때

## 5분 안에 시작하기

```
$ git clone https://github.com/tigerless-labs/agent-memory.git
$ cd agent-memory
$ uv sync --all-packages
$ mem init
$ mem setup --host claude-code   # or: --host codex
# Python 3.12+ 와 uv 필요 · .venv/bin 을 PATH에 넣어야 훅이 동작
```

## 주의할 점

- PyPI 배포가 아직 없어 체크아웃에서 설치합니다
- 버전 0.1.0 초기 단계이며 MCP 도구는 CLI보다 좁습니다
- 판단은 호스트 CLI에서 빌려 오므로 호스트 에이전트가 있어야 합니다

## 영수증

- TESIGN이 처음 본 시각: 2026-09-13 07:43 UTC
- 출처 등록: 2026-09-01 21:52 UTC
- 선정: 2026-09-14 02:41 UTC
- 소개 글 마지막 수정: 2026-09-15 04:36 UTC

## 읽는 법

- 이 파일은 tesign.com 항목 페이지와 같은 빌드에서 같은 데이터로 만들어졌습니다. 소개 글은 편집자가 쓴 것이고, 숫자는 저장된 관측값입니다.
- JSON의 null은 관측하지 않았다는 뜻입니다 — 0이 아닙니다. 마크다운에서는 [확인 필요]로 적습니다.
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.
- 요약이며 법적 조언이 아닙니다.

[대표 이미지] https://tesign.com/img/og/agent-memory.png
