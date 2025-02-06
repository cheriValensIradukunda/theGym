function longestWord(text){
    var word = "";
    const wordsArr = text.split(" ")
    wordsArr.forEach(singleWord =>{
        if(singleWord.length > word.length){
            word = singleWord
        }
    })
    console.log(word)
}
longestWord("iradukunda cheri valens sinnzabakwira theogene")

function arrangeLongestWord(text){
    var word = {};
    const wordsArr = text.split(" ")
    // wordsArr.forEach(singleWord =>{
        
    // })
    wordsArr.sort((a,b) => b.length-a.length)
    console.log(wordsArr.join(" "))
    console.log(wordsArr.sort((a,b)=>b.localeCompare(b)))
}
arrangeLongestWord("iradukunda cheri valens sinnzabakwira theogene")