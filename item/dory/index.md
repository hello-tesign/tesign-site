# Dory

> 맥 개발자용 Docker 환경 — 애플 실리콘 맥용 Docker Desktop 대체. Docker 29·Compose v2·원클릭 k3s·리눅스 데스크톱 VM을 네이티브 앱 하나로

- 페이지: https://tesign.com/item/dory/
- JSON: https://tesign.com/item/dory/index.json
- 영어 마크다운: https://tesign.com/en/item/dory/index.md
- 생성 시각: 2026-09-17 01:30 UTC

## 숫자

- 별 1,582 — GitHub에서 2026-09-15 19:34 UTC 확인
- 7일 별 증가 관측 없음 (GH Archive) (기준 2026-09-16 21:00 UTC)
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.

## 한눈에 보는 사실

- 라이선스: GPL-3.0 (카피레프트) — https://spdx.org/licenses/GPL-3.0.html
- 사용 범위: 사용·수정은 자유. 배포하면 소스 공개 의무(카피레프트).
- 오픈소스: 예
- 언어: Swift
- 플랫폼: macos · cli
- 분류: 인프라 · 개발 도구
- 태그: docker · apple-silicon · kubernetes · containers · macos · virtual-machines
- 바로 쓰기: 설치해서 쓰기
- 출처: GitHub https://github.com/augani/dory
- INSTALL: https://usedory.dev/

## 활동

- 마지막 커밋: 2026-09-14 02:47 UTC
- 최근 릴리스: v0.4.5 (2026-08-13)
- 기여자: 1
- 열린 이슈 (PR 포함): 23
- 만든 이: 개인
- GitHub 확인 시각: 2026-09-15 19:34 UTC

## 선정 신호와 근거

- 과거 기록

## TESIGN TAKE

'아직 못 하는 것' 목록(Current boundaries)을 README 본문에 적어 둔 컨테이너 런타임은 드뭅니다.

## 왜 볼 만한가

Docker Desktop 없이 표준 Docker 도구에 네이티브 애플 실리콘 엔진을 붙이고, 원클릭 k3s 쿠버네티스와 Ubuntu·Debian·Kali 그래픽 리눅스 VM을 SwiftUI 앱과 CLI 양쪽에서 다룹니다. README는 계정·클라우드 제어부·텔레메트리·상업 이용 등급이 없다고 명시하며 GPL-3.0입니다. README가 설명하는 0.4.6에서는 Docker Core 앱을 작게 쪼개고 쿠버네티스·리눅스 머신·데스크톱 이미지를 서명된 선택 구성요소로 내려받으며(공개 릴리스는 v0.4.5까지, 2026-09-15 확인), Docker Desktop·OrbStack·Colima·Rancher Desktop·Podman에서 이미지·볼륨·컨테이너를 옮겨 오는 이전 기능이 있습니다.

## 이걸로 무엇을 만들 수 있나

- 코딩 에이전트를 정책 기반 격리 VM 샌드박스에서 돌리고 MCP 읽기 전용 모드로 상태를 조회하게 하거나, `dory machine`으로 스냅샷 있는 헤드리스 Alpine 개발 VM을 만들어 실험 환경을 반복 생성할 수 있습니다. 컨테이너에서 `host.dory.internal:11434`로 맥의 Ollama에 바로 붙습니다.

## 누구에게 맞나

- Docker Desktop 라이선스가 부담인 맥 개발자 — Docker 29 API/CLI 그대로, GPL
- 로컬 쿠버네티스가 필요한 사람 — k3s v1.34~1.36 프리셋 원클릭
- 코딩 에이전트 운영자 — 정책 기반 격리 VM 샌드박스와 MCP 읽기 전용 모드

## 5분 안에 시작하기

```
# brew install --cask Augani/dory/dory   # Docker Core 설치; 쿠버네티스·리눅스 머신은 앱에서 추가
# # Dory를 한 번 열어 엔진 준비를 기다린 뒤
# docker context use dory
# docker run --rm hello-world
# dory doctor --active
```

## 주의할 점

- 라이선스 GPL-3.0. 무료(GitHub Sponsors 안내). 계정·텔레메트리 없음.
- Apple Silicon 맥과 macOS 14 Sonoma 이상만 지원, 인텔 빌드 없음(추후 예정). x86_64 리눅스 ISO는 부팅 불가(FEX/Rosetta는 앱 단위 번역만). 혼합 작업에는 메모리 8 GiB 권장.
- 0.4.x 단계: 데스크톱 리눅스 GPU 가속 미검증, USB 패스스루는 한정 조건, 오디오 패스스루 없음. 최신 공개 릴리스 v0.4.5(2026-09-15 확인). 별 1,577개.

## 영수증

- TESIGN이 처음 본 시각: 2026-09-13 08:37 UTC
- 출처 등록: 2026-06-19 00:54 UTC
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

[대표 이미지] https://tesign.com/img/dory-9f02fb12b7.png
