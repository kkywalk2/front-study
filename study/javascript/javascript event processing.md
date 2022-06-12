정확히는 bom에서 발생하는 이벤트를 처리?

```javascript
addEventListener("click", () => { // window. 이 생략됨
    alert("clicked")
}) // 브라우저 화면의 어디를 클릭하든 발생
```

특정 element에 이벤트 추가하기

```javascript
const box = document.querySelector(".class-card")
const originalColor = box.style.backgroundColor
box.addEventListener("mouseover", () => {
   box.style.backgroundColor = "red"
})

const makeOriginalColor = () => box.style.backgroundColor = originalColor //람다함수로
 

box.addEventListener("mouseout", makeOriginalColor) 
```