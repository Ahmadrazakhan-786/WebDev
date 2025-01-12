// Asynchronus in js:
// console.log('one');
// console.log('two');

// setTimeout(() => {
//     console.log('hello');
// },4000); // timeout;

// console.log('three');
// console.log('four');

// // callback:
// function sum(a,b){
//     console.log(a+b);
// }

// function calculator(a,b,sumCallback){
//     sumCallback(a,b);
// }
// calculator(1,2,sum);



// function getdata(dataId,getnextdata) {
//     setTimeout(() =>{
//         console.log('data',dataId);
//         if(getnextdata){
//             getnextdata();
//         }
//     },2000);
// }

// // Callback Hell:nested form
// getdata(1,() => {
//     getdata(2,()=>{
//         getdata(3);
//     });
// });

// promise:
// let promise = new Promise((resolve,reject) => {
//     console.log('i give u this promise');
//     // resolve(123);
//     reject('error!');
// })

// function getData(dataid,getnextdata) {
//     return new Promise((resolve,reject) => {
//         setTimeout (() => {
//             console.log('data',dataid);
//             resolve('success');
//             if(getnextdata){
//                 getnextdata();
//             }
//         },5000);
//     })
// }


// const getPromise = () => {
//     return new Promise((resolve,reject) => {
//         console.log('i am a promise');
//         reject('some error occured');
//         resolve('success');
//     });
// };

// let promise = getPromise();
// promise.then(() =>{
//     console.log('promise fulfilled');
// });

// promise.catch((err) => {
//     console.log('rejected',err);
// })

// function asyncFun1 () {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log('data1');
//             resolve('success');
//         },4000);
//     });
// }

// function asyncFun2 () {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log('data2');
//             resolve('success');
//         },4000);
//     });
// }

// console.log('fetching data1');
//  asyncFun1().then((res)=>{
//     console.log('fetching data2');
//  asyncFun2().then((res)=>{
        
//     });
// });

// Async-Await:
async function hello() {
    console.log('hloo');

}

function api() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('weather data');
        resolve(200);
        },2000);
    });
}
async function getWeatherdata(){
    await api(); //1st call
    await api(); //2nd call
}

// new:
function getdata(dataid) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('data',dataid);
            resolve('success');
        },2000);
    })
}
async function getalldata() {
    console.log('getting data1....');
    await getdata(1);
    console.log('getting data2....');
    await getdata(2);
    console.log('getting data3....');
    await getdata(3);
}