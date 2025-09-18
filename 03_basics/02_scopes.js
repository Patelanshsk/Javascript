let a = 100;
const b = 260;
// var c = 305;

if (true) {
  let a = 10;
  const b = 20;
  // console.log("INNER: ", b);
}
// {} :- block scope
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];

// }

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const username = "Ansh";

  function two() {
    const website = "Youtube";
    console.log(username);
  }
  // console.log(website);

  // two() 
}

// one()

if (true) {
  const username = "Ansh"
  if(username === "Ansh"){
    const website = " Youtube"
    // console.log(username + website);
    
  }
  // console.log(website); // error
  
}

// console.log(username); // error

console.log(addone(5))

function addone(num){
  return num + 1
}


// console.log(addTwo(1)); // Not right method for addTwo

const addTwo = function(num){
  return num + 1
}

console.log(addTwo(1));

