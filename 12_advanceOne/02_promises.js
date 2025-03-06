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


// Async Await 
// it is used by calling async function that we create 

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(()=>{
        let error = false
        if(!error){
            resolve({username:"js", password:"123"})
        }else{
            reject('Error occured in JS')
        }
    },1000)
})

async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
    finally{
        console.log('khuch toh hua h');
    }
}

consumePromiseFive()


// FETCH 
// Async function gets a response 
// fetch gets response from the url and it takes time for it to get the response so {{we have to add await}} so that it gets the response 

async function getAllUsers() {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        // here the conversion of response to json also takes time, so we have to add await here also 
        const data = await response.json()
        console.log(data);
    }
    catch(error){
        console.log("E :", error);
    }
}

// getAllUsers()


// using .then() and catch()
const response = fetch("https://jsonplaceholder.typicode.com/users")
response
.then((getAllUsers)=>{
        // here return is imp for it to transfer values to second.then()
    return getAllUsers.json()
})
.then((data)=>console.log(data))
.catch((error)=>console.log(error))


// IT CAN ALSO BE WRITTEN AS 
fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    // here return is imp for it to transfer values to second.then()
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})

// FETCH IMP POINT 

// A fetch() promise only rejects when a network error is encountered
// (which is usually when there's a permissions issue or similar). A fetch()
// promise does not reject on HTTP errors (404, etc.). Instead, a then ()
// handler must check the Response.ok and/or Response.status properties.