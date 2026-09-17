# ZenConverter

> 안드로이드 기기 내 파일 변환 — 영상·음성·이미지·PDF·폰트를 폰 안에서만 변환하는 안드로이드 앱 — 업로드 없음, 광고 없음

- 페이지: https://tesign.com/item/zenconverter/
- JSON: https://tesign.com/item/zenconverter/index.json
- 영어 마크다운: https://tesign.com/en/item/zenconverter/index.md
- 생성 시각: 2026-09-17 01:30 UTC

## 숫자

- 별 1,364 — GitHub에서 2026-09-15 19:35 UTC 확인
- 7일 +13은 GH Archive 관측 (기준 2026-09-16 21:00 UTC)
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.

## 한눈에 보는 사실

- 라이선스: AGPL-3.0 (카피레프트) — https://spdx.org/licenses/AGPL-3.0.html
- 사용 범위: 사용·수정은 자유. 배포는 물론 네트워크 서비스로 제공해도 소스 공개.
- 오픈소스: 예
- 언어: Kotlin
- 플랫폼: android
- 분류: 생산성 · 미디어
- 태그: android · kotlin · jetpack-compose · ffmpeg · file-converter · local-first
- 바로 쓰기: 설치해서 쓰기
- 출처: GitHub https://github.com/jasonzhu1207/zenconverter
- INSTALL: https://zenconverter.xlab.my/

## 활동

- 마지막 커밋: 2026-09-14 16:01 UTC
- 최근 릴리스: pre-release (2026-09-14) · 프리릴리스
- 기여자: 4
- 열린 이슈 (PR 포함): 2
- 만든 이: 개인
- GitHub 확인 시각: 2026-09-15 19:35 UTC

## 선정 신호와 근거

- 과거 기록

## TESIGN TAKE

'업로드 먼저' 관행을 거부하고 지원 범위와 한계를 표로 공개한 점이 핵심이며, 그 대가로 큰 영상은 폰의 저장 공간·메모리·배터리를 그대로 요구한다.

## 왜 볼 만한가

안드로이드 변환 앱은 광고가 많거나 파일을 먼저 서버에 올리는 경우가 흔한데, 이 앱은 Kotlin/Jetpack Compose로 만들어 모든 변환을 기기 안 포그라운드 서비스에서 처리한다. 영상(MP4/MKV/MOV)과 음성(MP3/M4A/WAV/FLAC/OPUS)은 FFmpeg로 실제 재인코딩하고, HEIC 포함 이미지, PDF 병합·압축·암호화, TTF/OTF/WOFF2 폰트, SRT/VTT/LRC/ASS 자막까지 다루며 Real-ESRGAN 업스케일은 NCNN Vulkan으로 돈다. INTERNET 권한은 수동 업데이트 확인과 모델·폰트 내려받기에만 쓰고, 지원 범위와 한계는 공개 support-matrix.md에 적어 둔다(v0.2.3, 2026-09-12).

## 이걸로 무엇을 만들 수 있나

- AGPL 소스라 특정 용도만 남긴 경량 포크(예: 상품 사진 일괄 WEBP 변환 + 메타데이터 제거)를 만들 수 있고, 포그라운드 서비스 → 엔진 라우팅 → 저장의 큐 구조는 다른 안드로이드 미디어 앱의 참고 설계로 쓸 수 있다.

## 누구에게 맞나

- 폰에서 바로 영상 용량을 줄이거나 GIF로 바꾸려는 사용자 — 서버 업로드 없이
- 사진 메타데이터를 지우고 공유하려는 사람 — JPG는 재인코딩 없이 정리, 백업으로 복원 가능
- 안드로이드 미디어 앱 개발자 — Compose + 포그라운드 서비스 + FFmpeg 파이프라인 참고

## 5분 안에 시작하기

```
# 1. Google Play(패키지 org.zenconverter.app) 또는 GitHub Releases의 APK로 설치
# 2. 파일 선택 → 파일별 출력 형식·옵션 지정 → 큐에 추가하면 포그라운드 서비스가 변환
# # 개발 환경은 docs/development-setup.md 참고 — 빌드 명령은 README에 없음 [확인 필요]
```

## 주의할 점

- AGPL-3.0 — README 원문은 'GNU AGPL v3.0 or later', 홈페이지는 'AGPL-3.0+' (서드파티 라이브러리·네이티브 바이너리·번들 폰트는 각자 라이선스)
- 안드로이드 전용; 최소 지원 Android 버전은 README에 없음 [확인 필요]
- Office 변환은 베타(레이아웃 재현 제한, 원본 64 MiB 상한), 프레임 보간은 실험 단계; 대용량 영상은 저장 공간·메모리·전원 여유가 필요

## 영수증

- TESIGN이 처음 본 시각: 2026-09-13 09:39 UTC
- 출처 등록: 2026-07-09 09:29 UTC
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

[대표 이미지] https://tesign.com/img/zenconverter-1e5195cf95.png
