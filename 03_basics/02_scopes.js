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
