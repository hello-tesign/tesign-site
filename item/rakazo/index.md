# Rakazo

> 팀용 상주 AI 팀원 플랫폼 — 기억·루틴·전용 컴퓨터를 가진 상주형 AI 팀원을 자기 서버에 두는 오픈소스 플랫폼 — 웹·데스크톱·모바일 클라이언트

- 페이지: https://tesign.com/item/rakazo/
- JSON: https://tesign.com/item/rakazo/index.json
- 영어 마크다운: https://tesign.com/en/item/rakazo/index.md
- 생성 시각: 2026-09-23 04:12 UTC

## 숫자

- 별 2,862 — GitHub에서 2026-09-23 01:49 UTC 확인
- 7일 +4은 GH Archive 관측 (기준 2026-09-22 23:00 UTC)
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.

## 한눈에 보는 사실

- 라이선스: Apache-2.0 (허용적) — https://spdx.org/licenses/Apache-2.0.html
- 사용 범위: 상업 이용·수정·재배포 가능. 고지 유지, 바꾼 부분은 표시.
- 오픈소스: 예
- 언어: TypeScript
- 플랫폼: web · macos · linux
- 분류: AI · 생산성
- 태그: ai-agents · self-hosted · docker · electron · expo · sandbox
- 바로 쓰기: 직접 서버에
- 출처: GitHub https://github.com/elie222/rakazo
- SELF-HOST: https://rakazo.com/

## 활동

- 마지막 커밋: 2026-09-23 01:17 UTC
- 최근 릴리스: v0.1.6 (2026-09-08)
- 기여자: 63
- 열린 이슈 (PR 포함): 35
- 만든 이: 개인
- GitHub 확인 시각: 2026-09-23 01:49 UTC

## 선정 신호와 근거

- 과거 기록

## TESIGN TAKE

"AI 팀원"이라는 말은 흔하지만, 봇마다 실제 컴퓨터와 기억을 주고 셀프호스팅을 한 번의 스크립트로 끝낸 점이 다르다 — 단, 베타이고 모델 비용은 전부 사용자 부담이다.

## 왜 볼 만한가

Rakazo는 봇마다 대화·기억·루틴·이력을 유지하고, 브라우저·터미널·파일·GUI 데스크톱에 접근할 수 있는 컴퓨터(Docker·E2B·Daytona·Box)를 붙여 주는 오픈소스 플랫폼이다. 설치는 Docker Engine(Compose 플러그인 포함)·curl·OpenSSL만 있으면 install-images.sh 한 번으로 끝나고 clone이나 Node 설치가 필요 없다. 웹·Electron 데스크톱·Expo 모바일 클라이언트가 같은 API를 쓰며, UI는 한국어를 포함해 9개 언어를 지원한다. 최신 릴리스(v0.1.6)의 데스크톱 파일은 macOS 유니버설 .dmg와 Linux AppImage다.

## 이걸로 무엇을 만들 수 있나

- VPS에 같은 설치 스크립트를 돌리고 SANDBOX_PROVIDER를 e2b·daytona·box로 바꾸면 24시간 켜져 있는 팀 봇 서버가 되고, Composio·Pipedream·MCP·OpenAPI로 사내 도구를 연결한 영업·운영 보조 봇을 만들 수 있다.

## 누구에게 맞나

- 소규모 팀 — 항상 켜져 있는 보조 봇을 자기 서버에 두기
- 자기 데이터를 지키려는 개인 — 모델·샌드박스를 직접 골라 로컬 실행
- 에이전트 플랫폼 개발자 — 웹·Electron·Expo 멀티 클라이언트 구조 참고

## 5분 안에 시작하기

```
# mkdir -p rakazo && cd rakazo &&
# curl -fsSLO https://raw.githubusercontent.com/elie222/rakazo/main/infra/compose/install-images.sh &&
# bash install-images.sh
# # 브라우저에서 http://127.0.0.1:5173 열기 → 계정 생성 → 모델 연결
```

## 주의할 점

- Apache-2.0. Docker Engine·Compose 플러그인·curl·OpenSSL 필요, 이미지는 linux/amd64·arm64. 데스크톱 배포는 v0.1.6 기준 macOS·Linux만 있고 Windows 빌드는 서명 비밀값이 없으면 생략된다고 desktop-release.md가 밝힌다; 모바일 앱의 스토어 등록 여부는 [확인 필요].
- 모델 API 키(OpenRouter 등)와 선택 사항인 E2B·Daytona·Box·음성 서비스 키의 비용은 사용자 부담이고, Treg 도구는 사용량 과금이다.
- README가 "베타"라고 밝힘.

## 영수증

- TESIGN이 처음 본 시각: 2026-09-13 09:38 UTC
- 출처 등록: 2026-08-13 06:28 UTC
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

[대표 이미지] https://tesign.com/img/rakazo-8a284024c4.png
