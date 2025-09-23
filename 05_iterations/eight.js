
const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc is: ${acc} and currval is: ${currval}`);
    
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc, curr) => acc+curr,  0 )

// console.log(myTotal);

const shoppingCart = [
    {
        itemname: "Js Course Hindi",
        price: 0
    },
    {
        itemname: "Python Course",
        price: 449
    },
    {
        itemname: "DSA with Apna collage",
        price: 7999
    },
    {
        itemname: "Data Science",
        price: 10000
    },
]
console.log("All Courses Price :-");

const allCoursesPrice = shoppingCart.reduce( (acc, item) => acc + item.price,  0)
console.log(allCoursesPrice);

