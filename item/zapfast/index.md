# ZapFast

> 가벼운 왓츠앱 클라이언트 — 브라우저 엔진 없이 러스트로 새로 만든 왓츠앱 클라이언트로, 리눅스에서 유휴 메모리 약 150MB — 왓츠앱 웹(1.13GB)의 8분의 1 수준입니다.

- 페이지: https://tesign.com/item/zapfast/
- JSON: https://tesign.com/item/zapfast/index.json
- 영어 마크다운: https://tesign.com/en/item/zapfast/index.md
- 생성 시각: 2026-09-19 23:10 UTC

## 숫자

- 별 592 — GitHub에서 2026-09-19 22:59 UTC 확인
- 7일 +39은 GH Archive 관측 (기준 2026-09-19 18:00 UTC)
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.

## 한눈에 보는 사실

- 라이선스: MIT (허용적) — https://spdx.org/licenses/MIT.html
- 사용 범위: 상업 이용·수정·재배포 가능. 저작권 고지는 유지.
- 오픈소스: 예
- 언어: Rust
- 플랫폼: macos · windows · linux
- 분류: 소셜
- 태그: whatsapp · rust · native-app · desktop · messaging
- 바로 쓰기: 설치해서 쓰기
- 출처: GitHub https://github.com/crmne/zapfast
- INSTALL: https://zapfast.rocks/

## 활동

- 마지막 커밋: 2026-09-19 06:54 UTC
- 최근 릴리스: v0.14.0 (2026-09-16)
- 기여자: 9
- 열린 이슈 (PR 포함): 42
- 만든 이: 개인
- GitHub 확인 시각: 2026-09-19 22:59 UTC

## TESIGN TAKE

"가벼운 크롬 앱"이 아니라 정말로 브라우저 엔진이 없는 클라이언트라는 점이 핵심이고, 측정치를 직접 공개한 것도 신뢰가 갑니다.

## 왜 볼 만한가

왓츠앱 웹·데스크톱 앱은 크로미움 브라우저 엔진을 그대로 띄우기 때문에 가볍지 않습니다. ZapFast는 러스트와 egui로 새로 짠 클라이언트로, 브라우저 엔진 없이 왓츠앱에 별도 기기로 연동됩니다. 제작자가 리눅스에서 측정한 수치로는 1초 안에 열리고 유휴 메모리 약 150MB를 쓰는데, 같은 조건의 왓츠앱 웹과 그 크로미움 프로세스들은 1.13GB를 씁니다. 답장·반응·음성메시지·투표·사라지는 메시지 타이머까지 왓츠앱 주요 기능을 대부분 구현했고, 메시지 보관함은 SQLCipher로 암호화되어 OS 키체인으로 잠금이 풀립니다.

## 이걸로 무엇을 만들 수 있나

- 크로미움 기반 왓츠앱 웹 대신 가벼운 데스크톱 클라이언트로 갈아타기
- 오래된 저사양 PC에서도 왓츠앱을 계속 띄워 두기
- 같은 제작자의 Spotifast와 테마 피커를 공유하니, 두 앱을 같은 색으로 맞추기

## 누구에게 맞나

- 왓츠앱을 하루 종일 띄워 두는 사람 — 메모리를 덜 쓰는 대안이 필요할 때
- 오래된 노트북·저사양 PC 사용자 — 크로미움 기반 앱이 버거울 때
- Linux·윈도 사용자 — 공식 앱이 없는 플랫폼에서 네이티브 느낌을 원할 때

## 5분 안에 시작하기

```
# 설치: https://zapfast.rocks 에서 내 운영체제용 파일 받기 (macOS는 brew install --cask crmne/tap/zapfast, Arch는 yay -S zapfast-bin)
# 첫 실행 시 왓츠앱 앱의 연결된 기기에서 QR코드 스캔
# 소스에서 빌드(Rust·CMake·Perl 필요):
$ cargo install --path .
$ zapfast
```

## 주의할 점

- MIT (일부 폰트·아이콘은 SIL OFL·ISC) · 왓츠앱·메타의 공식 앱이 아니며, 비공식 클라이언트 사용은 왓츠앱 약관 위반으로 계정이 정지될 수 있다고 README가 직접 밝힙니다
- 통화·상태·커뮤니티·그룹 관리 기능은 아직 없습니다
- Flathub 등록은 아직 준비 중입니다

## 영수증

- TESIGN이 처음 본 시각: 2026-09-15 21:33 UTC
- 출처 등록: 2026-08-29 15:52 UTC
- 선정: 2026-09-17 01:24 UTC
- TESIGN 게재: 2026-09-17 01:24 UTC
- 소개 글 마지막 수정: 2026-09-17 01:26 UTC

## 읽는 법

- 이 파일은 tesign.com 항목 페이지와 같은 빌드에서 같은 데이터로 만들어졌습니다. 소개 글은 편집자가 쓴 것이고, 숫자는 저장된 관측값입니다.
- JSON의 null은 관측하지 않았다는 뜻입니다 — 0이 아닙니다. 마크다운에서는 [확인 필요]로 적습니다.
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.
- 요약이며 법적 조언이 아닙니다.

[대표 이미지] https://tesign.com/img/zapfast-ac29caa5d5.png
