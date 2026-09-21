# MangoDisk

> 맥·윈도우용 디스크 정리 — macOS·Windows 디스크 정리 앱 — 캐시·중복·대용량 파일·앱 잔여물을 읽기 전용으로 먼저 스캔하고 확인 뒤 삭제

- 페이지: https://tesign.com/item/mangodisk/
- JSON: https://tesign.com/item/mangodisk/index.json
- 영어 마크다운: https://tesign.com/en/item/mangodisk/index.md
- 생성 시각: 2026-09-21 00:32 UTC

## 숫자

- 별 2,905 — GitHub에서 2026-09-19 22:59 UTC 확인
- 7일 +9은 GH Archive 관측 (기준 2026-09-20 10:00 UTC)
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.

## 한눈에 보는 사실

- 라이선스: GPL-3.0 (카피레프트) — https://spdx.org/licenses/GPL-3.0.html
- 사용 범위: 사용·수정은 자유. 배포하면 소스 공개 의무(카피레프트).
- 오픈소스: 예
- 언어: Rust
- 플랫폼: macos · windows · cli
- 분류: 생산성
- 태그: disk-cleaner · tauri · rust · duplicate-finder · app-uninstaller · cross-platform
- 바로 쓰기: 설치해서 쓰기
- 출처: GitHub https://github.com/harry0703/mangodisk
- INSTALL: https://mangodisk.app/

## 활동

- 마지막 커밋: 2026-09-18 15:18 UTC
- 최근 릴리스: v1.1.3 (2026-09-18)
- 기여자: 4
- 열린 이슈 (PR 포함): 12
- 만든 이: 개인
- GitHub 확인 시각: 2026-09-19 22:59 UTC

## 선정 신호와 근거

- 과거 기록

## TESIGN TAKE

'더 많이 지우기'보다 '잘못 지우지 않기'를 앞세우고, 그 규칙집을 저장소에 공개해 검증받는 정리 도구입니다.

## 왜 볼 만한가

디스크 정리 도구는 '얼마나 지우나'보다 '잘못 지우지 않나'가 문제인데, MangoDisk는 기본이 읽기 전용 스캔이고 삭제·제거·설정 변경 전에 항목을 하나씩 확인하게 하며, 결과를 작업 기록에 남깁니다. 시스템·브라우저 캐시부터 Xcode·Docker·Node.js 프로젝트 빌드 산출물 같은 개발 캐시, 로컬 AI 모델, 중복·대용량 파일, 앱 잔여물, 시작 프로그램, 트리맵 분석까지 한 앱에 있고, 정리 규칙집은 저장소에 공개되어 있습니다. Tauri 2 + Rust로 만들어졌고 한국어 README가 있습니다.

## 이걸로 무엇을 만들 수 있나

- CLI(mangodisk clean --format json)로 여러 대의 맥·PC를 무인 점검하는 스크립트를 짤 수 있고, TOML 규칙 파일로 자사 앱의 캐시 정리 규칙을 기여할 수 있습니다.

## 누구에게 맞나

- 맥·윈도우 일반 사용자 — 저장 공간 부족 시 캐시·중복·대용량 파일 정리
- 개발자 — Xcode·Docker·패키지 매니저·빌드 산출물 캐시 회수
- 사내 PC 관리자 — CLI로 JSON 출력·무인 정리 스크립트

## 5분 안에 시작하기

```
# brew install --cask harry0703/tap/mangodisk        # macOS
# irm "https://get.mangodisk.app" | iex              # Windows PowerShell
# brew install harry0703/tap/mangodisk-cli           # CLI (macOS); Windows: irm "https://get.mangodisk.app/cli" | iex
# mangodisk clean                                    # 스캔만, 파일 변경 없음
# mangodisk clean --apply                            # 데스크톱과 같은 스마트 추천 적용
```

## 주의할 점

- 라이선스 GPL-3.0. macOS Monterey 12.5 이상, 64비트 Windows 10 이상(Edge WebView2 런타임 111.0.1661.62 이상 필요). 리눅스 미지원.
- 정리·영구 삭제·앱 제거는 되돌릴 수 없을 수 있고 일부 시스템 최적화는 보안·배터리·업데이트 동작에 영향을 줄 수 있다고 README가 경고합니다.
- AI 설명 기능(1.1.0~)은 공식 릴리스에서 하루 무료 횟수를 제공하고 자체 AI 서비스 연결도 가능하다고만 밝혀, 무료 한도 수치는 [확인 필요].

## 영수증

- TESIGN이 처음 본 시각: 2026-09-13 09:38 UTC
- 출처 등록: 2026-08-01 03:00 UTC
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

[대표 이미지] https://tesign.com/img/mangodisk-e5d8c43485.jpg
