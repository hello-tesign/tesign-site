# proton-cli

> 터미널에서 쓰는 Proton — Proton 메일·드라이브·캘린더·패스·연락처를 터미널에서 다룹니다.

- 페이지: https://tesign.com/item/proton-cli/
- JSON: https://tesign.com/item/proton-cli/index.json
- 영어 마크다운: https://tesign.com/en/item/proton-cli/index.md
- 생성 시각: 2026-09-21 00:32 UTC

## 숫자

- 별 71 — GitHub에서 2026-09-19 22:58 UTC 확인
- 7일 별 증가 관측 없음 (GH Archive) (기준 2026-09-20 10:00 UTC)
- Show HN 3점 — 2026-09-20 04:28 UTC 관측
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.

## 한눈에 보는 사실

- 라이선스: MIT (허용적) — https://spdx.org/licenses/MIT.html
- 사용 범위: 상업 이용·수정·재배포 가능. 저작권 고지는 유지.
- 오픈소스: 예
- 언어: Go
- 플랫폼: linux · macos · windows · cli
- 분류: 생산성 · 개발 도구
- 태그: proton · cli · email · encryption
- 바로 쓰기: 설치해서 쓰기
- 출처: Show HN https://github.com/roman-16/proton-cli
- INSTALL: https://proton-cli.lerchster.dev/

## 활동

- 마지막 커밋: 2026-09-19 02:55 UTC
- 최근 릴리스: v4.2.3 (2026-09-18)
- 기여자: 1
- 열린 이슈 (PR 포함): 0
- 만든 이: 개인
- GitHub 확인 시각: 2026-09-19 22:58 UTC

## 선정 신호와 근거

- 신규 · 생성 0h 만에 포착

## TESIGN TAKE

브릿지도 프록시도 없이 암호화를 내 컴퓨터에서 끝낸다는 점이 이 CLI의 요지입니다.

## 왜 볼 만한가

Proton 계정은 브라우저나 앱을 열어야만 다룰 수 있어 스크립트나 cron에 붙이기 어렵습니다. proton-cli는 실행 파일 하나로 메일·드라이브·캘린더·패스·연락처를 명령으로 다루고, SRP 로그인과 PGP 암호화를 Proton의 공개 라이브러리로 내 컴퓨터 안에서 처리합니다. 모든 목록은 JSON·YAML로 나오고 상태를 바꾸는 명령엔 --dry-run이 있습니다. Linux·macOS·Windows용이며 MIT이고, Proton AG와 무관한 커뮤니티 프로젝트라 이용 약관은 직접 확인해야 합니다.

## 이걸로 무엇을 만들 수 있나

- 매일 아침 안 읽은 메일을 뽑아 요약하는 cron 작업
- 보고서를 자동으로 Drive 폴더에 올리는 배포 스크립트
- 에이전트가 메일·일정을 읽게 하는 proton skill 연동

## 누구에게 맞나

- Proton 이용자 — 메일·파일을 스크립트로 자동화하고 싶을 때
- 터미널 애호가 — 브라우저 없이 계정을 다루고 싶을 때
- 에이전트 사용자 — 에이전트에 메일·일정 읽기를 맡길 때

## 5분 안에 시작하기

```
$ curl -fsSL https://raw.githubusercontent.com/roman-16/proton-cli/main/scripts/install.sh | sh
$ irm https://raw.githubusercontent.com/roman-16/proton-cli/main/scripts/install.ps1 | iex
# Homebrew·winget·APT·AUR·Nix·npm과 서명된 바이너리로도 설치 가능
$ proton account login
$ proton mail messages list --unread
# 명령은 proton <앱> <컬렉션> <동사> 꼴 · proton-cli 이름으로도 실행됨
```

## 주의할 점

- Proton AG와 무관한 커뮤니티 프로젝트 — 이용 약관은 직접 확인
- 비밀번호와 키를 다루는 도구라 docs의 Security 문서를 먼저 읽을 것

## 영수증

- TESIGN이 처음 본 시각: 2026-09-13 12:59 UTC
- 출처 등록: 2026-09-13 12:42 UTC
- 선정: 2026-09-14 02:41 UTC
- 소개 글 마지막 수정: 2026-09-15 07:17 UTC

## 읽는 법

- 이 파일은 tesign.com 항목 페이지와 같은 빌드에서 같은 데이터로 만들어졌습니다. 소개 글은 편집자가 쓴 것이고, 숫자는 저장된 관측값입니다.
- JSON의 null은 관측하지 않았다는 뜻입니다 — 0이 아닙니다. 마크다운에서는 [확인 필요]로 적습니다.
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.
- 요약이며 법적 조언이 아닙니다.

[대표 이미지] https://tesign.com/img/proton-cli-b7a9bc1524.png
