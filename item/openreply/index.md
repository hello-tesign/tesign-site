# OpenReply

> 인스타그램 댓글 DM 자동화 — 인스타그램 댓글의 키워드를 감지해 공식 Meta API로 DM을 보내는 자체 호스팅 ManyChat 대안.

- 페이지: https://tesign.com/item/openreply/
- JSON: https://tesign.com/item/openreply/index.json
- 영어 마크다운: https://tesign.com/en/item/openreply/index.md
- 생성 시각: 2026-09-18 21:08 UTC

## 순위

- 커머스 분야 6위 · 소셜 분야 19위 (기준 2026-09-18 15:00 UTC)

## 숫자

- 별 2,322 — GitHub에서 2026-09-17 18:41 UTC 확인
- 7일 +2은 GH Archive 관측 (기준 2026-09-18 15:00 UTC)
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.

## 한눈에 보는 사실

- 라이선스: MIT (허용적) — https://spdx.org/licenses/MIT.html
- 사용 범위: 상업 이용·수정·재배포 가능. 저작권 고지는 유지.
- 오픈소스: 예
- 언어: TypeScript
- 플랫폼: web
- 분류: 커머스 · 소셜
- 태그: instagram · comment-to-dm · marketing-automation · self-hosted · nextjs · meta-api
- 바로 쓰기: 직접 서버에
- 출처: GitHub https://github.com/diwenne/openreply
- SELF-HOST: https://openreply.diwen.dev/

## 활동

- 마지막 커밋: 2026-09-14 19:42 UTC
- 최근 릴리스: 릴리스 없음
- 기여자: 22
- 열린 이슈 (PR 포함): 8
- 만든 이: 개인
- GitHub 확인 시각: 2026-09-17 18:41 UTC

## 선정 신호와 근거

- 과거 기록

## TESIGN TAKE

구독 서비스 한 개를 대체하지만, 대신 서버·DB·Meta 앱 심사를 직접 감당해야 합니다.

## 왜 볼 만한가

릴에 'LINK'라고 댓글을 달면 링크를 DM으로 보내 주는 '댓글→DM'은 기능 하나인데, 이 기능을 제공하는 도구는 모두 정기 구독을 요구합니다. OpenReply는 이 흐름을 MIT 소프트웨어로 제공하며, 스크래핑이나 브라우저 자동화 없이 공식 Instagram API(Instagram Login)만 쓰고 비밀번호를 묻지 않습니다. 계정별로 Meta가 문서화한 시간당 750건의 비공개 답장 한도 아래로 속도를 조절하고 초과분은 버리지 않고 대기열에 넣습니다. 추적 링크·팔로우 게이트·스토리 답장 트리거·대시보드 인박스도 포함합니다.

## 이걸로 무엇을 만들 수 있나

- 여러 고객 계정을 워크스페이스·역할로 묶어 소규모 대행사용 댓글 자동화 서비스를 운영할 수 있고, 추적 링크의 클릭·CTR 데이터를 자기 쇼핑몰 캠페인 분석에 연결할 수 있습니다.

## 누구에게 맞나

- 인스타그램으로 상품을 파는 소상공인 — 댓글 키워드에 자동으로 링크 DM 발송
- 크리에이터 — 스토리 답장 'LINK'로 링크 전달, 팔로우 게이트로 팔로워 확보
- 소규모 대행사 — 고객 계정을 워크스페이스로 나눠 운영, 발송 로그 관리

## 5분 안에 시작하기

```
# git clone https://github.com/diwenne/openreply.git
# cd openreply && npm install && cp .env.example .env   # 값 채우기: docs/setup.md
# docker-compose up -d      # starts Postgres and Redis
# npm run db:generate && npm run db:migrate
# npm run dev   # 웹 http://localhost:3000 · 두 번째 터미널에서 npm run worker (실제 DM 발송)
```

## 주의할 점

- 라이선스 MIT. 인스타그램 비즈니스·크리에이터 계정만 연결 가능(개인 계정 불가). 자체 호스팅 전용: PostgreSQL, Redis, 공개 HTTPS URL, 매직링크 로그인용 메일 발송(Resend), 상시 실행되는 워커 프로세스가 필요합니다. openreply.diwen.dev는 대시보드 데모일 뿐 가입해도 DM이 나가지 않습니다. 인스타그램 연결은 직접 Meta 앱을 만들어 심사받거나 유료 후원사 Zernio를 쓰는 두 길이 있고 호스팅 비용은 별도입니다. Meta의 정책·24시간 메시지 창·속도 제한은 그대로 적용됩니다.

## 영수증

- TESIGN이 처음 본 시각: 2026-09-13 09:42 UTC
- 출처 등록: 2026-07-17 02:01 UTC
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

[대표 이미지] https://tesign.com/img/openreply-fe6ded9980.png
