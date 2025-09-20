// IF:

const isUserLoggedIn = true

const temprature = 30

// if ( "2" === "2" ) {
//     console.log(isUserLoggedIn);
    
// }

if ( temprature > 40  ) {
    // console.log("temprature is Normal");
    
}else{
    // console.log("Temprature is high");
    
}

// const score = 200

// if ( score > 100 ) {
//     var power = "fly"
//     console.log(`User Power: ${power}`);
    
// }
// console.log(`User Power: ${power}`);

// const Balance = 1000

// if ( Balance < 500 ) {
//     console.log("Less Than 500");
    
// }else if (Balance < 750){
//     console.log("less than 750");
    
// }else if (Balance < 950){
//     console.log("less than 950");
    
// }
//  else {
//     console.log("less Than 1200");
      
// }


const userLoggedin = true
const debitcard = true
const loginFromGoogle = false
const loginFromEmail = true
const GuestLogin = true

if ( userLoggedin && debitcard ) {
    console.log("Allow to Buy , Realated to Learning");
    
}

if ( loginFromGoogle || loginFromEmail || GuestLogin) {
    console.log("User Logged In");
    
}

// < , >, <=, >=, ==, ===, !=, !==