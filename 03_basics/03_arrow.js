const user = {
    username: "Ansh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
        
        
    }

}

user.welcomeMessage()
user.username = "Patel"
user.welcomeMessage()

// console.log(this);

// function code(){
//     username: "ARP"
//     console.log(this);
    
// }
// const code = function (){
//     username: "ARP"
//     console.log(this.usernames);
    
// }
const code =  () => {
    username: "ARP"
    console.log(this.usernames);
    
}
// code()

// Basic Arrow Function & Expllicit Return

// const addNumbers = (num1 , num2) => {
//     return num1 + num2
// }

// Implicit Return :-

// const addNumbers = (num1 , num2) =>  num1 + num2
const addNumbers = (num1 , num2) =>  (num1 + num2)

// ({username: "ANSH"}) // Method for returning Object

console.log(addNumbers(2 , 3));
