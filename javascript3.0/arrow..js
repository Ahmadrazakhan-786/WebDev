const user = {
    name: "ahmad",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.name}, welcome to website`); // this keyword refers to current context
        console.log(this);
    }

}
// user.welcomeMessage();
// user.name = "ashir";
// user.welcomeMessage();

// function chai(){
//     let name =  "khan";
//     console.log(this.name);// function ke ander this kam nhi krta, object ke ander krta hai
// }
// chai();

const chai = () => {
    let username = "ahmad";
    console.log(this.username); // arrow function ke ander v this kaam nhi krta
}
chai();


// const addtwo = (num1,num2) =>{
//     return num1 + num2;
// }

 // OR NOTE: {} use kiye to return keyword likhna pdega lekin () use kiye to return nhi likha pda

const addtwo = (num1,num2) => (  num1 + num2)
console.log(addtwo(3,2));