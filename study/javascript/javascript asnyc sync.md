### 비동기 처리

```javascript
setTimeout(function, ms) //비동기적으로 ms뒤에 function을 실행하라
```
vanilla javascript에서 rest api호출을 위해 XMLHttpRequest 라는 함수를 제공하지만, 보통은 axios를 사용함, XMLHttpRequest가 IE에서 일부 문제가 있다고함

### 콜백 함수

다른 함수의 인자로 넘겨진 후에 특정 이벤트의 처리로서 호출되는 함수

```javascript
function asyncFunction(callback) {
    setTimeout(() => {
        console.log('호출')
        callback()
    }, 3000)
}

function callback() {
    console.log("콜백호출")
}

asyncFunction(callback)
```

비동기함수가 호출된 후 처리하고자 하는 작업이 있는 경우 주로 사용, 위 같은 느낌

### Promise

```javascript
const promise = new Promise(
    (resolve, reject) => {
        setTimeout(() => {
            let num = 10
            if(num > 9) {
                resolve(num)
            } else {
                reject('error!')
            }
        }, 1000)
    }
)

promise.then(
(item) => {
    console.log('success!', item)
},
(err) => {
    console.log(err)
})
```

javascript에서 비동기를 처리하는 기본적인 방법, 추가적으로 비동기로 처리할 이벤트가 있다면 then메소드를 추가적으로 호출해주면 됨