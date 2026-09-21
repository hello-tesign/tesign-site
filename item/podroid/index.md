# Podroid

> 폰용 리눅스 컨테이너 VM — 루트 권한 없이 안드로이드 폰에서 별도 커널을 가진 진짜 알파인 리눅스 VM을 띄워, Podman·Docker·LXC를 서버와 똑같이 돌립니다.

- 페이지: https://tesign.com/item/podroid/
- JSON: https://tesign.com/item/podroid/index.json
- 영어 마크다운: https://tesign.com/en/item/podroid/index.md
- 생성 시각: 2026-09-21 00:32 UTC

## 숫자

- 별 2,872 — GitHub에서 2026-09-19 22:57 UTC 확인
- 7일 +19은 GH Archive 관측 (기준 2026-09-20 10:00 UTC)
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.

## 한눈에 보는 사실

- 라이선스: GPL-2.0 (카피레프트) — https://spdx.org/licenses/GPL-2.0.html
- 사용 범위: 사용·수정은 자유. 배포하면 소스 공개 의무(카피레프트).
- 오픈소스: 예
- 언어: Kotlin
- 플랫폼: android
- 분류: 개발 도구
- 태그: android · linux-vm · containers · qemu · no-root
- 바로 쓰기: 설치해서 쓰기
- 출처: GitHub https://github.com/extv/podroid
- INSTALL: https://extv.github.io/Podroid

## 활동

- 마지막 커밋: 2026-09-18 00:10 UTC
- 최근 릴리스: v1.2.8 (2026-08-22)
- 기여자: 6
- 열린 이슈 (PR 포함): 23
- 만든 이: 개인
- GitHub 확인 시각: 2026-09-19 22:57 UTC

## TESIGN TAKE

"안드로이드에서도 진짜 커널을 가진 VM"이라는 주장을 QEMU·pKVM AVF라는 구체적인 근거로 뒷받침하는 게, 흔한 chroot 흉내 앱들과 다른 지점입니다.

## 왜 볼 만한가

안드로이드에서 리눅스 컨테이너를 돌리는 앱들은 대개 chroot나 proot 흉내로 동작해 진짜 컨테이너 런타임이 아닙니다. Podroid는 QEMU(또는 지원 기기에서는 pKVM 가속 AVF)로 자체 커널을 가진 진짜 VM을 띄우기 때문에 Podman·Docker·LXC가 서버에서와 동일하게 동작합니다. 122가지 색 테마의 xterm-256color 터미널, GUI 리눅스 앱을 띄우는 X11 뷰어, USB 패스스루, SSH, 포트포워딩, 안드로이드와의 브리지까지 포함되어 있고 루트가 필요 없습니다.

## 이걸로 무엇을 만들 수 있나

- 폰 안에서 진짜 컨테이너를 띄워 서버에 배포하기 전에 빠르게 테스트하기
- podroid-forward로 컨테이너를 폰의 LAN에 노출해, 다른 기기에서 접속해 보기
- SSH로 붙어서 노트북 없이 폰만으로 짧은 서버 작업 처리하기

## 누구에게 맞나

- 폰만 들고 다니는 개발자 — 노트북 없이 컨테이너를 테스트해야 할 때
- 임베디드·모바일 개발자 — 실제 리눅스 커널 환경이 필요할 때
- 리눅스를 배우는 사람 — 안드로이드 폰에서 진짜 터미널을 만져보고 싶을 때

## 5분 안에 시작하기

```
# 1) https://github.com/ExTV/Podroid/releases/latest 에서 APK 내려받아 설치
# 2) Start VM 누르고 Ready! 뜨면 터미널 열기
$ podman run --rm alpine echo "hello from a container"
$ ssh root@<폰IP> -p 9922  (비밀번호: podroid)
```

## 주의할 점

- GPLv2 · arm64 안드로이드 8 이상 기기만 지원합니다
- 소스 빌드에는 Docker와 안드로이드 SDK/NDK가 필요합니다(사용 자체는 APK만 있으면 됩니다)

## 영수증

- TESIGN이 처음 본 시각: 2026-09-15 03:29 UTC
- 출처 등록: 2026-03-16 01:04 UTC
- 선정: 2026-09-17 01:24 UTC
- TESIGN 게재: 2026-09-17 01:24 UTC
- 소개 글 마지막 수정: 2026-09-17 01:26 UTC

## 읽는 법

- 이 파일은 tesign.com 항목 페이지와 같은 빌드에서 같은 데이터로 만들어졌습니다. 소개 글은 편집자가 쓴 것이고, 숫자는 저장된 관측값입니다.
- JSON의 null은 관측하지 않았다는 뜻입니다 — 0이 아닙니다. 마크다운에서는 [확인 필요]로 적습니다.
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.
- 요약이며 법적 조언이 아닙니다.

[대표 이미지] https://tesign.com/img/podroid-0f16dc4f02.png
