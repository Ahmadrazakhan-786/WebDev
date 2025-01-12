if(true){
    let a = 10;
    const b = 20;
    console.log("Inner: ",a); // local scope
}
// let a = 300; // global scope
// console.log(a);


// closure: ander ka function bahar ko access kar pata hai:  imp hai yeh
function one(){
    const username = "ahmad";
    console.log(username);

    function two(){
        const website = "youtube";
        console.log(username);
    }
    // console.log(website);
    two();
}
one();


if(true){
    const username = "ahmad";
    if(username === "ahmad"){
        const website = " youtube";
        // console.log(username + website);
    }
    // console.log(website); // will give error
}
// console.log(username); //  will give error bcz username ka scope hai hi nhi



// interesting:
console.log(addone(5));
function addone(num){
    return num + 1;
}

// console.log(addtwo(5)); // here it will give error
const addtwo = function(num){
    return num + 2;
}
