# Sonora

> 여러 음악 서비스를 한 앱에서 — Spotify·YouTube Music·Subsonic·로컬 파일을 한 네이티브 앱(Rust/GPUI)에서 재생하는 데스크톱 음악 클라이언트

- 페이지: https://tesign.com/item/sonora/
- JSON: https://tesign.com/item/sonora/index.json
- 영어 마크다운: https://tesign.com/en/item/sonora/index.md
- 생성 시각: 2026-09-25 03:06 UTC

## 숫자

- 별 1,478 — GitHub에서 2026-09-25 02:59 UTC 확인
- 7일 별 증가 관측 없음 (GH Archive) (기준 2026-09-23 20:00 UTC)
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.

## 한눈에 보는 사실

- 라이선스: GPL-3.0 (카피레프트) — https://spdx.org/licenses/GPL-3.0.html
- 사용 범위: 사용·수정은 자유. 배포하면 소스 공개 의무(카피레프트).
- 오픈소스: 예
- 언어: Rust
- 플랫폼: macos · windows · linux
- 분류: 미디어
- 태그: music-player · spotify · youtube-music · subsonic · rust · gpui
- 바로 쓰기: 설치해서 쓰기
- 출처: GitHub https://github.com/nolight132/sonora
- INSTALL: https://sonorahq.org/

## 활동

- 마지막 커밋: 2026-09-25 00:06 UTC
- 최근 릴리스: v0.39.0 (2026-09-24)
- 기여자: 49
- 열린 이슈 (PR 포함): 116
- 만든 이: 조직
- GitHub 확인 시각: 2026-09-25 02:59 UTC

## 선정 신호와 근거

- 과거 기록

## TESIGN TAKE

Electron 없는 네이티브 플레이어에 세 스트리밍 소스를 모은 점은 드물지만, Spotify 비공식 클라이언트라는 사실은 늘 함께 따라다닌다.

## 왜 볼 만한가

Sonora는 Zed 편집기의 GPUI 렌더링 스택과 librespot 위에 만든 네이티브 앱으로, Spotify·YouTube Music·Subsonic/OpenSubsonic·로컬 파일을 한 창에서 재생한다. 갭리스 재생, 음량 정규화, 싱크 가사(노래방 모드·로마자 표기), 테마·폰트·아이콘·투명도 커스터마이즈, Discord Rich Presence를 제공한다. macOS brew cask, Arch AUR, Flatpak, Nix, Windows 설치기까지 배포 경로가 갖춰져 있고, 저장소는 sonorahq/sonora로 이전했다.

## 이걸로 무엇을 만들 수 있나

- Nix 플레이크의 programs.sonora 모듈로 provider와 테마를 선언해 여러 기기에 같은 설정을 배포할 수 있고, Navidrome 같은 자기 음악 서버를 붙여 스트리밍과 개인 라이브러리를 한 플레이어에서 쓰는 구성이 가능하다.

## 누구에게 맞나

- Spotify·YouTube Music을 함께 쓰는 사람 — 한 앱, 한 재생 흐름
- Navidrome·Subsonic 서버 운영자 — 자기 라이브러리용 네이티브 데스크톱 플레이어
- Rust GUI 개발자 — GPUI로 만든 실제 데스크톱 앱 사례

## 5분 안에 시작하기

```
# brew install --cask nolight132/tap/sonora
# xattr -dr com.apple.quarantine /Applications/Sonora.app
# yay -S sonora-bin
# flatpak install --user https://sonorahq.github.io/sonora/sonora.flatpakref
# # Windows: Releases에서 Sonora-Setup.exe 다운로드 후 실행
```

## 주의할 점

- GPL-3.0-or-later. macOS·Windows·Linux 지원(FreeBSD는 README 표현대로 "아마도").
- Spotify AB와 무관한 비공식 클라이언트이며 Spotify·YouTube Music 계정은 사용자가 따로 갖고 있어야 한다.
- 릴리스가 아직 코드 서명되지 않아 macOS에서는 xattr로 격리 속성을 풀어야 하고, 번역은 README 표 기준 영어 100%, 다른 12개 언어 82–98%다.

## 영수증

- TESIGN이 처음 본 시각: 2026-09-13 09:37 UTC
- 출처 등록: 2026-08-03 22:27 UTC
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

[대표 이미지] https://tesign.com/img/sonora-20710e87e8.png
