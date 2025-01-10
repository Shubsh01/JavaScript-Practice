// %_%_%_%_%_%_%_%_%_%_DATES%_%_%_%_%_%_%_%_%_%_%_%_

const myDate = new Date();
const localDate = myDate.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }); // Example for India

// console.log(`UTC Time: ${myDate.toISOString()}`);
// console.log(`Local Time (Asia/Kolkata): ${localDate}`);

console.log(myDate.toDateString());        // Local date (no time).
console.log(myDate.toISOString());        // UTC date and time.
console.log(myDate.toJSON());             // UTC date and time (same as toISOString).
console.log(myDate.toLocaleDateString()); // Local date (no time).
console.log(myDate.toLocaleString());     // Local date and time.
console.log(myDate.toString());           // Local date and time with timezone.

const myCreatedDate = new Date("2023-01-14") /* YYYY/MM/DD */
// console.log(myCreatedDate);

const myCreadtedNewDate = new Date("May 7, 2014")
// console.log(myCreadtedNewDate.toLocaleDateString());

const myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreadtedNewDate.getTime());

console.log(Date.now()/1000); /*this will give us in points*/
console.log(Math.floor(Date.now()/1000));








