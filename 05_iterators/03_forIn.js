// for-in loops 
// Objects can be iterated through for-in loops unlike for-of

const obj1 = {
    'game1' : "cricket",
    'game2' : "football",
    'game3' : "tt"
}

for(const key in obj1){
    // console.log(obj1[key]); TO GET VALUES
}


// for-in on arrays 
const arr1 = ["a1","b1","c1"]

for(let a1 in arr1){
    // console.log(a1); this is for keys
    // console.log(arr1[a1]); this is for values
}

// for-in on strings 
const string1 = "Shubhang"

for(let s1 in string1){
    // console.log(s1);
    // console.log(string1[s1]);
}

// for-in on maps 
// MAPS ARE NOT ITERABLE LIKE THIS
const map1 = new Map()
map1.set("IN","India")
map1.set("PN","Pakistan")
map1.set("BN","Bangladesh")

for(let[key,value]in map1){
    console.log(map1[key]);
    // THIS WILL NOT GIVE ANY OUTPUT 
}