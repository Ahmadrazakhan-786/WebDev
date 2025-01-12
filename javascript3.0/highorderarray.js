// for of

const arr = [1,2,3,4,5];
for (const num of arr) {
    // console.log(num);
}

const greetings = "hello world";
for (const greet of greetings) {
    // console.log(greet);
}

// maps

const map = new Map();
map.set('IN', "India");
map.set('USA',"United States of America");
map.set('FR',"France");
map.set('IN', "India"); // it will not be present in output as map gives unique output

console.log(map);

for (const [key,value] of map) {
    console.log(key, ':-', value);
}

const myobj = {
    'game1': "templerun",
    'game2': "racing-moto"
}

// for (const [key,value] of myobj) {
//      console.log(key,':-',value); // we cant iterate object using forof loop
// }

const myobject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swf: 'swift',
}

for (const key in myobject) {
    console.log(`${key} shortcut is for ${myobject[key]}`);
}

const programming = ["js","java","rb","py","cpp"];

for (const key in programming) {
    console.log(programming[key]);
}

// note: arrays ke under loop use -> forof
// note: objects ke under loop use -> forin