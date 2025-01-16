function sayMyName(){
    console.log("Shubhang");
    console.log("Sharma");
}

// sayMyName THIS IS REFRENCE 
// sayMyName() THIS IS EXECUTION 
// sayMyName()

function addTwoNumbers(a,b)/*Parameters*/{
    console.log(a+b);
}

function add2Nums(x,y) {
    return x+y
}

addTwoNumbers(9,7)/*Arguments*/

const result = add2Nums(7,6)
// console.log(result);


// Another way to write a function 

function loggedIn(username = "Shubhang") /*If I define username as Shubhang here, then it will never go in the undefined state */ {
    if(username===undefined)/*(!username)*/ {
        console.log("Please enter a username");
        return
    }
     return console.log(`${username}, just logged in`);
    // return (`${username}, just logged in`) this line will not print anything, it just returns
}
loggedIn()
loggedIn('Shubsh01')


// <<<<<<<<<<<<<<<<<<<Rest Operator>>>>>>>>>>>>>>>>>>>>>
// to add multiple values in a function 

function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(200,500,600,150, '700'));


// We can also pass object in functions

const user = {
    username: "Shubhang",
    email: "shubhang@google.com"
}

function handleObjects(anyObject){
    console.log(`Username of user is ${anyObject.username}, and the email is ${anyObject.email}`);
}

handleObjects(user)

// We can also directly pass the Object here 
handleObjects({
    username: "Shreesh",
    email: "Shreesh@google.com"
})


// We can also pass Array in a function 

const randomArray = [200,400,600,700]

function handleArray(anyArray){
   return console.log(`This function print second number of an array, which is ${anyArray[1]}`);  
}

handleArray(randomArray)
handleArray([1,2,3,4]) /*We can also directly pass the array here*/