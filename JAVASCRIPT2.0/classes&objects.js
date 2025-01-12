// const student = {
//     name:'ahmad',
//     cgpa:8.38,
//     marks:95,
//     printmarks: function(){
//         console.log('marks',this.marks);
//     },
// };
// console.log(student);

const employee = {
    calTax() {
        console.log('Tax rate is 10%');
    }
};
// console.log(employee.calTax());

const Ark = {
    salary: 785000,
    calTax() {
        console.log('Tax rate is 20%');
    }
};
Ark.__proto__ = employee;
console.log(Ark);

console.log(Ark.calTax());

// Classes:
class Toyotacar {
    constructor(brand,milage) {
        console.log('creating new object');
        this.brand = brand;
        this.milage = milage;
    }
    start() {
        console.log('start');
    }

    stop() {
        console.log("stop");
    }



}
console.log(Toyotacar);
let fortuner = new Toyotacar('fortuner',15);
console.log(fortuner);
let lexus = new Toyotacar('lexus',12);
console.log(lexus);

// inheritance:
class parent {
    hello() {
        console.log('hello');
    }
}

class child extends parent {}

let obj =  new child();


// class person {
//     eat(){
//         console.log('eat');
//     }

//     sleep(){
//         console.log('sleep');
//     }
// }

// class engineer extends person {
//     work(){
//         console.log('solve problems,build something');
//     }
// }

// let arkObj = new engineer();

// Super keyword:
class person {
    constructor(){
        this.species = 'homo-sapiens';
    }

    eat(){
        console.log('eat');
    }

    sleep(){
        console.log('sleep');
    }
}

class engineer extends person {
    constructor(branch){
        super(); // to invoke parent class constructor
        this.branch = branch;
    }
    work(){
        console.log('solve problems,build something');
    }
}

let ashObj = new engineer('cse');

// practice:
let DATA = 'secret info';

class user{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
    viewData(){
        console.log('data=',DATA);
    }
}
class admin extends user{
    constructor(name,email){
        super(name,email);
    }
    editdata(){
        DATA = 'some new value';
    }
}    


let student1 = new user('ahmad','srt@123');
let student2 = new user('khan','ark@786');
let admin1 = new admin('admin','admin@123');

console.log(student1);
console.log(admin1);


