// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    // Named IIFE
    console.log(`DB CONNECTED`);
    
})();
// chai()

( (name) => {
    console.log(`2nd TIME DB CONNECTED TO, ${name}`);
    
} )("ANSH PATEL 47")


// Note:- If we execute two or more IIFE same time so we should use Exlamation Mark (;)