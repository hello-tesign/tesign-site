# OpenHunterAI

> 로컬 AI 보안 점검 — 내가 소유하거나 테스트 허가를 받은 웹·API 서비스만을 대상으로, 공격자 시각의 보안 점검을 로컬 워크스페이스에서 돌리는 알파 단계 도구입니다.

- 페이지: https://tesign.com/item/openhunterai/
- JSON: https://tesign.com/item/openhunterai/index.json
- 영어 마크다운: https://tesign.com/en/item/openhunterai/index.md
- 생성 시각: 2026-09-17 01:30 UTC

## 숫자

- 별 165 — GitHub에서 2026-09-15 03:29 UTC 확인 (+2 확인 이후 관측)
- 7일 +15은 GH Archive 관측 (기준 2026-09-16 21:00 UTC)
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.

## 한눈에 보는 사실

- 라이선스: 라이선스 미확인
- 사용 범위: 미확인 — 쓰기 전에 살펴보세요.
- 언어: TypeScript
- 플랫폼: web · cli
- 분류: 보안 · AI
- 태그: security-testing · ai-red-team · local-first · authorized-testing · alpha
- 바로 쓰기: 직접 서버에
- 출처: GitHub https://github.com/lumoslab-innovation/openhunterai
- SELF-HOST: https://lumoslab-innovation.github.io/OpenHunterAI

## 활동

- 마지막 커밋: 2026-09-14 13:22 UTC
- 최근 릴리스: [확인 필요]
- 기여자: [확인 필요]
- 열린 이슈 (PR 포함): [확인 필요]
- 만든 이: [확인 필요]
- GitHub 확인 시각: 2026-09-15 03:29 UTC

## TESIGN TAKE

스스로 "알파"라 부르고 "빈 리포트가 안전의 증거는 아니다"라고 먼저 말해 두는 보안 도구는 드물어서, 그 정직함이 오히려 신뢰를 줍니다.

## 왜 볼 만한가

OpenHunterAI는 범위(scope)·스캔 기록·발견 사항·개선 가이드를 계정 가입 없이 하나의 로컬 워크스페이스에 모읍니다. 도메인 소유를 확인하고 스캔 계획에 사람이 승인한 뒤에만 진행되며, 브라우저 조사·정찰·ZAP·Nuclei 어댑터로 신호를 모아 AI가 가설을 검증합니다. README가 스스로 밝히듯 아직 알파 단계라 "깨끗한 워크스페이스나 빈 리포트가 대상이 안전하다는 증거는 아니"며, 파괴적 동작은 하지 않고 민감한 검증에는 별도 승인이 필요합니다.

## 이걸로 무엇을 만들 수 있나

- 내가 운영하는 웹앱·API에 대해, 배포 전 공격자 관점의 점검 목록을 로컬에서 돌려보기
- 코딩 에이전트(Codex·Claude Code·Gemini CLI 등)에 스킬로 연결해, 승인 후에만 점검이 시작되게 워크플로 짜기
- 점검 결과를 사람이 다시 검증하는 리테스트 절차의 참고 템플릿으로 쓰기

## 누구에게 맞나

- 자기 서비스의 보안을 정기적으로 점검하고 싶은 소규모 팀
- 코딩 에이전트에게 승인 기반으로 보안 점검을 맡겨 보고 싶은 개발자
- 인가된 대상에 한해 정찰 도구를 직접 다뤄 보고 싶은 사람

## 5분 안에 시작하기

```
# 요구사항: Git·Node.js 22 이상·Docker(Compose v2)
$ git clone https://github.com/LumosLab-Innovation/OpenHunterAI.git
$ cd OpenHunterAI
$ node ops/local.mjs start
# → http://localhost:3001 접속 후 .env.local에 모델 키 설정 → 프로젝트 생성 → 도메인 인증 → 범위 승인 후 스캔 시작
# (스캔 전에 Nuclei 템플릿 정책 이슈를 문서에서 먼저 확인해야 합니다)
```

## 주의할 점

- PolyForm Noncommercial 1.0.0 — 소스공개이며 상업적 이용은 별도 라이선스가 필요합니다
- 알파 단계이며, README가 직접 "빈 리포트가 안전을 보장하지 않는다"고 밝힙니다
- "로컬에서 돈다"는 것이 localhost나 사내망을 스캔해도 된다는 뜻은 아니라고 명시되어 있고, Nuclei 어댑터는 아직 검수된 템플릿 묶음이 제공되지 않습니다

## 영수증

- TESIGN이 처음 본 시각: 2026-09-14 23:20 UTC
- 출처 등록: 2026-05-25 17:58 UTC
- 선정: 2026-09-17 01:24 UTC
- TESIGN 게재: 2026-09-17 01:24 UTC
- 소개 글 마지막 수정: 2026-09-17 01:26 UTC

## 읽는 법

- 이 파일은 tesign.com 항목 페이지와 같은 빌드에서 같은 데이터로 만들어졌습니다. 소개 글은 편집자가 쓴 것이고, 숫자는 저장된 관측값입니다.
- JSON의 null은 관측하지 않았다는 뜻입니다 — 0이 아닙니다. 마크다운에서는 [확인 필요]로 적습니다.
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.
- 요약이며 법적 조언이 아닙니다.

[대표 이미지] https://tesign.com/img/openhunterai-0f4f939d83.png
