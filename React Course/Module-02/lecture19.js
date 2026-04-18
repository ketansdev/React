// set 

// let arr = [10, 20, 10, 30, 50, 20]

// let mySet = new Set(arr);
// console.log(mySet);

// console.log(mySet.has(20));
// console.log(mySet.delete(30));

// console.log(mySet);


// for(let val of mySet){
//     console.log(val);
// }



//  map

const myMap = new Map();

myMap.set("name", "Ketan");
myMap.set("age", 25);

console.log(myMap);
console.log(myMap.get("name"));
console.log(myMap.size);

for(let [key, val] of myMap){
    console.log(key, val)
}



const scores = new Map();

scores.set("Ketan", 98);
scores.set("Yash", 90);
scores.set("Swapnil", 91);
scores.set("Ketan", 80);

console.log(scores)



// remove duplicates

const arr = [1, 2, 3, 3, 5]
const unique = [...new Set(arr)];
console.log(unique)