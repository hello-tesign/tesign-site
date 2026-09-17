# Talivia

> 창업자용 매출 연결 웹 분석 — 방문 기록과 세션 리플레이를 Stripe 등 결제 매출과 연결해 보여 주는 자체 호스팅 웹 분석.

- 페이지: https://tesign.com/item/talivia/
- JSON: https://tesign.com/item/talivia/index.json
- 영어 마크다운: https://tesign.com/en/item/talivia/index.md
- 생성 시각: 2026-09-17 19:00 UTC

## 순위

- 커머스 분야 5위 (기준 2026-09-17 13:00 UTC)

## 숫자

- 별 2,416 — GitHub에서 2026-09-17 18:41 UTC 확인
- 7일 별 증가 관측 없음 (GH Archive) (기준 2026-09-17 13:00 UTC)
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.

## 한눈에 보는 사실

- 라이선스: MIT (허용적) — https://spdx.org/licenses/MIT.html
- 사용 범위: 상업 이용·수정·재배포 가능. 저작권 고지는 유지.
- 오픈소스: 예
- 언어: TypeScript
- 플랫폼: web
- 분류: 데이터 · 커머스
- 태그: web-analytics · session-replay · revenue-attribution · stripe · self-hosted · postgresql
- 바로 쓰기: 직접 서버에
- 출처: GitHub https://github.com/talivia-group/talivia
- SELF-HOST: https://talivia.com/

## 활동

- 마지막 커밋: 2026-09-16 07:37 UTC
- 최근 릴리스: 릴리스 없음
- 기여자: 1
- 열린 이슈 (PR 포함): 0
- 만든 이: 조직
- GitHub 확인 시각: 2026-09-17 18:41 UTC

## 선정 신호와 근거

- 과거 기록

## TESIGN TAKE

오픈소스 판은 클라우드 제품의 부분집합이라고 README가 먼저 밝힙니다. 그 범위 안에서는 자기 서버에 두는 매출 귀속 도구로 쓸 수 있습니다.

## 왜 볼 만한가

페이지뷰만 세는 분석 도구는 어느 방문이 돈이 되었는지 말해 주지 않습니다. Talivia 오픈소스 판은 핵심 웹 분석과 세션 리플레이에 Stripe·LemonSqueezy·Polar·Dodo·Yolfi 또는 수동 결제 API의 고객 매출을 붙여, 구독 생애주기·환불·분쟁과 첫/마지막 접점 귀속을 함께 보관합니다. 필수 설정은 `DATABASE_URL`과 `APP_SECRET` 둘뿐이고 `docker compose up --build -d`로 시작합니다.

## 이걸로 무엇을 만들 수 있나

- 온라인 쇼핑몰에 추적 스니펫을 넣고 결제 웹훅을 연결하면 어느 유입 채널이 실제 매출을 냈는지 보여 주는 자기 소유의 매출 귀속 대시보드가 됩니다. 수동 결제 API로 지원 목록 밖의 결제도 기록할 수 있습니다.

## 누구에게 맞나

- SaaS·디지털 상품을 파는 1인 창업자 — 어느 채널의 방문이 결제로 이어졌는지 확인
- 자체 호스팅을 선호하는 운영자 — 방문·리플레이·매출 데이터를 자기 PostgreSQL에 보관
- 마케팅 담당자 — 세션 리플레이로 결제 직전 이탈 지점 확인

## 5분 안에 시작하기

```
# cp .env.example .env
# openssl rand -hex 32          # 결과 값을 APP_SECRET에 넣기
# docker compose up --build -d
# docker compose ps
# # http://localhost:3000 에서 admin / admin 으로 로그인 후 Settings → Account에서 즉시 암호 변경
```

## 주의할 점

- 라이선스 MIT. 오픈소스 판은 talivia.com 유료 제품의 자체 호스팅 부분집합이며 Google Search Console·Bing·GitHub 활동·소셜 언급 연동은 클라우드 전용입니다. 빈 PostgreSQL이 필요하고 호스팅 DB에서 옮겨 오는 경로는 없습니다. 초기 계정이 admin/admin이라 첫 로그인 뒤 바로 바꿔야 하고, 리버스 프록시 뒤에서는 Host·X-Forwarded-Proto 헤더를 전달해야 결제 웹훅 URL이 맞게 만들어집니다. 소프트웨어 비용 없음, 서버 비용만 부담.

## 영수증

- TESIGN이 처음 본 시각: 2026-09-13 09:14 UTC
- 출처 등록: 2026-07-29 07:56 UTC
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

[대표 이미지] https://tesign.com/img/talivia-9aa2dcc6ae.png
