const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 4
// console.log(Math.PI);

const Tea = {
    name: 'Ginger Tea',
    price: '50',
    isAvailable: true,

    anshP: function(){
        console.log("my name is ansh");
        
    }
}

console.log(Object.getOwnPropertyDescriptor(Tea, "name"));

Object.defineProperty(Tea, "name", {
    // writable: false,
    enumerable: true
})

// console.log(Object.getOwnPropertyDescriptor(Tea, "name"));

for (let [key, value] of Object.entries(Tea)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
    
}
