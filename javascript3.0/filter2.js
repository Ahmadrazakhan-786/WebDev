const myNums = [5,7,8,4,2,11];

const newNums = myNums.map( (num) => num + 10);
// console.log(newNums);

const arr = [5,7,8,4,2,11];
// chaining:
const naya = arr.map( (num) => num * 10)
                .map( (num) => num + 1)
                .filter( (num) => num >= 30); 
                
console.log(naya);