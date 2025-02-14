
function changeNumbers(n){
    const number = n + "";
    const newNumber = number.split("").reverse().join("")
    console.log(newNumber)
}

changeNumbers(2345)

