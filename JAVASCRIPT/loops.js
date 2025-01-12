// // FOR LOOP

// for (let count=1; count<=5; count++){
//     console.log("AHMAD RAZA KHAN");
// }

// // Calculate sum of 1 to 5

// let sum = 0;
// for(let i=1; i<=5; i++){
//     sum = sum + i;
// }
// console.log("sum is:",sum);

// // WHILE LOOP

// // let i = 1;
// // while(i<=5){
// //     console.log("i:",i);
// //     i++;
// // }

// // DO WHILE LOOP
// let i = 20;
// do{
//     console.log("hello world");
//     i++;
// } while(i<=10);

// // FOR OF LOOP : applicable on string and arrays
// let str = "my name is khan";

// for(let i of str){
//     console.log("i",i);
// }

// // length of the string

// let Str = "javascript";

// let size = 0;
// for(let i of str){
//     console.log("i",i);
//     size++;
// }
// console.log("string size = ", size);

// // FOR-IN LOOP : applicable for objects that returns only keys

// let student = {
//     name: "AHMAD RAZA KHAN",
//     age: 20,
//     cgpa:9.27,
//     ispass: true
// };

// for(let i in student){
//     console.log("i=",i, "values:",student[i]);
// }

// practice questions
// printing numbers from 1 to 100

// for(let i = 0; i <= 100; i++){
//   if(i % 2 == 0){
//     console.log("i=",i);
//   }

// }
// pq-2
// let gamenum = 25;

// let usernum = prompt("Guess the game number:");
// console.log(usernum);

// while(usernum != gamenum){
//      usernum = prompt("u entered wrong number. Guess again!");
// }
// console.log("Congratulations u entered the right answer!");

// CREATING STRINGS
let str = "AHMAD RAZA KHAN";
let str2 = 'ark';

console.log(str.length);// string length
console.log(str[0]);  // accessing elements 

// Tempelate literals
let sentence = `This is a tempelate litearl`;
console.log(sentence);
console.log(typeof sentence);

// Application of tempelate literals
let obj = {
     name: "pen",
     price: 10,
};

let output = `The cost of ${obj.name} is ${obj.price} rupees`;
console.log(output);

// note:
let STR = "AAPNA\tDESH";
console.log(STR); // AAPNA    DESH
console.log(STR.length); //10

// built in functions of string:

let str1 = "Ahmad Raza Khan";
console.log(str1.toUpperCase());
console.log(str1.toLowerCase());

console.log(str1.trim()); // remove whitespaces from starting and end

console.log(str1.slice(1,3)); // slicing i.e. indexing
console.log(str2.concat(str1)); // concatenation

let new_str = "hellow";
console.log(new_str.replace("h","y"));
console.log(new_str.charAt(4)); // using indicies

// practice questions:
let fullname = prompt("Enter your fullname without spaces:");
let username = "@" + fullname + fullname.length;
console.log(username);


