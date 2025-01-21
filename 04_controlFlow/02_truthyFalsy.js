// const userName = "shubsh01" "" false [] true 


// falsy values :-  Inke alawa sab truthy values 
// false, 0, -0, BigInt 0n,"", null, undefined, NaN 

//truthy values
// "0", 'false', " ", [], {}, function(){}


// How to check if array is empty 
const arr = []
if(arr.length===0){
    console.log("array is empty");   
}

// How to check if Object is empty
const objectTry = {}
if(Object.keys(objectTry).length===0){
    console.log("Object is empty");
}

// Nullish coalescing operator 
let val1
val1 = undefined??20
console.log(val1);

// Terinary Operator
// condition ? true : false
val1<21 ? console.log("less than 20") : console.log("greater than 20");

