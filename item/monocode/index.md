# MonoCode

> 여러 코딩 에이전트를 한 창에 — 이미 구독 중인 코딩 에이전트(Claude Code·Codex·Cursor 등 8종)를 탭으로 묶어 쓰는 데스크톱 GUI, 토큰 판매 없음

- 페이지: https://tesign.com/item/monocode/
- JSON: https://tesign.com/item/monocode/index.json
- 영어 마크다운: https://tesign.com/en/item/monocode/index.md
- 생성 시각: 2026-09-18 06:40 UTC

## 숫자

- 별 1,000 — GitHub에서 2026-09-17 18:41 UTC 확인
- 7일 +10은 GH Archive 관측 (기준 2026-09-18 01:00 UTC)
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.

## 한눈에 보는 사실

- 라이선스: MIT (허용적) — https://spdx.org/licenses/MIT.html
- 사용 범위: 상업 이용·수정·재배포 가능. 저작권 고지는 유지.
- 오픈소스: 예
- 언어: TypeScript
- 플랫폼: macos · linux · windows
- 분류: 개발 도구 · AI
- 태그: coding-agents · tauri · desktop · claude-code · codex · gui
- 바로 쓰기: 설치해서 쓰기
- 출처: GitHub https://github.com/hardbeat920/monocode
- INSTALL: https://usemono.dev/

## 활동

- 마지막 커밋: 2026-09-17 16:10 UTC
- 최근 릴리스: v0.1.50 (2026-09-17)
- 기여자: 38
- 열린 이슈 (PR 포함): 72
- 만든 이: 개인
- GitHub 확인 시각: 2026-09-17 18:41 UTC

## 선정 신호와 근거

- 과거 기록

## TESIGN TAKE

여러 에이전트 CLI를 터미널 창 대신 탭으로 정리해 주는 것이 전부이고, README 스스로 "매우 초기, 버그를 예상하라"고 적었다.

## 왜 볼 만한가

MonoCode는 Claude Code·Codex·Cursor CLI·Grok Build·OpenCode·Pi·omp·fx 8종의 에이전트가 설치·로그인돼 있으면 그대로 실행하는 Tauri 데스크톱 앱이다. 탭 하나가 세션 하나이고, README는 "토큰을 팔지 않는다"고 명시한다. macOS(.dmg, Apple Silicon·Intel), Linux(.deb·AppImage), Windows(NSIS 설치기) 빌드가 제공된다.

## 이걸로 무엇을 만들 수 있나

- Node.js 20+와 Rust 툴체인이 있으면 npm run tauri dev로 소스에서 띄울 수 있고, 팀에서 쓰는 에이전트만 남긴 사내용 빌드나 새 CLI 에이전트 어댑터를 추가한 포크를 만들 수 있다.

## 누구에게 맞나

- 여러 코딩 에이전트를 병행하는 개발자 — 터미널 여러 개 대신 탭 하나의 창
- 팀 리드 — 구독 중인 에이전트를 한 화면에서 비교·전환
- Tauri 앱 개발자 — CLI 에이전트를 GUI로 감싸는 구조 참고

## 5분 안에 시작하기

```
# 1. 에이전트 하나 이상을 먼저 설치·로그인: claude auth login / codex login / agent login
# 2. macOS(Apple Silicon): MonoCode.dmg 다운로드 → 열기 → Applications로 드래그
# 3. Linux: sudo apt install ./MonoCode_*.deb  또는  chmod +x MonoCode_*.AppImage
# 4. Windows: GitHub Releases의 NSIS 설치기 다운로드 후 실행
# 5. 소스 실행: npm install 후 npm run tauri dev
```

## 주의할 점

- MIT. macOS(Apple Silicon·Intel)·Linux x86_64·Windows x86_64 배포판 제공.
- 에이전트 자체는 별도 설치·로그인이 필요하고, 각 에이전트의 구독료는 사용자가 낸다.
- README가 "매우 초기, 버그를 예상하라"고 밝힌 상태.

## 영수증

- TESIGN이 처음 본 시각: 2026-09-13 09:41 UTC
- 출처 등록: 2026-08-20 09:16 UTC
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

[대표 이미지] https://tesign.com/img/monocode-a1dd0b7de5.webp
