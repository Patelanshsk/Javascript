class User {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get password(){
        // return this._password.toUpperCase()
        return `${this._password}kp`
    }

    set password(value){
        this._password = value
    }
}

const Ansh = new User("ansh7@gmail.com", "arp")
console.log(Ansh.password);
console.log(Ansh.email);

