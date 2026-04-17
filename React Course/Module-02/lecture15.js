// spread and rest operator 


// array - spread operator
const array = [1, 2, 3];

const newArr = [...array, 4, 5];
console.log(newArr)


//  object - spread operator

const obj = {name : "Ketan", age : 25}

const newObj = {...obj , hobby : "trekking"};
console.log(newObj);



//  Rest operator 

function sum(...nums){
    return nums.reduce((a, b) => a + b , 0)
}

console.log(sum(1, 2, 3, 5));
