// arrays:
let marks = [82,32,75,51,51];
console.log(marks);
console.log(marks.length);
console.log(typeof marks);
console.log(marks[3]);
marks[5] = 54;
console.log(marks);

// looping over array:
// using for loop:
for (let i=0; i<marks.length; i++){
    console.log(marks[i]);
}

// using for-off loop:
for (let i of marks){
    console.log(marks);
};

// practice:
let arr = [85,97,44,37,76,60];
let sum =  0;
for(let i of arr){
   sum = sum + i;
}
console.log(sum/arr.length);

// practice:
let prices = [250,645,300,900,50];

let idx = 0;
for(let i of prices){

    let offer = i/10;
    prices[idx] = prices[idx] - offer;
    console.log(`value after offer = ${prices[idx]}`);
    i++; 
}

// array methods:
let veggies = ['potato','tomato','brinjal','pea'];
veggies.push('cauliflower');// push-> add the items at the end
let deletedItem = veggies.pop(); // pop-> delete from end
console.log(veggies);
console.log("deleted",deletedItem);
console.log(veggies.toString()); // toString converts to array

// concatenation:
let marvel_heroes = ['thor','spiderman','ironman','dr.strange','antman'];
let dc_heroes = ['batman','superman'];
console.log(marvel_heroes.concat(dc_heroes));
dc_heroes.unshift('krsh'); // unshift-> add items at the start of the array
console.log(dc_heroes);
marvel_heroes.shift(); // shift-> delete from start
console.log(marvel_heroes);

console.log(marvel_heroes.slice(0,2)); // slice->returns a piece of array

let alphabets = ['x','y','t','p','s'];
alphabets.splice(1,2,'a','n'); // splice-> (add,remove,replace)
console.log(alphabets);
// add  element:
alphabets.splice(3,0,101);
console.log(alphabets);
// delete element:
alphabets.splice(3,1);
console.log(alphabets);
// replace element:
alphabets.splice(2,1,786);
console.log(alphabets);

// practice:
let companies = ['bllomberg','microsoft','uber','google','ibm','netflix'];;
companies.shift();
console.log(companies);
companies.splice(2,1,'ola');
console.log(companies);
companies.push('Amazon');
console.log(companies);





