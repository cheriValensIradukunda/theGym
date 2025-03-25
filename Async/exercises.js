
// callBackFunction(callFunction)

const result = (callback) => {
    callback(false,"this is the message")
}
const messageOutput = () =>{
    return new Promise((resolve,reject)=>{
        result((error,message)=>{
            error?resolve(message):reject(new Error(message))
        })
    })
}
// console.log(messageOutput() instanceof Promise)
// messageOutput().then(res=>{
//     console.log(res)
// }).catch(res=>{
//     console.log(res)
// })

function fetchData(url){
    return new Promise((resolve,reject)=>{
        fetch(url).then(res=>resolve(res)).catch(reject("error"))
    })
}
// fetchData("https://example.com/data").then(res=>console.log(res)).catch(res=>console.log(res))

//with useInterval
const displayNumber = () => {
    let secs= 0;
    let interval = setInterval(()=>{
        if(secs<=5){
            secs +=2
            console.log(secs)
            console.log(2)
            
        }else{
            clearInterval(interval)
        }
    },2000)
}
// displayNumber()

const displayNumber2 = () => {
    let secs = 0;

    const outputingNumber = ()=>{
        if(secs <=5){
            console.log(3)
            setTimeout(outputingNumber,2000)
            secs+=2
        }else{
            console.log("done")
        }
    }
    outputingNumber()
}
// displayNumber2()
// outputingMultiplePromises(promise2,promise1,promise3)

// const fetchDatas = async () => {
//     const fetchPosts = await fetch("https://jsonplaceholder.typicode.com/posts/id").then(res=>res.json())
//     .catch(res=>"fetchPosts Error")
//     const fetchComments = await fetch("https://jsonplaceholder.typicode.com/comments?postId=id")
//     .then(res=>res.json()).catch(res=>"fetchComment Error")
//     const fetchAuthor = await fetch("https://jsonplaceholder.typicode.com/users/id")
//     .then(res=>res.json()).catch(res=>"fetchAuthor Error")

//     return {
//         fetchPosts,fetchComments,fetchAuthor
//     }
// }
// fetchDatas().then(res=>console.log(res)).catch(res=>console.log("error"))

// const fetchDatas = async (postId) => {
//     try {
//         // Fetch the post
//         const fetchPosts = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(res => res.json())
//             .catch(() => "fetchPosts Error");
        
//         // Fetch the comments
//         const fetchComments = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
//         .then(res => res.json())
//             .catch(() => "fetchComments Error");

//         // Fetch the author
//         const fetchAuthor = await fetch(`https://jsonplaceholder.typicode.com/users/${fetchPosts.userId}`)
//         .then(res => res.json())
//             .catch(() => "fetchAuthor Error");

//         return {
//             fetchPosts,
//             fetchComments,
//             fetchAuthor
//         };
//     } catch (error) {
//         console.error("Error:", error);
//     }
// };

// // Example usage
// const postId = 1; // Provide a valid postId
// fetchDatas(postId).then(res => console.log(res)).catch(err => console.log("Error:", err));
