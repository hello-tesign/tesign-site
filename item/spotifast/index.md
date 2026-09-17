# Spotifast (formerly Fastpotify)

> 메모리 적은 Spotify 앱 — 브라우저 엔진 없이 Rust로 만든 Spotify 데스크톱 클라이언트 — RAM 100~250MB, 리눅스·macOS·윈도우, 재생은 Premium 필요

- 페이지: https://tesign.com/item/spotifast/
- JSON: https://tesign.com/item/spotifast/index.json
- 영어 마크다운: https://tesign.com/en/item/spotifast/index.md
- 생성 시각: 2026-09-17 19:00 UTC

## 순위

- 미디어 분야 20위 (기준 2026-09-17 13:00 UTC)

## 숫자

- 별 4,329 — GitHub에서 2026-09-17 18:41 UTC 확인
- 7일 +13은 GH Archive 관측 (기준 2026-09-17 13:00 UTC)
- Show HN 1점 — 2026-09-13 14:04 UTC 관측
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.

## 한눈에 보는 사실

- 라이선스: MIT (허용적) — https://spdx.org/licenses/MIT.html
- 사용 범위: 상업 이용·수정·재배포 가능. 저작권 고지는 유지.
- 오픈소스: 예
- 언어: Rust
- 플랫폼: linux · macos · windows · cli
- 분류: 미디어
- 태그: spotify · rust · egui · librespot · music-player · spotify-connect
- 바로 쓰기: 설치해서 쓰기
- 출처: Show HN https://github.com/crmne/fastpotify · GitHub https://github.com/crmne/fastpotify
- INSTALL: https://fastpotify.rocks/

## 활동

- 마지막 커밋: 2026-09-17 16:10 UTC
- 최근 릴리스: v0.8.0 (2026-09-14)
- 기여자: 41
- 열린 이슈 (PR 포함): 67
- 만든 이: 개인
- GitHub 확인 시각: 2026-09-17 18:41 UTC

## 선정 신호와 근거

- 교차 신호 · Show HN + GitHub
- 과거 기록

## TESIGN TAKE

'가볍게 만들 수 있다'를 숫자로 보여 준 서드파티 클라이언트입니다. 단, Premium이 없으면 듣지는 못합니다.

## 왜 볼 만한가

Spotify 공식 데스크톱 앱이 600MB에서 1GB가 넘는 메모리를 쓰는 동안, Spotifast는 보통 100~250MB로 같은 라이브러리·검색·재생을 처리하고 1초 안에 켜집니다. librespot으로 재생하면서 Spotify Connect 기기로 잡히므로 휴대폰에서 이 PC를 고를 수도, 반대로 데스크톱에서 스피커를 제어할 수도 있습니다. 0.8.0에서 Fastpotify에서 Spotifast로 이름을 바꿨고 저장소는 crmne/spotifast로 리다이렉트됩니다.

## 이걸로 무엇을 만들 수 있나

- macOS·Windows에서는 fastpotify now-playing --raw 같은 하위 명령, 리눅스에서는 MPRIS로 재생 상태를 읽어 Stream Deck·Raycast·핫키·상태바 위젯을 만들 수 있고, settings.json 옆 themes 폴더에 JSON 팔레트를 넣어 테마를 배포할 수 있습니다.

## 누구에게 맞나

- Spotify Premium 사용자(특히 리눅스) — 메모리를 적게 쓰는 네이티브 플레이어
- 키보드·런처 애호가 — 단축키와 CLI 하위 명령으로 재생 제어
- Winamp 세대 — .wsz 스킨 미니 플레이어와 MilkDrop 시각화

## 5분 안에 시작하기

```
# # Windows 설치기 / macOS DMG / Linux deb·rpm·Flatpak: https://spotifast.rocks/download/
# yay -S spotifast-bin      # Arch Linux (AUR)
# brew install --cask crmne/tap/spotifast   # macOS (Homebrew)
# cargo install --path . --locked           # 그 외: Rust 1.95 이상, 저장소 클론 후
# # MilkDrop 없이 빌드: cargo install --path . --locked --no-default-features
```

## 주의할 점

- 라이선스 MIT. 재생은 Spotify Premium이 있어야 하고 무료 계정은 검색·탐색만 됩니다. Spotify 비공식 프로젝트이며, 제작자는 계정 정지 사례를 '알지 못한다'고만 밝혀 보장은 아닙니다.
- 0.8.0에서 Fastpotify → Spotifast로 개명되어 저장소·홈페이지가 crmne/spotifast, spotifast.rocks로 옮겨졌고, 명령은 spotifast(구 fastpotify도 유지).
- Windows 설치기·macOS DMG·Linux deb/rpm/Flatpak이 GitHub 릴리스와 spotifast.rocks/download에 있고, 그 외 환경은 Rust 1.95 이상으로 소스 빌드합니다. MilkDrop 포함 빌드에는 CMake·C++ 컴파일러·libclang이 필요하고, MilkDrop을 처음 켤 때 프리셋 약 26MB를 내려받습니다.

## 영수증

- TESIGN이 처음 본 시각: 2026-09-13 09:37 UTC
- 출처 등록: 2026-08-28 14:50 UTC
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

[대표 이미지] https://tesign.com/img/spotifast-092eb69cd9.png
