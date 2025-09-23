
const coding = ["js", "c++", "Python", "css", "html"]

coding.forEach( function (lan) {
    // console.log(lan);
    
} )

coding.forEach( (lan) => {
    // console.log(lan);
    
} )

function printMe(item){
    console.log(item);
    
}
// coding.forEach(printMe)

coding.forEach( (item, index, arr) => {
    // console.log(item, index, arr);
    
} )

const myLanguages = [
    {
        LanguageName: "javascript",
        LanguageShortName: "js"
    },
    {
        LanguageName: "Python",
        LanguageShortName: "py"
    },
    {
        LanguageName: "ruby",
        LanguageShortName: "rb"
    },
]

myLanguages.forEach( (item) => {
    console.log(item.LanguageName);
    
} )