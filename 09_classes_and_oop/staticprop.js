class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
        
    }

    static createId(){
        return`712`
    }
}

const ansh = new User("ansh")
// console.log(ansh.createId())



class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const vivo = new Teacher("vivo", "v@ivo.com")
// console.log(vivo.createId());
console.log(viv0.username);


