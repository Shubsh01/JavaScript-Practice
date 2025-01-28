const myNums = [1,2,3,4,5,6,7,8,9,10]
const random = myNums.map((num)=> num + 10)
console.log(random);
// USING FOR-EACH LOOP 
myNums.forEach((val)=> console.log(val+10))

// CHAINING
// EK P MULTIPLE MAPS YA FILTER LAGANA
const randomNum = myNums.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>40)
console.log(randomNum);
