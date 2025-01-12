// note: literals ke trah declare krte hai usee singelton nhi bnta h
// constructor se bnega to singleton bnega

// object literals:

const mySym = Symbol("Key1") // ->1

const jsUser = {
    name: "Ahmad",
    age: 20,
    [mySym]: "key1", // from -> 1
    location: "Muzaffarpur",
    email: "ahmad@786.com",
    isLoggedIn: false,
    LastloginDays: ["Monday","Saturday"]
}
console.log(jsUser.location); // ist way to access obj
console.log(jsUser["location"]); // another way
console.log(jsUser[mySym]);

jsUser.email = "ark@123.com";
console.log(jsUser.email);

// Object.freeze(jsUser); // after that there will be no changes in the object
jsUser.email = "khan@786.com",
console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello js user");
}

jsUser.greetingTwo = function(){
    console.log(`Hello js user,${this.name}`); // from object using this in``
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());