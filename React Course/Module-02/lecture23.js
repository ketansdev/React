// memoization

// function memoSquare() {
//   const cache = {};
//   return function (n) {
//     if (cache[n]) {
//       console.log("Cache return");
//       return cache[n];
//     }
//     console.log("Calculating...");
//     const result = n * n;
//     cache[n] = result;
//     return result;
//   };
// }


// const square = memoSquare();
// console.time("With Memo");
// console.log(square(5));
// console.timeEnd("With Memo");


// console.time("With Memo Again");
// console.log(square(5));
// console.timeEnd("With Memo Again");



// function memoAdd(){
//     const cache = {};
//     return function(a, b){
//         const key = `${a}_${b}`;
//         if(cache[key]){
//             return cache[key];
//         }
//         for(let i = 0 ; i < 1e8; i++){}

//         const result = a + b;
//         cache[key] = result;
//         return result;
//     }

// }

// const add = memoAdd();

// console.time("With Memo");
// console.log(add(2, 5));
// console.timeEnd("With Memo");


// console.time("With Memo again");
// console.log(add(2, 5));
// console.timeEnd("With Memo again");





// function memoSubtract(){
//     const cache = {};
//     return function(a, b){
//         const key = `${a}_${b}`;
//         if(cache[key]){
//             return cache[key];
//         }

//         for(i = 0; i < 1e8; i++){}

//         const result = a - b;
//         cache[key] = result;
//         return result;
//     }
// }

// const subtract = memoSubtract();

// console.time("With Memo");
// console.log(subtract(10, 5))
// console.timeEnd("With Memo")


// console.time("With Memo again");
// console.log(subtract(10, 5))
// console.timeEnd("With Memo again")



// practice problem 


// function squareMemoize(){
//     const cache = {};
//     return function(n){
//         if(n in cache){
//             return cache[n];
//         }

//         const result = n * n;
//         cache[n] = result;
//         return result;
//     }
// }

// const square = squareMemoize();
// console.log(square(5))





// function addMemoize(){
//     const cache = {};
//     return function(a, b){
//         const key = `${a}_${b}`;

//         if(key in cache){
//             console.log("From cache..")
//             return cache[key];
//         }
//         console.log("Calculating...")
//         const result = a + b;
//         cache[key] = result;
//         return result;
//     }
// }

// const add = addMemoize();
// console.log(add(2, 3))



// console.log(add(2, 3))