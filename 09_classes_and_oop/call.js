function setUsername(username){
    // complex db calls
    this.username = username
    console.log("called");
    
}

function createUser(username, email, password){
    setUsername.call(this, username)

    this.email = email
    this.password = password
}

const ansh = new createUser("ansh", "ansh@123.com", "47")
console.log(ansh);
