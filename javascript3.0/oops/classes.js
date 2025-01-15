const user = {
    username: "Ahmad",
    logincount: 7,
    signedIn: true,

    getUserDetails: function(){
        // console.log('Got user details from db:')
        // console.log(`username: ${this.username}`)
        console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());

function User(username,logincount,isLoggedIn){
    this.username = username;
    this.logincount = logincount;
    this.isLoggedIn = isLoggedIn;

    // return this
}

const userOne = new User("Ahmad", 4 , true);
const userTwo = new User("Raza", 5, false);
console.log(userTwo);
console.log(userOne);