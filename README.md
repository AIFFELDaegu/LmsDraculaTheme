# 대꾸를 위한 테마 변경

## Dracula Theme

- 문제: `화이트 테마`로 인해 눈이 아프다는 컴플레인

- 해결: `다크 테마`를 적용해보자

- 조건

  - 추측이지만 `es6`문법을 적용하기 위해 사용된 `babel`에 `remove-console`이 적용되어 결과를 보기 힘듬.

  - 직접 소스 코드의 `styled-components`의 `createGlobalStyle`을 조작해 바꿀수 없음

  - 특정 컴포넌트들이 1초 간격으로 `state`의 재랜더링 되고, console의 에러문이 많이 나와 눈이 아프다!(으악!)

- 결론

  - Extension을 제작하여 해당 컴포넌트의 tab을 주시하게 만들까 고려 했으나 `chrome`의 `js 엔진`이 아닐 경우 브라우저별로 만들어야한다

  - 그렇기 때문에 `DOM`을 이용하여 `css`의 요소를 바꿔야하며, 페이지가 바뀌어도 다시 적용될수 있도록 반복 해야한다.

## 사용법

- 해당 섹션은 `web`개발을 해보지 않아 `Devtools`를 조작하지 못하는 사람을 위한 지침이다.

- lms `node(중요)`에 들어가서 `f12` 버튼을 눌러 아래 창을 열고 console이라 적힌 섹션을 연다 (노란색 표시)

![devtools](.\img\Devtools.PNG)

- 그리고 해당 github의 code.js의 있는 코드를 복사하여 아래와 같이 넣는다.

![devtools2](.\img\Devtools2.PNG)

- 엔터를 치면 테마를 적용시킨다

## 테마 변경

- 해당 코드는 마지막 `Changer('#282a36', '#44475a', '#f8f8f2', '#ff79c6', '#bd93f9', 'monokai')`의 색상을 변경하면 테마를 자유롭게 선택할수 있다.

- 단 마지막 `monokai`라고 적은 부분은 `html` 의 `head`태그에서 `link`태그를 추가해야 codemirror의 색이 바뀌기 때문에 필자가 좋아 하는 테마 `dracula`, `monokai` 라는 선택지 밖에없다.

- 색상표 (공식 Dracula theme의 컬러를 사용하였습니다)
  ![colorHex](.\img\ColorHex.png)

## 한계

- `state`값이 바뀌며 랜더링이 되는`stepMain__btn-inner`는 색상을 바꾸어도 1초 단위로 재런더링 되어 색 수정이 불가능하다

- 테마의 유지성을 위해 `setInterval`을 사용하였으나, 해당 행위는 0.5초마다 코드가 반복 되는 불필요한 행위를 해야만한다.
