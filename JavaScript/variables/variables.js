//next year age
const bdYear = 2004;
const futureYear = 2026;

const myAge = futureYear - bdYear;

console.log(`In the next year, i will be ${myAge} years old`)

//total snacks
const currentAge = 21;
const maxAge = 50;
const amountPerDay = 2;
const total = (356 *2) * (maxAge-currentAge);

console.log(`At ${maxAge} i will be finish eating ${ total } snacks in total`)

//circle

const radius = 12;
const circumference = 2* Math.PI * radius;

const area = Math.PI* radius^2;

console.log(`The area of circle is ${area} and its circumference is ${ circumference} while its radius is ${radius}`)


//temperature

const temperature = 32;
const fahrenheight = ((temperature/5) *9) +32
const celcius = ((fahrenheight-32) *5) /9;
console.log(`the celcius of ${temperature} is ${celcius} and its fahrenheight is ${fahrenheight}`)