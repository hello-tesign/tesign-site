# OpenAnalytics

> 운영자용 쿠키 없는 웹 분석 — 쿠키 없이 방문자·매출 귀속을 보는 셀프호스팅 웹 분석. Plausible 대안, MCP 서버와 CLI 포함

- 페이지: https://tesign.com/item/openanalytics/
- JSON: https://tesign.com/item/openanalytics/index.json
- 영어 마크다운: https://tesign.com/en/item/openanalytics/index.md
- 생성 시각: 2026-09-22 05:53 UTC

## 숫자

- 별 549 — GitHub에서 2026-09-22 00:38 UTC 확인
- 7일 별 증가 관측 없음 (GH Archive) (기준 2026-09-21 20:00 UTC)
- Show HN 10점 — 2026-09-13 14:24 UTC 관측
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.

## 한눈에 보는 사실

- 라이선스: AGPL-3.0 (카피레프트) — https://spdx.org/licenses/AGPL-3.0.html
- 사용 범위: 사용·수정은 자유. 배포는 물론 네트워크 서비스로 제공해도 소스 공개.
- 오픈소스: 예
- 언어: TypeScript
- 플랫폼: web · linux · cli
- 분류: 데이터
- 태그: web-analytics · privacy · self-hosted · clickhouse · mcp · agpl
- 바로 쓰기: 직접 서버에
- 출처: Show HN https://github.com/OpenLabs-so/openanalytics · GitHub https://github.com/openlabs-so/openanalytics
- SELF-HOST: https://getopen.so/

## 활동

- 마지막 커밋: 2026-09-19 08:26 UTC
- 최근 릴리스: v0.8.0 (2026-09-19)
- 기여자: 4
- 열린 이슈 (PR 포함): 0
- 만든 이: 조직
- GitHub 확인 시각: 2026-09-22 00:38 UTC

## 선정 신호와 근거

- 교차 신호 · Show HN + GitHub
- 과거 기록

## TESIGN TAKE

Plausible식 프라이버시 분석에 매출 귀속과 MCP 서버를 더하고, 직접 돌릴지 월 9달러부터 맡길지 고르게 한 제품입니다.

## 왜 볼 만한가

쿠키·핑거프린팅·사이트 간 식별자를 쓰지 않고, 방문자 식별은 매일 바뀌는 솔트 해시로만 하며 원본 IP는 저장하지 않습니다. 그런데도 자기 Stripe 계정의 매출을 유입 경로별로 붙여 보고, 퍼널·리텐션·웹 바이탈·공개 공유 링크·MCP 서버·CLI(oa)까지 한 저장소에 들어 있습니다. 셀프호스팅은 ghcr.io에 올라간 이미지 10개를 docker compose pull && up -d로 받는 방식이라 빌드 도구가 필요 없고, 저자들이 운영하는 getopen.so는 같은 코드를 호스팅으로 제공합니다.

## 이걸로 무엇을 만들 수 있나

- MCP 서버를 AI 어시스턴트에 연결해 '이번 주 어느 유입 경로가 결제로 이어졌나'를 대화로 묻는 사내 리포트 봇을 만들 수 있고, packages/contracts의 OpenAPI 문서로 자체 대시보드나 위젯을 붙일 수 있습니다.

## 누구에게 맞나

- 개인 프로젝트·소규모 사이트 운영자 — 쿠키 배너 없이 방문자 통계
- Stripe로 결제받는 SaaS·쇼핑몰 — 유입 경로별 매출 귀속과 퍼널
- 개발팀 — MCP 서버·CLI로 AI 에이전트나 스크립트에 통계 연결

## 5분 안에 시작하기

```
# git clone https://github.com/OpenLabs-so/openanalytics
# cd openanalytics
# git checkout "$(git tag -l 'v*' --sort=-v:refname | sed '/-/d' | head -1)"   # newest release, not main
# cd infra/selfhost
# ./generate-secrets.sh --domain example.com --email you@example.com --with-geoip
# docker compose pull && docker compose up -d
```

## 주의할 점

- 라이선스 AGPL-3.0 — 수정한 버전을 네트워크 서비스로 운영하면 이용자에게 수정 소스를 제공해야 합니다. 셀프호스팅은 Docker가 있는 Linux 호스트, DNS 레코드 4개(app·api·c·rt), 약 4 GB RAM과 25 GB 디스크가 필요하고 공식 이미지는 amd64만(arm64는 직접 빌드, 약 10분). 마이그레이션은 되돌릴 수 없어 롤백은 스냅샷 복원입니다. 호스팅판(getopen.so)은 무료 플랜 없이 7일 체험(카드 등록) 후 Starter 월 9달러(이벤트 5만 건·사이트 1개)부터. AI 어시스턴트는 OPENAI_API_KEY가 필요한 선택 기능.

## 영수증

- TESIGN이 처음 본 시각: 2026-09-13 14:25 UTC
- 출처 등록: 2026-08-13 14:00 UTC
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

[대표 이미지] https://tesign.com/img/openanalytics-54526da961.png
