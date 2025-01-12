const coding = ["js","ruby","java","python","cpp"];

// coding.forEach( function (item) {
//     console.log(item);
// })

coding.forEach( (value) => {
    // console.log(value);
})

function printMe(item){
    console.log(item); // aise v kar skte hai
}

// coding.forEach(printMe);

coding.forEach( (item, index, arr) => {
    // console.log(item, index, arr);
})

const mycoding = [
    {
        langName: "javascript",
        langFilename: "js"
    },
    {
        langName: "java",
        langFilename: "java"
    },
    {
        langName: "python",
        langFilename: "py"
    },
]

mycoding.forEach( (item) => {
    // console.log(item.langName);
    console.log(item.langFilename);
})