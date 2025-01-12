// for loop:
for (let i = 1; i <= 5; i++) {
    console.log("Ahmad Raza Khan");
}

// sum of first n numbers:
let sum = 0;

for (let i = 1; i <= 10; i++) {
    sum = sum + i;
}
console.log("the sum is", sum);

// while loop:
let i = 1;
while (i <= 5) {
    console.log("i", i);
    i++;
}

//  do-while loop:
let j = 1;
do {
    console.log('j=', j);
    j++;
} while (j <= 20);

// for-of loop:used for strings & arrays
let str = "Ahmad";
let length = 0;
for (let i of str) {
    console.log("i=", i);
    length++;
}
console.log("String length is", length);

// for-in loop: used for objects & arrays
let student = {
    name: 'ahmad',
    age: 20,
    cgpa: 9.27,
    isPass: true,
};

for (let i in student) {
    console.log('i=', i, 'value=', student[i]);
}

// print all even numbers from 0 to 100:
for (let i = 2; i <= 100; i = i + 2) {
    console.log("i=", i);
}

// odd no.
for (let num = 0; num <= 100; num++) {
    if (num % 2 !== 0) {
        console.log("num=", num);
    }
}

// game:

// let gameNum = 25;

// let userNum = prompt("Guess the game number:");

// while (userNum != gameNum){
//    userNum = prompt("u entered wrong number, Guess again;");
// }
// console.log("congrats, u entered the right number");

// STRINGS:
let Str = "ahmad raza khan";
console.log(Str.length);
console.log(Str[6], Str[14]);

// tempelate literals;
let sentence = `ark`;
console.log(sentence);

console.log('ahmad \nraza \nkhan');

// strings methods:
let str1 = "Ahmad Raza khan";
let str2 = " pathan";
console.log(str1.toUpperCase());
console.log(str1.toLowerCase());
console.log(str1.trim());
console.log(str1.slice(1, 3));
console.log(str1.concat(str2));
console.log(str1.replace("Ahmad","pathan"));
console.log(str1.charAt(6));

// practice questions:
let full_name = prompt("Enter the fullName");

let username = "@" + full_name + full_name.length;
console.log(username);







