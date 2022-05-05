### CSS Flexbox

수평처리를 위해 등장한 프로퍼티, 기존의 inline-block이나 float의 방식은 문제가 많음

```html
<style>
.container {
    display: flex;
    flex-wrap: nowrap; /*default value*/
}
.item {
    /*.....*/
}
</style>
<body>
    <div class="container"> <!--자식들이 수평으로 배치-->
        <div class="item"></div>
        <div class="item"></div>
    </div>
</body>
```

부모가 되는 엘리먼트에 disply: flex 속성을 주면 자식 엘리먼트들이 수평으로 정렬됨, 부모의 엘리먼트 자채는 block으로 취급됨, inline으로 만들고 싶다면 display: inline-flex로 설정해주면 됨

#### justify-content

```css
.container {
    display: flex;
    flex-wrap: nowrap; /*default value*/
    justify-content: flex-start; /*default value*/
}
```

justify-content 프로퍼티로 flexbox내부의 요소의 정렬을 설정할 수 있다. 요소 간 가로축에 대한 정렬

#### align-items

요소의 row별 시작점의 기준을 설정하여 정렬

#### align-content

모든 요소의 세로축에 대한 정렬


```css
.container {
    display: flex;
    flex-wrap: wrap;
}
```
flex-wrap설정을 wrap으로 바꾸면 자식 엘리먼트가 넘치는 경우 다음줄로 넘어감, 기본적으로 한줄로만 표현함

### flex의 item레벨에서 설정할 수 있는 프로퍼티

- order : order값이 작을수록 먼저 배치
- flex-grow : item의 가로 증가 비율(그냥 비율이라고 생각해도 될듯)
- flex-shrink : item의 가로 축소 비율, 뭔가 개념이 미묘..
- flex-basis : 기본값은 auto, 기본 너비 설정

```css
{
    flex : flex-grow flex-shrink flex-basis /*단축 속성은 IE에서 호환성 이슈가 있음*/
}
```

- align-self : 세로 정렬의 기준을 item단위로 변경, 값은 align-items와 동일한 값을 가진다

[링크](https://codepen.io/enxaneta/full/adLPwv)에서 flex box의 프로퍼티들을 쉽게 실습해 볼 수 있음

### 팁

div 박스 내의 텍스트를 가운데 정렬하려면 

```css
.centered_text {
    text-align: center;
    line-height: 50px;
    height: 50px;
}
```

line-height와 height를 동일하게 주면 수직으로 가운데 정렬이 됨, 수평처럼 center라는 값은 없는듯?



