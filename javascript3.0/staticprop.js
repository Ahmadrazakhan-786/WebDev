class user{
    constructor(username){
        this.username = username
    }
    logme(){
        console.log(`Username: ${this.username}`);
    }

   static createId(){
        return `123`
    }
}
const ark = new user("ahmad");
// console.log(ark.createId());

class Teacher extends user{
    constructor(username,email){
        super(username);
        this.email = email;
    }
}

const iphone = new Teacher("iphone","i@phone");
console.log(iphone.logme());