const name = "AnshPatel"
const repoCount = 1
const repoName = "Javascript"

// console.log(name + repoCount + repoName);

console.log(`Hello, my name is ${name} , my repository count is ${repoCount} and my repository name is ${repoName}`);

const gameName = new String('free-fire')

console.log(gameName[1]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(0));
console.log(gameName.indexOf('f'));
console.log(gameName.toLocaleLowerCase());
console.log(gameName.toLocaleUpperCase());


const newString = gameName.substring(0, 4)
const anotherString = gameName.slice(-7, 4)

console.log(newString);
console.log(anotherString);

const newStringOne = "   Ansh    "
console.log(newStringOne);
console.log(newStringOne.trim());
console.log(newStringOne.trimEnd());
console.log(newStringOne.trimStart());


const url = "https://mee20%withcode"

console.log(url.replace('20%', '@'));
console.log(url.includes('ansh'));
console.log(url.includes('20%'));


console.log(gameName.split('-'));

    let text = "Hello world";
    console.log(text.startsWith("Hello")); 
    console.log(text.startsWith("Helljo")); 
    console.log(text.endsWith("world")); 
    console.log(text.endsWith("worlds")); 




