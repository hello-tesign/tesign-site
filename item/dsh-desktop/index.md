# DSH Desktop

> DSH 사용자용 데스크톱 앱 — DeepSeek Harness 코딩 에이전트를 Node 설치 없이 여는 Windows·macOS 클라이언트. 비공식 커뮤니티 프로젝트

- 페이지: https://tesign.com/item/dsh-desktop/
- JSON: https://tesign.com/item/dsh-desktop/index.json
- 영어 마크다운: https://tesign.com/en/item/dsh-desktop/index.md
- 생성 시각: 2026-09-22 06:54 UTC

## 숫자

- 별 28,283 — GitHub에서 2026-09-22 00:38 UTC 확인
- 7일 별 증가 관측 없음 (GH Archive) (기준 2026-09-21 20:00 UTC)
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.

## 한눈에 보는 사실

- 라이선스: MIT (허용적) — https://spdx.org/licenses/MIT.html
- 사용 범위: 상업 이용·수정·재배포 가능. 저작권 고지는 유지.
- 오픈소스: 예
- 언어: TypeScript
- 플랫폼: windows · macos
- 분류: AI
- 태그: deepseek · coding-agent · desktop-client · plugins · windows · macos
- 바로 쓰기: 설치해서 쓰기
- 출처: GitHub https://github.com/anywhere-labs/deepseek-harness-desktop
- INSTALL: https://dshdesktop.cn/

## 활동

- 마지막 커밋: 2026-09-21 14:31 UTC
- 최근 릴리스: v2.0.13 (2026-09-19)
- 기여자: 55
- 열린 이슈 (PR 포함): 343
- 만든 이: 조직
- GitHub 확인 시각: 2026-09-22 00:38 UTC

## 선정 신호와 근거

- 과거 기록

## TESIGN TAKE

DSH를 고정 버전 그대로 돌리고, 창·트레이·업데이트 같은 데스크톱 기능은 같은 플러그인 방식으로 얹은 앱입니다. DeepSeek 비공식이라는 점을 스스로 분명히 밝혀 두었습니다.

## 왜 볼 만한가

이달 소개 목록에서 별이 가장 많은 저장소(2026-09-13 기준 26,127개)이자, DeepSeek Harness(DSH) 생태계 저장소 10개를 대표해 골랐습니다. DSH의 로컬 Web UI·Host 서비스·플러그인 시스템을 고정된 업스트림 버전 그대로 돌리고, 그 위에 창·트레이·터미널·업데이트·작업 프로파일을 얹은 설치형 앱입니다(Windows x64 NSIS 설치 파일, macOS Universal DMG). 데스크톱 셸 자체도 Cordis 기반 DSH 플러그인으로 구현되어 있고 플러그인 마켓(DSH Community Market)이 내장돼 있습니다. DeepSeek와 소속·협력·승인 관계가 없는 독립 커뮤니티 프로젝트라고 README가 명시합니다.

## 이걸로 무엇을 만들 수 있나

- Desktop plugin API로 작업 프로파일 전환이나 플러그인 설치·삭제를 다루는 데스크톱 플러그인을 만들 수 있고, 공개 스키마를 따르는 데이터 소스를 만들어 내장 마켓에 자기 플러그인 목록을 공급할 수 있습니다.

## 누구에게 맞나

- DeepSeek Harness를 쓰고 싶지만 터미널·Node.js 설정이 부담인 사용자 — 설치 후 바로 실행
- 이미 DSH를 쓰는 사용자 — 트레이·작업 프로파일·내장 플러그인 마켓
- 플러그인 개발자 — Desktop plugin API와 마켓 데이터 소스

## 5분 안에 시작하기

```
# 1. Windows x64: https://www.dshdesktop.cn/api/downloads/windows 에서 설치 파일을 받아 NSIS 설치 진행
# 2. macOS Universal: https://www.dshdesktop.cn/api/downloads/mac 에서 DMG를 열고 DSH Desktop을 Applications로 끌어 놓기
# 3. 소스에서 실행: git submodule update --init --recursive
# 4. corepack yarn install --immutable
# 5. corepack yarn dev
```

## 주의할 점

- 라이선스 MIT. Windows x64와 macOS Universal만 지원(Linux 없음). README는 중국어가 기본이고 README.en.md가 있습니다. DeepSeek와 무관한 비공식 프로젝트이며 README에 후원사 섹션(알리바바 클라우드 무영, UCloud, 88API — 제휴 링크 포함)이 있습니다. LAN 노출 옵션은 인증이 없어 같은 네트워크의 누구나 PC를 조작할 수 있다고 README가 경고합니다. 업데이트 확인 시 설치 버전과 무작위 설치 ID를 보냅니다. 모델 API 키·과금은 DSH 업스트림 쪽 사항으로 [확인 필요].

## 영수증

- TESIGN이 처음 본 시각: 2026-09-13 09:24 UTC
- 출처 등록: 2026-08-13 16:30 UTC
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

[대표 이미지] https://tesign.com/img/dsh-desktop-7fdb6c6c27.png
