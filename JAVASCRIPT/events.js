// // Event Handling:
// let btn1 = document.querySelector("#btn1");

// btn1.onclick = () => {
//     console.log("btn1 was clicked");
//     let a = 25;
//     a++;
//     console.log(a);
// };

// let div = document.querySelector("div");
// div.onmouseover = () => {
//     console.log("you are inside div");
// };

// // Event object:
// btn1.onclick = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
// };

// // Event listeners:
// btn1.addEventListener("click", () => {
//     console.log("button1 was clicked - handler1");
// });

// btn1.addEventListener("click", () => {
//     console.log("button1 was clicked - handler2");
// });

// const handler3 = () => {
//     console.log("button1 was clicked - handler3");
// };

// btn1.addEventListener("click",handler3);

// btn1.addEventListener("click", () => {
//     console.log("button1 was clicked - handler4");
// });

// // removing:
// btn1.removeEventListener("click", handler3);

// practice questions: CREATING A TOOGLE BUTTON THAT CHANGES SCREEN TO DARK MODE

let modebtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currmode = "light"; // dark


modebtn.addEventListener("click", () =>{
    if(currmode === "light"){
        currmode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }else{
        currmode ="light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currmode);
});

  
