const tinderUser = new Object() // Singleton Object
// const tinder2User = {} // Non - Singleton Object

tinderUser.id = "abc@123"
tinderUser.name = "Ansh"
tinderUser.isLoggedIn = false

// console.log(tinderUser);
// console.log(tinder2User);

const regularuser = {
    Fullname: {
        userfullname: {
            Firstname: "Ansh",
            Lastname: "Patel"
        }
    }
}

// console.log(regularuser);
console.log(regularuser.Fullname.userfullname.Firstname);
console.log(regularuser.Fullname.userfullname.Lastname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2 )
const obj3 = { ...obj1,...obj2 }
// console.log(obj3);

// const Users = [
// {
//     email: "ansh@gmail.com"
    
// },
// {
//     email: "ansh4gmail.com"

// }
// ]

// console.log(Users[0].email)

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));
// console.log(tinderUser.hasOwnProperty("isLoggehgdIn"));

const course = {
    name: "Js in Hindi",
    price: "999",
    courseInstructor: "Hiteshchaudhary"
}

// course.courseInstructor // note :- this method is right but for better expirience we use De-structureing method


const {courseInstructor: cI} = course // destructure method
// console.log(courseInstructor);
console.log(cI);

// {
//     "name": "ansh" // this is ex of api
//     "age": "18"
// }

