// {{{{{{{{{{ Immediately Invoked Function Expression (IIFE) }}}}}}}}}}
// Function jo immediately execute ho jaye 
// We use IIFE to avoid pollution from global scope, meaning chota agar bade se lele khuch toh dikt aa skti h 

// ()function ki defination()function ka execution 
(function randomFunction(){
    // Named IIFE 
    console.log(`DB CONNECTED`);
})(); /* Semi colon zaruri h function ko end krne k liye */

// Arraow Function as IIFE 
(()=>{
    console.log(`DB CONNECTED USING ARROW FUNCTION`);
})(); /* Semi colon zaruri h function ko end krne k liye */

// HOW TO PASS VALUE 
((username)=>{
    console.log(`DB CONNECTED USING ARROW FUNCTION FOR ${username}`);
})("SHUBHANG"); /* Normal function ki trha treat krna h aur similarly execution wali jgha p username ki value pass krni h */