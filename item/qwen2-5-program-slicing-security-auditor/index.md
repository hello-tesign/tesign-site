# Qwen2.5 Program Slicing Security Auditor

> 웹 개발자용 JS 보안 점검 — 자바스크립트·HTML 코드를 붙여 넣으면 위험한 지점을 잘라내 7B 모델이 취약점 추론과 공격 예시를 써 줍니다.

- 페이지: https://tesign.com/item/qwen2-5-program-slicing-security-auditor/
- JSON: https://tesign.com/item/qwen2-5-program-slicing-security-auditor/index.json
- 영어 마크다운: https://tesign.com/en/item/qwen2-5-program-slicing-security-auditor/index.md
- 생성 시각: 2026-09-20 03:36 UTC

## 숫자

- Hugging Face 좋아요 1 — 2026-09-13 09:30 UTC 관측
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.

## 한눈에 보는 사실

- 라이선스: 라이선스 미확인
- 사용 범위: 미확인 — 쓰기 전에 살펴보세요.
- 언어: [확인 필요]
- 플랫폼: web
- 분류: 보안 · AI
- 태그: security-audit · javascript · xss · program-slicing · gradio · zerogpu
- 바로 쓰기: 설치 없이 바로
- 출처: Hugging Face https://huggingface.co/spaces/face00/cybersecurity
- TRY: https://huggingface.co/spaces/face00/cybersecurity

## 선정 신호와 근거

- 신규 · 생성 1h 만에 포착

## TESIGN TAKE

모델에 전부 맡기지 않고 구문 분석으로 먼저 범위를 좁힌 구성이라, 결과를 검증 가능한 조각 단위로 받을 수 있습니다.

## 왜 볼 만한가

압축된 번들 수만 줄을 통째로 모델에 넣으면 비용도 크고 맥락도 흩어집니다. 이 Space는 먼저 코드를 정돈(beautify)하고, 구문 트리에서 innerHTML·eval·sendFile·fetch 같은 위험한 지점(sink)을 찾아 그 주변 약 50줄만 잘라낸 뒤, 보안 추론용으로 미세조정한 Qwen2.5-Coder 7B 모델에 조각별로 넘겨 데이터 흐름 추적 → 공격 예시(PoC) → 판정을 쓰게 합니다. 70줄 이하의 짧은 코드는 자르지 않고 한 번에 검사하며, 파일 업로드(.js·.html·.ts·.php·.json)도 받습니다.

## 이걸로 무엇을 만들 수 있나

- 배포 전 프런트엔드 번들이나 Express 라우트를 한 번 훑는 2차 의견
- 경로 조작·DOM XSS 취약점을 취약한 예제와 고친 예제로 비교해 보는 학습 자료(내장 예시 3개)
- 코드 리뷰에 붙일 '왜 위험한가' 설명 초안

## 누구에게 맞나

- 웹 개발자 — 배포 전 자바스크립트·Node.js 코드의 XSS·경로 조작 여부를 빠르게 훑을 때
- 보안 입문자 — 취약한 코드와 고친 코드가 어떻게 다른지 예시로 배울 때
- 버그 바운티 참가자 — 큰 번들에서 살펴볼 지점을 먼저 골라낼 때

## 5분 안에 시작하기

```
# https://huggingface.co/spaces/face00/cybersecurity 를 엽니다
# 'Paste Code / 50k-Line Bundle' 탭에 코드를 붙이거나 'Upload File' 탭에 .js·.html·.ts·.php·.json 파일을 올립니다
# '⚡ Run 4-Step Security Audit' 버튼을 누르면 오른쪽에 판정이, 아래 진단창에 처리 단계가 표시됩니다
# 아래 'Quick Verification Scenarios'의 예시 3개를 눌러 바로 시험해 볼 수 있습니다
```

## 주의할 점

- Apache-2.0 — Space와 모델(face00/qwen2.5-7b-security-cot, Qwen2.5-Coder-7B-Instruct 기반) 모두
- Hugging Face ZeroGPU에서 실행 — 무료지만 대기열·GPU 시간 제한이 있으며, 모델 호출(조각) 1회당 GPU 35초로 잡혀 있고 한 요청에 조각은 최대 4개까지만 처리합니다
- 2026-09-13에 공개된 신생 Space · 결과는 모델 추론이라 오탐·누락이 있을 수 있어 보안 판단의 근거로 삼기 전 사람이 확인해야 합니다
- README는 설정 파일뿐이며 사용 설명은 앱 화면과 app.py에만 있습니다

## 영수증

- TESIGN이 처음 본 시각: 2026-09-13 07:43 UTC
- 출처 등록: 2026-09-13 06:35 UTC
- 선정: 2026-09-15 14:07 UTC
- TESIGN 게재: 2026-09-15 14:07 UTC
- 소개 글 마지막 수정: 2026-09-15 14:07 UTC

## 읽는 법

- 이 파일은 tesign.com 항목 페이지와 같은 빌드에서 같은 데이터로 만들어졌습니다. 소개 글은 편집자가 쓴 것이고, 숫자는 저장된 관측값입니다.
- JSON의 null은 관측하지 않았다는 뜻입니다 — 0이 아닙니다. 마크다운에서는 [확인 필요]로 적습니다.
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.
- 요약이며 법적 조언이 아닙니다.

[대표 이미지] https://tesign.com/img/qwen2-5-program-slicing-security-auditor-74b2ede37b.png
