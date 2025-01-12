// var a = document.querySelector("h1");
// console.log(a);  // selection of an element

// var a = document.querySelector("h1");
// a.innerHTML = "changed to khan" // changing HTML

// var a = document.querySelector("h1");
// // a.style.color = "red";
// // a.style.backgroundColor = "black";  // changing css

// a.addEventListener("click",function(){
//     console.log("hlooo"); // event listener
// })

var bulb = document.querySelector("#bulb");
var btn = document.querySelector("button");

var flag = 0;

btn.addEventListener("click",function(){
    if(flag==0){
        bulb.style.backgroundColor = "yellow"
        console.log("clicked");
        flag = 1
    }else{
        bulb.style.backgroundColor = "transparent"
        console.log("Again clicked");
        flag = 0;
    }
})
