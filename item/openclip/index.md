# OpenClip

> 맥 사용자용 텍스트 선택 액션 — 맥 어느 앱에서든 텍스트를 선택하면 복사·변환·계산·AI 글쓰기 액션 바가 뜨는 오픈소스 맥 텍스트 유틸리티

- 페이지: https://tesign.com/item/openclip/
- JSON: https://tesign.com/item/openclip/index.json
- 영어 마크다운: https://tesign.com/en/item/openclip/index.md
- 생성 시각: 2026-09-20 03:36 UTC

## 숫자

- 별 464 — GitHub에서 2026-09-19 22:59 UTC 확인
- 7일 +4은 GH Archive 관측 (기준 2026-09-19 22:00 UTC)
- Show HN 5점 — 2026-09-13 13:55 UTC 관측
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.

## 한눈에 보는 사실

- 라이선스: MIT (허용적) — https://spdx.org/licenses/MIT.html
- 사용 범위: 상업 이용·수정·재배포 가능. 저작권 고지는 유지.
- 오픈소스: 예
- 언어: Swift
- 플랫폼: macos
- 분류: 생산성
- 태그: macos · menubar · text-actions · popclip-alternative · extensions · ollama
- 바로 쓰기: 설치해서 쓰기
- 출처: Show HN https://github.com/ganeshmshetty/openclip · GitHub https://github.com/ganeshmshetty/openclip
- INSTALL: https://getopenclip.app/

## 활동

- 마지막 커밋: 2026-09-19 16:05 UTC
- 최근 릴리스: v1.6.1 (2026-09-16)
- 기여자: 10
- 열린 이슈 (PR 포함): 13
- 만든 이: 개인
- GitHub 확인 시각: 2026-09-19 22:59 UTC

## 선정 신호와 근거

- 교차 신호 · Show HN + GitHub
- 과거 기록

## TESIGN TAKE

PopClip의 오픈소스 대체물로 만든 것이 분명하고 확장 방식이 단순한 것이 강점이지만, 접근성 권한 없이는 동작하지 않는 앱이라는 점은 알고 써야 한다.

## 왜 볼 만한가

OpenClip은 macOS 14 이상에서 접근성 권한으로 선택 텍스트를 읽어(클립보드에 의존하지 않음) 상황에 맞는 액션 바를 띄운다. ⌥⌘C를 누르면 전체 액션 목록을 퍼지 검색하는 팔레트가 되고, 확장은 JavaScript·AppleScript·셸·URL 템플릿을 openclip.json 매니페스트와 함께 ~/.openclip/extensions에 넣으면 컴파일 없이 동작한다. AI 액션은 Apple Intelligence, 로컬 Ollama 모델, OpenAI·Claude 중에서 고를 수 있다.

## 이걸로 무엇을 만들 수 있나

- openclip.json 하나에 URL 템플릿을 적으면 사내 위키·주문 조회용 검색 액션이 되고, 셸 스크립트 확장으로 선택한 상품코드를 재고 API에 조회해 결과를 상태 메시지나 알림으로 보여 줄 수도 있다.

## 누구에게 맞나

- 맥에서 글을 많이 다루는 사람 — 선택 즉시 대소문자 변환·요약·번역
- 개발자 — 셸·JS 스크립트를 텍스트 선택 액션으로 등록
- Ollama 사용자 — 클라우드 없이 로컬 모델로 인라인 AI 글쓰기

## 5분 안에 시작하기

```
# brew install --cask ganeshmshetty/tap/openclip
# # 앱 실행 후 접근성 권한 허용:
# System Settings → Privacy & Security → Accessibility → enable OpenClip
# # 아무 앱에서 텍스트를 선택하거나 ⌥⌘C
```

## 주의할 점

- MIT. macOS 14 이상 전용이고 접근성 권한이 필수다.
- 클라우드 AI(OpenAI·Claude)는 사용자의 API 키와 비용이 들고, Apple Intelligence나 로컬 Ollama 모델을 고르면 클라우드 키가 필요 없다.
- PopClip과 무관한 독립 프로젝트라고 README가 명시한다.

## 영수증

- TESIGN이 처음 본 시각: 2026-09-13 09:42 UTC
- 출처 등록: 2026-09-03 12:25 UTC
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

[대표 이미지] https://tesign.com/img/openclip-bde794c307.webp
