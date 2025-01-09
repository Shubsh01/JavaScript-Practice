let name = "Shubhang"
let repocount = 50;

// console.log(name+repocount+"value"); Not a good practice

console.log(`Hello! my name is ${name} and repocount is ${repocount}`);

const newGame = new String('Contra')
console.log(newGame[3]);
console.log(newGame.toUpperCase());
console.log(newGame.__proto__); /*from this wew get the object */
console.log(newGame.substring(0,3))
console.log(newGame.charAt(4));
console.log(newGame.indexOf('x'));

const newGameName = newGame.substring(0,4)
console.log(newGameName);
console.log(newGame);

const anotherGame = newGame.slice(-5,3)
console.log(anotherGame);
console.log("ShubhangSharma".slice(-14,10)); /*in slice we can use negative value */

const newString = "   Shubhang    "
console.log(newString);
console.log(newString.trim());

const url = "https://shuhbhangSharma.com/Shubhang%20Sharma"
console.log(url.replace('%20','-'));
console.log(url.includes('Shreesh'));

const newName = 'Shubhang-Sharm-Shreesh-Sharma'
console.log(newName.split('-'));












