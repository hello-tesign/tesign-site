# FluxDown

> IDM 대체 다운로드 관리 — HTTP·FTP·토렌트·eD2K·HLS/DASH를 한 앱에서 받는 무료·광고 없는 다운로드 관리자. Rust 엔진의 IDM 대안.

- 페이지: https://tesign.com/item/fluxdown/
- JSON: https://tesign.com/item/fluxdown/index.json
- 영어 마크다운: https://tesign.com/en/item/fluxdown/index.md
- 생성 시각: 2026-09-23 02:05 UTC

## 숫자

- 별 3,154 — GitHub에서 2026-09-23 01:49 UTC 확인
- 7일 별 증가 관측 없음 (GH Archive) (기준 2026-09-22 21:00 UTC)
- Show HN 2점 — 2026-09-13 15:30 UTC 관측
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.

## 한눈에 보는 사실

- 라이선스: AGPL-3.0 (카피레프트) — https://spdx.org/licenses/AGPL-3.0.html
- 사용 범위: 사용·수정은 자유. 배포는 물론 네트워크 서비스로 제공해도 소스 공개.
- 오픈소스: 예
- 언어: Rust
- 플랫폼: windows · macos · linux · android
- 분류: 생산성 · 미디어
- 태그: download-manager · bittorrent · rust · flutter · mcp · browser-extension
- 바로 쓰기: 설치해서 쓰기
- 출처: Show HN https://github.com/zerx-lab/FluxDown · GitHub https://github.com/zerx-lab/fluxdown
- INSTALL: https://fluxdown.zerx.dev/

## 활동

- 마지막 커밋: 2026-09-22 10:43 UTC
- 최근 릴리스: v0.4.8 (2026-09-20)
- 기여자: 19
- 열린 이슈 (PR 포함): 376
- 만든 이: 개인
- GitHub 확인 시각: 2026-09-23 01:49 UTC

## 선정 신호와 근거

- 교차 신호 · Show HN + GitHub
- 과거 기록

## TESIGN TAKE

다운로드 관리자는 오래된 장르지만, 주요 데스크톱·모바일·NAS 플랫폼과 토렌트·스트리밍·MCP를 한 무료 앱에 묶은 조합은 드뭅니다.

## 왜 볼 만한가

IDM은 Windows 전용 유료 프로그램($24.95 + 갱신, README 비교표 기준)이지만 FluxDown은 같은 방식의 동적 분할 다운로드를 AGPL-3.0 오픈소스로 Windows·macOS·Linux·Android와 NAS(Docker, Synology, QNAP, OpenWrt)에 제공합니다. 모든 진행 상태를 SQLite에 기록해 재부팅 뒤에도 이어받고, Chrome·Edge·Firefox 확장으로 브라우저 다운로드를 가로챕니다. 로컬 MCP 서버(12개 도구)가 내장되어 AI 클라이언트로 다운로드를 추가·관리할 수 있습니다.

## 이걸로 무엇을 만들 수 있나

- NAS에 헤드리스 서버를 띄우고 RSS 구독을 걸어 두는 무인 수집기를 만들 수 있고, MCP 엔드포인트를 통해 AI 에이전트가 링크를 대기열에 넣고 진행을 지켜보는 흐름도 구성할 수 있습니다.

## 누구에게 맞나

- IDM 결제를 끊고 싶은 Windows 사용자 — 브라우저 확장으로 같은 방식의 분할 다운로드
- NAS·홈서버 운영자 — Docker/Synology/QNAP 헤드리스 서버로 원격 다운로드
- 대용량 파일을 자주 받는 연구자·크리에이터 — HLS/DASH 스트림과 토렌트까지 한 대기열에서 관리

## 5분 안에 시작하기

```
# 1. GitHub Releases 또는 https://fluxdown.zerx.dev/#download 에서 패키지 받기 (Windows setup.exe · macOS .dmg · Linux .AppImage/.deb · Android .apk · NAS Docker ghcr.io/zerx-lab/fluxdown-server)
# 2. 브라우저 확장 설치 (Chrome Web Store · Edge Add-ons · Firefox Add-ons)
# 소스 빌드(Flutter SDK · Rust · Rinf CLI 필요): git clone -b main https://github.com/zerx-lab/FluxDown.git
# cd FluxDown && flutter pub get && rinf gen
# flutter run
```

## 주의할 점

- 라이선스 AGPL-3.0(수정해 네트워크로 제공하면 소스 공개 의무). Windows는 10 이상(공식 사이트 기준), Linux 배포판은 x64만 제공되고 NAS용은 헤드리스 서버입니다. 비용 없음, 계정 불필요. 커뮤니티 채널은 GitHub Issues와 QQ 그룹입니다.

## 영수증

- TESIGN이 처음 본 시각: 2026-09-13 09:45 UTC
- 출처 등록: 2026-07-04 11:15 UTC
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

[대표 이미지] https://tesign.com/img/fluxdown-1cb5a773f0.png
