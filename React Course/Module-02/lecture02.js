// console.log("start");

// setTimeout(()=>{
//     console.log("Hello");
// }, 4000);

// console.log("end");




// Event loop

// console.log("Waiter: Pizza Order Recieved");

// setTimeout(()=>{
//     console.log("Pizza is Ready");
// }, 2000)

// fetch("https:dummyjson.com/products/1")
// .then(()=> console.log("API response recived"));

// Promise.resolve().then(()=> console.log("Billing DOne"));

// console.log("Water served");





// Call STack eg 


// function f1() {
//   console.log("f1");
// }

// function f2() {
//   f1();
//   console.log("f2");
// }

// function f3() {
//   f2();
//   console.log("f3");
// }

// f3();





// Event loop 

console.log("Order Received");

setTimeout(()=>{
    console.log("Order is Ready");
}, 4000);

fetch("https://jsonplaceholder.typicode.com").then(() => console.log("API response is received"));

Promise.resolve().then(() => console.log("Billing done"));

console.log("Water Served");

