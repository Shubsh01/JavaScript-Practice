// Creation of promise 

const promiseOne = new Promise(function(resolve,reject){
    // Async tasks
    // DB calls 
    setTimeout(function(){
        console.log("Async is complete");
        resolve()
    },1000)
})

// Consuption of promise 
// .then() is related to resolve 
promiseOne.then(function () {
    console.log("Promise consumed");
})


// INSTED OF CONSUMING IT IN 2 PARTS, IT CAN ALSO BE CONSUMED IN ONE 

new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Async await 2");
        resolve()
    },1000)
}).then(()=>{
    console.log("Async await 2 consumed");
})

// GETTING DATA IN PROMISES 

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({userName:"Shubhang",email:"shubsh01@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

// REJECT
// .catch() is used for reject 

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"Shubhang", password:"123"})
        }else{
            reject("Error, something went wrong")
        }
    },1000)
})

promiseFour.then(function(user){
    console.log(user);
    return user.password
}).then((user)=>{
    console.log(user);
}).catch((error)=>{
    console.log(error);
}).finally(()=> console.log("The promise is either resolved or rejected"))