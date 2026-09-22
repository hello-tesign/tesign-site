# Comp AI CRM

> 에이전트가 기록하는 CRM — AI 에이전트가 자기 일정과 작업 대기열로 고객 정보를 조사·기록하는 오픈소스 CRM. 추측은 기록하지 않습니다.

- 페이지: https://tesign.com/item/trycompai-crm/
- JSON: https://tesign.com/item/trycompai-crm/index.json
- 영어 마크다운: https://tesign.com/en/item/trycompai-crm/index.md
- 생성 시각: 2026-09-22 06:54 UTC

## 순위

- 커머스 분야 2위 (기준 2026-09-21 20:00 UTC)

## 숫자

- 별 10,709 — GitHub에서 2026-09-22 00:38 UTC 확인
- 7일 +6은 GH Archive 관측 (기준 2026-09-21 20:00 UTC)
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.

## 한눈에 보는 사실

- 라이선스: MIT (허용적) — https://spdx.org/licenses/MIT.html
- 사용 범위: 상업 이용·수정·재배포 가능. 저작권 고지는 유지.
- 오픈소스: 예
- 언어: TypeScript
- 플랫폼: web
- 분류: 커머스 · AI
- 태그: crm · ai-agent · sales · typescript · bun · self-hosted
- 바로 쓰기: 직접 서버에
- 출처: GitHub https://github.com/trycompai/crm
- SELF-HOST: https://trycrm.ai/

## 활동

- 마지막 커밋: 2026-09-11 07:06 UTC
- 최근 릴리스: v1.15.3 (2026-08-21)
- 기여자: 6
- 열린 이슈 (PR 포함): 49
- 만든 이: 조직
- GitHub 확인 시각: 2026-09-22 00:38 UTC

## 선정 신호와 근거

- 과거 기록

## TESIGN TAKE

'모르면 비워 둔다'를 도구 설계로 강제한 CRM은 드뭅니다. 틀린 확신보다 빈칸이 낫다는 원칙입니다.

## 왜 볼 만한가

대부분의 CRM은 폼이 달린 데이터베이스이고, AI CRM은 그 옆에 채팅창을 붙인 것입니다. Comp AI CRM은 순서를 뒤집어, 에이전트가 별도 배포로 자기 일정과 작업 대기열(`FOR UPDATE SKIP LOCKED`로 행을 임대)을 돌며 조사 예산 안에서 다음에 볼 것을 스스로 정하고 재확인 일정도 스스로 잡습니다. 18개 도구는 신뢰도 점수를 받지 않고 관찰한 것만 보고하며, 강한 증거는 기록에 쓰고 약한 증거는 사람이 확정하는 제안으로 남깁니다. 외부 API 키가 하나도 없어도 자기 메일 스레드·회의·서명 블록을 읽어 동작합니다.

## 이걸로 무엇을 만들 수 있나

- Google 또는 Microsoft 로그인과 PostgreSQL만 있으면 1인 회사용 CRM으로 띄울 수 있고(`ALLOWED_SIGN_IN`에 내 주소 하나), 도구·스킬이 파일이라 자기 업종에 맞는 조사 규칙을 마크다운으로 덧붙일 수 있습니다.

## 누구에게 맞나

- 소규모 B2B 영업팀 — 메일·회의 기록에서 연락처·회사 정보가 스스로 채워지는 CRM
- 에이전트 제품을 만드는 개발자 — eve 기반 도구·스킬·스케줄·샌드박스 구조의 참고 구현
- 데이터 정확성이 중요한 운영자 — 약한 증거를 제안으로 분리해 사람이 확정

## 5분 안에 시작하기

```
# git clone https://github.com/trycompai/crm.git && cd crm
# cp .env.example .env          # BETTER_AUTH_SECRET, ALLOWED_SIGN_IN, Google 또는 Microsoft OAuth 값 채우기
# bun install && docker compose up -d          # Postgres on :5432
# bun run db:deploy && bun run db:seed        # 마이그레이션 + 선택: 데모 파이프라인
# bun run dev   # 앱 localhost:3000, API localhost:3001
```

## 주의할 점

- 라이선스 MIT. Bun과 Docker가 필요하고, Google 또는 Microsoft OAuth 중 하나(또는 자체 IdP)를 설정해야 로그인이 됩니다. 운영 배포는 앱·API·에이전트 세 개와 PostgreSQL로 나뉘며, 스택은 Vercel(AI Gateway, Sandbox, Blob)·Neon·Upstash를 기준으로 짜여 있어 다른 환경에서의 실행 범위는 [확인 필요]. 회사 브랜드 데이터·LinkedIn 조회는 Context 키, 웹 검색은 Perplexity 키가 있어야 켜집니다(모두 선택). 단일 테넌트 설계이고 텔레메트리는 `CRM_TELEMETRY_DISABLED=1`로 끕니다.

## 영수증

- TESIGN이 처음 본 시각: 2026-09-13 09:14 UTC
- 출처 등록: 2026-07-31 21:38 UTC
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

[대표 이미지] https://tesign.com/img/trycompai-crm-b7a8054d4e.png
