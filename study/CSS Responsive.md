### CSS media query와 반응형 레이아웃

- 적응형 웹
모바일 환경에서 다른 페이지를 보여주는 방법
ex) m.naver.com 같은거...
- 반응형 웹
동일 페이지로 사이즈에 따라 다르게 보여주는 방법

### viewport

스마트폰에서는 virtual viewport를 대부분 980px로 설정해서, 마치 화면 가로 너비가 980px인 상태로 웹페이지가 표시되도록 해놓음

특정 넓이로 가정하기 때문에 상대적인 크기는 같아보임

```html
<meta name="viewport" content="width=320">
```

위와 같이 viewport의 크기를 강제로 변경가능 하지만 보통 잘하지 않음

```html
<meta name="viewport" content="width=device-width">
```

보통 위처럼 하는데 device-width는 실제 픽셀 수가 아님
ppi 혹은 pixel density, 또는 화소 밀도로 계산하여 width값을 부여함
따라서 일반적으로 device-width는 '해상도 너비/pixel density' 로 계산
따로 설정하지 않으면 980px로 가정하고 출력함

