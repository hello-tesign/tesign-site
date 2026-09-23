# DuoFold for Android

> 안드로이드 폰용 접힘 효과 — 폴더블이 아닌 안드로이드 폰에서도 기울이면 화면이 접히듯 움직이게 합니다.

- 페이지: https://tesign.com/item/duofold-android/
- JSON: https://tesign.com/item/duofold-android/index.json
- 영어 마크다운: https://tesign.com/en/item/duofold-android/index.md
- 생성 시각: 2026-09-23 04:12 UTC

## 숫자

- 별 165 — GitHub에서 2026-09-23 01:48 UTC 확인
- 7일 별 증가 관측 없음 (GH Archive) (기준 2026-09-22 23:00 UTC)
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.

## 한눈에 보는 사실

- 라이선스: MIT (허용적) — https://spdx.org/licenses/MIT.html
- 사용 범위: 상업 이용·수정·재배포 가능. 저작권 고지는 유지.
- 오픈소스: 예
- 언어: Java
- 플랫폼: android
- 분류: 미디어 · 실험
- 태그: android · shizuku · opengl · ui-effect
- 바로 쓰기: 설치해서 쓰기
- 출처: GitHub https://github.com/jcx396905-gif/duofold-android
- INSTALL: https://github.com/jcx396905-gif/duofold-android

## 활동

- 마지막 커밋: 2026-09-13 03:13 UTC
- 최근 릴리스: v0.6.0 (2026-09-13)
- 기여자: 1
- 열린 이슈 (PR 포함): 4
- 만든 이: 개인
- GitHub 확인 시각: 2026-09-23 01:48 UTC

## 선정 신호와 근거

- 신규 · 생성 23h 만에 포착

## TESIGN TAKE

루트 없이 시스템 전체 화면을 다시 그리는 실험이고, 실용성보다 구현이 볼거리입니다.

## 왜 볼 만한가

화면이 기기 움직임을 따라 접히는 연출은 특정 폰의 전유물이었습니다. DuoFold는 Shizuku로 현재 화면을 받아 OpenGL ES로 다시 투영해, 폰을 좌우·앞뒤로 기울이면 원근·블러·조명이 실시간으로 따라오게 합니다. 루트가 필요 없고 앱은 인터넷 권한이 없어 화면 이미지를 저장하거나 올리지 않으며, MIT로 공개돼 있습니다. Android 14 이상 표준 빌드와 10~13용 호환 빌드가 있고, Xiaomi 15에서만 실기기 테스트를 거쳤습니다.

## 이걸로 무엇을 만들 수 있나

- 매장 시연용 폰에 넣는 눈길 끄는 화면 효과
- 모션 센서와 GPU 투영을 잇는 안드로이드 렌더링 공부 자료

## 누구에게 맞나

- 안드로이드 개발자 — 화면 캡처와 GPU 투영 구현을 보고 싶을 때
- 폰 튜닝 애호가 — Shizuku를 이미 쓰고 있어 새 효과를 찾을 때

## 5분 안에 시작하기

```
# Latest Release에서 Android 14+는 표준 빌드, 10~13은 호환 빌드 APK 내려받기
# Shizuku를 설치해 무선 디버깅이나 ADB로 서비스 시작
# 앱에서 01 Shizuku 승인 → 02 접근성 서비스 → 03 10초 체험 → 04 전역 효과
```

## 주의할 점

- Shizuku가 설치·실행 중이어야 합니다(루트는 불필요)
- Xiaomi 15/Android 16에서만 테스트 — 제조사별 제한이 다를 수 있음
- 오래 켜 두면 GPU 부하와 배터리 소모가 늘어납니다

## 영수증

- TESIGN이 처음 본 시각: 2026-09-13 07:43 UTC
- 출처 등록: 2026-09-12 08:33 UTC
- 선정: 2026-09-14 02:41 UTC
- TESIGN 게재: 2026-09-14 02:41 UTC
- 소개 글 마지막 수정: 2026-09-15 04:36 UTC

## 읽는 법

- 이 파일은 tesign.com 항목 페이지와 같은 빌드에서 같은 데이터로 만들어졌습니다. 소개 글은 편집자가 쓴 것이고, 숫자는 저장된 관측값입니다.
- JSON의 null은 관측하지 않았다는 뜻입니다 — 0이 아닙니다. 마크다운에서는 [확인 필요]로 적습니다.
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.
- 요약이며 법적 조언이 아닙니다.

[대표 이미지] https://tesign.com/img/duofold-android-11ccdb6642.jpg
