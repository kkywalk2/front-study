### 웹브라우저 동작 과정

- HTML파일 파싱해서 DOM Tree 생성, CSS 정보를 파싱해서 CSSOM tree 생성
- DOM/CSSOM tree 를 기반으로 Render tree를 생성하고 렌더링 수행
- script tag를 만나면 자바스크립트 엔진에 제어권을 넘겨 자바스크립트 코드 파일을 로그하고 실행, 그 후 다시 HTML파일 파싱을 수행
- 그래서 head tag에 자바스크립트 파일을 넣어두면 느려질 수 있음, 따라서 body tag 직 후에 파일형태로 넣는 것을 추천
- window, dom, bom, javascript의 대략적인 관계 알아두기

### javascript로 HTML 제어하기

```javascript
let elements = documnet.getElementsByTagName('header')
```

```javascript
let element = documnet.getElementById('somethingId') // 단일 element를 가져오는 것은 id로 가져오는 것 뿐
element.innerText = 'change text' // 변경가능
console.log(element.innerText) // change text
```

```javascript
const newBox = document.createElement("div")
newBox.innerText = "appened element"
newBox.setAttribute("class", "box")
newBox.style.background = "red"
document.body.appendChild(newBox) //body tag에 append
```
