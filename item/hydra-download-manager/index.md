# Hydra Download Manager

> 다중 연결 다운로드 가속기 — 파일을 여러 연결·미러로 나눠 받는 다운로드 관리자. Windows·macOS·Linux GUI, 브라우저 확장, wget/curl 호환 CLI

- 페이지: https://tesign.com/item/hydra-download-manager/
- JSON: https://tesign.com/item/hydra-download-manager/index.json
- 영어 마크다운: https://tesign.com/en/item/hydra-download-manager/index.md
- 생성 시각: 2026-09-20 03:36 UTC

## 숫자

- 별 598 — GitHub에서 2026-09-19 22:59 UTC 확인
- 7일 별 증가 관측 없음 (GH Archive) (기준 2026-09-19 22:00 UTC)
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.

## 한눈에 보는 사실

- 라이선스: GPL-3.0 (카피레프트) — https://spdx.org/licenses/GPL-3.0.html
- 사용 범위: 사용·수정은 자유. 배포하면 소스 공개 의무(카피레프트).
- 오픈소스: 예
- 언어: Rust
- 플랫폼: windows · macos · linux · cli
- 분류: 생산성
- 태그: download-manager · rust · cli · browser-extension · cross-platform · metalink
- 바로 쓰기: 설치해서 쓰기
- 출처: GitHub https://github.com/ja7ad/hydra
- INSTALL: https://hydra.javad.dev/

## 활동

- 마지막 커밋: 2026-09-19 09:33 UTC
- 최근 릴리스: v0.6.0 (2026-09-19)
- 기여자: 9
- 열린 이슈 (PR 포함): 15
- 만든 이: 개인
- GitHub 확인 시각: 2026-09-19 22:59 UTC

## 선정 신호와 근거

- 과거 기록

## TESIGN TAKE

IDM류 다운로드 관리자를 세 OS에서 오픈소스로 만들되, 엔진만은 떼어 쓸 수 있게 라이선스를 갈라 놓은 점이 핵심입니다.

## 왜 볼 만한가

다운로드를 여러 연결과 독립 미러로 나눠 받고, 느린 쪽의 구간을 빠른 쪽에 넘기는(range stealing) 엔진을 Rust로 만들었습니다. 같은 엔진이 wget/curl 호환 CLI(정적 musl 빌드라 어느 Linux 배포판에서나 동작)와 Windows·macOS·Linux 데스크톱 앱으로 나오고, Chrome 웹스토어·Firefox 애드온·Safari 확장이 브라우저 다운로드를 넘겨줍니다. Metalink 3/4 문서를 읽어 미러 목록·크기·해시를 자동으로 쓰고, install.sh/install.ps1 한 줄 설치와 Homebrew·PPA·COPR·AUR·AppImage를 모두 제공합니다.

## 이걸로 무엇을 만들 수 있나

- hydra-core 스케줄러와 libhydra(C ABI)가 MIT/Apache-2.0 이중 라이선스라 Android·iOS·Go·Flutter 앱에 다운로드 엔진으로 넣을 수 있습니다. 서버 스크립트에서는 wget/curl 자리에 그대로 바꿔 끼울 수 있습니다.

## 누구에게 맞나

- ISO·데이터셋 등 큰 파일을 자주 받는 사용자 — GUI + 브라우저 확장으로 다운로드 인계
- 서버·CLI 사용자 — wget/curl 호환 명령, 정적 빌드, Metalink 미러 병합
- 앱 개발자 — libhydra(MIT/Apache-2.0)로 다운로드 엔진 임베딩

## 5분 안에 시작하기

```
# curl -fsSL https://raw.githubusercontent.com/ja7ad/hydra/main/install.sh | bash   # macOS / Linux (GUI 번들; CLI만은 끝에 -s -- --cli)
# irm https://raw.githubusercontent.com/ja7ad/hydra/main/install.ps1 | iex   # Windows PowerShell
# brew install ja7ad/tap/hydra
# hydra https://example.com/archive.tar.gz
# hydra -x 8 https://example.com/largefile.iso
```

## 주의할 점

- 라이선스: CLI 바이너리는 GPL-3.0-or-later, hydra-core·hya-net·hya-ffi 라이브러리는 MIT OR Apache-2.0(저장소 표기 GPL-3.0). macOS 앱은 아직 공증(notarize)되지 않아 Gatekeeper가 막을 수 있고, Linux 데스크톱 빌드는 glibc 2.35 이상(Ubuntu 22.04·Debian 12·RHEL 9 이후)이 필요합니다. Ubuntu에서 apt install hydra는 다른 프로그램(THC-Hydra)이니 hydra-download-manager 패키지를 설치해야 합니다. 무료.

## 영수증

- TESIGN이 처음 본 시각: 2026-09-13 09:47 UTC
- 출처 등록: 2026-08-15 14:20 UTC
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

[대표 이미지] https://tesign.com/img/hydra-download-manager-a160e15181.jpg
