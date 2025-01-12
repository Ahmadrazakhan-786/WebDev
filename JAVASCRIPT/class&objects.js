const student = {
    fullname : "Ahmad Raza Khan",
    marks : 95,
    printmarks : function(){
        console.log("marks = ",this.marks);
    }
};

const employee = {
    calTax1(){
        console.log("tax rate is 10%"); // we can define method in way 
    },
    calTax2 : function(){
        console.log("tax rate is 10%"); // in this way also
    },
};

const ashking = {
    salary:50000,

};

ashking.__proto__ = employee;
console.log(ashking.calTax1());

// CLASS IN JS
class toyotacar {
    constructor(brand, mileage){
        console.log("creating new objects");
        this.brand = brand;
        this.mileage = mileage;
    }
    start() {
        console.log("start");
    }

    stop() {
        console.log("stop");
}
}

let fortuner = new toyotacar("fortuner",10); // constructor 
console.log(fortuner);
let lexus = new toyotacar("lexus",12); // constructor
console.log(lexus);

// INHERITANCE IN JS:

class parent {
    hello(){
        console.log("hello");
    }
}

class child extends parent{}

let obj = new child();
 
// new eg;
class person {
    constructor(name){
        console.log("enter parent constructor");
        this.species = "homo sapiens";
        this.name = name;
    }
    eat(){
        console.log("eat");
    }

    sleep(){
        console.log("sleep");
    }
}

class engineer extends person {
    constructor(name){
        
        super(name); // to invoke parent class constructor
        // this.branch = branch;
       
    }
    work(){
        super.eat();
        console.log("solve problems , build somethings");
    }
};

let engobj = new engineer("ahmad");



