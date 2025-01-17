let a = 10
const b = 20
var c = 30

if(true){
    var c = 300
    let a = 3000
    console.log("Inner a :", a);
    
}
console.log(a); /*While using "let", it does not change because of the inside scope value */ 
console.log(c); /*We do not use "var" because it is scope independent*/

// Bahar se andar ja skta history, but andar se bahar nhi jana chahiye 


// Function inside Function

// Chota bade se maang skta history, but bada chote se nhi maang skta 
// Child parent k variables ko access kr skta history, but not vice versa 
function one(){
    const name = "Shubhang"
    function two(){
        const website = "github"
        console.log(name);
    }
    // console.log(website); Website chote k pass h, bda chote se nhi le skta
    two()
}
one()


// The above scope scene similarly happed with if else 

if(true){
    const username = "Shubhang Sharma"
    if(username==="Shubhang Sharma"){
        const website = " youtube"
        console.log(username+website);
    }
    // console.log(website); THIS WILL GIVE AN ERROR BECAUSE ITS OUTSIDE THE SCOPE 
}
// console.log(username); THIS WILL ALSO GIVE ERROR, BECAUSE ITS ALSO OUTSIDE SCOPE



// [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[ INTRESTING ]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

addOne(9)
// Here when I am calling a function before its declaration it will not give an error and run fine
function addOne(num) {
    return console.log(num+1);
}

// Variables in JS are very powerful and can hold anything from a function to JSON file 

// addTwo(9) WRONG
// Here the above calling of function will give an error because it is stored in a variable, so we have to call it post declaration 
const addTwo = function(num2){
    return console.log(num2+2);
}

addTwo(9)