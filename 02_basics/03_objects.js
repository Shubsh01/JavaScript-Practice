// "use strict";
// Construtor se hamesha object singleton bnega, literal se singleton nhi bnega

// Singleton
// Object.create


/* <><><><><><><><><><><><><><Object Literals><><><><><><><><><><><><><><> */

// Symbol
const mySymbol = Symbol("Key1")


const JsUser = {
    name: "Shubhang",
    age : 18,
    [mySymbol]: "myKey1",
    "full name" : "Shubhang Sharma", 
    location: "Jaipur",
    email: "shubh@yahoo.com",
    isLoggedIn: false,
    lastLogIn: ["Monday", "Friday"]
}

// console.log(JsUser.age);
// console.log(JsUser["full name"]);
// console.log(JsUser.mySymbol);
// console.log(JsUser[mySymbol]);
// console.log(JsUser);
// Object.freeze(JsUser)
// console.log(JsUser.age = 19);
// console.log(JsUser.age);

// Function
JsUser.greetings = function(){
    console.log("Hello JS user");
}

JsUser.greetingsTwo = function(){
    console.log(`Hello JS user, ${this.name}`); /*String Interpolation using backticks*/
}

console.log(JsUser.greetings());
console.log(JsUser.greetings);

console.log(JsUser.greetingsTwo());



