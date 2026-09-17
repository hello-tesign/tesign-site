# Lertaro

> 윈도우용 즉시 파일 검색 — NTFS USN 저널과 $MFT를 직접 읽어 파일을 즉시 찾는 Windows 검색 런처. Everything·Listary의 오픈소스 대안

- 페이지: https://tesign.com/item/lertaro/
- JSON: https://tesign.com/item/lertaro/index.json
- 영어 마크다운: https://tesign.com/en/item/lertaro/index.md
- 생성 시각: 2026-09-17 01:30 UTC

## 숫자

- 별 555 — GitHub에서 2026-09-15 19:35 UTC 확인 (+2 확인 이후 관측)
- 7일 +14은 GH Archive 관측 (기준 2026-09-16 21:00 UTC)
- 24h +2 ★ · 30d +14 ★ (기준 2026-09-16 21:00 UTC)
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.

## 한눈에 보는 사실

- 라이선스: MIT (허용적) — https://spdx.org/licenses/MIT.html
- 사용 범위: 상업 이용·수정·재배포 가능. 저작권 고지는 유지.
- 오픈소스: 예
- 언어: C#
- 플랫폼: windows
- 분류: 생산성
- 태그: windows · file-search · launcher · ntfs · dotnet · wpf
- 바로 쓰기: 설치해서 쓰기
- 출처: GitHub https://github.com/lertaro/lertaro
- INSTALL: https://lertaro.github.io/

## 활동

- 마지막 커밋: 2026-09-15 08:09 UTC
- 최근 릴리스: v5.6.7 (2026-09-15)
- 기여자: 3
- 열린 이슈 (PR 포함): 2
- 만든 이: 조직
- GitHub 확인 시각: 2026-09-15 19:35 UTC

## 선정 신호와 근거

- 과거 기록

## TESIGN TAKE

Everything 사용자가 눈여겨볼 차이는 MIT 라이선스, .NET 플러그인 SDK, ARM64 네이티브 빌드입니다.

## 왜 볼 만한가

Everything과 Listary가 나눠 하던 일 — 즉시 파일 검색과 실행 런처 — 를 하나의 MIT 오픈소스로 묶었습니다. 디렉터리를 훑는 대신 NTFS의 USN 변경 저널과 $MFT를 직접 읽어 색인하고, 백그라운드 서비스가 실시간으로 동기화합니다. x64와 ARM64(Windows on ARM) 네이티브 빌드를 함께 내고, 열기/저장 대화상자와 탐색기·Total Commander 등 파일 관리자에 자동으로 도킹되는 인라인 바가 있습니다.

## 이걸로 무엇을 만들 수 있나

- .NET 10 C# 플러그인 SDK로 사내 문서 저장소나 위키를 검색 공급자로 붙이고, 자주 쓰는 명령을 별칭·액션으로 등록할 수 있습니다. Flow Launcher 커뮤니티 플러그인과도 호환됩니다.

## 누구에게 맞나

- Windows 파워 유저 — Everything·Listary를 대신하는 파일 검색·실행 런처
- Windows on ARM(Snapdragon) 노트북 사용자 — 네이티브 ARM64 빌드
- .NET 개발자 — 플러그인 SDK로 자체 검색 공급자·액션 제작

## 5분 안에 시작하기

```
# 1. x64: https://github.com/Lertaro/Lertaro/releases/latest/download/Lertaro-Setup.exe 를 내려받아 실행 (백그라운드 서비스 지원, 권장)
# 2. ARM64: https://github.com/Lertaro/Lertaro/releases/latest/download/Lertaro-Setup-arm64.exe
# 3. 설치 없이 쓰려면 Lertaro-Portable.zip(ARM64는 Lertaro-Portable-arm64.zip)을 풀고 실행
# 4. 소스 빌드: Windows 10/11 + .NET 10 SDK에서 build_and_run.bat (x64·ARM64 Release 빌드는 make.bat)
```

## 주의할 점

- 라이선스 MIT. Windows 10/11 전용(x64·ARM64). 저수준 색인은 NTFS/ReFS 대상이고 FAT32/exFAT는 모니터링 방식입니다. 설치판은 SYSTEM 권한의 백그라운드 서비스를 올립니다. 2026년 8월에 시작된 프로젝트로, README가 공식 출처 외 다운로드를 경고합니다. 별도 .NET 런타임 설치가 필요한지는 [확인 필요].

## 영수증

- TESIGN이 처음 본 시각: 2026-09-13 09:55 UTC
- 출처 등록: 2026-08-06 05:00 UTC
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

[대표 이미지] https://tesign.com/img/lertaro-9737ff54a1.png
