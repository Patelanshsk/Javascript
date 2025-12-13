class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username} `);
        
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course is added by ${this.username}`);
        
    }
}

const Rp = new Teacher("Rp", "rp@gmail.com", "77")

Rp.addCourse()

const yogeshP = new User("yogeshP")

// yogeshP.addCourse()
yogeshP.logMe()

// console.log(User === Teacher);
// console.log(Teacher === User);
console.log(Rp instanceof Teacher);
console.log(Rp instanceof User);
console.log(yogeshP instanceof User);

