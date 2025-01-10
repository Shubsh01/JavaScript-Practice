// Defining of an array 
const myArr = [0,1,2,3,4,5]
console.log(myArr);

// using a constructor 
const myArr2 = new Array(7,8,9,10)
console.log(myArr2);

// If we use a constructor and put just a single value in it, it will make an empty array of that value
const emptyArr = new Array(5)
console.log(emptyArr);

// Normal operations just like java
// push
// pop
// includes
// indexof

// Shift/Unshift
// Shift pehle element hta deta h, Unshift pehli jgha koi naya element lata h, dono he optimized nhi h coz saare element to shift krna pdta h
myArr.shift()
console.log(myArr)

// Join is used to convert array into string
const arrToString = myArr.join()
console.log(arrToString);
console.log(typeof arrToString);

// Slice and Splice

const myArr1 = [0,1,2,3,4,5]
const sliceArr = myArr1.slice(1,3) /*Slice does not include last value, it also does not change the original array */
console.log(sliceArr);

const myArr3 = [0,1,2,3,4,5]
const spliceArr = myArr3.splice(1,3)
console.log(spliceArr);
console.log(myArr3); /*Upon using splice it changes the original array, it also includes the end digit*/




