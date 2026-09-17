# Strata

> 리눅스용 키보드 파일 관리자 — 키보드 중심 GTK4 Linux 파일 관리자. Miller 컬럼, Ctrl+K 재귀 검색, RAW·PDF·영상 미리보기, SMB 공유

- 페이지: https://tesign.com/item/strata/
- JSON: https://tesign.com/item/strata/index.json
- 영어 마크다운: https://tesign.com/en/item/strata/index.md
- 생성 시각: 2026-09-17 01:56 UTC

## 숫자

- 별 433 — GitHub에서 2026-09-15 19:35 UTC 확인 (+2 확인 이후 관측)
- 7일 +4은 GH Archive 관측 (기준 2026-09-16 21:00 UTC)
- 24h +2 ★ · 30d +25 ★ (기준 2026-09-16 21:00 UTC)
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.

## 한눈에 보는 사실

- 라이선스: MIT (허용적) — https://spdx.org/licenses/MIT.html
- 사용 범위: 상업 이용·수정·재배포 가능. 저작권 고지는 유지.
- 오픈소스: 예
- 언어: Rust
- 플랫폼: linux
- 분류: 생산성
- 태그: file-manager · linux · gtk4 · rust · omarchy · wayland
- 바로 쓰기: 설치해서 쓰기
- 출처: GitHub https://github.com/lgse/strata
- INSTALL: https://stratafiles.io/

## 활동

- 마지막 커밋: 2026-09-15 18:51 UTC
- 최근 릴리스: v0.18.0 (2026-09-15)
- 기여자: 29
- 열린 이슈 (PR 포함): 74
- 만든 이: 조직
- GitHub 확인 시각: 2026-09-15 19:35 UTC

## 선정 신호와 근거

- 과거 기록

## TESIGN TAKE

Omarchy 흐름을 탄 파일 관리자인데, 미리보기 파서를 샌드박스에 넣고 설치 파일의 빌드 출처까지 검증하는 보안 태도가 분명합니다.

## 왜 볼 만한가

Miller 컬럼(공간형 탐색)에 아이콘·목록 보기를 함께 두고, Ctrl+K 재귀 검색은 색인이 끝나기 전에도 홈과 마운트된 로컬 드라이브 전체를 뒤집니다. 이미지·카메라 RAW·PDF·오디오·영상 미리보기는 Bubblewrap 샌드박스에 격리된 헬퍼가 만들고 네트워크가 차단됩니다(텍스트·코드 미리보기는 파서를 쓰지 않아 프로세스 안에서 1 MiB까지만 읽습니다). 설치 스크립트는 SHA-256 다이제스트와 GitHub Actions 빌드 출처(provenance)를 확인한 뒤에야 바이너리를 넣고, Omarchy에서는 Nautilus 단축키를 대체하고 시스템 파일 선택창(portal)까지 맡을 수 있습니다.

## 이걸로 무엇을 만들 수 있나

- 여섯 개 기본 테마 외에 커스텀 테마를 만들 수 있고 Omarchy Quattro 테마를 실시간으로 따라갑니다. strata --install-portal로 XDG 데스크톱 포털을 쓰는 앱들의 파일 열기/저장 창을 Strata로 바꾸는 구성도 가능합니다(포털을 쓰지 않는 앱은 그대로).

## 누구에게 맞나

- Omarchy·Arch + Hyprland 사용자 — Nautilus 대체, Super+Shift+F 단축키 연동
- 키보드 중심 사용자 — Ctrl+K 검색, Ctrl+L 경로 입력, Space 미리보기
- 사진·영상·문서 작업자 — RAW·PDF·영상 미리보기와 속성(해상도·코덱) 확인

## 5분 안에 시작하기

```
# curl -fsSL https://raw.githubusercontent.com/lgse/strata/main/install.sh | bash
# # Arch / Omarchy 수동 설치 시 의존성
# sudo pacman -S --needed bubblewrap ffmpeg ffmpegthumbnailer fontconfig gstreamer gst-libav gst-plugins-base gst-plugins-good gtk4 gtksourceview5 gvfs poppler-glib
# strata                 # home directory
# strata ~/Documents     # a specific directory
```

## 주의할 점

- 라이선스: 저장소 LICENSE 파일과 README는 MIT인데 공식 홈페이지 FAQ는 GPL-3.0-or-later라고 적혀 있어 어느 쪽이 맞는지 [확인 필요]. 64비트 Linux 전용(x86_64·aarch64), glibc 2.39 이상·GTK 4.12 이상 필요. Arch·Omarchy가 1차 지원 환경이고 Wayland가 기본 디스플레이 스택. SMB·휴대폰 접근은 GVfs 백엔드 추가 설치 필요. 2026년 8월 말에 시작된 프로젝트. 무료, 유료 티어 없음.

## 영수증

- TESIGN이 처음 본 시각: 2026-09-13 09:44 UTC
- 출처 등록: 2026-08-28 22:41 UTC
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

[대표 이미지] https://tesign.com/img/strata-445a0cc781.png
