// DOM MANIPULATION:

// Selecting with id: (use # in query selector)
//  let heading = document.getElementById("heading");
//  console.dir(heading);

// // selecting with class: (use . in query selector)
// let headings = document.getElementsByClassName("heading");
// console.dir(headings);
// console.log(headings);

// // selecting with tag:
// let paras = document.getElementsByTagName("p");
// console.dir(paras);

// // Query selector:
// let firstelements = document.querySelector("p");// returns 1st element
// console.dir(firstelements);

// let allelements = document.querySelectorAll("p"); // all elements
// console.log(allelements);

// //properties:
// console.dir(document.body.firstChild);
// console.dir(document.querySelector("div"));
// console.log(document.querySelector("div"));

// let div = document.querySelector("div");
// console.dir(div);
// console.log(div.innerText);
// console.log(div.innerHTML);

// practice questions:
let h2 = document.querySelector("h2");
console.dir(h2);
console.dir(h2.innerText);

h2.innerText = h2.innerText + " from apna college students";//concatenate

// practice questions:
let divs = document.querySelectorAll(".box");
console.log(divs[0]);


// divs[0].innerText = "new unique value 1"
// divs[1].innerText = "new unique value 2"
// divs[2].innerText = "new unique value 3"

// using loops
let i = 1;
for(div of divs){
    div.innerText = `new unique value ${i}`;
}
