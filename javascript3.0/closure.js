// function init() {
//     var name = "Mozilla"; // name is a local variable created by init
//     function displayName() {
//       // displayName() is the inner function, that forms a closure
//       console.log(name); // use variable declared in the parent function
//     }
//     displayName();
//   }
//   init();

function outer(){
    let username = "Ahmad";
    function inner(){
        console.log("inner",username);
    }
    function innerTwo(){
        console.log("inner-two",username);
    }
    inner()
    innerTwo()
}
outer();
console.log("TOO OUTER",username);
  