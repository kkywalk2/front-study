### javascript에서 변수로 작업하는 여러가지 방법

```javascript
let a = 1
let b = 2
[b, a] = [a, b]
```
- 이런 식으로 분해 문법을 활용해서 swap이 가능함

```javascript
function getData() {
    return [10, 20]
}

let [a, b] = getData()
```
- 한번에 여러개의 변수 반환
- 따지고 보면 그냥 배열인데 분해 문법으로 분해한거?


```javascript
function getData(...args) { //rest 파라미터 [1,2,3,4,5]
    console.log(...args) //spread 파라미터 1,2,3,4,5
}

getDate(1,2,3,4,5)
```

### 호이스팅 이슈
```javascript
console.log(a) //undefined
a=10
console.log(a) //10
var a = 20
```

선언을 뒤에 해도 javascript엔진(v8?)은 선언을 맨 앞으로 올려서 마치 처음에 선언이 된 것 처럼 동작, 이런 실수를 유발할 수 있는 동작을 방지하기 위해선 var보단 let이나 const를 사용하자(엔진에 따라 let도 동일한 경우가 있음, es6미만의 엔진과 호환성을 위해서 인 것으로 보임)


```javascript
getDate()

var getData = function() {
    console.log("Hello World!")
}
```

이런 경우엔 에러가 발생한다. javascript 엔진 내부적으로 함수와 변수는 다르게 다루어지는듯 하다.

### scope

javascript는 변수의 scope는 크게 다음 3가지로 나뉜다.
- global
- function
- block

이렇게 3가지로 분류할 수 있는데 c나 java를 기준으로 생각한다면 변수는 block scope로 동작한다고 생각할 수 있다. const와 let과 함수는 block scope이지만 var는 function scope를 갖는다.

```javascript
function func() {
    {
        var a = 1;
    }
    console.log(a) // 1이 출력됨
}
console.log(a) // 이건 안됨

{
    var b= 2;
}

console.log(b) // 2가 출력됨
```

위와 같이 function에선 scope이 명확하지만 단순 block에만 감싸두면 global scope처럼 동작한다.
