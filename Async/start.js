// const promise = new Promise((resolve, reject)=>{
//     reject(new Error("hey this is error"))
// })
// promise.catch(result=>console.log(result.message))

const validUser = ({username,password})=>{
    return  new Promise((resolve,reject)=>{
        if(username && password){
            resolve("authenticated")
        }else{
            reject({message:"not authenticated"})
        }
    })
}

const app = async () => {
    const data = {
        username:"",password:""
    }
    try{

        const result = await validUser(data)
        console.log(result)
    }
    catch(e){
        console.log(e.message)
    }
}
// app()

// const red = new Promise((resolve,reject)=>{
//     resolve("Error:red")
// })
// const green = new Promise((resolve,reject)=>{
//     resolve("Error:green")
// })

// const blue = new Promise((resolve,reject)=>{
//     reject("Error:blue")
// })

// // await Promise.all([red,green,blue]).then(res=>console.log(res))
// const testAll = async () => {
//     let AllPromises = [blue,red,green]

//     let colors = await Promise.resolve(AllPromises)
//     console.log(colors)

// }
// testAll()


function orderPizza(type,name){
    console.log(`Pizza is ${name} is ordered`)
    
    setTimeout(()=>{
        let msg = `Pizza ${name} is ready`;
        callBack(msg)
    },3000)
}


orderPizza('veg','cheeze burger');
function callBack(msg){
    console.log(msg)
}