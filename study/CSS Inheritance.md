### CSS의 상속과 우선순위
[상속의 우선순위 관련 테이블](https://www.w3.org/TR/CSS2/propidx.html)

위 링크에 들어가면 상속의 우선순위에 대한 표가 정의되어 있음

### 주요 프로퍼티 별 상속 여부
- 상속 가능
text-align, line-height, color, font, visibility, opacity
- 상속 불가
width, height, margin, padding border, display, box-sizing, background,
vertical-align, position(top, right, bottom, left), z-index, overflow, float

- 강제로 상속 받기
```css
.box2 {
    width: inherit;
    height: inherit;
    background-color: inherit;
}
```
특정 프로퍼티에 inherit를 주면 강제로 부모 컴포넌트의 값을 가져온다

### CSS 우선순위(Cascading Order)

1. head태그 안의 style 요소
2. head태그 안의 style 태그 안의 @import
3. <link>로 연결된 CSS파일
4. <link>로 연결된 CSS파일 안의 @import문

### CSS 명시도

명시도가 우선순위 보다 좀더 많이 영향을 준다

1. 프로퍼티값 뒤에 !important를 적은 경우(무한대)
2. 태그 안에서 속성으로 적은 style에 의해 설정된 프로퍼티(1000)
3. id로 선택한 css selector에서 적용된 프로퍼티(100)
4. class, html 속성, 수도 클래스로 선택한 css selector에서 적용된 프로퍼티(10)
5. 태그 또는 가상 요소 셀렉터로 선택한 css selector(1)
6. 전체(*)로 선택한 css selector에서 적용된 프로퍼티(0)
7. 상속된 프로퍼티(마이너스)

!important > inline style > id > class > tag

간단하게 생각하면 위 순서로 적용, !important와 style은 현업에선 선호하지 않음

[명시도 계산 사이트](https://specificity.keegan.st/) 애매하면 여기서 계산해보자
명시도가 동일하면 우선순위로 계산하고 그것도 동일하면 뒤에 나온 css를 우선한다


