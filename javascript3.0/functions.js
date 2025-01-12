function x(){
    console.log("A");
    console.log("H");
    console.log("M");
    console.log("A");
    console.log("D");
}
// x();

// function sum(num1,num2){ // parameters
//     console.log(num1+num2);
// }
// sum(3,2) // arguments

function sum(num1,num2){
    let result = (num1+num2);
    return result;
}
const result = sum(7,8);
console.log("Result is:",result);

function loginUserMessage(username){
    if(username === undefined){
        console.log("please enter a username:")
        return // note: return ke baad kuch execute nahi hota
    }
    return `${username} just logged in`;
}
// console.log(loginUserMessage("Ahmad"));
console.log(loginUserMessage()); // undefined