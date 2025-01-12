// conditional statements
// IF STATEMENT
let age = 25;
if(age >= 18) {
    console.log("can vote");
}

// IF-ELSE STATEMENT
// let mode = "light";
// let color;

// if(mode === "dark"){
//     color = "black";
// }
// else{
//     color = "white";
// }
// console.log(color);

// odd or even
let num = 10;

if(num % 2 == 0){
    console.log("even no.");
}
else{
    console.log("odd no.");
}

// ELSE-IF STATEMENT
let mode = "silver";
let color;
 if(mode == "dark"){
    color = "black";
 }
 else if(mode == "blue"){
    color = "blue";
 }
 else if(mode == "pink"){
    color = "pink";
 }
 else{
    color = "white";
 }
 console.log(color);

 // Ternary operator
let Age = 16;

let result = Age >= 18 ? "adult" : "not adult";
 console.log(result);

 // NOTE:
//alert("Ahmad"); // one time popup
// let name = prompt("hiiii folks"); // taking input from he user
// console.log(name);

// prractice questions
// let Num = prompt("Enter a number:");

// if (Num % 5 == 0){
//    console.log("multiple of 5");
// }
// else{
//    console.log("not a multiple of 5");
// }

// practice questions
let score = prompt("Enter the score:");

if (score >= 90 && score <= 100){
   console.log("A grade");
}
else if(score >= 80 && score <= 89){
   console.log("B grade");
}
else if(score >=70 && score <= 79){
   console.log("C grrade");
}
else if(score >= 60 && score <= 69){
   console.log("D grade");
}
else{
   console.log("fail");
}