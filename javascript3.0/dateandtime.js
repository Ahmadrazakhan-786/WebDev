let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(myDate.toDateString());
console.log(typeof myDate); // object

let createDate = new Date(2025,1,11); // months start with 0 in javascript in array
console.log(createDate.toDateString());

let New = new Date("08-15-1948"); // mm-dd-yy->India
console.log(New.toDateString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(createDate.getTime());

console.log(Math.floor(Date.now()/1000));

let nayaDate = new Date();
console.log(nayaDate.getMonth());
console.log(nayaDate.getDay()); // 1->monday

nayaDate.toLocaleString('default', {
    weekday:"long",
})



