// const users = [
//   {
//     id: 1,
//     name: "Ketan",
//     age: 22,
//     city: "Mumbai",
//   },
//   {
//     id: 2,
//     name: "Rahul",
//     age: 25,
//     city: "Delhi",
//   },
//   {
//     id: 3,
//     name: "Sneha",
//     age: 23,
//     city: "Pune",
//   },
// ];

// filter
// const filterByAge = users.filter((user) =>{
//     return user.age > 22
// })

// console.log(filterByAge);


// map
// const cities = users.map((user) => {
//    return user.city.toUpperCase();
// });

// console.log(cities);


// method chanining 

// const result = users.filter(user => user.age > 22).map(user => user.city.toUpperCase());
// console.log(result);




// Map and filter 

// const users = [
//   { id: 1, name: "Ketan", age: 22, city: "Mumbai" },
//   { id: 2, name: "Rahul", age: 25, city: "Delhi" },
//   { id: 3, name: "Sneha", age: 23, city: "Pune" },
//   { id: 4, name: "Kiran", age: 28, city: "Mumbai" }
// ];

// // Q Get an array of user names in uppercase

// const UpperCaseNames = users.map(user => user.name.toUpperCase());
// console.log(UpperCaseNames);


// //  Q Return an array of ages + 5

// const ages = users.map(user => user.age + 5);
// console.log(ages);


//  Q Create a new array like:
// [
//   { id: 1, fullName: "Ketan (22)" },
//   { id: 2, fullName: "Rahul (25)" },
//   { id: 3, fullName: "Sneha (23)" },
//   { id: 4, fullName: "Kiran (28)" }
// ]

// const result = users.map((user) =>{
//     return {
//         id: user.id,
//         fullname : `${user.name} (${user.age})`
//     }
// })

// console.log(result);


// //  Return only cities in lowercase


// const cities = users.map(user => user.city.toLowerCase());
// console.log(cities);


// // Get users with age > 23

// const ageAbove23 = users.filter(user => user.age > 23);
// console.log(ageAbove23);


// // Get users from Mumbai

// const mumbaiUser = users.filter(user => user.city === "Mumbai");
// console.log(mumbaiUser);


// // Get users whose name starts with "K"

// const initialK = users.filter(user => user.name.startsWith("K"));
// console.log(initialK);



// //  Get users with even id

// const evenId = users.filter(user => user.id % 2 === 0);
// console.log(evenId);


// // Get names of users age > 23 

// const results = users.filter(user => user.age > 23).map(user => user.name);
// console.log(results);



// Join and split 

// Convert this string into array of words: "Hello world from JS"

// const string = "Hello world from JS";

// const stringArr = string.split(" ");
// console.log(stringArr);


// // Convert this into characters:"ketan"
// const string1 = "ketan";
// const result1 = string1.split("");
// console.log(result1);


// // split this string : "apple,banana,mango"

// const string2 = "apple,banana,mango";
// const result2 = string2.split(",");
// console.log(result2);


// // Convert this into array of numbers: "1 2 3 4 5"

// const string3 = "1 2 3 4 5";
// const result3 = string3.split(" ").map(Number);
// console.log(result3);


// // Convert this into a sentence: ["Hello", "world", "JS"]

// const array = ["Hello", "world", "JS"];
// const str = array.join(" ");
// console.log(str);


// // Join with dash -:["2026", "04", "14"]

// const array1 = ["2026", "04", "14"];
// const str1 = array1.join('-');
// console.log(str1);



// //  Convert this into comma-separated string: ["apple", "banana", "mango"]

// const array2 = ["apple", "banana", "mango"]

// const str2 = array2.join(", ");
// console.log(str2)




// const users = [
//   { id: 1, name: "Ketan", age: 22, city: "Mumbai" },
//   { id: 2, name: "Rahul", age: 25, city: "Delhi" },
//   { id: 3, name: "Sneha", age: 23, city: "Pune" },
//   { id: 4, name: "Kiran", age: 28, city: "Mumbai" }
// ];


// // find

// // Find the first user with age > 23

// const user1 = users.find(user => user.age > 23);
// console.log(user1)


// // Find the user whose name is "Sneha"

// const user2 = users.find(user => user.name === "Sneha");
// console.log(user2);


// // Find the first user from Mumbai

// const user3 = users.find(user => user.city === "Mumbai");
// console.log(user3)



// // findIndex()

// // Find index of user whose id is 3

// const findIndex1 = users.findIndex(user => user.id === 3)
// console.log(findIndex1);


// // Find index of first user whose age > 25 

// const findIndex2 = users.findIndex(user => user.age > 25);
// console.log(findIndex2);




//  reduce 

const nums = [1, 2, 3, 4];

const sum = nums.reduce((acc, curr) =>{
    return acc + curr;
}, 0);

console.log(sum);


const multiply = nums.reduce((acc, curr)=>{
    return acc * curr;
},1);

console.log(multiply);