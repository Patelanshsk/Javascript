const marvel_heros = ['thor', 'spiderman', 'ironman' ]
const dc_heros = ['superman', 'flash', 'batman' ]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);

const spreadHeros = [...marvel_heros, ...dc_heros,...all_heros]
// console.log(spreadHeros);

const another_array = [1,2,3,[4,5,6,[7,8,9]],10]
// const another_new_array = another_array.flat(Infinity)
const another_new_array = another_array.flat(2)
console.log(another_new_array);

console.log(Array.isArray("Anshpatel"));
console.log(Array.from("Anshpatel"));
console.log(Array.from({name: "Programer"})); // INTERSTING


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));






