## Block
- div
- h1 ~ h6
- p,ol,ul,li
- hr, table, form

## Inline
- span
- a
- strong
- select
- img
- br
- input
- textarea
- button

width, height, margin, padding 지정 불가, 단 상, 하 여백은 line-height로 지정가능
무조건 space(4px)을 갖음, 없애고 싶으면 tag간 주석을 넣어주면됨


## inline-block
```css
p{
    display: inline-block;
}
```
보통 가로로 출력하고 싶은데 width나 height를 지정하고 싶은 경우 많이 사용한다.