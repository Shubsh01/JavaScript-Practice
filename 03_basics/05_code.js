// 2 phases 

// 1.) Global Execution Context {{{THIS IS REFERRRED TO "this" variable}}} this is for node js, for browser "this" has value of window Object
// 2.) Function/Functional execution context 
// 3.) Eval Exection context {property of global only} NOT IMPORTANT 


// Code runs in 2 phases

// Phase 1
// Memory Creation phase/Creation phase 
// It is just memory allocation phase for all the variables or anything that is declared by you 
// Phase 2
// Exection Phase 
// In this phase all the functional things happen like plus minus or any function gets executed

let val1 = 10
let val2 = 12
function addNum(num1,num2){
    let total = num1+num2
    return total
}
let result1 = addNum(val1,val2);
let result2 = addNum(6,5);


//{{{{{{{{{{{{{{{{{ How the above code works }}}}}}}}}}}}}}}}}


// ++++++++++++ Cycle 1 ++++++++++++

// Step 1 -> Global Execution/Global Environment is created and it is allocation to "this"

// Step 2 -> [Memory Creation phase] where just all the variables and declarations are stored 
// Variables get undefined 
// val1 = undefined
// val2 = undefined
// Function gets defination
// addNum = defination  
// Again for variables we get undefined 

// ++++++++++++ Cycle 2 ++++++++++++

// Step 3 ->  [Execution Phase]
// All the variables get their values
// val1 gets 10
// val2 gets 12
// Nothing for the function because there is nothing to execute 
// NoW when we reach addNum(Function), we make a new execution context for it, in that we get a new variable environment and new execution thread
// Everytime a function gets executed we get a new variable environment and new execution thred, a sand box is created this sandbox also gets deleted once the work is done.
// Now for addNum memory creation and Execution phase happens again  {Recursion jaisa h}

// ++++++ Memory creation phase for addNum +++++

// for all the variables in addNum function
// val1 = undefined
// val2 = undefined
// total = undefined

// +++++ Execution phase for addNum +++++

// now here the varibales get values and calculation happens
// val1 = 10
// val2 = 12
// total = 22
// now this total gets retured to parent executional context or the global executional context 