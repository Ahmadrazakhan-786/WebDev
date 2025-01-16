function setUsername(username){
    this.username  = username
}

function createUser(username,email,password){
    setUsername.call(this,username);
    console.log("called");

    this.email = email;
    this.password =password;
}

const chai = new createUser("ahmad","ark@123.com","785")
console.log(chai);