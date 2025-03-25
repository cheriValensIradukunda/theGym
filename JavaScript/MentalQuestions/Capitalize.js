function disemvowel(str) {
    var newString = str.split('');
    var vowels = ['a','i','u','o']
    var otherString = newString.map(vowel=>{
      if(!vowels.includes(vowel)){
        console.log(vowel)
        return vowel;
      }
    })
    return otherString.join("")
  }
  console.log(disemvowel("This website is for losers LOL!"));