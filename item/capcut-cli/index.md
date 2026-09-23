# capcut-cli

> 캡컷 편집파일 CLI 수정 — 업로드 없이 내 컴퓨터 안에서 캡컷·젠잉 편집 프로젝트를 터미널 명령으로 직접 고치는 비공식 도구.

- 페이지: https://tesign.com/item/capcut-cli/
- JSON: https://tesign.com/item/capcut-cli/index.json
- 영어 마크다운: https://tesign.com/en/item/capcut-cli/index.md
- 생성 시각: 2026-09-23 02:05 UTC

## 숫자

- 별 554 — GitHub에서 2026-09-18 07:45 UTC 확인
- 7일 +5은 GH Archive 관측 (기준 2026-09-22 21:00 UTC)
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.

## 한눈에 보는 사실

- 라이선스: MIT (허용적) — https://spdx.org/licenses/MIT.html
- 사용 범위: 상업 이용·수정·재배포 가능. 저작권 고지는 유지.
- 오픈소스: 예
- 언어: JavaScript
- 플랫폼: cli · macos · windows
- 분류: 개발 도구 · 미디어
- 태그: 영상 편집 · cli · 비공식 도구 · 자동화
- 바로 쓰기: 설치해서 쓰기
- 출처: GitHub https://github.com/renezander030/capcut-cli
- INSTALL: https://renezander.com/projects/capcut-cli

## 활동

- 마지막 커밋: 2026-09-18 07:38 UTC
- 최근 릴리스: [확인 필요]
- 기여자: [확인 필요]
- 열린 이슈 (PR 포함): [확인 필요]
- 만든 이: [확인 필요]
- GitHub 확인 시각: 2026-09-18 07:45 UTC

## TESIGN TAKE

상용 편집기 파일을 서버 없이 로컬에서 그대로 다루면서도, 자신이 낸 보안 취약점을 공개적으로 밝히고 빠르게 고쳐 온 점이 눈에 띈다.

## 왜 볼 만한가

캡컷·젠잉은 화면을 눌러 가며 자르고 자막을 넣어야 한다. capcut-cli는 로컬에 저장된 편집 초안 파일(draft_content.json)을 직접 읽고 써서, 자르기·자막·속도 조절 같은 반복 작업을 명령 한 줄이나 스크립트로 끝낸다. 결과는 캡컷에서 그대로 열어 트랙을 계속 편집할 수 있다.

## 이걸로 무엇을 만들 수 있나

- Node.js로 만든 제로 의존성 CLI로, 서버나 업로드 없이 로컬 초안 저장소를 그대로 다룬다. 자막에는 위스퍼, 렌더링에는 FFmpeg를 선택적으로 붙일 수 있고, Claude Code·코덱스 같은 에이전트가 쓸 수 있도록 스킬로도 설치된다.

## 누구에게 맞나

- 캡컷·젠잉으로 짧은 영상을 대량으로 찍어 내는 편집자, 자막·컷 작업을 스크립트로 자동화하고 싶은 사람.

## 5분 안에 시작하기

```
# npm install -g capcut-cli로 설치한 뒤 capcut quickstart my-first --video clip.mp4로 첫 편집 초안을 만들어 캡컷에서 연다.
```

## 주의할 점

- 바이트댄스와 무관한 비공식 프로젝트임을 README에 명확히 밝히고 있다. 0.17.0 이하 버전에는 로컬 명령 주입 취약점이, 0.17.2 이하에는 기기 식별자가 남는 문제가 있었다 — 0.18.0 이상 최신판을 쓸 것.

## 영수증

- TESIGN이 처음 본 시각: 2026-09-18 07:44 UTC
- 출처 등록: 2026-04-13 08:19 UTC
- 선정: 2026-09-23 02:05 UTC
- TESIGN 게재: 2026-09-23 02:05 UTC
- 소개 글 마지막 수정: 2026-09-23 02:05 UTC

## 읽는 법

- 이 파일은 tesign.com 항목 페이지와 같은 빌드에서 같은 데이터로 만들어졌습니다. 소개 글은 편집자가 쓴 것이고, 숫자는 저장된 관측값입니다.
- JSON의 null은 관측하지 않았다는 뜻입니다 — 0이 아닙니다. 마크다운에서는 [확인 필요]로 적습니다.
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.
- 요약이며 법적 조언이 아닙니다.

[대표 이미지] https://tesign.com/img/capcut-cli-fe3aaa5fea.png
