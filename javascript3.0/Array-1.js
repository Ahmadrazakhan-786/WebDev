// Array
const myArr = [1,5,8,9,2,"ahmad"];
console.log(myArr);
console.log(myArr[3]);

const Heroes = ["batman","spiderman","ironman"];
console.log(Heroes);
console.log(Heroes.length);
console.log(Heroes[2]);

const arr2 = new Array(1,2,5); // another way
console.log(arr2[0]);
console.log(arr2.length);

// Array Methods:
myArr.push(7); // add the element at the last
console.log(myArr);
myArr.pop(); // remove the last element
console.log(myArr);
myArr.unshift("khan"); // add the element at the beginning
console.log(myArr);
myArr.shift();
console.log(myArr); // remove the first element

console.log(myArr.includes("raza")); // gives true or false 
console.log(myArr.indexOf("ahmad"));

const newarr = myArr.join();
console.log(myArr);
console.log(newarr); // will give ans in the form of strings

// slice, splice:
console.log("A", myArr);
const myn1 = myArr.slice(1,3);
console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3);
console.log("c",myArr);
console.log(myn2);