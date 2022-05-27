
```javascript
const data = {
    name: 'kky',
    age: 20
}

for(let key in data) {
    console.log(key)
    console.log(data[key])
}
// name kky
// age 20
```

javascript의 객체는 다른 언어의 map이나 dictionary와 매우 유사, 음.. 이거말곤 딱히 쓸내용이 없음
while문같은건 그냥 동일


```javascript
let data = [10, 20, 30]
const [data1, ...lastdata] = data //이렇게 마지막 요소를 분해할 수도 있음 -> 10, [20, 30]
```