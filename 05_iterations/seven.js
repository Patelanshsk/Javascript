
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const addedNums = myNumbers.map( (num) => num + 10 )

// const addedNums = []
// myNumbers.forEach( (num) => {
//     if (num) {
        
//         addedNums.push(num + 10)
        
//     }
// } ) // for each method

const addedNums = myNumbers
                .map( (num) =>  num * 10 )
                .map( (num) =>  num + 1 )
                .filter( (num) =>  num >= 50 )


console.log(addedNums);



