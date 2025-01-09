//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


// ~~~~~~~~~~~~~~~~~~Stack(Primitive) and Heap(Non-Primitive) Memory~~~~~~~~~~~~~~~~~~~~

// Stack Memory(String)
let name = "Shubhang"
let anotherName = name
anotherName = "Ram"
console.log(anotherName);
console.log(name);

// Heap Memory(Objects)

let userOne = {
    email : "shubhang@google.com",
    upi : "sbi@ybl"
}

console.log(userOne.email);


let userTwo = userOne
userTwo.email = "Ram@google.com" /*Since Object is a non-primitive datatype, it is storerd in heap memory and hence when we change it here, it also gets changed in userOne.email, this is unlike the above case in string, in which when we changed our name in nameTwo variable, it didnot get changed in nameOne variable, this is due to the fact that strings are primitive datatype and does not give direct refrence to the original value, it provides u a copy and all the changes are always made in that copy only*/

console.log(userOne.email);
