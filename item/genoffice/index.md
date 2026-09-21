# GenOffice

> MS 오피스 대체 AI 오피스 — 실제 .docx/.xlsx/.pptx와 PDF를 열고 저장하는 무료 데스크톱 오피스 — 문서 옆에 내 API 키로 쓰는 AI 에이전트가 붙어 있습니다.

- 페이지: https://tesign.com/item/genoffice/
- JSON: https://tesign.com/item/genoffice/index.json
- 영어 마크다운: https://tesign.com/en/item/genoffice/index.md
- 생성 시각: 2026-09-21 05:58 UTC

## 순위

-  (기준 2026-09-21 00:00 UTC)

## 숫자

- 별 7,242 — GitHub에서 2026-09-19 22:58 UTC 확인
- 7일 +9은 GH Archive 관측 (기준 2026-09-21 00:00 UTC)
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.

## 한눈에 보는 사실

- 라이선스: Apache-2.0 (허용적) — https://spdx.org/licenses/Apache-2.0.html
- 사용 범위: 상업 이용·수정·재배포 가능. 고지 유지, 바꾼 부분은 표시.
- 오픈소스: 예
- 언어: TypeScript
- 플랫폼: macos · windows · linux · cli
- 분류: 생산성 · AI
- 태그: office-suite · docx · xlsx · pptx · byok · desktop-app
- 바로 쓰기: 설치해서 쓰기
- 출처: GitHub https://github.com/genspark-ai/genoffice
- INSTALL: https://genoffice.ai/

## 활동

- 마지막 커밋: 2026-09-18 07:14 UTC
- 최근 릴리스: v0.10.639 (2026-09-17)
- 기여자: 23
- 열린 이슈 (PR 포함): 68
- 만든 이: 조직
- GitHub 확인 시각: 2026-09-19 22:58 UTC

## 선정 신호와 근거

- 과거 기록

## TESIGN TAKE

'AI 오피스'라는 말보다 중요한 것은 원본 파일을 손대지 않는 저장 방식과 명령줄인데, 이 둘 덕분에 코딩 에이전트가 마크다운 흉내가 아닌 실제 오피스 파일을 만드는 통로가 생겼습니다.

## 왜 볼 만한가

오피스 대체품은 많지만 '파일을 열었다 저장하면 서식이 깨지는' 문제를 GenOffice는 편집한 블록만 다시 쓰고 나머지는 바이트 그대로 복사하는 방식으로 피합니다. 문서마다 AI 패널이 붙어 워드에는 변경 추적으로, 시트에는 살아 있는 수식(예: SUMIF)으로 편집이 들어오고 매 AI 턴은 되돌릴 수 있는 스냅샷입니다. PDF→Word/Excel/PowerPoint 변환과 스캔 OCR(macOS·Windows)은 기기 안에서 처리되고, 모델은 Genspark 로그인 또는 Claude·OpenAI·Gemini·DeepSeek 등 직접 넣는 키(로컬 서버 포함) 중에 고릅니다.

## 이걸로 무엇을 만들 수 있나

- 함께 설치되는 `genoffice` 명령줄과 에이전트 스킬로 Claude Code·Codex·Cursor 등이 창을 열지 않고 실제 .docx/.xlsx/.pptx를 만들고 검사하는 문서 자동화(월간 보고서, 견적서, 슬라이드 초안)를 구성할 수 있습니다. HTML 앱은 디자인 브리프를 먼저 정한 뒤 단일 파일 랜딩 페이지를 만들고 Word·PDF로 내보냅니다.

## 누구에게 맞나

- MS 오피스 없이 .docx/.xlsx/.pptx를 다뤄야 하는 개인·소규모 팀 — 열고 편집하고 원본 서식을 유지한 채 저장
- 문서 작업을 AI에 맡기되 검토하고 싶은 사용자 — 변경 추적·diff·되돌리기, 셀 인용이 붙은 답변
- 코딩 에이전트로 문서 생성을 자동화하는 개발자 — `genoffice` CLI와 스킬로 창 없이 생성·변환·검사

## 5분 안에 시작하기

```
# 1. https://github.com/genspark-ai/genoffice/releases/latest 에서 설치 파일 다운로드 — macOS 11+ (.dmg, arm64/x64), Windows 10+ x64 · Windows 11 on Arm ARM64 (.exe), Linux glibc 2.34+ (.deb/.rpm/.AppImage)
# 2. Linux(Debian/Ubuntu): sudo apt install ./genoffice_<version>_amd64.deb
# 3. 명령줄 확인: genoffice --version
# 4. 코딩 에이전트용 스킬: npx skills add genspark-ai/genoffice
```

## 주의할 점

- 라이선스 Apache-2.0(ee/ 디렉터리는 별도 엔터프라이즈 라이선스; GenOffice·Genspark 이름·로고는 Mainfunc 상표로 허가 범위 밖). 앱 자체는 무료(유료 티어 없음)지만 AI 기능은 네트워크와 Genspark 로그인(홈페이지 표기: Genspark 크레딧) 또는 본인 API 키가 필요하며 모델 비용은 사용자 부담.
- macOS 11+, Windows 10+ x64 · Windows 11 on Arm ARM64, Linux x86_64 glibc 2.34+; macOS·Windows 설치 파일은 서명됨.
- 공식 패키지 빌드는 기본으로 제한적 사용 분석을 전송(문서 내용·파일명·경로는 제외)하며 Settings → General에서 끌 수 있음. README 기준 '활발히 개발 중'.

## 영수증

- TESIGN이 처음 본 시각: 2026-09-13 09:14 UTC
- 출처 등록: 2026-07-31 09:40 UTC
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

[대표 이미지] https://tesign.com/img/genoffice-e358abd2b0.webp
