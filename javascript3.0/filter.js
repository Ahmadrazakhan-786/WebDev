// const coding = ["js","ruby","java","python","cpp"];

// const value = coding.forEach( (item) =>{
//     console.log(item);
// })
// console.log(value); // will return undefined if we store foreach in a variable even if we return

const myNums = [1,2,3,4,5,6,7,8,9,10];

const newNum = myNums.filter((num) => {
    return num > 5
})
// console.log(newNum);

const like = [1,5,7,2];

const naya = [];

like.forEach((number) => {
    if (number > 4){
        naya.push(number);
    }
})
// console.log(naya); // we can also use this using for each

