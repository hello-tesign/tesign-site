# Inkstone

> 자가호스팅 마크다운 노트 — 마크다운 메모를 Cloudflare Workers 위에 직접 올려 쓰는 자가호스팅 노트 앱으로, 실시간 동기화와 검색·백링크까지 갖췄습니다.

- 페이지: https://tesign.com/item/inkstone/
- JSON: https://tesign.com/item/inkstone/index.json
- 영어 마크다운: https://tesign.com/en/item/inkstone/index.md
- 생성 시각: 2026-09-21 05:58 UTC

## 숫자

- 별 929 — GitHub에서 2026-09-19 22:59 UTC 확인
- 7일 +8은 GH Archive 관측 (기준 2026-09-21 00:00 UTC)
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.

## 한눈에 보는 사실

- 라이선스: 라이선스 미확인
- 사용 범위: 미확인 — 쓰기 전에 살펴보세요.
- 언어: TypeScript
- 플랫폼: web
- 분류: 생산성
- 태그: markdown · self-hosted · cloudflare-workers · notes · sync
- 바로 쓰기: 직접 서버에
- 출처: GitHub https://github.com/shuaiplus/inkstone
- SELF-HOST: https://inkstone-demo.pages.dev/

## 활동

- 마지막 커밋: 2026-09-14 07:50 UTC
- 최근 릴리스: v0.8.0 (2026-09-14)
- 기여자: 2
- 열린 이슈 (PR 포함): 23
- 만든 이: 개인
- GitHub 확인 시각: 2026-09-19 22:59 UTC

## TESIGN TAKE

"직접 배포해야 쓸 수 있다"는 진입장벽이 있지만, 그 대신 데이터가 진짜로 내 계정 안에만 남는다는 약속은 지킵니다.

## 왜 볼 만한가

Inkstone은 서버 한 대를 따로 관리할 필요 없이, 내 Cloudflare 계정의 Workers·D1·R2 위에서 통째로 돌아가는 마크다운 노트 앱입니다. 노트는 항상 평범한 텍스트로 남고, 그 위에 실시간 미리보기, 전문검색(중국어 인덱싱 포함), 위키링크·백링크, 오프라인 편집과 다중기기 동기화, WebDAV·S3 자동 백업이 얹혀 있습니다. 공개 데모(inkstone-demo.pages.dev)는 화면에 보이는 admin 계정으로 실제로 로그인되고, 새로고침하면 한국어·중국어·영어 시작 노트 두 개로 초기화됩니다(직접 확인함).

## 이걸로 무엇을 만들 수 있나

- 지식·메모를 평범한 마크다운 파일로 쌓아 두고 싶은 사람이 자기 소유의 노트 서버 만들기
- 문서별로 발급하는 MCP API 키로, 코딩 에이전트가 내 노트를 검색·수정하게 하기
- WebDAV·S3로 예약 백업을 걸어 두고 오프사이트 보관하기

## 누구에게 맞나

- 평범한 마크다운 파일로 메모를 남기고 싶은 사람
- Cloudflare 계정이 있고 자기 소유의 노트 서버를 원하는 사람
- 에이전트에게 노트 검색·수정 권한을 주고 싶은 개발자

## 5분 안에 시작하기

```
# 데모 먼저 보기: https://inkstone-demo.pages.dev (화면에 보이는 계정으로 로그인, 새로고침하면 초기화)
# 내 계정에 배포: 저장소 포크 → Cloudflare Workers & Pages에서 GitHub로 연결 → 빌드 명령 npm run build, 배포 명령 npm run deploy
```

## 주의할 점

- LGPL-3.0-only · 실제로 쓰려면 자기 Cloudflare 계정에 직접 배포해야 하며, 공개 데모는 로그인 계정이 정해져 있고 새로고침 시 초기화되는 체험판입니다
- 선택적 시맨틱 검색은 Workers AI가 있어야 동작하고, 없으면 어휘 검색으로만 동작합니다

## 영수증

- TESIGN이 처음 본 시각: 2026-09-15 21:32 UTC
- 출처 등록: 2026-07-30 13:27 UTC
- 선정: 2026-09-17 01:24 UTC
- TESIGN 게재: 2026-09-17 01:24 UTC
- 소개 글 마지막 수정: 2026-09-17 01:26 UTC

## 읽는 법

- 이 파일은 tesign.com 항목 페이지와 같은 빌드에서 같은 데이터로 만들어졌습니다. 소개 글은 편집자가 쓴 것이고, 숫자는 저장된 관측값입니다.
- JSON의 null은 관측하지 않았다는 뜻입니다 — 0이 아닙니다. 마크다운에서는 [확인 필요]로 적습니다.
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.
- 요약이며 법적 조언이 아닙니다.

[대표 이미지] https://tesign.com/img/inkstone-163a482ebb.png
