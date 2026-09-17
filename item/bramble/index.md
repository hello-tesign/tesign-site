# Bramble

> 개인용 P2P 비밀번호 관리 — 계정·서버 없이 기기끼리 직접 동기화하는 비밀번호 관리자. 브라우저 확장·데스크톱·iOS·안드로이드

- 페이지: https://tesign.com/item/bramble/
- JSON: https://tesign.com/item/bramble/index.json
- 영어 마크다운: https://tesign.com/en/item/bramble/index.md
- 생성 시각: 2026-09-17 01:56 UTC

## 숫자

- 별 387 — GitHub에서 2026-09-15 19:35 UTC 확인
- 7일 별 증가 관측 없음 (GH Archive) (기준 2026-09-16 21:00 UTC)
- Show HN 153점 — 2026-09-13 15:33 UTC 관측
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.

## 한눈에 보는 사실

- 라이선스: GPL-3.0 (카피레프트) — https://spdx.org/licenses/GPL-3.0.html
- 사용 범위: 사용·수정은 자유. 배포하면 소스 공개 의무(카피레프트).
- 오픈소스: 예
- 언어: TypeScript
- 플랫폼: web · macos · linux · ios · android
- 분류: 보안
- 태그: password-manager · peer-to-peer · passkeys · local-first · browser-extension · rust
- 바로 쓰기: 설치해서 쓰기
- 출처: Show HN https://github.com/flythenimbus/bramble
- INSTALL: https://bramble.sh/

## 활동

- 마지막 커밋: 2026-09-12 03:24 UTC
- 최근 릴리스: 1.28.0-chromium (2026-09-10)
- 기여자: 4
- 열린 이슈 (PR 포함): 19
- 만든 이: 개인
- GitHub 확인 시각: 2026-09-15 19:35 UTC

## 선정 신호와 근거

- 과거 기록

## TESIGN TAKE

'비밀번호 찾기' 버튼이 없다는 점을 스스로 밝히는 관리자입니다. 복구 코드와 두 번째 기기가 안전망입니다.

## 왜 볼 만한가

클라우드 비밀번호 관리자는 모든 사용자의 금고를 한 서버에 모아 두지만, Bramble은 금고를 내 기기에만 두고 기기 사이에서 직접(P2P) 종단간 암호화로 동기화합니다. 암호화는 Rust 코어 하나가 맡아 브라우저에서는 WebAssembly, 모바일에서는 네이티브 라이브러리로 돌아가며 Argon2id·AES-256-GCM을 씁니다. 패스키도 금고 항목으로 저장되어 기기 간에 함께 동기화됩니다.

## 이걸로 무엇을 만들 수 있나

- S3 호환 버킷이나 자체 WebDAV(Nextcloud 등)로 암호문만 올라가는 예약 백업을 붙일 수 있고, KeePass KDBX4를 가져와 브라우저·모바일 자동 완성이 되는 구성으로 옮길 수 있습니다. GPL-3.0이므로 수정 배포 시 소스 공개가 필요합니다.

## 누구에게 맞나

- 클라우드 관리자가 불안한 개인 — 금고를 내 기기에만 두고 P2P 동기화
- KeePass 사용자 — KDBX4 가져오기 후 브라우저·모바일 자동 완성
- 자체 스토리지 보유자 — S3 호환·WebDAV로 암호화 백업 예약

## 5분 안에 시작하기

```
# # 브라우저: Chrome Web Store 또는 Firefox Add-ons에서 Bramble 설치
# brew install --cask bramble   # macOS 데스크톱 앱(리눅스: APT 저장소·AppImage·deb/rpm·Nix)
# # iOS: App Store / Android: GitHub Releases의 APK
# # 첫 금고를 만들 때 표시되는 복구 코드를 오프라인에 보관
```

## 주의할 점

- 라이선스 GPL-3.0. 무료, 계정·구독·텔레메트리 없음(기부 안내만 있음).
- 윈도우 데스크톱 앱은 코드 서명 대기 중으로 미출시(확장 프로그램은 윈도우에서도 동작). 데스크톱 앱은 Touch ID·패스키·KeePass 내보내기·네이티브 앱 자동 입력·SSH 에이전트가 아직 없음.
- 비밀번호·보안 키·복구 코드를 모두 잃으면 금고 복구 불가. 데스크톱 최신 릴리스 0.8.0(2026-09-15 확인), 별 383개.

## 영수증

- TESIGN이 처음 본 시각: 2026-09-13 15:33 UTC
- 출처 등록: 2026-07-02 19:29 UTC
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

[대표 이미지] https://tesign.com/img/bramble-10602fdc45.png
