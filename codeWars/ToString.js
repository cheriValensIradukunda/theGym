// Complete the method/function so that it converts dash/underscore delimited words into camel casing.
// The first word within the output should be capitalized only if the original word was capitalized 
// (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always 
// capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str){
  
    return str.split(/[-_]/).map((res,index) => index == 0? res: res.split("").map((res,index)=>index == 0? res.toUpperCase():res).join("")).join("")
  
}


// Move the first letter of each word to the end 
// of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str){
    //Code here
    
    return str.split(" ").map((res)=>{
        let innerWord = res.split("")
        if(!res.match(/[?!@]/)) { 
            innerWord.push(innerWord[0] + "ay")
            innerWord.shift()
        }
        return innerWord.join("")
    }).join(" ")
  }
//   console.log(pigIt("valens iradukunda !"))

  function rot13(message){
    //your code here
    return message.replace(/[a-zA-Z]/g,match=>{
        let letters = {
            A: "N", B: "O", C: "P", D: "Q", E: "R", F: "S", G: "T", H: "U", I: "V", J: "W", 
            K: "X", L: "Y", M: "Z", N: "A", O: "B", P: "C", Q: "D", R: "E", S: "F", T: "G", 
            U: "H", V: "I", W: "J", X: "K", Y: "L", Z: "M", 
            a: "n", b: "o", c: "p", d: "q", e: "r", f: "s", g: "t", h: "u", i: "v", j: "w", 
            k: "x", l: "y", m: "z", n: "a", o: "b", p: "c", q: "d", r: "e", s: "f", t: "g", 
            u: "h", v: "i", w: "j", x: "k", y: "l", z: "m"
        };
        return letters[match]
    })
  }
//   console.log(rot13("hello iradukunda valens8"))
// function high(x){
//     let values = x.toLowerCase().split(" ")
//     let value1 = values[0].split("").map(res=>res.charCodeAt(0)-64).reduce((existing, newValue)=>existing+newValue) 
//     let value2 = values[1].split("").map(res=>res.charCodeAt(0)-64).reduce((existing, newValue)=>existing+newValue) 
//     console.log(value1 + " " + value2)
//     return value1>value2? values[0]: value1 == value2? values[0]:values[1]
//   }
function high(s){
    let as = s.split(' ').map(s=>[...s].reduce((a,b)=>a+b.charCodeAt(0)-96,0));
    return s.split(' ')[as.indexOf(Math.max(...as))];
  }
//   console.log(high("man taxi"))

function findUniq(arr) {
    // do magic
   arr.sort((a,b)=>a-b)
    return arr[0] == arr[1]? arr.pop():arr[0]
  }
//   console.log(findUniq([0,1,1,1,2,1,1,1,1]))
// console.log('vava'.includes('a'))

function camelCaseRemove(strng){
    return strng.replace(/([A-Z])/g, ' $1')
}
// console.log(camelCaseRemove("HelloWorLd"))

function narcissistic( value ) {
    return ('' + value).split('').reduce(function(p, c){
      return p + Math.pow(c, ('' + value).length)
      }, 0) == value;
  }
  // console.log(narcissistic(123))
