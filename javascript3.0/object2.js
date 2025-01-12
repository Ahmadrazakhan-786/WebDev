const tinderUser = new Object(); // singleton object
// const tinderUser = {};  non-singleton object

tinderUser.id = "786abc";
tinderUser.name = "Smith";
tinderUser.isLoggedIn = false;
// console.log(tinderUser);

const regularUSer = {
    email: "some@gmail.com",
    fullname: {
        userFullname:{
            firstname: "Ahmad",
            middlename: "Raza",
            lastname: "khan"
        }
    }
}
console.log(regularUSer.fullname.userFullname.lastname);

const obj1 = {1:"a", 2:"b"};
const obj2 = {3:"c", 4: "d"};

// const obj3 = {obj1,obj2};  obj inside another object

const obj3 = Object.assign({},obj1,obj2) // way to combine objects 

const obj4 = {...obj1, ...obj2}; // another way
// console.log(obj3);
// console.log(obj4);

const users = [
    {
        id: 1,
        email: "h@13.com",
    },
    {

    },
]
users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); // key value -> array

console.log(tinderUser.hasOwnProperty('isLoggedIn'));