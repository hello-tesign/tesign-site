# peerd

> 브라우저 안에서 도는 에이전트 — 크롬·파이어폭스 확장 프로그램 안에서 도는 AI 에이전트 — 내 탭을 조작하고 브라우저 샌드박스에서 코드를 실행합니다.

- 페이지: https://tesign.com/item/peerd/
- JSON: https://tesign.com/item/peerd/index.json
- 영어 마크다운: https://tesign.com/en/item/peerd/index.md
- 생성 시각: 2026-09-17 19:00 UTC

## 숫자

- 별 408 — GitHub에서 2026-09-17 18:41 UTC 확인
- 7일 별 증가 관측 없음 (GH Archive) (기준 2026-09-17 13:00 UTC)
- Show HN 75점 — 2026-09-13 15:49 UTC 관측
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.

## 한눈에 보는 사실

- 라이선스: Apache-2.0 (허용적) — https://spdx.org/licenses/Apache-2.0.html
- 사용 범위: 상업 이용·수정·재배포 가능. 고지 유지, 바꾼 부분은 표시.
- 오픈소스: 예
- 언어: JavaScript
- 플랫폼: web
- 분류: AI · 실험
- 태그: browser-extension · ai-agent · chrome · firefox · webassembly · byok
- 바로 쓰기: 설치해서 쓰기
- 출처: Show HN https://github.com/NotASithLord/peerd
- INSTALL: https://peerd.ai/

## 활동

- 마지막 커밋: 2026-09-15 03:37 UTC
- 최근 릴리스: v0.7.3 (2026-08-20)
- 기여자: 8
- 열린 이슈 (PR 포함): 51
- 만든 이: 개인
- GitHub 확인 시각: 2026-09-17 18:41 UTC

## 선정 신호와 근거

- 과거 기록

## TESIGN TAKE

브라우저가 30년 넘게 다져 온 보안 경계를 그대로 빌린다는 발상이 핵심이며, 아직 스토어 등록 전이라 소스에서 직접 로드해야 하는 초기 단계입니다.

## 왜 볼 만한가

로컬 에이전트는 내 컴퓨터 전체에 접근하고, 원격 에이전트는 남의 컴퓨터에서 돌아갑니다. peerd는 그 대안으로 에이전트 루프 전체를 크롬·파이어폭스 확장 프로그램 안에 넣어, 내 탭과 로그인 세션을 그대로 쓰면서 JS 노트북·WASI 도구·리눅스 WebVM 같은 계산은 브라우저 샌드박스 안에서 돌립니다. 백엔드 서버도 peerd 계정도 없고 현재 빌드는 제품 텔레메트리를 보내지 않으며, 모델은 직접 키를 넣거나 localhost의 로컬 모델을 고릅니다.

## 이걸로 무엇을 만들 수 있나

- 사이트를 한 번 학습해 재사용하는 '사이트 클라이언트'로 내 웹 앱들을 잇는 개인 자동화, 호스트 OS에 손대지 않는 브라우저 안 데이터 처리(노트북·WASM 도구)를 만들 수 있습니다. 프리뷰 빌드는 WebRTC로 브라우저끼리 직접 연결해 에이전트 간 통신과 앱 공유까지 시도합니다.

## 누구에게 맞나

- 브라우저 작업을 자동화하려는 개인 사용자 — 로그인된 탭에서 에이전트가 양식·페이지를 조작
- 에이전트 보안에 관심 있는 개발자 — 위협 모델·레드팀 결과가 문서화된 브라우저 격리 구조 연구
- 백엔드 없이 에이전트를 실험하려는 사람 — 내 키와 로컬 모델만으로 확장 프로그램 안에서 실행

## 5분 안에 시작하기

```
# 1. 저장소를 clone
# 2. 크롬에서 chrome://extensions 를 열고 개발자 모드 켜기
# 3. 'Load unpacked'로 extension/ 폴더 선택
# 파이어폭스: bun run package -- --channel=preview --browser=firefox --no-sign 실행 뒤 about:debugging 에서 artifacts/peerd-preview-firefox.xpi 를 임시 부가 기능으로 로드
```

## 주의할 점

- 라이선스 Apache-2.0(단, 내장된 CheerpX 런타임은 Leaning Technologies의 독점 소프트웨어로 이 라이선스에 포함되지 않음).
- 크롬·파이어폭스 확장(Manifest V3) 전용; Apps와 WebVM은 크롬에서만 동작, 파이어폭스 임시 부가 기능은 재시작마다 다시 로드. 홈페이지 기준 Chrome Web Store·Firefox AMO 등록은 '준비 중'.
- 모델 비용은 본인 키로 부담. 초기 단계 프로젝트(스타 408)이며 README가 '현재 동작의 기준은 코드'라고 밝힘.

## 영수증

- TESIGN이 처음 본 시각: 2026-09-13 15:49 UTC
- 출처 등록: 2026-06-23 15:05 UTC
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

[대표 이미지] https://tesign.com/img/peerd-cd93ce28ea.png
