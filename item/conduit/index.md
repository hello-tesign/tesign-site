# Conduit

> 폰에서 서버 접속하는 터미널 — 계정 없이 폰에서 서버에 붙는 Android·iOS 터미널 — SSH·Mosh·SFTP, 하드웨어 키 인증

- 페이지: https://tesign.com/item/conduit/
- JSON: https://tesign.com/item/conduit/index.json
- 영어 마크다운: https://tesign.com/en/item/conduit/index.md
- 생성 시각: 2026-09-21 00:32 UTC

## 숫자

- 별 379 — GitHub에서 2026-09-19 22:59 UTC 확인
- 7일 별 증가 관측 없음 (GH Archive) (기준 2026-09-20 10:00 UTC)
- Show HN 3점 — 2026-09-13 15:58 UTC 관측
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.

## 한눈에 보는 사실

- 라이선스: Apache-2.0 (허용적) — https://spdx.org/licenses/Apache-2.0.html
- 사용 범위: 상업 이용·수정·재배포 가능. 고지 유지, 바꾼 부분은 표시.
- 오픈소스: 예
- 언어: Dart
- 플랫폼: android · ios
- 분류: 개발 도구
- 태그: ssh · mosh · sftp · android · ios · flutter
- 바로 쓰기: 설치해서 쓰기
- 출처: Show HN https://github.com/gwitko/Conduit
- INSTALL: https://conduit.gwitko.dev/

## 활동

- 마지막 커밋: 2026-07-24 08:41 UTC
- 최근 릴리스: v1.4.14 (2026-07-14)
- 기여자: 3
- 열린 이슈 (PR 포함): 36
- 만든 이: 개인
- GitHub 확인 시각: 2026-09-19 22:59 UTC

## 선정 신호와 근거

- 과거 기록

## TESIGN TAKE

계정·구독 없이 하드웨어 키 인증과 Mosh를 갖춘 폰 터미널이고, 소스는 Apache-2.0으로 공개되어 있다.

## 왜 볼 만한가

호스트·키·신뢰한 지문이 전부 기기 안에만 남고 계정·클라우드 동기화·구독이 없다. Mosh는 dart_mosh라는 클린룸 Dart 구현으로 돌아가 Wi-Fi가 끊기거나 셀룰러로 넘어가도 세션이 살아 있고, ed25519-sk·ecdsa-sk FIDO 키를 Android는 USB·NFC로, iOS는 NFC로 쓴다(YubiKey로 테스트). Android arm64에서는 proot로 서버 없는 로컬 Arch Linux 셸(pacman 포함)까지 열 수 있다.

## 이걸로 무엇을 만들 수 있나

- 호스트별 tmux 자동 attach와 접속 시 실행 스니펫으로 폰에서 여는 서버 점검 루틴을 만들 수 있고, 하드웨어 키+에이전트 포워딩으로 점프 호스트를 거치는 접속 흐름을 꾸릴 수 있다.

## 누구에게 맞나

- 서버 운영자 — 이동 중 SSH/Mosh 접속과 tmux 자동 attach
- 보안 키 사용자 — YubiKey 등 FIDO 키로 폰에서 SSH 인증
- Android 사용자 — 서버 없이 폰 안에서 Arch Linux 셸(pacman) 사용

## 5분 안에 시작하기

```
# 1. App Store: https://apps.apple.com/app/id6780054869
# 2. Google Play: https://play.google.com/store/apps/details?id=com.gwitko.conduit
# 3. F-Droid: https://f-droid.org/packages/com.gwitko.conduit/ (또는 Obtainium으로 GitHub 릴리스 추적)
# 4. 앱에서 machine을 추가하고 개인 키를 파일에서 가져오거나 기기에서 ed25519 키를 생성한 뒤 접속
# (README에 셸 설치 명령은 없음 — 스토어 배포)
```

## 주의할 점

- Conduit 자체 소스는 Apache-2.0. 로컬 셸이 포함된 Android 빌드는 Termux 계열 서드파티 바이너리(proot 등)를 각자의 라이선스(GPL/LGPL 포함)로 재배포하며 THIRD_PARTY_NOTICES.md에 정리됨. 로컬 Arch Linux 셸은 Android arm64 전용, iOS 없음. Google Play 빌드는 /mnt/android 공유 저장소 마운트를 제외(전체 파일 권한). iOS 하드웨어 키는 NFC만. 앱은 무료(홈페이지 기준). 마지막 푸시 2026-07-24.

## 영수증

- TESIGN이 처음 본 시각: 2026-09-13 15:58 UTC
- 출처 등록: 2026-06-18 09:32 UTC
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

[대표 이미지] https://tesign.com/img/conduit-9c5c4936f8.webp
