const user = {
    name:"Shubhang",
    email:"shubhang@google.com",
    welcomeMessage: function(){
        console.log(`Hey ${this.name}, the website welcomes you`); 
        // Here this refers to current context
        console.log(this);
    }
}

// user.welcomeMessage()
// Now if we change the name, it will be changed as it is not hardcoded in function and refers to the current context 
user.name = "Shreesh"
// user.welcomeMessage()


// Here when we are in node environment, this on console gives us an empty object because there is nothing currently to refer to 
// The same thing if we do in browser, it will give window 
// console.log(this);




// {{{{{{{{{{{{{{{{{{{{{{{{{{{{{{ this in functions }}}}}}}}}}}}}}}}}}}}}}}}}}}}}}


// In the below functions random will give the value of undefined and randomTwo will print the userName, this is because when we add const to a variable it is defined in that particular funtion only, but if we donot give const, var or let in it, it becomes a property of global 
// In browsers, this means userName becomes a property of the window object.
// In Node.js, it becomes a property of the global object.


// function random(){
//     const userName = "shubsh01"
//     console.log(this.userName);
// }
// random()

// function randomTwo(){
//     userName = "shubsh01"
//     console.log(this.userName);
// }
// randomTwo()


// If we declare function using the below SyntaxError, it will also give undefined
// const randomThree = function(){
//     const userName = "shubsh01"
//     console.log(this.userName);   
// }
// randomThree()

//=>=>=>=>=>=>=>=>=>=>=>=> Arrow Function <=<=<=<=<=<=<=<=<=<=<=<=<=<=

const arrowFunction = () => {
    const userName = "shubsh01"
    console.log(this.userName);   
}
// arrowFunction()

const arrowFunctionTwo = (num1,num2) =>{
    return console.log(num1+num2);
}

// arrowFunctionTwo(6,9)

// IMPLICIT RETURN 
const arrowFunctionThree = (num1,num2) =>num1+num2;
console.log(arrowFunctionThree(6,4));

// CAN ALSO BE WRITTEN AS 
const arrowFunctionFour = (num1,num2) =>(num1+num2); /*When in "{}" we have to write "return", but if we use "()" we donot have return keyword, is used in REACT.JS*/
console.log(arrowFunctionFour(6,4));

// If we have to return an object 
const arrowFunctionFive = () => ({userName:"Shubhang"})
console.log(arrowFunctionFive());

 