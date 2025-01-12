let marks = [63,58,97,65,75];
console.log(marks);

let friends = ["Ahmad", "Ashir", "Saurabh", "Aakash"];
console.log(friends);
console.log(friends[1]);

marks[1] = 91; // arrays-> mutable
console.log(marks);

// using for loops:
for(let idx=0; idx<marks.length; idx++){
    console.log(marks[idx]);
}

// for-of loop:
for(let mark of marks){
    console.log(mark);
}

let cities = ["Delhi", "Mumbai", "pune", "Agra", "Muzaffrapur"];

for(let city of cities){
    console.log(city.toUpperCase());
}

// Practice questions
// let MARKS = [85,97,44,37,76,60];
let sumofmarks = (85+97+44+37+76+60);
let average =  (sumofmarks)/6;
console.log(average);

// Another method using loops:
let MARKS = [85,97,44,37,76,60];
let sum = 0;

for(let val of MARKS){
    sum = sum + val;
}
let avg = sum/MARKS.length;
console.log("The average marks of the class is:",avg);

// practice questions
let items = [250,645,300,900,50];

let idx = 0;
for(let val of items){
    //console.log("value at index",idx ,"=",val);
    let offer = val/10;
    items[idx] = items[idx] - offer;
    console.log("value after offer = ",items[idx]);
    idx++;
}

// Another method

for(let i = 0; i < items.length; i++){
    let offer = items[i]/10;
    items[i] -= offer;
}
console.log(items);

// Array Methods:

let veg = ["peas","potato","tomato","cauliflower"]
veg.push("onion");
console.log(veg);
veg.pop();
console.log(veg);
console.log(veg.toString());


// Concatenation:
let marvel_heroes = ["thor","ironman","hulk","captain-A","thanos"];
let dc_heroes = ["superman","batman",];
let heroes = marvel_heroes.concat(dc_heroes);
console.log(heroes);

marvel_heroes.unshift("antman");// add at the first position
console.log(marvel_heroes);
marvel_heroes.shift();
console.log(marvel_heroes); // delete from start and return

console.log(marvel_heroes.slice(1,3));//returns a piece of array
let arr =  [1,3,5,10,2,7];
//arr.splice(2,2,101,786);//change original array(add,remove,replace)

// Add element
//arr.splice(2,0,101);

// delete element
//arr.splice(5,1);

// replace element
arr.splice(3,1,101);

// practice questions
let Arr = ["Boomberg","Micrsoft","Uber","Google","IBM","Netflix"];
//Arr.splice(0,1);
//Arr.splice(2,1,"ola");
Arr.push("Amazon");
console.log(Arr);