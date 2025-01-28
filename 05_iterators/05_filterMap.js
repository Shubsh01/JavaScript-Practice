// FILTER MAP 

const myNums = [1,2,3,4,5,6,7,8,9,10]
// Method 1
const numContainer = myNums.filter((nums)=>{ /*HAVE TO WRITE RETURN IF U USE {} */
    return nums>4
})
// Mehtod 2
const numContainer1 = myNums.filter((nums)=> nums>4)

console.log(numContainer);
console.log(numContainer1);


// EXAMPLE OF DATA IN FORM OF AN ARRAY WHICH HAS OBJECTS 

const sports = [
    {sportName : "Cricket", ball: "leather", players: 11, year : 1854, starPlayer : "Virat"},
    {sportName : "Football", ball: "leather", players: 10, year : 1862, starPlayer : "Ronaldo"},
    {sportName : "Badminton", ball: "shuttle", players: 1, year : 1934, starPlayer : "PV Sindhu"},
    {sportName : "Table tennis", ball: "plastic", players: 1, year : 1814, starPlayer : "chinese"},
    {sportName : "tennis", ball: "tennis-ball", players: 1, year : 1954, starPlayer : "Sania"},
    {sportName : "MMA", ball: "no-ball", players: 1, year : 1943, starPlayer : "Ramesh"}
]

// let sportknowledge = sports.filter((sp)=>sp.ball==="leather")
sportknowledge = sports.filter((sp)=>{
    return sp.year >= 1900 && sp.players == 1 && sp.starPlayer === "Ramesh"
})
console.log(sportknowledge);
