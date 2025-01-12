const name = "ahmad";
const repoCount = 3;
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const cricketer = "abd devilliers";
console.log(cricketer[5]);
console.log(cricketer.__porto__);
console.log(cricketer.length);
console.log(cricketer.toUpperCase());
console.log(cricketer.charAt(7));
console.log(cricketer.indexOf('l'));

const newString = cricketer.substring(0,6);
console.log(newString);
console.log(cricketer.substring(5));
console.log(cricketer.substring(7,7)); 
console.log(cricketer.slice(0,6));
console.log(cricketer.slice(5));
console.log(cricketer.slice(7,7)); 
console.log(cricketer.slice(-14,5)); // ye nhi smgh aaya 

let nayastr = "    ahmad   ";
console.log(nayastr);
console.log(nayastr.trim());

const naya = 'ahmad raza saheb';
console.log(naya.replace('saheb' , 'khan'));
console.log(naya.includes("khan"));
console.log(naya.includes('Raza'));
console.log(naya.split(' '));

