# Try Omarchy for Windows

> 윈도우에서 리눅스 체험 — 가상머신 설치 없이 윈도우 창 하나에 진짜 Omarchy 리눅스 데스크톱을 그대로 띄우는 앱.

- 페이지: https://tesign.com/item/try-omarchy-windows/
- JSON: https://tesign.com/item/try-omarchy-windows/index.json
- 영어 마크다운: https://tesign.com/en/item/try-omarchy-windows/index.md
- 생성 시각: 2026-09-23 04:12 UTC

## 숫자

- 별 460 — GitHub에서 2026-09-23 01:47 UTC 확인
- 7일 별 증가 관측 없음 (GH Archive) (기준 2026-09-22 23:00 UTC)
- Show HN 5점 — 2026-09-23 01:24 UTC 관측
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.

## 한눈에 보는 사실

- 라이선스: MIT (허용적) — https://spdx.org/licenses/MIT.html
- 사용 범위: 상업 이용·수정·재배포 가능. 저작권 고지는 유지.
- 오픈소스: 예
- 언어: Go
- 플랫폼: windows
- 분류: 개발 도구 · 인프라
- 태그: 윈도우 · 리눅스 · 가상화 · hyprland
- 바로 쓰기: 설치해서 쓰기
- 출처: Show HN https://github.com/omacom/try-omarchy-windows
- INSTALL: https://tryomarchy.com/

## 활동

- 마지막 커밋: 2026-09-23 01:20 UTC
- 최근 릴리스: runtime-v1-r18 (2026-09-22)
- 기여자: 7
- 열린 이슈 (PR 포함): 2
- 만든 이: 조직
- GitHub 확인 시각: 2026-09-23 01:47 UTC

## 선정 신호와 근거

- 신규 · 생성 3h 만에 포착

## TESIGN TAKE

VM 소프트웨어를 따로 설치하지 않고 윈도우가 이미 갖고 있는 가상화 기능만으로 띄운다는 점이 다르다. 실행 파일 하나로 끝난다.

## 왜 볼 만한가

Omarchy(Hyprland 기반 아치 리눅스)를 잠깐 써 보려면 보통 VMware나 VirtualBox를 깔고 듀얼 부팅까지 고민해야 한다. Try Omarchy는 윈도우 자체 가상화(WHPX)와 QEMU로 아치 이미지를 그대로 띄우고, 그래픽카드로 렌더링까지 해서 실제 쓰는 느낌에 가깝게 만든다.

## 이걸로 무엇을 만들 수 있나

- 실행 파일 하나(TryOmarchy.exe, 약 10MB)가 윈도우 하이퍼바이저 플랫폼을 켜고 아치 이미지를 내려받아 부팅과 감시를 맡는다. 그래픽은 virtio-gpu virgl과 Venus Vulkan으로 GPU에서 그리고, 지원되지 않으면 CPU 렌더링으로 자동 전환한다. 윈도우-Omarchy 양방향 클립보드 공유와 폴더 공유(virtio-9p)도 들어 있다.

## 누구에게 맞나

- Hyprland·Omarchy를 궁금해하는 윈도우 사용자, 리눅스로 옮기기 전에 미리 써 보고 싶은 사람.

## 5분 안에 시작하기

```
# tryomarchy.com에서 TryOmarchy.exe를 받아 실행하고, 안내에 따라 가상화 권한을 허용한다.
```

## 주의할 점

- 아직 v0.0.20 미리보기 단계로, 실제 검증은 대부분 AMD 윈도우 11 노트북 한 대에서 이뤄졌다고 저장소가 밝힌다. 네트워크 공유 폴더는 지원하지 않는다.

## 영수증

- TESIGN이 처음 본 시각: 2026-09-21 02:05 UTC
- 출처 등록: 2026-09-20 22:56 UTC
- 선정: 2026-09-22 05:53 UTC
- TESIGN 게재: 2026-09-22 05:53 UTC
- 소개 글 마지막 수정: 2026-09-22 05:53 UTC

## 읽는 법

- 이 파일은 tesign.com 항목 페이지와 같은 빌드에서 같은 데이터로 만들어졌습니다. 소개 글은 편집자가 쓴 것이고, 숫자는 저장된 관측값입니다.
- JSON의 null은 관측하지 않았다는 뜻입니다 — 0이 아닙니다. 마크다운에서는 [확인 필요]로 적습니다.
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.
- 요약이며 법적 조언이 아닙니다.

[대표 이미지] https://tesign.com/img/try-omarchy-windows-b6d7cb8793.jpg
