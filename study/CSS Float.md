### CSS Float
기존에 수평정렬을 위해 사용되었지만 flexbox와 grid가나오면서 수평정렬을 위한 용도로는 사용하지 않는다

- none
- right
- left
- both

```css
div {
    width: 10vw;
    height: 10vw;
    }
.box1 {
    float: left;
    background-color: yellow;
}
```

### float의 문제점
float가 아닌 block요소와 겹쳐짐

```css
.box1 {
      float: left;
      background-color: yellow;
}
.clearfix::after {
      content: "";
      clear: both;
      display: block;
}
```
대충 해결방법 clearfix라는 class로 놈으로 float태그들을 감싼다

```html
<div class="clearfix">
    <div class="box1"></div>
    <div class="box1"></div>
    <div class="box1"></div>
</div>
```

대충 이렇게... float는 예외상황이 많이 발생함 걍 안쓰는게 나을듯

