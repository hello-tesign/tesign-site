# terminal-browser

> 터미널 안에서 여는 브라우저 — kitty 그래픽 프로토콜을 지원하는 터미널(ghostty·kitty·VS Code) 안에 실제 Chromium 브라우저를 그려 주는 도구

- 페이지: https://tesign.com/item/terminal-browser/
- JSON: https://tesign.com/item/terminal-browser/index.json
- 영어 마크다운: https://tesign.com/en/item/terminal-browser/index.md
- 생성 시각: 2026-09-17 19:00 UTC

## 숫자

- 별 3,019 — GitHub에서 2026-09-17 18:41 UTC 확인
- 7일 +7은 GH Archive 관측 (기준 2026-09-17 13:00 UTC)
- Show HN 4점 — 2026-09-13 14:00 UTC 관측
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.

## 한눈에 보는 사실

- 라이선스: MIT (허용적) — https://spdx.org/licenses/MIT.html
- 사용 범위: 상업 이용·수정·재배포 가능. 저작권 고지는 유지.
- 오픈소스: 예
- 언어: TypeScript
- 플랫폼: macos · linux · cli
- 분류: 개발 도구 · AI
- 태그: terminal · browser · chromium · kitty-graphics · coding-agents · rust
- 바로 쓰기: 설치해서 쓰기
- 출처: Show HN https://github.com/zenbu-labs/terminal-browser · GitHub https://github.com/zenbu-labs/terminal-browser
- INSTALL: https://terminal-browser.com/

## 활동

- 마지막 커밋: 2026-09-17 08:34 UTC
- 최근 릴리스: v0.11.1 (2026-09-17)
- 기여자: 6
- 열린 이슈 (PR 포함): 63
- 만든 이: 조직
- GitHub 확인 시각: 2026-09-17 18:41 UTC

## 선정 신호와 근거

- 교차 신호 · Show HN + GitHub
- 과거 기록

## TESIGN TAKE

터미널을 떠나지 않는 것이 목적이 아니라 에이전트와 브라우저를 같은 탭·같은 CLI 안에 두는 것이 목적이고, 그래서 kitty 그래픽 프로토콜 터미널이라는 전제 조건이 붙는다.

## 왜 볼 만한가

텍스트로 흉내 낸 브라우저가 아니라, Electron의 오프스크린 렌더링으로 Chromium이 GPU에 그린 픽셀을 읽어 kitty 그래픽 프로토콜로 터미널에 그대로 띄운다. 코딩 에이전트와 웹사이트를 같은 터미널 탭에 두고, 에이전트는 agent-browser 호환 CLI(terminal-browser action)로 열린 브라우저를 직접 조작할 수 있으며, ctrl+g로 페이지 요소를 골라 에이전트에 보낼 수 있다. --ssh 옵션은 브라우저를 로컬에서 돌리고 네트워크 요청만 원격 서버로 넘겨 원격의 localhost 사이트를 포트 포워딩 없이 본다. curl 한 줄 또는 Homebrew로 설치, v0.8.1(2026-09-09), MIT.

## 이걸로 무엇을 만들 수 있나

- terminal-browser action CLI가 agent-browser 호환이라, 에이전트가 만든 HTML 시안을 옆 분할 창에 열어 보이고 요소를 골라 피드백하는 워크플로를 붙일 수 있다. examples/embedded 참고 구현으로 자체 TUI 안에 웹 뷰를 넣는 것도 가능하다.

## 누구에게 맞나

- Claude Code·Codex 같은 코딩 에이전트를 터미널에서 쓰는 개발자 — 에이전트가 브라우저를 직접 조작
- 원격 서버에서 개발하는 사람 — --ssh로 포트 포워딩 없이 localhost 미리보기
- ghostty·kitty 사용자 — 터미널 분할 창에 문서·웹 앱 열기

## 5분 안에 시작하기

```
# curl -fsSL https://terminal-browser.sh/install | bash   # macOS & Linux
# brew install terminal-browser                            # Homebrew
# terminal-browser open <url>
# terminal-browser --split right
# terminal-browser open --ssh <user@host> <url>
```

## 주의할 점

- MIT(저장소 LICENSE 파일 기준; README에는 라이선스 문구 없음)
- 설치 스크립트 기준 macOS·Linux; Windows는 README에 언급 없음 [확인 필요]. kitty 그래픽 프로토콜을 지원하는 터미널(ghostty, kitty, cmux, VS Code 등) 필수
- v0.8.1(2026-09-09); Chrome 확장·디자인 모드는 로드맵; 내부적으로 Electron(Chromium)을 띄움; 메모리 사용량은 [확인 필요]

## 영수증

- TESIGN이 처음 본 시각: 2026-09-13 09:38 UTC
- 출처 등록: 2026-08-31 20:19 UTC
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

[대표 이미지] https://tesign.com/img/terminal-browser-6633abf116.png
