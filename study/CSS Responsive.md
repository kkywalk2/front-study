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

### 반응형 레이아웃

- 반응형 웹의 핵심 기능은 @media를 사용하는 것

```css
@media media-type and (media-feature-rule) {
    /*CSS rules go here*/
}
```

#### media-type(미디어 유형) : 보통 all 또는 screen 사용
- all
- print
- screen
- speech -> 이거 뭐임?

#### media-feature-rule : media의 조건
- width : min-width, max-width로 최소 너비/최대 너비로 많이 사용함
- height
- device-width
- device-height
- orientation : 디바이스 방향(가로, 세로)
- aspect-ratio : viewport의 가로세로비

```css
@media (max-width: 1024px) {

}

@media only screen and (max-width: 1024px) {

}

@media only screen and (max-width: 1200px) and (orientation: landscape) {

}

@media only screen and (min-height: 680px) and (orientation: portrait) {

}

@media not all and (orientation: portrait) {

}
```

위는 사용예시, 이정도의 유스케이스만 알아도 충분하다고 함

