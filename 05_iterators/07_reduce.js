const myNums = [1,2,3]
// accumilator's initial value is the one next to where function ends and then the current value(currVal) gets added to the accumilator to get the new accumilator value 
// This is used in shopping carts to get the total bill 
const myTotal = myNums.reduce(function(accumilator,currVal){
    console.log(`accumilator -> ${accumilator} && currVal -> ${currVal}`);
    return accumilator+currVal
},8)

console.log(myTotal);

// This can also be written as arrow function 
const newTotal = myNums.reduce((acc,curr)=> acc+curr,0)
console.log(newTotal);

// Objects in Array
const shoppingCart = [
    {
        item : "js course",
        price : 999
    },
    {
        item : "java course",
        price : 9999
    },
    {
        item : "C++ course",
        price : 2999
    },
    {
        item : "python course",
        price : 2999
    }
]

const cartTotal = shoppingCart.reduce(function(acc,currVal) {
    return acc+currVal.price
},0)
console.log(cartTotal);
