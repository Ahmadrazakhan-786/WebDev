let btn1 = document.querySelector("#btn1");

btn1.onclick = ()=>{
    console.log('btn1 was clicked');
    let a = 25;
    a++;
    console.log(a);
    
};

let div = document.querySelector('div');
div.onmouseover = ()=>{
    console.log('hi');
}

// Event object:
btn1.onclick = (evt)=>{
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX,evt.clientY);
};

// Event Listeners:
btn1.addEventListener('click',()=>{
    console.log('button1 was clicked-handler1');
});

btn1.addEventListener('click',(evt)=>{
    console.log('button1 was clicked-handler2');
    // console.log(evt.type);
    // console.log(evt);
});

const handler3 = ()=>{
    console.log('button1 was clicked-handler3');
}

btn1.addEventListener('click',handler3);
    


btn1.addEventListener('click',(evt)=>{
    console.log('button1 was clicked-handler4');
});

btn1.removeEventListener('click',handler3);

// Practice:(TOOGLE BUTTON)
// let modebtn = document.querySelector("#mode");
// let currMode = 'light';

// modebtn.addEventListener("click",() => {
//    if(currMode === "light"){
//     currMode = "dark";
//    } else {
//     currMode = "light";
//    }
//    console.log(currMode);
// });

let modeBtn = document.querySelector("#mode");
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



