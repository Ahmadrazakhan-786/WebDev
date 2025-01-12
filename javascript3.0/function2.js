function calculateCartPrice(...num1){ // here ... acts as rest operator
    return num1;
}
// console.log(calculateCartPrice(200,500,700));

const user = {
    name:"Ahmad",
    price: 799,
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.name} and price is ${anyobject.price}`);
}
// handleObject(user);

handleObject({
    name: "sam",
    price: 199
})

const newArray = [200,1002,2540,2654];
function returnsecondValue(getArray){
    return getArray[1];
}
console.log(returnsecondValue(newArray));