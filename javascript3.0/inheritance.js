class user{
    constructor(username){
        this.username = username
    }
    Logme(){
        console.log(`USERNAME is ${this.username}`)
    }
}

class Teacher extends user{
    constructor(username,email,password){
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new cousre is added by ${this.username}`)
    }
}

const chai = new Teacher("Ahmad","srt@123.com","145");
// console.log(chai);
chai.addCourse();

const masalaChai = new user("MasalaChai");
masalaChai.Logme();

console.log(chai instanceof Teacher);
