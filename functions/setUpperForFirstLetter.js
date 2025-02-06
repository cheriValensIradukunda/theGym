function upperingLetter(string){
  var newArr = []
  var arr = string.split(" "); 
  arr.forEach(array=>{
    newArr.push(array.charAt(0).toUpperCase() + array.slice(1))
  })
  console.log(newArr.join(" "))
}

upperingLetter("hello world")

