const arr1 = ["js","java","c++"]

arr1.forEach(function(val){
    // console.log(val);
    // IN FOR EACH LOOP CALLBACK FUNCTION IS USED WHICH DOES NOT HAVE A NAME 
} )


// Arrow function 
arr1.forEach( (val1)=>{
    // console.log(val1);
} )


// Already defined function can also be used in forEach loop 
function printMe(val2){
    console.log(val2);
}

arr1.forEach(printMe)  
// Above we r just giving refrence of function and not executing {""""printMe()"""} it 


// function has other parameters that are (val, index, array)
arr1.forEach((val3,index,arr)=>{
    console.log(val3,index,arr);
})


    // OBJECTS INSIDE ARRAY 
    // this is how u take access of object inside array 
const objArr = [
    {
        language:"javaScript",
        extesion: "js"
    },
    {
        language:"C++",
        extesion: "cpp"
    },
    {
        language:"java",
        extesion: "java"
    }
]

objArr.forEach((item)=>{
    console.log(item.extesion);
})