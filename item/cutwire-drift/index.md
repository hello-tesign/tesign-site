# Drift

> 쇼츠·게임 클립 편집 — 구독·워터마크·계정 없이 쇼츠·게임 클립·튜토리얼을 편집하는 멀티트랙 데스크톱 영상 편집기

- 페이지: https://tesign.com/item/cutwire-drift/
- JSON: https://tesign.com/item/cutwire-drift/index.json
- 영어 마크다운: https://tesign.com/en/item/cutwire-drift/index.md
- 생성 시각: 2026-09-21 00:32 UTC

## 숫자

- 별 754 — GitHub에서 2026-09-19 22:59 UTC 확인
- 7일 별 증가 관측 없음 (GH Archive) (기준 2026-09-20 10:00 UTC)
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.

## 한눈에 보는 사실

- 라이선스: GPL-3.0 (카피레프트) — https://spdx.org/licenses/GPL-3.0.html
- 사용 범위: 사용·수정은 자유. 배포하면 소스 공개 의무(카피레프트).
- 오픈소스: 예
- 언어: C++
- 플랫폼: linux · windows · macos · android
- 분류: 미디어
- 태그: video-editor · qt6 · ffmpeg · auto-captions · mcp · flathub
- 바로 쓰기: 설치해서 쓰기
- 출처: GitHub https://github.com/cutwire-studios/drift
- INSTALL: https://cutwire.org/drift

## 활동

- 마지막 커밋: 2026-09-19 18:54 UTC
- 최근 릴리스: v0.6.0 (2026-09-13)
- 기여자: 16
- 열린 이슈 (PR 포함): 43
- 만든 이: 조직
- GitHub 확인 시각: 2026-09-19 22:59 UTC

## 선정 신호와 근거

- 과거 기록

## TESIGN TAKE

'무료 편집기'가 결국 워터마크나 로그인 벽으로 끝나는 패턴을 GPLv3로 정면 거부한 편집기 — 대신 아직 0.x 버전대라는 점은 감안해야 한다.

## 왜 볼 만한가

Qt 6와 FFmpeg로 만든 편집기로, 트림·분할·스냅·리플이 되는 멀티트랙 타임라인과 GPU 효과·전환, 음성에서 만든 뒤 줄 단위로 고칠 수 있는 자동 자막, 피사체 클릭 컷아웃·마스크·그린스크린, 멀티캠까지 한 창에 들어 있다. 로컬 MCP 서버가 내장돼 있어(기본 꺼짐) Cursor나 Claude Code가 열린 프로젝트의 클립을 배치하고 내보낼 수 있다. Flathub·Windows·macOS(Apple Silicon)·Android APK로 배포되며 최신 릴리스는 v0.6.0(2026-09-13)이다.

## 이걸로 무엇을 만들 수 있나

- MCP 서버로 에이전트가 미디어 가져오기·클립 배치·내보내기를 할 수 있으니, 긴 녹화 하나를 쇼츠 여러 개로 자르는 반자동 편집 파이프라인을 붙일 수 있다. GPL-3.0이라 파생물도 소스를 공개해야 한다.

## 누구에게 맞나

- 쇼츠·릴스를 자주 만드는 크리에이터 — 자막 자동 생성 후 줄 단위 수정
- 게임 클립·학교 과제 편집자 — 워터마크 없는 MP4·GIF 내보내기
- AI 에이전트로 편집을 자동화하려는 개발자 — 로컬 MCP 서버(기본 꺼짐)

## 5분 안에 시작하기

```
# flatpak install flathub org.cutwire.Drift
# flatpak run org.cutwire.Drift
# # Windows(.exe/portable zip)·macOS(.dmg, Apple Silicon)·Android(APK)는 GitHub 최신 릴리스에서 받기
# adb install Drift-*-arm64-v8a.apk   # 폰에 설치할 때
```

## 주의할 점

- GPL-3.0 — 수정·재배포 시 소스 공개 의무
- macOS는 Apple Silicon .dmg만 제공; Android는 Play 스토어 없이 APK 사이드로드
- 최신 릴리스 v0.6.0(2026-09-13)으로 아직 0.x 버전대; 폰트·스티커·추가 효과·음성 모델은 앱 안 Addon Manager에서 따로 내려받음

## 영수증

- TESIGN이 처음 본 시각: 2026-09-13 09:42 UTC
- 출처 등록: 2026-07-07 11:08 UTC
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

[대표 이미지] https://tesign.com/img/cutwire-drift-729304548b.png
