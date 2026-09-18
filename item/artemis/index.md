# ARTEMIS

> 안드로이드 앱 테스트 자동화 — 말로 적은 지시를 실제 안드로이드 기기에서 돌아가는 테스트로 바꿉니다.

- 페이지: https://tesign.com/item/artemis/
- JSON: https://tesign.com/item/artemis/index.json
- 영어 마크다운: https://tesign.com/en/item/artemis/index.md
- 생성 시각: 2026-09-18 21:08 UTC

## 숫자

- 별 7,140 — GitHub에서 2026-09-17 18:40 UTC 확인 (+40 확인 이후 관측)
- 7일 +820은 GH Archive 관측 (기준 2026-09-18 15:00 UTC)
- 24h +56 ★ · 30d +1,033 ★ (기준 2026-09-18 15:00 UTC)
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.

## 한눈에 보는 사실

- 라이선스: Apache-2.0 (허용적) — https://spdx.org/licenses/Apache-2.0.html
- 사용 범위: 상업 이용·수정·재배포 가능. 고지 유지, 바꾼 부분은 표시.
- 오픈소스: 예
- 언어: Python
- 플랫폼: macos · linux · windows · android · cli
- 분류: AI · 개발 도구
- 태그: android · test-automation · mcp · agents
- 바로 쓰기: 설치해서 쓰기
- 출처: GitHub https://github.com/google/artemis
- INSTALL: https://github.com/google/artemis

## 활동

- 마지막 커밋: 2026-09-12 03:00 UTC
- 최근 릴리스: 릴리스 없음
- 기여자: 8
- 열린 이슈 (PR 포함): 86
- 만든 이: 조직
- GitHub 확인 시각: 2026-09-17 18:40 UTC

## TESIGN TAKE

테스트 스크립트 대신 문장을 넘기고, 진짜 폰이 눌러 본 결과를 받습니다.

## 왜 볼 만한가

안드로이드 앱 테스트는 화면 요소마다 스크립트를 붙여야 해서, 화면이 바뀌면 스크립트도 같이 깨집니다. ARTEMIS는 자연어 지시를 받아 실제 기기나 에뮬레이터를 직접 조작하고, MCP로 Antigravity·Claude Code·Windsurf 같은 도구에서 기기를 부르며 Logcat과 스크린샷을 함께 모읍니다. 시작 스크립트 하나가 ADB·scrcpy·FFmpeg를 깔고 브라우저 콘솔을 띄우며, Apache-2.0으로 공개돼 있습니다. 첫 작업 때 기기에 접근성 도우미 앱을 설치합니다.

## 이걸로 무엇을 만들 수 있나

- 배포 전 로그인·결제 흐름을 실기기에서 돌리는 회귀 테스트
- 버그 제보를 재현해 로그와 화면을 붙여 주는 QA 리포트
- 매일 밤 앱 안정성을 확인하는 장시간 탐색 테스트

## 누구에게 맞나

- 모바일 QA — 화면이 자주 바뀌어 스크립트가 계속 깨질 때
- 앱 개발자 — IDE 안에서 기기 로그와 스크린샷까지 받고 싶을 때
- 1인 앱 개발자 — 별도 QA 없이 배포 전 점검이 필요할 때

## 5분 안에 시작하기

```
$ git clone https://github.com/google/artemis.git && cd artemis
$ ./start.sh
# USB 디버깅을 켠 안드로이드 기기나 에뮬레이터를 먼저 연결
# Windows PowerShell은 .\start.bat · 브라우저에 localhost:8000이 열림
```

## 주의할 점

- 첫 작업 때 기기에 접근성 도우미 앱이 설치됩니다(제거 명령 있음)
- iOS는 로드맵 항목이며 아직 지원하지 않습니다
- Python 3.12+ 와 uv 기반 · 시작 스크립트가 시스템 도구를 자동 설치

## 영수증

- TESIGN이 처음 본 시각: 2026-09-13 07:43 UTC
- 출처 등록: 2026-08-13 17:59 UTC
- 선정: 2026-09-14 02:41 UTC
- TESIGN 게재: 2026-09-14 02:41 UTC
- 소개 글 마지막 수정: 2026-09-15 04:36 UTC

## 읽는 법

- 이 파일은 tesign.com 항목 페이지와 같은 빌드에서 같은 데이터로 만들어졌습니다. 소개 글은 편집자가 쓴 것이고, 숫자는 저장된 관측값입니다.
- JSON의 null은 관측하지 않았다는 뜻입니다 — 0이 아닙니다. 마크다운에서는 [확인 필요]로 적습니다.
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.
- 요약이며 법적 조언이 아닙니다.

[대표 이미지] https://tesign.com/img/artemis-b49e23ea8d.png
