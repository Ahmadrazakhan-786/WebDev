const course = {
    coursename:"js in hindi",
    price: 999,
    courseInstructor: "online",
}
//course.courseInstructor

const {courseInstructor:Instructor} = course // de-structuring
console.log(Instructor);

const navbar = ({company}) => {

}
navbar(company = "Fair-Deal");
console.log(company);

// json structure

// {
//     "name":"ahmad",
//     "coursename": "js",
//     "price": "free"
// }

// note: apis can also be in array fromat 