// ES6

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `${this.password}abc`;
  }
  changeUsername() {
    return `${this.username.toUpperCase()}`;
  }
}

const het = new User("het", "het22@gmail.com", "123");

console.log(het.encryptPassword());
console.log(het.changeUsername());

// behind the scene

function User2(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User2.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};

User2.prototype.changeUsername = function () {
  return `${this.username.toUpperCase()}abc`;
};

const patel = new User2("patel", "patel@gmail.com", "123")

console.log(patel.encryptPassword());
console.log(patel.changeUsername());


