# Easel

> SNS 창작자용 콘텐츠 작업대 — SNS 창작자를 위한 오픈소스 콘텐츠 작업대. 트렌드 발견부터 기획·제작·7개 중국 플랫폼 발행까지 한 에이전트가 맡는다

- 페이지: https://tesign.com/item/easel/
- JSON: https://tesign.com/item/easel/index.json
- 영어 마크다운: https://tesign.com/en/item/easel/index.md
- 생성 시각: 2026-09-21 00:32 UTC

## 숫자

- 별 1,240 — GitHub에서 2026-09-19 22:58 UTC 확인
- 7일 +11은 GH Archive 관측 (기준 2026-09-20 10:00 UTC)
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.

## 한눈에 보는 사실

- 라이선스: Apache-2.0 (허용적) — https://spdx.org/licenses/Apache-2.0.html
- 사용 범위: 상업 이용·수정·재배포 가능. 고지 유지, 바꾼 부분은 표시.
- 오픈소스: 예
- 언어: Python
- 플랫폼: web · linux · macos · windows
- 분류: AI · 소셜
- 태그: social-media · content-automation · agent · xiaohongshu · openclaw · publishing
- 바로 쓰기: 설치해서 쓰기
- 출처: GitHub https://github.com/zju-real/easel
- RUN: https://zju-real.github.io/Easel

## 활동

- 마지막 커밋: 2026-09-19 15:55 UTC
- 최근 릴리스: v0.2.0 (2026-09-17)
- 기여자: 9
- 열린 이슈 (PR 포함): 10
- 만든 이: 조직
- GitHub 확인 시각: 2026-09-19 22:58 UTC

## TESIGN TAKE

중국 플랫폼에 실제로 로그인해 발행까지 하는 오픈소스 도구는 드물지만, 발행 단계는 해당 플랫폼 계정이 있어야 쓸 수 있고 LLM API 키는 어느 단계든 필수다.

## 왜 볼 만한가

Easel은 저장대 REAL 연구실(ZJU-REAL)이 베이징대·OpenDCAI 연구실과 함께 공개한 프로젝트로, 계정 프로필(포지셔닝·문체·독자·플랫폼·금지선·장기 기억)을 기억한 상태에서 콘텐츠를 만들고 결과물을 outputs/ 폴더에 프로젝트 단위로 보관한다. 현재 샤오홍슈·더우인·콰이쇼우·즈후·빌리빌리·위챗 채널·위챗 공식계정 7개 플랫폼의 로그인·형식 맞춤·발행을 지원하며, 웹 작업대는 localhost:7860에서 열린다. README는 샤오홍슈 자동 발행이 인증 요구·노출 제한·계정 제재를 부를 수 있다고 직접 경고한다.

## 이걸로 무엇을 만들 수 있나

- profiles/_template를 복사해 자기 브랜드 계정 프로필을 만들고, 한 주제를 샤오홍슈 카드·짧은 영상·즈후 장문으로 동시에 바꿔 발행하는 중국 시장용 콘텐츠 파이프라인을 꾸릴 수 있다. skills/openclaw/ 아래에 SKILL.md와 스크립트를 추가하면 자기 기술을 얹을 수 있다.

## 누구에게 맞나

- 중국 플랫폼 운영자 — 한 소재를 7개 플랫폼 형식으로 바꿔 발행
- 연구실·교육 채널 — 논문 해설 카드·영상 자동 제작
- 에이전트 개발자 — OpenClaw 기반 스킬 113개의 구조 참고

## 5분 안에 시작하기

```
# git clone https://github.com/ZJU-REAL/Easel.git
# cd Easel
# bash setup.sh
# # Windows(PowerShell): Set-ExecutionPolicy -Scope Process Bypass; .\setup.ps1
# source .venv/bin/activate    # Windows: .venv\Scripts\activate
# easel web                    # http://localhost:7860
```

## 주의할 점

- Apache-2.0. Linux·macOS·Windows 10/11(Windows는 중국어 README 기준이고 영어 README는 Linux·macOS만 적음), Python 3.10+, Node.js 22.19+, FFmpeg, Playwright Chromium 필요.
- Anthropic·OpenAI 또는 호환 서비스의 LLM API 키가 필수이고, 영상·음악·음성 생성은 별도 서비스 키가 더 필요하다.
- 지원 플랫폼은 전부 중국 서비스이며, 샤오홍슈 자동 발행은 README가 계정 제재 위험을 경고한다.

## 영수증

- TESIGN이 처음 본 시각: 2026-09-13 07:43 UTC
- 출처 등록: 2026-08-28 02:22 UTC
- 선정: 2026-09-14 19:27 UTC
- TESIGN 게재: 2026-09-14 19:27 UTC
- 소개 글 마지막 수정: 2026-09-15 04:36 UTC

## 읽는 법

- 이 파일은 tesign.com 항목 페이지와 같은 빌드에서 같은 데이터로 만들어졌습니다. 소개 글은 편집자가 쓴 것이고, 숫자는 저장된 관측값입니다.
- JSON의 null은 관측하지 않았다는 뜻입니다 — 0이 아닙니다. 마크다운에서는 [확인 필요]로 적습니다.
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.
- 요약이며 법적 조언이 아닙니다.

[대표 이미지] https://tesign.com/img/easel-80e5d01cea.png
