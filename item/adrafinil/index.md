# Adrafinil

> 에이전트 쓸 때 맥 안 잠들게 — AI 코딩 에이전트가 일하는 동안만 맥을 깨워 두는 메뉴 막대 앱 — 끝나면 뚜껑을 닫은 채 정상 잠자기로 돌아갑니다.

- 페이지: https://tesign.com/item/adrafinil/
- JSON: https://tesign.com/item/adrafinil/index.json
- 영어 마크다운: https://tesign.com/en/item/adrafinil/index.md
- 생성 시각: 2026-09-23 04:12 UTC

## 숫자

- 별 480 — GitHub에서 2026-09-23 01:48 UTC 확인
- 7일 별 증가 관측 없음 (GH Archive) (기준 2026-09-22 23:00 UTC)
- Show HN 124점 — 2026-09-13 15:42 UTC 관측
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.

## 한눈에 보는 사실

- 라이선스: MIT (허용적) — https://spdx.org/licenses/MIT.html
- 사용 범위: 상업 이용·수정·재배포 가능. 저작권 고지는 유지.
- 오픈소스: 예
- 언어: Swift
- 플랫폼: macos
- 분류: AI · 생산성
- 태그: macos · menu-bar · keep-awake · claude-code · agent-hooks · swift
- 바로 쓰기: 설치해서 쓰기
- 출처: Show HN https://github.com/kageroumado/adrafinil · GitHub https://github.com/kageroumado/adrafinil
- INSTALL: https://kagerou.glass/adrafinil

## 활동

- 마지막 커밋: 2026-09-19 21:48 UTC
- 최근 릴리스: v1.8 (2026-09-19)
- 기여자: 4
- 열린 이슈 (PR 포함): 2
- 만든 이: 개인
- GitHub 확인 시각: 2026-09-23 01:48 UTC

## 선정 신호와 근거

- 교차 신호 · Show HN + GitHub
- 과거 기록

## TESIGN TAKE

'항상 깨어 있기'가 아니라 '일이 있을 때만 깨어 있기'로 문제를 다시 정의한 작은 유틸리티인데, 루트 권한이 필요한 잠자기 제어를 setSleepBlocked 하나만 노출하는 별도 헬퍼에 격리한 설계가 돋보입니다. macOS 26.4 이상이 필요합니다.

## 왜 볼 만한가

밤새 돌아가는 에이전트를 위해 caffeinate나 Amphetamine을 켜 두면 일이 끝나도 맥이 계속 깨어 있는데, Adrafinil은 에이전트 훅이 턴 시작에 acquire, 끝에 release를 호출해 실제로 작업 중인 동안만 잠자기(뚜껑을 닫은 클램셸 잠자기 포함)를 막고 마지막 세션이 풀리면 바로 정상 잠자기로 돌아갑니다. Claude Code·Codex·Cursor·Gemini CLI·Aider·Hermes·OpenCode·Cline·Pi 9개 에이전트에 한 번 클릭으로 훅을 설치하고, CLI 왕복은 50ms 미만이라 에이전트를 지연시키지 않습니다. 뚜껑을 닫은 채 온도가 임계치를 넘으면 모든 유지를 강제 해제하는 열 차단도 있습니다.

## 이걸로 무엇을 만들 수 있나

- 훅이 있는 어떤 도구든 `adrafinil acquire` / `release`로 감쌀 수 있고, 훅이 없는 명령은 셸에서 시작·끝을 묶거나 `adrafinil hold --for 2h`로 시간제 유지를 걸 수 있습니다. 번들된 MCP 도구(`adrafinil mcp`)로 에이전트가 긴 빌드·배포 동안 답변이 끝난 뒤에도 깨어 있기를 스스로 요청하는 흐름도 만들 수 있습니다.

## 누구에게 맞나

- 밤에 에이전트 작업을 걸어 두는 맥 사용자 — 뚜껑을 닫아도 작업 중에만 깨어 있고 끝나면 잠듦
- 노트북을 가방에 넣고 다니는 사람 — 열 차단, 뚜껑 닫힘 차임, 다시 열 때 실행 요약
- 긴 빌드·배포를 돌리는 개발자 — MCP·CLI로 에이전트가 시간제 유지를 직접 요청

## 5분 안에 시작하기

```
# brew install --cask adrafinil
# 또는 https://github.com/kageroumado/adrafinil/releases/latest 에서 서명·노터라이즈된 DMG를 열어 Adrafinil을 Applications로 드래그 (첫 실행 시 관리자 권한을 1회 요청)
# 에이전트 훅은 앱의 설치 화면에서 한 번 클릭으로 연결, 또는 CLI로: adrafinil install-hooks
```

## 주의할 점

- 라이선스 MIT.
- macOS Tahoe 26.4 이상 필수(제작자는 26.4에서만 테스트; macOS 15 Sequoia용은 다른 사람이 유지하는 백포트 포크). 표준 설치에 관리자 권한 필요 — 뚜껑 닫힘 잠자기 해제는 root 헬퍼가 `pmset disablesleep`으로 처리.
- 훅 없는 사용자 정의 에이전트는 자동 감지되지 않으므로 acquire와 release를 짝지어 호출해야 하며, 유휴 해제 타임아웃과 시간제 유지가 안전망.

## 영수증

- TESIGN이 처음 본 시각: 2026-09-13 08:31 UTC
- 출처 등록: 2026-06-27 20:34 UTC
- 선정: 2026-09-14 19:27 UTC
- TESIGN 게재: 2026-09-14 19:27 UTC
- 소개 글 마지막 수정: 2026-09-15 07:17 UTC
- ◌ 과거 기록: 과거 데이터를 되짚어 채운 항목입니다. 라이브 발견이 아닙니다.

## 읽는 법

- 이 파일은 tesign.com 항목 페이지와 같은 빌드에서 같은 데이터로 만들어졌습니다. 소개 글은 편집자가 쓴 것이고, 숫자는 저장된 관측값입니다.
- JSON의 null은 관측하지 않았다는 뜻입니다 — 0이 아닙니다. 마크다운에서는 [확인 필요]로 적습니다.
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.
- 과거 데이터를 되짚어 채운 항목입니다. 라이브 발견이 아닙니다.
- 요약이며 법적 조언이 아닙니다.

[대표 이미지] https://tesign.com/img/adrafinil-adfd4c6c66.png
