// DOM Manipulation:
// let heading = document.getElementById("heading");
// console.dir(heading);

// let headings = document.getElementsByClassName("heading");;
// console.dir(headings);

// let parahs = document.getElementsByTagName("p");
// console.dir(parahs);

// // QUERY SELECTOR:
// let firstEl = document.querySelector("p"); // 1st element
// console.dir(firstEl);

// let allEl = document.querySelectorAll("p"); // all element
// console.dir(allEl);

// console.log(firstEl.tagName);
// console.dir(document.body.firstChild);

// let div = document.querySelector("div");
// console.dir(div);
// console.log(div.innerText);
// console.log(div.innerHTML);

// practice:
// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);

// h2.innerText = h2.innerText + " from apna college students";

// practice:
// let divs = document.querySelectorAll(".box");
// divs[0].innerText = "new unique value 1";
// divs[1].innerText = "new unique value 2";
// divs[2].innerText = "new unique value 3";

// let Div = document.querySelector("div");
// console.log(Div);

// let id = Div.getAttribute("id");
// console.log(id);

// let parah = document.querySelector("p");
// console.log(parah.setAttribute("class","newclass"));

// let Divs = document.querySelector("div");
// div.style.backgroundColor = 'aqua';
// console.log(Divs);

//Insert elements:

// let newbtn = document.createElement("button");
// newbtn.innerText = 'click me';
// console.log(newbtn);

// let p = document.querySelector("p");
// p.append(newbtn);

// let new_heading = document.querySelector("h1");
// new_heading.innerHTML = "<i>hiii, im ark</i>";
// document.querySelector('body').prepend(new_heading);

// let par = document.querySelector("p");
// par.remove();

// practice:
let new_btn = document.querySelector("button");
new_btn.innerText = "click me!";


new_btn.style.color = 'white';
new_btn.style.backgroundColor = "red";

document.querySelector("body").prepend(new_btn);