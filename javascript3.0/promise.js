// eg-1
const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is completed');
        resolve();
    },1000)
});

promiseOne.then(function(){
    console.log("promise consumed");
})

// eg-2
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2")
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
});

// eg-3
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("good mrng");
        resolve();
    },1000)
}).then(function(){
    console.log("good evening");
})

// eg-4
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
    resolve({username:"ahmad", email:"ark@msit.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

// eg-5
const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "ahmad", password:"124"})
        } else{
            reject('ERROR Something went wrong');
        }
    },1000)
})

promiseFour
.then(function(user){
    console.log(user);
    return user.username
})
.then(function(username){
    console.log(username)
})
.catch(function(error){
    console.log(error);
})
.finally(function(){
    console.log("The promise is either resolved or rejected")
})

// eg-6
const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"javascript",password:"786"})
        }else{
            reject('ERROR: JS WENT WRONG')
        }
    },1000)
})

async function xyz(){
    try {
    const response = await promiseFive
    console.log(response);
    } catch (error) {
        console.log(error);
    }
}
xyz();