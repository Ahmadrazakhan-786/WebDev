// function chai(){
//     console.log(`DB CONNECTED`);
// }
// chai();

// Immediately Invoked Function Expressions(IIFE)
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

// NOTE: We can also use IIFE in arrow function as well but always end it with ->(;)
((name)=>{
    console.log(`DB CONNECTED TWO ${name}`);
})("Ahmad");