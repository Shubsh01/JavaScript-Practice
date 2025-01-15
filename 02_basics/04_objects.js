const tinderUser = Object() /*Singleton Object*/
let fbUser = {}/*Both dont have difference Internally, both r just objects*/
// console.log(fbUser);
tinderUser.name = "Shubhang"
tinderUser.id = "123abc"
tinderUser.isLoggedIn = false
tinderUser.lastLoggedIn = ["Monday","Wednesday"]
// console.log(tinderUser);

// ^_^_^_^_^_^_ Nested Objects ^_^_^_^_^_^_ 

fbUser = {
    email: "Shub@google.com",
    userFullName: {
        fullName : {
            firstName: "Shubhang",
            lastName: "Sharma"
        }
    }
}

// console.log(fbUser.userFullName.fullName.firstName);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
// const obj3 = Object.assign({},obj1,obj2)  Old way
const obj3 = {...obj1,...obj2}
// console.log(obj3); 


// #_#_#_#_#_#_#_#_ Array Of Objects #_#_#_#_#_#_#_
// Data comes many times from database in this format 

const user_Data = [
    {
        name:"Shubhang",
        email:"s@google.com"
    },
    {
        name:"Sudhir",
        email:"sudhir@google.com"
    },
    {
        name:"Shreesh",
        email:"shreesh@google.com"
    }
]

// console.log(user_Data[1].name);

// console.log(tinderUser);


// Gives data in form of arrays 
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('lastLoggedIn')); 
/*to check wether the property exist in the object or not */


// ()()()()()() Destructuring of an object ()()()()()()

const randomObject = {
    name:"SHUBHANG",
    age: 18,
    email: "shubhang@google.com"
}

// Post the below process I do not have to write console.log(randomObject.email); everytime, I can just console.log(e); to get the email, this is called Destructuring of an object 

// Destructuring of an object is also used in react 

const {email: e} = randomObject
console.log(e);

// JSON (JavaScript Object Notation) syntax/format  <<<<<<<APIS>>>>>>

// It is written like an object but has no name and we use "" in both keys and values 

// {
//     "name": "Shubhang",
//     "isLoggedIn": false,
//     "age" : 18,
//     "fullName": "Shubhang Sharma"
// }

// We can also get APIS in the format of arrays 
[
    {},
    {},
    {}
]
