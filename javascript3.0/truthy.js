// const userEmail = "ahmad@123.ai";
const userEmail = [];

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Dont have user email");
}

// falsy values:

// false,0,-1,BigInt 0n,""(empty string),null,undefined,NaN

// truthy values:

// "0",'false'," "(space),[],{},function(){}

if (userEmail.length === 0) {
    console.log("Array is empty");
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10;
val1 = null ?? 10;

console.log(val1);

// ternary operator :-> condition ? true : false

const iceTeaprice  = 100;
iceTeaprice >= 80 ? console.log("less than 80") : console.log
("more than 80");
