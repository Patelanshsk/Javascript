// Primitive

// 7 Types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('47')
const anotherId = Symbol('47')

console.log(id === anotherId);

const bigNumber = 61118434984211n


// Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "thor", "hanuman"]
let myObj = {
    name: "Ansh",
    age: 18
}

const myFunction = function(){
    console.log("Hello World");
    
}

console.log(typeof bigNumber);

//.................Memory in Javascript.................
// 1. Stack (Primitive) 2. Heap (Non-Primitive)

// Examples :-

let myYoutubename = "ArVideos@47"

let anothername = myYoutubename
anothername = "code_with_mee"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "userOne@gmail.com",
    upi: "one@ybl"
}

let userTwo = userOne
userTwo.email = "userTwo@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

