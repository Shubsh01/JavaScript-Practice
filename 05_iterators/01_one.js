// for loop 
for (let i = 0; i < 10; i++) {
    const element = i;
    // console.log(element);
}

for(let i = 1;i<=10;i++){
    // console.log(`Outer loop is ${i}`);
    for(let j = 1;j<=10;j++){
        // console.log(`Outer loop is ${i}, Inner loop is ${j}`);
        // console.log(i+"*"+j+"="+i*j);
    } 
}


// While loop 
let myArr = ['Shubhang', 'Shreesh', 'Sudhir','Rajkumari']
let arr = 0
while(arr<myArr.length){
    console.log(`Value of myArr is ${myArr[arr]}`);
    arr++
}

// do-While loop
let score = 1
do{
    console.log(`value of score is ${score}`);
    score++
}while(score <= 10)