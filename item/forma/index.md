# Forma

> ML 개발자용 ONNX 편집 — .onnx 파일을 브라우저에 끌어다 놓으면 신경망 그래프가 그려지고, 노드를 고쳐 다시 내보낼 수 있습니다.

- 페이지: https://tesign.com/item/forma/
- JSON: https://tesign.com/item/forma/index.json
- 영어 마크다운: https://tesign.com/en/item/forma/index.md
- 생성 시각: 2026-09-17 19:00 UTC

## 숫자

- 별 3 — GitHub에서 2026-09-17 18:40 UTC 확인
- 7일 별 증가 관측 없음 (GH Archive) (기준 2026-09-17 13:00 UTC)
- Show HN 2점 — 2026-09-17 04:33 UTC 관측
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.

## 한눈에 보는 사실

- 라이선스: 라이선스 미확인
- 사용 범위: 미확인 — 쓰기 전에 살펴보세요.
- 언어: TypeScript
- 플랫폼: web
- 분류: 개발 도구 · AI
- 태그: onnx · tflite · model-visualization · webassembly · graph-editor
- 바로 쓰기: 설치 없이 바로
- 출처: Show HN https://github.com/Hussain004/forma
- TRY: https://forma-ml.vercel.app/

## 활동

- 마지막 커밋: 2026-09-02 15:22 UTC
- 최근 릴리스: v2.5.0 (2026-09-02)
- 기여자: 1
- 열린 이슈 (PR 포함): 0
- 만든 이: 개인
- GitHub 확인 시각: 2026-09-17 18:40 UTC

## 선정 신호와 근거

- 신규 · 생성 1h 만에 포착

## TESIGN TAKE

모델 파일을 어디에도 올리지 않고 그래프 편집과 검증까지 끝내는 점이 이 도구의 핵심입니다.

## 왜 볼 만한가

ONNX 모델을 들여다보는 도구는 보기까지만 되고, 속성 하나를 바꾸려면 다시 파이썬 스크립트로 돌아가야 했습니다. Forma는 .onnx나 .tflite 파일을 캔버스에 놓으면 전체 계산 그래프를 그려 주고, 노드를 클릭해 속성을 고치거나 연결을 다시 잇고, 수정본을 유효한 ONNX 파일로 내보냅니다. 모든 처리가 브라우저 안 WebAssembly에서 돌아가 모델 파일이 내 컴퓨터를 떠나지 않고, 편집 내역만 원본의 SHA-256 지문이 붙은 링크로 공유합니다.

## 이걸로 무엇을 만들 수 있나

- 배포 직전 모델의 입력 배치 크기를 고정값에서 가변(batch)으로 바꾸거나 텐서 이름을 정리하는 손질
- 원본과 수정본을 같은 입력으로 돌려 출력 차이를 비교하는 검증 결과
- 문제가 나는 노드만 잘라낸 작은 재현용 ONNX 파일(Extract Repro)
- 두 모델 파일을 나란히 놓고 구조·속성·지연시간을 비교한 텍스트 보고서

## 누구에게 맞나

- ML 엔지니어 — 배포 직전 ONNX 모델의 입출력·속성을 파이썬 없이 손볼 때
- 모델 변환을 맡은 개발자 — 변환 전후 두 파일의 구조 차이를 눈으로 비교할 때
- 딥러닝 학습자 — 공개 모델의 계층 구조와 파라미터 수를 클릭해 살펴볼 때

## 5분 안에 시작하기

```
# 1. https://forma-ml.vercel.app 을 엽니다
# 2. .onnx 모델 파일을 캔버스에 끌어다 놓습니다
# 3. 노드를 클릭해 Layer Inspector 패널에서 살펴봅니다
# 4. 수정한 뒤 Share Edits를 눌러 검증된 편집 링크를 복사합니다
# 내 PC에서 실행(Node.js 18+):
$ git clone https://github.com/Hussain004/Forma.git
$ cd Forma
$ npm install
$ npm run dev
# → http://localhost:5173 을 엽니다
```

## 주의할 점

- 라이선스 미확인 — README 배지와 Show HN 글은 MIT라고 하지만 저장소에 LICENSE 파일이 없고 GitHub 메타데이터에도 라이선스가 없습니다
- ONNX와 TFLite만 지원 · TFLite는 읽기 전용(속성 편집·벤치마크·수정본 내보내기(Export Modified) 불가, 원본 다운로드는 가능) · .pt·.safetensors는 먼저 ONNX로 변환해야 합니다
- 데스크톱 우선 — 화면 폭 900px 미만에서는 안내 화면이 뜹니다
- 공유 링크에 모델은 담기지 않아 받는 쪽도 원본 파일이 있어야 하며, INT8 크기는 계산상 추정치입니다
- 가격 표기 없음 · 웹 앱은 결제 없이 열리며 README에 후원 링크가 있습니다 · 2026-09-13 Show HN 공개 · v2.5.0까지 릴리스 기록과 테스트 406개가 README에 있습니다

## 영수증

- TESIGN이 처음 본 시각: 2026-09-13 07:43 UTC
- 출처 등록: 2026-09-13 05:49 UTC
- 선정: 2026-09-15 14:07 UTC
- TESIGN 게재: 2026-09-15 14:07 UTC
- 소개 글 마지막 수정: 2026-09-15 14:07 UTC

## 읽는 법

- 이 파일은 tesign.com 항목 페이지와 같은 빌드에서 같은 데이터로 만들어졌습니다. 소개 글은 편집자가 쓴 것이고, 숫자는 저장된 관측값입니다.
- JSON의 null은 관측하지 않았다는 뜻입니다 — 0이 아닙니다. 마크다운에서는 [확인 필요]로 적습니다.
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.
- 요약이며 법적 조언이 아닙니다.

[대표 이미지] https://tesign.com/img/forma-6622496fbc.png
