// for of loop 

const arr1 = [1,2,3,4,5]
for(let num of arr1){
    // console.log(num);
}

const String1 = "Shubhang Sharma"
for(let s1 of String1){
    if(s1==" "){
        break;
    }
    // console.log(s1);
}

// MAPS

const map1 = new Map()
map1.set("IN","India")
map1.set("PN","Pakistan")
map1.set("BN","Bangladesh")

// console.log(map1);

// for of loop on map

// Using square brackets we destructure the array 
for(const [key,value] of map1){
    console.log(key);
    console.log(value);
}

// for of on Object does not work
const obj1 = {
    'game1' : "cricket",
    'game2' : "football",
    'game3' : "tt"
}

for(const [key,value] of obj1 ){
    // console.log(key); TypeError: obj1 is not iterable
}
