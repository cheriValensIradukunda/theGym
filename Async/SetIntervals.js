const callBackFunction = (callBack) => {
    let interval =setInterval(callBack, 2000);
}
const callFunction = () =>{
    console.log("this output is delayed 2 secs")
}
callBackFunction(callFunction)