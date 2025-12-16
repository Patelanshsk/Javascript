const User = {
    _email: 'a@rgmail.com',
    _password: "abc",

    get email(){
        return this._email.toLocaleUpperCase()
    },

    set email(value){
        this._email = value
    }
}

// console.log(User.email);

const aEmail = Object.create(User)
console.log(aEmail.email);

