# oauthcli

> 개발자용 OAuth 서버 점검 — OAuth·OIDC 서버가 무엇을 지원하는지 확인하고 RFC 기준으로 검사합니다.

- 페이지: https://tesign.com/item/oauthcli/
- JSON: https://tesign.com/item/oauthcli/index.json
- 영어 마크다운: https://tesign.com/en/item/oauthcli/index.md
- 생성 시각: 2026-09-18 06:40 UTC

## 숫자

- 별 2 — GitHub에서 2026-09-17 18:40 UTC 확인
- 7일 별 증가 관측 없음 (GH Archive) (기준 2026-09-18 01:00 UTC)
- Show HN 5점 — 2026-09-17 23:53 UTC 관측
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.

## 한눈에 보는 사실

- 라이선스: 라이선스 미확인
- 사용 범위: 미확인 — 쓰기 전에 살펴보세요.
- 언어: Go
- 플랫폼: windows · macos · linux · cli
- 분류: 보안 · 개발 도구
- 태그: oauth · oidc · cli · security
- 바로 쓰기: 설치해서 쓰기
- 출처: Show HN https://github.com/Southclaws/oauthcli
- INSTALL: https://github.com/Southclaws/oauthcli

## 활동

- 마지막 커밋: 2026-09-13 12:43 UTC
- 최근 릴리스: v1.0.0 (2026-09-12)
- 기여자: 1
- 열린 이슈 (PR 포함): 0
- 만든 이: 개인
- GitHub 확인 시각: 2026-09-17 18:40 UTC

## 선정 신호와 근거

- 신규 · 생성 1h 만에 포착

## TESIGN TAKE

'우리 서버가 표준을 지키나'를 RFC 조항 단위 판정으로 바꿔 줍니다.

## 왜 볼 만한가

OAuth 서버를 붙일 때는 문서와 실제 동작이 다른 지점을 토큰을 손으로 주고받으며 찾게 됩니다. oauthcli는 인가 서버가 공개한 메타데이터를 읽고 RFC별 적합성을 판정하며, 모든 grant로 토큰을 받아 해독·검증하고 브라우저·디바이스 플로우와 동적 클라이언트 등록까지 명령 하나씩으로 돌립니다. 모든 명령에 --format json이 있고 종료 코드가 판정을 담아 에이전트도 같은 도구를 씁니다. Go로 설치하며 명세 원문이 바이너리에 들어 있고, README에 라이선스는 표기돼 있지 않습니다.

## 이걸로 무엇을 만들 수 있나

- 배포 전에 인가 서버 적합성을 검사하는 CI 단계
- 신규 IdP 도입 검토용 RFC 지원 현황 보고서
- 에이전트가 토큰을 받아 API를 시험하는 자동화 스킬

## 누구에게 맞나

- 백엔드 개발자 — 인가 서버 연동에서 어디가 어긋나는지 찾을 때
- 보안 담당자 — 사내 IdP의 RFC 적합성을 점검할 때
- 에이전트 개발자 — 에이전트에 토큰 발급을 맡길 때

## 5분 안에 시작하기

```
$ go install github.com/Southclaws/oauthcli@latest
$ oauthcli discover https://accounts.google.com     # what does this issuer publish and support?
$ oauthcli check https://accounts.google.com        # is it conformant? one verdict per RFC
# Go 툴체인 필요 · 실행 파일 이름은 oauthcli
```

## 주의할 점

- README에 라이선스가 표기돼 있지 않습니다
- Go 툴체인으로 설치합니다(바이너리 배포는 README에 없음)
- --register 같은 상태를 만드는 검사는 opt-in입니다

## 영수증

- TESIGN이 처음 본 시각: 2026-09-13 12:59 UTC
- 출처 등록: 2026-09-13 11:53 UTC
- 선정: 2026-09-14 02:41 UTC
- 소개 글 마지막 수정: 2026-09-15 04:36 UTC

## 읽는 법

- 이 파일은 tesign.com 항목 페이지와 같은 빌드에서 같은 데이터로 만들어졌습니다. 소개 글은 편집자가 쓴 것이고, 숫자는 저장된 관측값입니다.
- JSON의 null은 관측하지 않았다는 뜻입니다 — 0이 아닙니다. 마크다운에서는 [확인 필요]로 적습니다.
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.
- 요약이며 법적 조언이 아닙니다.

[대표 이미지] https://tesign.com/img/og/oauthcli.png
