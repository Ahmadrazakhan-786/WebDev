const sum = [1,2,3];

const total = sum.reduce(function (acc, curVal) {
    console.log(`acc: ${acc} and curVal: ${curVal}`);
    return acc + curVal
},0);
// console.log(total);

const shoppingCart = [
    {
        itemName: "js cousre",
        price: 3999
    },
    {
        itemName: "java cousre",
        price: 1999
    },
    {
        itemName: "py cousre",
        price: 999
    },
    {
        itemName: "c++ cousre",
        price: 2999
    },
]

const p2pay = shoppingCart.reduce( (acc , item) => acc + item.price,0 );
console.log(p2pay);
