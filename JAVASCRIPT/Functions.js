function myfunction(){
    console.log("Welcome to this beautiful world");
    console.log("Haste rahiye");
}
myfunction();
myfunction();

function rootpie(msg){
    // parameter -> input
    console.log(msg);
}

rootpie("It is a mystery"); // agrument

// function to calculate numbers:

function sum(x, y){
    //local variable ->scpe
    console.log(x + y);
}
sum(4,5);

// Arrow functions

const arrowsum = (x,y) => {
    console.log(x + y);
}
arrowsum(786,786);

// multiplication using arrow functions 
const mul = (a,b) => {
   console.log(a * b);
}
mul(25,25);

// practice questions:
function countvowels(str){
     let count = 0;
     for(const char of str){
       
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u")
        {
            count++;
        }
        
     }
     console.log(count);
}

// For-each loop:
let arr = [1,2,3,4,5];

arr.forEach((val) => {
    console.log(val);
});

// practice questions:
let Arr = [1,5,3,2,7];

Arr.forEach((Arr) => {
    console.log(Arr * Arr);
});

// map method
let num = [65,74,42];

num.map((val) =>{
    console.log(val);
})

// filter method
let no = [1,2,3,4,7,9,8];

let evenarr = arr.filter((val) =>{
    return val % 2 == 0;
});
console.log(evenarr);

// reduce method
let numbers = [1,2,3,4,7,9,8];

const output = numbers.reduce((res,val) => {
    return res + val;
});
console.log(output);

// practice questions:
let marks = [75,65,91,90,97,36,45];
let req_marks = marks.filter((val) =>{
    return val >= 90;
});
console.log(req_marks);

// practice questions:
let n = prompt("Enter the required number:");
let reqarr = [];

for(let i=1; i<=n; i++){
     reqarr[i-1] = i;
}
console.log(reqarr);

// Sum of all numbers in array
// let Sum = reqarr.reduce((res,curr) =>{
//     return res + curr;
// });
// console.log(Sum);

// product of all numbers in array
let PRODUCT = reqarr.reduce((res,curr) =>{
    return res * curr;
});
console.log(PRODUCT);
