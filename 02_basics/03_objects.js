// constructor : singleton 
// object.create : metod for creating obj

// const { jsx } = require("react/jsx-runtime");

// Object Literals :-

const mysym = Symbol("key1")
const JsUser = {
    name: "AnshPatel",
    "Full Name": "Patel Ansh Rohitkumar",
    [mysym]: "mykey1",
    age: 18,
    email: "ansh47@gmail.com",
    location: "Visnagar",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Friday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["Full Name"]);
console.log(JsUser[mysym]);
// console.log(typeof JsUser[mysym]);

JsUser.email = "Patel47@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "Patel48@gmail.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");
    
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js User: ${this.name}`);
    
}

// console.log(JsUser.greeting);
console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo);
console.log(JsUser.greetingTwo());





