
// For In Loop:-

const myObject = {
    js: 'javascript',
    HTML: 'Hyper Text Markup language',
    cpp: 'c++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(`${key} is Shortkut for :- ${myObject[key]}`);
    
}

const languages = ["js", "HTML", "Css", "Reactjs", "nodejs"]
for (const key in languages) {
    
    // console.log(key);
    // console.log(languages[key]);
    
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States Of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
    
// } // For in loop is not used on map iterations Because is iterable

