//+++++++++++++++++++ nums ++++++++++++++++++

const score = 47
console.log(score);

const balance = new Number(550)
console.log(balance);
console.log(balance.toString());

console.log(balance.toString().length);
console.log(balance.toFixed(2));
console.log(balance.toFixed(2).length);

const deciNumber = 123.478
console.log(deciNumber.toPrecision(4));
console.log(deciNumber.toPrecision(2));

const money = 1000000
console.log(money.toLocaleString());
console.log(money.toLocaleString('en-IN'));

// +++++++++++++++++ maths +++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-1));
console.log(Math.round(4.4));
console.log(Math.ceil(4.1));
console.log(Math.floor(4.9));
console.log(Math.min(4,9,2,1));
console.log(Math.max(4,9,2,1));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)));








