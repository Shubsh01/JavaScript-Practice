
// ~``~``~``~``~``~``~``~``~``~``Numbers~``~``~``~``~``~``~``~``~``~``

const score = 100
console.log(score);

const newScore = new Number(500)
console.log(newScore);
console.log(newScore.toString().length);
console.log(newScore.toFixed(2));
console.log(typeof newScore);

const aNumber = 123.8
console.log(aNumber.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

// ~!@#$%^&*~!@#$%^&*~!@#$%^&* Maths ~!@#$%^&*~!@#$%^&*~!@#$%^&* 



// Important
console.log(Math.random());
console.log((Math.random()*10)+1); /*adding 1 becoz if the values comes out to be 0.0....*/
console.log(Math.floor((Math.random()*10)+1));


// )~()~()~()~()~()~()~ How to get random numbers b/w any 2 given numbers )~()~()~()~()~()~()~()~()~

const max = 20;
const min = 10;

console.log(Math.floor(Math.random()*(max-min+1)+min)); /*Important formula*/






