const promise = new Promise(
    (resolve, reject) => {
        setTimeout(() => {
            let num = 10
            if(num > 11) {
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
    }
).catch(
    (error) => {
        console.log('error!', error)
    }
)