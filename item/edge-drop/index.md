# Edge-Drop

> 윈도우용 끌어 놓는 클립보드 — 윈도 화면 가장자리에 숨어 있다가 마우스를 대면 열리는 클립보드 선반 — 텍스트·이미지·파일을 어느 앱에나 드래그

- 페이지: https://tesign.com/item/edge-drop/
- JSON: https://tesign.com/item/edge-drop/index.json
- 영어 마크다운: https://tesign.com/en/item/edge-drop/index.md
- 생성 시각: 2026-09-21 00:32 UTC

## 숫자

- 별 578 — GitHub에서 2026-09-19 22:59 UTC 확인
- 7일 별 증가 관측 없음 (GH Archive) (기준 2026-09-20 10:00 UTC)
- Show HN 6점 — 2026-09-13 14:47 UTC 관측
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.

## 한눈에 보는 사실

- 라이선스: Apache-2.0 (허용적) — https://spdx.org/licenses/Apache-2.0.html
- 사용 범위: 상업 이용·수정·재배포 가능. 고지 유지, 바꾼 부분은 표시.
- 오픈소스: 예
- 언어: TypeScript
- 플랫폼: windows
- 분류: 생산성
- 태그: clipboard-manager · windows · electron · drag-and-drop · productivity · react
- 바로 쓰기: 설치해서 쓰기
- 출처: Show HN https://edgedrop.vercel.app/
- INSTALL: https://edgedrop.app/

## 활동

- 마지막 커밋: 2026-09-15 16:28 UTC
- 최근 릴리스: v0.3.1 (2026-09-08)
- 기여자: 5
- 열린 이슈 (PR 포함): 22
- 만든 이: 개인
- GitHub 확인 시각: 2026-09-19 22:59 UTC

## 선정 신호와 근거

- 과거 기록

## TESIGN TAKE

Win+V를 뒤지는 여러 단계를 '가장자리에 마우스 → 끌어다 놓기' 한 동작으로 줄인 것이 전부이고, 그 한 동작을 위해 OLE 드래그·DPAPI 암호화까지 챙긴 윈도 전용 베타다.

## 왜 볼 만한가

Win+V 히스토리를 화살표로 뒤지는 대신, 투명한 항상-위 클릭통과 창을 화면 가장자리에 붙여 두고 커서가 닿으면 선반이 열린다. Electron에서 Win32 OLE 드래그 파이프라인을 써서 이미지·파일 묶음·서식 텍스트를 Photoshop·Word·탐색기 같은 데스크톱 앱에 실제로 끌어다 놓을 수 있고, 여러 파일을 스택으로 묶거나 풀 수 있다. 히스토리는 Windows DPAPI로 암호화 저장되고 1Password·Bitwarden·KeePass의 클립보드 제외 포맷을 존중한다. Microsoft Store와 .exe 설치 파일로 배포되며 31개 언어를 지원하는 공개 베타(v0.3.1, 2026-09-08)다.

## 이걸로 무엇을 만들 수 있나

- Apache-2.0라 상업 제품에도 쓸 수 있어, 자주 쓰는 상품 이미지·문구 묶음을 담아 두고 편집 도구로 끌어 넣는 팀용 자료 선반으로 고치거나, Electron에서 OLE 드래그와 투명 창을 구현한 부분을 자체 윈도 앱에 참고할 수 있다.

## 누구에게 맞나

- 스크린샷·코드 조각·링크를 여러 창 사이로 옮기는 개발자·디자이너 — 단축키 없이 드래그
- 1Password·Bitwarden 사용자 — 비밀값 제외 포맷을 존중하는 클립보드 도구
- Electron으로 윈도 네이티브 기능을 다루는 개발자 — OLE 드래그·투명 창 구현 참고

## 5분 안에 시작하기

```
# # 설치: Microsoft Store(9P3JMHN9M4NR) 또는 GitHub Releases의 .exe — 아래 소스 실행은 Node.js 18+, Windows 10/11 필요
# git clone https://github.com/Deepender25/Edge-Drop.git
# cd Edge-Drop
# npm install
# npm run dev
```

## 주의할 점

- Apache-2.0 — 상업 이용·수정·재배포 허용(저작권 고지 유지)
- Windows 10/11 전용(Win32 OLE 드래그와 투명 창 커서 폴링에 의존) — macOS·리눅스 포트는 로드맵/기여 요청 단계
- 공개 베타(v0.3.1, 2026-09-08), 1인 유지보수; 전체 히스토리 검색은 기본 500개 한도

## 영수증

- TESIGN이 처음 본 시각: 2026-09-13 14:37 UTC
- 출처 등록: 2026-08-05 13:11 UTC
- 선정: 2026-09-14 19:27 UTC
- TESIGN 게재: 2026-09-14 19:27 UTC
- 소개 글 마지막 수정: 2026-09-15 07:17 UTC
- ◌ 과거 기록: 과거 데이터를 되짚어 채운 항목입니다. 라이브 발견이 아닙니다.

## 읽는 법

- 이 파일은 tesign.com 항목 페이지와 같은 빌드에서 같은 데이터로 만들어졌습니다. 소개 글은 편집자가 쓴 것이고, 숫자는 저장된 관측값입니다.
- JSON의 null은 관측하지 않았다는 뜻입니다 — 0이 아닙니다. 마크다운에서는 [확인 필요]로 적습니다.
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.
- 과거 데이터를 되짚어 채운 항목입니다. 라이브 발견이 아닙니다.
- 요약이며 법적 조언이 아닙니다.

[대표 이미지] https://tesign.com/img/edge-drop-606b48c1ca.webp
