# Halcyon Video

> 미디어 서버용 3D 대여점 — Jellyfin·Plex·Emby 서버(또는 OTT 목록)를 1990년대 비디오 대여점 3D 매장으로 바꿔, 걸어 다니며 영화를 고르게 하는 앱

- 페이지: https://tesign.com/item/halcyon-video/
- JSON: https://tesign.com/item/halcyon-video/index.json
- 영어 마크다운: https://tesign.com/en/item/halcyon-video/index.md
- 생성 시각: 2026-09-23 04:12 UTC

## 숫자

- 별 879 — GitHub에서 2026-09-23 01:49 UTC 확인
- 7일 별 증가 관측 없음 (GH Archive) (기준 2026-09-22 23:00 UTC)
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.

## 한눈에 보는 사실

- 라이선스: GPL-3.0 (카피레프트) — https://spdx.org/licenses/GPL-3.0.html
- 사용 범위: 사용·수정은 자유. 배포하면 소스 공개 의무(카피레프트).
- 오픈소스: 예
- 언어: TypeScript
- 플랫폼: web · windows · macos · linux
- 분류: 미디어
- 태그: jellyfin · plex · emby · threejs · retro · self-hosted
- 바로 쓰기: 설치 없이 바로
- 출처: GitHub https://github.com/halcyon-video/halcyon-video
- TRY: https://halcyon-video.github.io/halcyon-video

## 활동

- 마지막 커밋: 2026-09-23 01:05 UTC
- 최근 릴리스: v0.21.2 (2026-09-21)
- 기여자: 4
- 열린 이슈 (PR 포함): 82
- 만든 이: 조직
- GitHub 확인 시각: 2026-09-23 01:49 UTC

## 선정 신호와 근거

- 과거 기록

## TESIGN TAKE

영화 고르는 시간을 '목록 스크롤'에서 '가게 구경'으로 되돌리는, 한 사람이 만드는 취향 프로젝트입니다.

## 왜 볼 만한가

영화 고르기가 포스터 목록을 끝없이 넘기는 일이 된 지 오래인데, Halcyon은 그 카탈로그를 '들어가서 구경하는 가게'로 바꿉니다. 라이브러리는 통로, 장르는 코너가 되고 케이스를 꺼내 뒷면을 읽고 카운터에서 대여하는 절차까지 재현하며, 키보드·게임패드·TV 리모컨·휴대폰으로 조작합니다. 공개 데모는 가입·미디어 서버·API 키 없이 바로 열리고, 로컬은 start.cmd/start.command/start.sh 한 번 또는 ghcr.io 도커 이미지로 띄웁니다.

## 이걸로 무엇을 만들 수 있나

- 거실 TV용 HTPC 키오스크(설치 스크립트 제공)나 라즈베리파이용 2.5D 모드 화면을 꾸릴 수 있고, 브랜드 에디터로 이름·색·엠블럼을 바꿔 '우리 집 비디오 가게'처럼 재도장할 수 있습니다.

## 누구에게 맞나

- Jellyfin·Plex·Emby 자체 호스팅 사용자 — 거실 TV용 탐색 화면
- HTPC·라즈베리파이 사용자 — 키오스크 모드와 2.5D 모드
- 레트로 게임 수집가 — RomM 연동 게임 코너

## 5분 안에 시작하기

```
# git clone https://github.com/halcyon-video/halcyon-video
# cd halcyon-video
# npm install
# npm run dev
# # 또는 Docker: docker run -d --name halcyon --network host --restart unless-stopped ghcr.io/halcyon-video/halcyon-video
```

## 주의할 점

- 라이선스 GPL-3.0. 공개 데모는 가입·서버·API 키 없이 열리지만 재생은 꺼져 있고, 개인 파일을 진열하려면 Jellyfin·Plex·Emby 중 하나가 필요합니다(폴더 스캐너 없음).
- 브라우저에서 3D를 그리는데 렌더러가 기기 성능에 맞춰 규모를 줄이고, 저사양 기기는 2.5D 모드나 Remote Play를 쓸 수 있으며, 데스크톱 번들과 Apple TV 클라이언트는 미출시, Roku는 미지원입니다.
- 1인 개발 프로젝트로 풀 리퀘스트를 받지 않으며(버그 리포트만), 선택형 후원(Ko-fi) 링크가 매장 안에 있습니다.

## 영수증

- TESIGN이 처음 본 시각: 2026-09-13 09:39 UTC
- 출처 등록: 2026-08-03 22:26 UTC
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

[대표 이미지] https://tesign.com/img/halcyon-video-7e3962be22.jpg
