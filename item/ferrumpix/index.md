# FerrumPix

> 사진가용 정리·RAW 편집 — 사진 정리·RAW 현상·레이어 픽셀 편집을 한 창에서 하고 Immich·Nextcloud 서버까지 연결하는 리눅스·윈도우 사진 앱

- 페이지: https://tesign.com/item/ferrumpix/
- JSON: https://tesign.com/item/ferrumpix/index.json
- 영어 마크다운: https://tesign.com/en/item/ferrumpix/index.md
- 생성 시각: 2026-09-21 05:58 UTC

## 숫자

- 별 652 — GitHub에서 2026-09-19 22:59 UTC 확인
- 7일 별 증가 관측 없음 (GH Archive) (기준 2026-09-21 00:00 UTC)
- Show HN 2점 — 2026-09-13 14:16 UTC 관측
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.

## 한눈에 보는 사실

- 라이선스: GPL-3.0 (카피레프트) — https://spdx.org/licenses/GPL-3.0.html
- 사용 범위: 사용·수정은 자유. 배포하면 소스 공개 의무(카피레프트).
- 오픈소스: 예
- 언어: Visual Basic .NET
- 플랫폼: linux · windows · macos
- 분류: 미디어
- 태그: photo-editor · raw · immich · nextcloud · avalonia · dotnet
- 바로 쓰기: 설치해서 쓰기
- 출처: Show HN https://github.com/Bitpainter75/FerrumPix
- INSTALL: https://ferrumpix.app/

## 활동

- 마지막 커밋: 2026-09-19 22:32 UTC
- 최근 릴리스: 0.9.46 (2026-09-17)
- 기여자: 3
- 열린 이슈 (PR 포함): 3
- 만든 이: 개인
- GitHub 확인 시각: 2026-09-19 22:59 UTC

## 선정 신호와 근거

- 과거 기록

## TESIGN TAKE

네 개 프로그램을 오가던 사진 작업을 한 앱에 넣되, 서버도 모델도 전부 내 손안에 두겠다는 1인 개발자의 작품입니다.

## 왜 볼 만한가

라이브러리 앱, RAW 컨버터, 픽셀 편집기, 서버 웹 화면을 오가던 사진 작업을 한 앱에 넣고 전부 내 컴퓨터 안에서 끝냅니다. 렌즈 왜곡·색수차·주변부 어두움은 Lensfun 측정 데이터(1500개 이상 렌즈, 1000개 이상 카메라 바디)로 보정하고, Lightroom·darktable·digiKam 사이드카의 별점·키워드도 읽어 옵니다. 드물게 VB.NET으로, Avalonia UI와 .NET 10 위에서 1인 개발자가 만들었습니다.

## 이걸로 무엇을 만들 수 있나

- 상품 사진을 일괄 리사이즈·워터마크·포맷 변환해 Immich로 바로 내보내는 작업 흐름을 꾸릴 수 있고, GPL-3.0이므로 포크해 자체 사진 도구를 만드는 것도 가능합니다(같은 라이선스로 공개).

## 누구에게 맞나

- 취미 사진가 — 폴더 탐색·별점·RAW 현상·보정을 한 앱에서
- Immich·Nextcloud 자체 호스팅 사용자 — 서버 사진을 데스크톱에서 열어 편집·업로드·메타데이터 동기화
- 쇼핑몰 운영자 — 상품 사진 일괄 리사이즈·워터마크·변환

## 5분 안에 시작하기

```
# # Linux: GitHub Releases에서 FerrumPix-x86_64.AppImage / .flatpak / -amd64.deb / -x86_64.rpm 내려받기 (Arch: AUR ferrumpix-bin)
# # Windows: Microsoft Store 또는 FerrumPix-win-x64-Setup.exe
# # 소스 빌드 (.NET SDK 10 이상)
# dotnet build FerrumPix.sln
# dotnet run --project FerrumPix.vbproj
```

## 주의할 점

- 라이선스 GPL-3.0-only. 리눅스·윈도우 x64가 정식이고 ARM64·macOS 빌드는 미검증 실험판이며, macOS 앱은 서명이 없어 터미널에서 격리 해제 명령을 직접 실행해야 합니다.
- libmpv(영상)·libraw(RAW)가 필수이고, 객체 선택·인물 검색 등 8개 기능은 설정에서 모델 파일을 따로 내려받아야 켜집니다. 얼굴 비교 모델(InsightFace 가중치)은 비상업 연구용으로 제한됩니다.
- README가 이름을 밝힌 UI 언어 16개에 한국어는 없습니다(내장 21개 중 나머지 5개는 [확인 필요]). 활발히 개발 중이며 안정성·성능 작업이 진행 중이라고 밝힙니다.

## 영수증

- TESIGN이 처음 본 시각: 2026-09-13 14:16 UTC
- 출처 등록: 2026-08-19 22:22 UTC
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

[대표 이미지] https://tesign.com/img/ferrumpix-e40c0c84b0.webp
