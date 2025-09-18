
function sayMyname(){
    console.log("A");
    console.log("N");
    console.log("S");
    console.log("H");
    
}

// sayMyname()

// function addTwonumbers(number1 , number2){
//     console.log(number1 + number2);
    
// }
function addTwonumbers(number1 , number2){
    // console.log(number1 + number2);
    // let result = number1 + number2
    // return result
    // console.log("name:ansh patel");
    return number1 + number2
    
}

// addTwonumbers(2 , 2)
// addTwonumbers(4 , "7")
// addTwonumbers(4 , null)

const result = addTwonumbers(3 , 5)
// console.log("Result: ", result);

// function loginUsermsg(username){
//     return `${username} Just Logged in`
// }
function loginUsermsg(username = "User"){
    if(!username){
        console.log("Please Enter Username ");
        return
    }
    return `${username} Just Logged in`
}

// console.log(loginUsermsg("Ansh patel"));
// console.log(loginUsermsg());

// function calculateCartPrice(num1){
//     return num1
// }
// function calculateCartPrice(...num1){
//     return num1
// }
function calculateCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(200, 300, 500));

const user = {
    username: "AnshPatel",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and Product Price is ${anyobject.price}`);
    
}

handleObject({
    username: "Krish",
    price: 25000
})

const myNewArray = [100, 200, [300, 400]]

function returnSecondValue(getArray){
    return getArray[2][1]
}

console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([100, 200, [300, 400]]));
