class user {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
    encryptPassword(){
        return `${this.password}abc`
    }
    changename(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new user("khan","msit@435.com","963");
console.log(chai.encryptPassword());
console.log(chai.changename());