# nurb

> 3D 프린터용 대화형 CAD — 3D 프린팅할 부품을 말로 설명하면 AI가 진짜 CAD 솔리드로 만들고, 인쇄 가능성 검사 뒤 3MF로 내보냅니다.

- 페이지: https://tesign.com/item/nurb/
- JSON: https://tesign.com/item/nurb/index.json
- 영어 마크다운: https://tesign.com/en/item/nurb/index.md
- 생성 시각: 2026-09-23 04:12 UTC

## 숫자

- 별 554 — GitHub에서 2026-09-23 01:49 UTC 확인
- 7일 별 증가 관측 없음 (GH Archive) (기준 2026-09-22 23:00 UTC)
- Show HN 2점 — 2026-09-13 14:48 UTC 관측
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.

## 한눈에 보는 사실

- 라이선스: 라이선스 미확인
- 사용 범위: 미확인 — 쓰기 전에 살펴보세요.
- 언어: Python
- 플랫폼: macos · cli
- 분류: 하드웨어 · AI
- 태그: 3d-printing · cad · ai-agent · occt · python · cli
- 바로 쓰기: 설치해서 쓰기
- 출처: Show HN https://github.com/Shpigford/nurb
- INSTALL: https://nurb.dev/

## 활동

- 마지막 커밋: 2026-09-16 13:17 UTC
- 최근 릴리스: v0.26.0 (2026-09-05)
- 기여자: 11
- 열린 이슈 (PR 포함): 15
- 만든 이: 개인
- GitHub 확인 시각: 2026-09-23 01:49 UTC

## 선정 신호와 근거

- 과거 기록

## TESIGN TAKE

AI CAD의 진짜 병목은 모델링이 아니라 '인쇄가 되는지'인데, nurb는 그 검사를 도구로 만들었습니다.

## 왜 볼 만한가

nurb의 부품은 메시가 아니라 OCCT 커널 위의 진짜 B-rep 솔리드(build123d)여서 챔퍼·필렛이 실제 연산이고 STEP으로 Fusion이나 FreeCAD에서 열립니다. AI는 눈이 없으므로 `nurb check`가 오버행·얇은 벽·떠 있는 영역·휨 위험 등 13가지 규칙을 정확한 솔리드에 대해 돌리고, 발견 사항을 해당 면에 좌표로 붙입니다. 이미 구독 중인 AI로 로컬에서만 동작하며 계정이나 클라우드가 없습니다.

## 이걸로 무엇을 만들 수 있나

- 집 안의 어긋난 부품(청소기 호스 어댑터, 선반 브래킷)을 치수만 재서 말로 주문하는 개인 제작 흐름을 만들 수 있고, `nurb check --strict`를 CI에 넣어 부품 라이브러리의 인쇄 가능성을 자동 검사하는 파이프라인도 꾸릴 수 있습니다.

## 누구에게 맞나

- 3D 프린터를 가진 메이커 — 말로 설명해 맞춤 부품 설계·출력
- CAD를 배우지 않은 취미가 — 슬라이더로 치수만 조정해 변형 부품 제작
- AI 에이전트를 쓰는 개발자 — 부품을 파이썬 함수로 두고 CLI로 빌드·검사·내보내기

## 5분 안에 시작하기

```
# Mac 앱: GitHub Releases에서 nurb.dmg(Apple silicon) 또는 nurb-intel.dmg 내려받기
# curl -fsSL https://nurb.dev/install.sh | sh   # 명령줄 한 줄 설치(uv·nurb·에이전트 스킬 모두)
# # 또는: uv tool install nurb   (또는 pip install nurb) — 이 경우 스킬은 아래 줄로 따로 설치
# npx skills add shpigford/nurb --skill nurb   # 에이전트 스킬 설치
# nurb update   # nurb와 설치된 에이전트 스킬을 함께 업그레이드
```

## 주의할 점

- 라이선스는 FSL-1.1-MIT(LICENSE 파일 확인): 경쟁 제품을 만드는 용도를 제외하면 소스 이용 가능이고 각 릴리스는 2년 뒤 MIT로 전환됩니다. 통상의 오픈소스 라이선스와 다르니 상업 이용 전 조문을 읽어야 합니다. 첫 빌드는 CAD 커널 로딩으로 약 45초, `nurb slice`는 OrcaSlicer 또는 Bambu Studio 설치가 필요하고 `nurb render`만 브라우저(Playwright chromium)를 요구합니다. Mac 앱 외 플랫폼의 지원 범위는 [확인 필요]. 비용 없음, AI 구독은 사용자 부담.

## 영수증

- TESIGN이 처음 본 시각: 2026-09-13 14:48 UTC
- 출처 등록: 2026-07-29 19:46 UTC
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

[대표 이미지] https://tesign.com/img/nurb-77b79fad3b.png
