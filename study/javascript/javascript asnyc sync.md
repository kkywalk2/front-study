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

```javascript
promise.then(
    (item) => {
        console.log('success!', item)
    }
).catch(
    (error) => {
        console.log('error!', error)
    }
)
```

then에 인자를 하나만 주고 catch 메소드로 reject을 처리하는 것도 가능함, 보통은 exception처리를 위한 메소드, 복잡한 then chaining 중간에 exception을 처리를 할수 있음

```javascript
promise
.then(
    (item) => {
        console.log('success!', item)
        return 2 //then에서 return하면
    }
)
.then(
    (item) => { //다음 then의 매개변수로 들어감
        console.log('success!', item)
    }
)
.finally(
    () => {
        console.log('finally') //정상적으로 처리되면 마지막에 호출, exception이 발생하면 finally먼저 실행하고 catch실행
    }
)
.catch(
    (error) => {
        console.log('error!', error)
    }
)
```

```javascript
Promise.all([promise1, promise2])  //모든 promise를 비동기로 실행하고 모두 실행이 완료되면 then을 실행함
.then(
    (data) => {
        console.log(data)
    }
)

Promise.race([promise1, promise2]) //모든 promise를 실행하고 가장먼저 종료되는 하나의 promise만 then으로 넘겨짐, 나머지 promise도 실행은함
.then(
    (data) => {
        console.log(data)
    }
)
```