# OpenMausBot

> 내 에이전트를 채팅 연락처로 — 내 PC에 설치된 claude·codex·grok CLI를 '연락처'처럼 골라 대화하는 텔레그램식 AI 에이전트 데스크톱 앱

- 페이지: https://tesign.com/item/openmausbot/
- JSON: https://tesign.com/item/openmausbot/index.json
- 영어 마크다운: https://tesign.com/en/item/openmausbot/index.md
- 생성 시각: 2026-09-25 03:06 UTC

## 숫자

- 별 3,549 — GitHub에서 2026-09-25 02:59 UTC 확인
- 7일 별 증가 관측 없음 (GH Archive) (기준 2026-09-23 20:00 UTC)
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.

## 한눈에 보는 사실

- 라이선스: Apache-2.0 (허용적) — https://spdx.org/licenses/Apache-2.0.html
- 사용 범위: 상업 이용·수정·재배포 가능. 고지 유지, 바꾼 부분은 표시.
- 오픈소스: 예
- 언어: TypeScript
- 플랫폼: macos · windows · linux · cli
- 분류: AI
- 태그: ai-agents · electron · claude-code · codex · local-first · mcp
- 바로 쓰기: 설치해서 쓰기
- 출처: GitHub https://github.com/milind-soni/openmausbot
- INSTALL: https://openmausbot.com/

## 활동

- 마지막 커밋: 2026-09-25 02:28 UTC
- 최근 릴리스: v0.1.87 (2026-09-24)
- 기여자: 95
- 열린 이슈 (PR 포함): 305
- 만든 이: 개인
- GitHub 확인 시각: 2026-09-25 02:59 UTC

## 선정 신호와 근거

- 과거 기록

## TESIGN TAKE

여러 에이전트를 '한 명의 비서'가 아니라 '팀 채팅방'으로 다루자는 발상을, 새 클라우드 계정 없이 내 컴퓨터 안에서 구현했습니다.

## 왜 볼 만한가

에이전트가 여럿이면 '상자 하나에 비서 하나'보다 '메신저 속 팀'이 어울린다는 Grok Bot의 발상을, 남의 서버 없이 열린 코드로 다시 만들었습니다. 봇마다 성격·모델·컴퓨터·연결 앱을 따로 두고(작업 폴더는 채널 단위), 셸 명령·파일 수정은 채팅 안 카드에서 허용/거부하며, 대화 기록과 키는 ~/.openmausbot에만 남습니다. macOS용 서명·공증 .dmg, Windows x64 설치기, Ubuntu 24.04 .deb가 릴리스로 나와 있습니다.

## 이걸로 무엇을 만들 수 있나

- server/drivers/에 파일 하나를 더해 새 엔진을 붙이거나, ACP를 말하는 CLI·OpenAI 호환 엔드포인트를 설정만으로 연결할 수 있고, 내장 MCP 서버로 Claude Desktop·Cursor에서 봇 팀을 원격 지휘하는 흐름도 만들 수 있습니다.

## 누구에게 맞나

- 코딩 에이전트 구독자 — 봇별로 모델·성격을 나눠 한 채팅 화면에서 운용
- 1인 사업자 — 메일·슬랙·노션 등을 Composio로 연결해 반복 업무 위임(선택형 외부 서비스)
- 개발자 — 드라이버 SPI로 자체 엔진 추가, MCP로 외부 제어

## 5분 안에 시작하기

```
# git clone https://github.com/milind-soni/OpenMausBot && cd OpenMausBot
# pnpm install
# pnpm dev:server    # harness server → 127.0.0.1:8799
# pnpm dev           # app → http://127.0.0.1:5199
# # 설치형: GitHub Releases의 .dmg / OpenMausBot-setup.exe / .deb, 또는 npm install -g openmausbot 후 openmausbot
```

## 주의할 점

- 라이선스 Apache-2.0(단, enterprise/ 폴더는 별도 소스 공개 라이선스로, 지우면 순수 오픈소스판). 앱은 무료지만 봇은 사용자가 이미 로그인한 claude·codex·grok CLI 구독을 그대로 씁니다. 소스 실행은 Node 24+와 pnpm 필요.
- macOS(Apple silicon·Intel)는 서명·공증 .dmg, Windows x64 설치기는 아직 코드 서명이 없어 SmartScreen 경고가 뜨고, Ubuntu 24.04는 베타(Wayland에서는 로컬 컴퓨터 제어 비활성).
- 클라우드 컴퓨터(Box, 체험 후 유료)·앱 연동(Composio)·음성(ElevenLabs)은 선택형 외부 서비스이며, README는 '초기지만 실제로 동작' 단계라고 밝힙니다.

## 영수증

- TESIGN이 처음 본 시각: 2026-09-13 09:39 UTC
- 출처 등록: 2026-08-11 18:58 UTC
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

[대표 이미지] https://tesign.com/img/openmausbot-eec86b9ec3.png
