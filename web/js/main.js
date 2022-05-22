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

    me() {
        console.log('this is super user')
        console.log(this)
    }
}

const kky = new SuperUser(20, 'kky')

kky.me()

User.prototype.nickname = 'jam'
console.log(kky.nickname)
console.log(kky.hasOwnProperty('name'))
console.log(kky.hasOwnProperty('nickname'))