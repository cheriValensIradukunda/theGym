
const outputingMultiplePromises = (...promises) => {
    Promise.race(promises).then(res=>console.log(res)).catch(res=>console.log(res))
}
const promise1 = new Promise((resolve,reject)=>{
    reject("promise1 error")
})
const promise2 = new Promise((resolve,reject)=>{
    resolve("promise2")
})
const promise3 = new Promise((resolve,reject)=>{
    resolve("promise3")
})
