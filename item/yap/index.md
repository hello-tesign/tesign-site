# Yap

> 맥 사용자용 기기 내 받아쓰기 — 단축키를 누르고 말하면 어느 입력창에나 글이 들어가는 macOS 받아쓰기 앱. 기기 내 처리, 계정·키 없음.

- 페이지: https://tesign.com/item/yap/
- JSON: https://tesign.com/item/yap/index.json
- 영어 마크다운: https://tesign.com/en/item/yap/index.md
- 생성 시각: 2026-09-15 20:32 UTC

## 숫자

- 별 392 — GitHub에서 2026-09-15 19:35 UTC 확인
- 7일 별 증가 관측 없음 (GH Archive) (기준 2026-09-15 15:00 UTC)
- Show HN 104점 — 2026-09-13 14:52 UTC 관측
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.

## 한눈에 보는 사실

- 라이선스: MIT (허용적) — https://spdx.org/licenses/MIT.html
- 사용 범위: 상업 이용·수정·재배포 가능. 저작권 고지는 유지.
- 오픈소스: 예
- 언어: Swift
- 플랫폼: macos
- 분류: 생산성 · AI
- 태그: dictation · speech-to-text · macos · on-device · swift · menu-bar
- 바로 쓰기: 설치해서 쓰기
- 출처: Show HN https://github.com/FrigadeHQ/yap
- INSTALL: https://frigade.com/yap

## 활동

- 마지막 커밋: 2026-09-15 00:08 UTC
- 최근 릴리스: v0.1.12 (2026-09-15)
- 기여자: 6
- 열린 이슈 (PR 포함): 7
- 만든 이: 조직
- GitHub 확인 시각: 2026-09-15 19:35 UTC

## 선정 신호와 근거

- 과거 기록

## TESIGN TAKE

OS에 이미 들어온 음성 인식을 그대로 쓰는 것이, 모델을 내려받는 도구보다 가볍고 사적이라는 사례입니다.

## 왜 볼 만한가

macOS 26이 추가한 SpeechAnalyzer·SpeechTranscriber API는 OS가 관리하는 모델로 기기 안에서 스트리밍 음성 인식을 합니다. Yap은 그 경로만 쓰기 때문에 모델을 내려받지 않고, 앱 크기는 4 MB, 유휴 메모리는 약 60 MB이며 네트워크 코드 자체가 없습니다. README가 인용한 벤치마크(LibriSpeech 5,559개 클립)에서 Apple 모델은 깨끗한 음성 기준 단어 오류율 2.12%로 Whisper Small(3.74%)보다 낮았고 약 3배 빨랐습니다.

## 이걸로 무엇을 만들 수 있나

- 약 3천 줄의 Swift라서 읽고 고치기 쉽습니다. `RecordingCoordinator` 상태 기계를 그대로 두고 언어 선택기나 특정 앱용 붙여넣기 방식을 덧붙이는 식으로 자기만의 받아쓰기 앱을 만들 수 있습니다.

## 누구에게 맞나

- 코딩 에이전트에 프롬프트를 자주 쓰는 개발자 — 터미널·에디터에 말로 입력, 미리보기 후 삽입
- 이메일·슬랙을 많이 쓰는 직장인 — 타자보다 빠른 문장 입력
- 음성이 외부로 나가는 것을 원치 않는 사용자 — 네트워크 호출 0의 받아쓰기

## 5분 안에 시작하기

```
# brew install --cask frigadehq/tap/yap
# brew upgrade --cask yap   # 업데이트
# # 또는 https://frigade.com/yap 에서 .dmg 내려받아 Applications로 드래그
# 소스 빌드(Xcode 26): git clone https://github.com/FrigadeHQ/yap.git && cd yap && ./install.sh
```

## 주의할 점

- 라이선스 MIT. macOS 26 Tahoe 이상 + Apple Silicon 전용이며 Intel Mac은 지원하지 않습니다(Intel용 0.1.4 이하 구버전은 Apple 서버로 음성을 보냅니다). 마이크·음성 인식·손쉬운 사용·자동화 4가지 권한이 필요하고 손쉬운 사용은 시스템 설정에서 직접 켜야 합니다. 언어는 시스템 로케일을 따르며 언어 선택기는 아직 없습니다. 비용 없음.

## 영수증

- TESIGN이 처음 본 시각: 2026-09-13 14:52 UTC
- 출처 등록: 2026-07-27 18:36 UTC
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

[대표 이미지] https://tesign.com/img/yap-6c42099287.png
