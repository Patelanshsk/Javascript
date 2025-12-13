// let myName = "Ansh  "

// // console.log(myName.length);
// // console.log(myName.truelength);
// console.log(myName.trim().length);


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.ansh = function(){
    console.log(`ansh is present in all objects`);
    
}

Array.prototype.heyAnsh = function(){
    console.log(`Ansh says jay shree ram`);
    
}

// heroPower.ansh()
// myHeros.ansh()
// myHeros.heyAnsh()
// heroPower.heyAnsh()                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     hj

const User = {
    name: "Aarav",
    email: "aarav123@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignments',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User // old syntax

// Modern syntax 
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "anshpatel    "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
    
}

anotherUsername.trueLength()
// "rahipatel".trueLength()
