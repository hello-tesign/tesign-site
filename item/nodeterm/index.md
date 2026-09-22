# nodeterm

> 여러 에이전트를 캔버스에 배치 — 터미널과 코딩 에이전트 세션을 캔버스 위 노드로 배치하는 관리 앱 — 앱을 꺼도 세션이 살아 있고 재부팅 뒤에도 복원됩니다.

- 페이지: https://tesign.com/item/nodeterm/
- JSON: https://tesign.com/item/nodeterm/index.json
- 영어 마크다운: https://tesign.com/en/item/nodeterm/index.md
- 생성 시각: 2026-09-22 06:54 UTC

## 숫자

- 별 1,880 — GitHub에서 2026-09-22 00:38 UTC 확인
- 7일 별 증가 관측 없음 (GH Archive) (기준 2026-09-21 20:00 UTC)
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.

## 한눈에 보는 사실

- 라이선스: 라이선스 미확인
- 사용 범위: 미확인 — 쓰기 전에 살펴보세요.
- 언어: TypeScript
- 플랫폼: macos · linux · windows · ios · web
- 분류: AI · 개발 도구
- 태그: terminal · tmux · claude-code · agent-orchestration · kanban · canvas
- 바로 쓰기: 설치해서 쓰기
- 출처: GitHub https://github.com/eneskirca/nodeterm
- INSTALL: https://nodeterm.dev/

## 활동

- 마지막 커밋: 2026-09-21 10:10 UTC
- 최근 릴리스: v0.3.8 (2026-09-20) · 프리릴리스
- 기여자: 39
- 열린 이슈 (PR 포함): 93
- 만든 이: 개인
- GitHub 확인 시각: 2026-09-22 00:38 UTC

## 선정 신호와 근거

- 과거 기록

## TESIGN TAKE

핵심은 화려한 캔버스가 아니라 tmux로 세션을 살려 두는 결정이고, 그 위에 에이전트 상태를 훅으로 읽는 구조가 실사용을 가능하게 합니다. 단, 라이선스가 BUSL-1.1이라 OSI 기준의 오픈소스는 아닙니다.

## 왜 볼 만한가

코딩 에이전트를 여럿 동시에 돌리면 탭 더미 속에서 어느 세션이 뭘 하는지 놓치기 쉬운데, nodeterm은 터미널과 에이전트를 팬·줌 캔버스 위에 배치해 지도처럼 봅니다. 노드마다 영구 tmux 세션이 붙어 앱을 끄거나 컴퓨터를 재부팅해도 스크롤백과 실행 중이던 에이전트가 돌아오고(맥 앱은 tmux를 자체 내장), 훅으로 RUNNING / NEEDS YOU 상태를 표시해 권한 질문에 노드 안에서 바로 답할 수 있습니다. 같은 프로젝트를 칸반 보드로 전환하면 카드가 곧 실행 중인 세션입니다.

## 이걸로 무엇을 만들 수 있나

- 브랜치별 git worktree에 에이전트 하나씩 붙인 그룹, 스티키 노트로 맥락을 넘기는 에이전트 팀, 노드 사이에 컨텍스트 링크를 그어 서로의 기록을 읽게 하는 작업 배치를 만들 수 있습니다. Server Edition을 리눅스 서버에 올리면 같은 캔버스를 브라우저에서 쓰고, iOS 앱으로 세션을 이어받습니다.

## 누구에게 맞나

- 여러 에이전트를 동시에 돌리는 개발자 — 세션을 공간에 배치하고 NEEDS YOU 알림에 노드 안에서 응답
- 탭 관리가 어려운 사용자(README는 ADHD를 명시) — 숨은 탭 대신 한눈에 보이는 지도형 작업 공간
- 원격 호스트에서 에이전트를 돌리는 개발자 — Server Edition(브라우저)과 iOS 앱으로 같은 세션 접속

## 5분 안에 시작하기

```
# macOS(Homebrew, 세 줄 모두 필요):
# brew tap nodeterm/tap
# brew trust nodeterm/tap
# brew install --cask nodeterm
# 또는 https://nodeterm.dev 에서 .dmg / AppImage / .deb / .rpm / Windows 베타 설치 파일 다운로드
```

## 주의할 점

- 라이선스 BUSL-1.1(저장소 LICENSE 파일에서 확인; GitHub 자동 감지는 없음): 사용·수정·재배포·상용 사용은 가능하지만 nodeterm과 경쟁하는 제품·서비스로 제공은 금지, 각 릴리스는 공개 4년 뒤 MIT로 전환.
- macOS(arm64·x64)·Linux(x64)는 정식, Windows x64는 베타(서명 없는 설치 파일, 수동 업데이트, 재시작 후 세션 복원 미완). iOS 앱은 App Store에서 별도 설치.
- 홈페이지 기준 v0.3.5 '얼리 액세스'. 앱이 자체 서버의 업데이트·공지 피드를 확인함.

## 영수증

- TESIGN이 처음 본 시각: 2026-09-13 09:42 UTC
- 출처 등록: 2026-06-15 21:25 UTC
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

[대표 이미지] https://tesign.com/img/nodeterm-4d11a6b933.png
