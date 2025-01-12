function myFunction() {
    console.log('hi,this is my function');
    console.log('we are learning js');
}
myFunction();

// using parameters:
function root(msg) {
    console.log(msg);
}
root('what is root-pie?');

// sum of two numbers using function:
function Sum(x, y) {
    // local variable-> scope
    console.log(x + y);
}
Sum(786, 752);

// arrow functions:
const add = (a, b) => {
    console.log(a + b);
}
add(5, 4);

const mul = (x, y) => {
    console.log(x * y);
}
mul(786, 786);

// practice:
function alpha(str) {
    let count = 0;
    for (let char of str) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++;
        }

    }

    console.log(count);
}
alpha('ahmad raza khan');

// forEach loop in arrays:->higher order fn/methods->takes fn parameter,return
let arr = ['pune','mumbai','delhi'];

arr.forEach((val,idx,arr) => { //here val means value at each idx
    console.log(val.toUpperCase(),idx,arr);
});

// practice:
let num = [1,2,3,44,25];

num.forEach((val) =>{
    console.log(val*val);
});

// array methods:MAP->used to create new arrays
let Num = [1,2,3,44,25];

let new_Arr = Num.map((val) =>{
    return val;
});
console.log(new_Arr);

// filter:
let marks = [25,786,30,1,2];

let newArr = marks.filter((val) =>{
    return val % 2 === 0;
});
console.log(newArr);

// practice:
let marks_student = [32,54,91,97,93,29];

let grter = marks_student.filter((val) =>{
    return val > 90;
});
console.log(grter);

// practice:
let n = prompt("Enter a number:");

let Arrays = [];

for(let i=1; i<=n; i++){
    Arrays[i-1] = i;
}
console.log(Arrays);

// let sum = Arrays.reduce((prev,cur) =>{
//     return prev + cur;
// })
// console.log(sum);

let product = Arrays.reduce((pre,cur) =>{
    return pre * cur;
})
console.log(product);