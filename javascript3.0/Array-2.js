const marvel_heroes = ["thor","ironman","spiderman"];
const dc = ["superman", "flash","batman"];

//  marvel_heroes.push(dc);
// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

const naya = marvel_heroes.concat(dc);
console.log(naya);

const all_heroes = [...marvel_heroes,...dc]; // spread out kar deta hai:
console.log(all_heroes);

const a1 = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const a2 = a1.flat(Infinity);
console.log(a2);

console.log(Array.isArray("Ahmad")); // give true or false 
console.log(Array.from("Ahmad")); // convert into array

let score1 = 1000;
let score2 = 3500;
let score3 = 4000;
console.log(Array.of(score1,score2,score3)); // also convert into array



