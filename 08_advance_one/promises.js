const promiseOne = new Promise(function(resolve, reject){
    // Do an Async task
    // DB Calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is completed');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise Consumed");
    
})

// promise two
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task 2');
        resolve()
    } ,1000)
}).then(function(){
    console.log("Promise 2 Consumed");
    
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Ansh", email: "ansh7@gmail.com"})
    })
})

promiseThree.then(function(user){
    console.log(user);
    
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username: "Ansh", password: "47"})
        } else{
            reject('ERROR: Something Went Wrong')
        }
    },1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
    // return user.password
    
}).then((username) => {
    console.log(username);
}).then((password) => {
    console.log(password);
    
}).catch((error) => {
    console.log(error);
    
}).finally(() => console.log("The Promise is either resolve or rejected")
)

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "Javascript", password: "47"})
        } else{
            reject('ERROR: JS Went Wrong')
        }
    },1000)
})

// async function consumePromiseFive() {
//     const response = await promiseFive
//     console.log(response);
    
// }

async function consumePromiseFive(){
    try {
         const response = await promiseFive
         console.log(response);
        
    } catch (error) {
        console.log(error);
        
    }
}

consumePromiseFive()

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     // console.log(response);
    
//     const data = await response.json()
//     console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
        
//     }
    
// }

// getAllUsers()

fetch('https://api.github.com/users/Patelanshsk')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
    
})
.catch((error) => console.log(error)
)