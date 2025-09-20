// Truthy And Falsy Values in js

// const userEmail = "ansh123@gmail.com"
// const userEmail = ""
const userEmail = []

if (userEmail) {
    console.log("got email");
    
} else {
    console.log("don't have email");
    
}

// Falsy Values:-
// false, 0, -0, BigInt(0n), "", null, undefined, 

// Truthy Values:-
//"0", 'false', " ", [], {}, function(){}

if ( userEmail.length === 0 ) {
    console.log("Array is empty");
    
}

const emptyObj = {}

if ( Object.keys(emptyObj).length === 0 ) {
    console.log("Object is empty");
    
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 10 ?? 5
// val1 = null ?? 5
val1 = undefined ?? 10
val1 = null ?? 10 ?? 15


console.log(val1);

// Terniary Operator:

// condition ? true : false
// Ex:

const TeaPrice = 100
TeaPrice >= 80 ? console.log("true") : console.log("false")



