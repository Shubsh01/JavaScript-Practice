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
