const marvel = ["spiderman","Ironman","DrStrange"]
const dc = ["flash","superman","batman"]

// marvel.push(dc);
// console.log(marvel);

// console.log(marvel[3][1]);

const indian = ["Shaktiman"]
const all_heros = [...dc,...marvel,...indian] /*This is how u can concat mutliple arrays */
console.log(all_heros);

const random_array = [1,2,3,[4,5],6,7,[8,9,[10,11,12]]]
const useable_array = random_array.flat(1)
console.log(useable_array);

console.log(Array.isArray("Shubhang"))
console.log(Array.from("Shubhang"));
console.log(Array.from({name:"Shubhang"}));


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
