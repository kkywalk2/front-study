### javascript object
javascript의 object는 다른언어들 처럼 class방식이 아닌 prototype 방식, 물론 es6에선 class 방식 문법을 지원한다.

- 객체 리터럴 방식

```javascript
const user = {
    age: 20,
    name: "Dave",
    getData: function() {
        console.log("this is method")
    },

    get getAge() {
        return this.age
    },

    set setAge(value) {
        this.age = value
    }
}

user.setAge = 21

const emptyObject = {}
emptyObject.name = "kky"
```

객체 리터럴 방식으로 초기화한 object, 아래 처럼 비어있는 object를 만들고 프로퍼티를 추가할 수 있다.
함수에 arrow function을 사용할 수 있지만 this로 자기자신을 참조할 수 없다.

위처럼 function과 별개로 getter와 setter를 설정할 수도 있음

그외 new Object()방식과 생성자 함수(우리가 아는 class의 생성자랑 다름)이 있는데 이제 사용하지 않는다고 보면됨
javascript는 함수도 객체이기 때문에 이 함수가 객체의 prototype이 되고 이를 기반으로 object를 만든다.

- class 방식

```javascript
class User {
    constructor(age, name) {
        this.age = age
        this.name = name
    }

    me() {
        console.log(this)
    }
}

class SuperUser extends User{
    constructor(age, name) {
        super(age, name)
        this.auth = "super!"
    }

    // override
    me() {
        console.log('this is super user')
        console.log(this)
    }
}

const kky = new User(20, 'kky')

kky.me()
```

일반적으로 알고있는 class방식과 유사함, 하지만 내부 구현방식은 기존의 prototype과 동일하기 때문에 런타임에 프로퍼티를 추가할 수 있음

```javascript
User.prototype.nickname = 'jam'
console.log(kky.nickname) // jam
console.log(kky.hasOwnProperty('name')) // true
console.log(kky.hasOwnProperty('nickname')) //false
```

hasOwnProperty 라는 함수를 사용하여 객체가 선언 시 가지고 있던 프로퍼티 인지 확인가능, prototype으로 추가한 프로퍼티는 false가 반환됨

