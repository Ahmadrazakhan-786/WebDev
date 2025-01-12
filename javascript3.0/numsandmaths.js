const score = 400;
console.log(score);

const balance = new Number(100); // specify kar diya 
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNum = 235.87658;
console.log(otherNum.toFixed(2));
console.log(otherNum.toPrecision(3));


const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN'));

// maths:

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(3.5)); // 4
console.log(Math.ceil(4.1)); // 5
console.log(Math.floor(4.9)); // 4
console.log(Math.sqrt(49.24));
console.log(Math.min(4,7,6,2,1,0));
console.log(Math.max(478,21,2587,2));

console.log(Math.random()); // ans will always in between 0 and 1 of random function

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max-min + 1)) + min);