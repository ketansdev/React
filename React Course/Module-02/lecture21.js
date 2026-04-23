// // promise 

// const myPromise = new Promise((resolve, reject) =>{
//     let success = false;

//     if(success){
//         resolve("Done !!");
//     }else{
//         reject("error!!")
//     }
// })


// myPromise.then((result) =>{
//     console.log(result);
// }).catch((error) => {
//     console.log(error);
// })



// food delivery example

// function orderFood(isRestuarantOpen, item){
//     return new Promise((resolve, reject) =>{
//         console.log(`Order Placed for ${item}`)

//         setTimeout(()=>{
//             if(isRestuarantOpen){
//                 resolve(`${item} is Ready`);
//             }else{
//                 reject(`${item} is not ready, Restuarant is closed`)
//             }
//         }, 2000)
//     })
// }

// orderFood(true, "Paneer Tikka").then((result) =>{
//     console.log(result);
//     return `Water is Served`;
// }).then((data) =>{
//     console.log(data);
// }).catch((error) =>{
//     console.log(error);
// }).finally(()=>{
//     console.log(`Thankyou for using Zomato`);
// })



// promise using api - fetch 

// function testApi(){
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error))
// }

// testApi();



//  questions 

// Create a Promise that resolves after 2 seconds with:

// const myPromise = new Promise((resolve, reject) =>{
//     setTimeout(() =>{
//         resolve("Hello World");
//     }, 2000)
// })

// myPromise.then((result)=>{
//     console.log(result);
// })


// 🧪 Q2

// 👉 Create a function:

// checkNumber(num)
// if num > 10 → resolve "Valid"
// else → reject "Invalid"

// function checkNumber(num){
//     return new Promise((resolve, reject) =>{
//         if(num > 10){
//             resolve("Valid");
//         }else{
//             reject("Invalid");
//         }
//     })
// }

// checkNumber(5).then((result) =>{
//     console.log(result);
// }).catch((error) =>{
//     console.log(error);
// })




// 🧪 Q3 (Chaining 🔥)

// 👉 Create a Promise chain:

// Step 1 → "Order Placed"
// Step 2 → "Food Cooking"
// Step 3 → "Food Delivered"

// 👉 Use .then() chaining

// const myPromise = new Promise((resolve, reject) =>{
//     resolve("Order Placed")
// })

// myPromise.then((result) =>{
//     console.log(result);
//     return `Food Cooking`;
// }).then((result) =>{
//     console.log(result);
//     return `Food Delivered`;
// }).then((result)=>{
//     console.log(result);
// })




// 👉 Create a function:

// delay(ms)

// 👉 It should:

// return a Promise
// resolve after ms milliseconds


// function delay(ms){
//     return new Promise((resolve) =>{
//         setTimeout(()=>{
//             resolve("Function resolved")
//         },ms)
//     })
// }

// delay(3000).then((result) =>{
//     console.log(result);
// })





// 👉 Create function:

// getUserData()

// 👉 After 1 sec resolve:

// { name: "Ketan", age: 22 }

// 👉 Then:

// Print name
// Then print age in next .then()

// function getUserData(){
//     return new Promise((resolve) =>{
//         setTimeout(()=>{
//             resolve({ name: "Ketan", age: 22 })
//         }, 1000);
//     })
// }

// getUserData().then((user)=>{
//     console.log(user)
//     return user;
// }).then((user) =>{
//     console.log(user.name);
//     return user;
// }).then((user) =>{
//     console.log(user.age);
// })




// Q6 (Important 🔥)

// 👉 Create a Promise that:

// randomly resolves "Success"
// randomly rejects "Failed"

// 👉 Handle both using .then() & .catch()



// const myPromise = new Promise((resolve,reject) =>{
//     const isSucess = Math.random() > 0.5
//     if(isSucess){
//         resolve("Success");
//     }else{
//         reject("Failed");
//     }
// })

// myPromise.then((result) =>{
//     console.log(result)
// }).catch((error) =>{
//     console.log(error);
// });




// Q7

// 👉 
// Create 2 promises:

// one resolves in 1 sec → "First"
// one resolves in 2 sec → "Second"

// 👉 Use:

// Promise.all()

const p1 = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        resolve("First")
    }, 1000);

})

const p2 = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        resolve("Second")
    },2000)
})

Promise.all([p1, p2])
.then((results)=> {
    console.log(results);
}).catch((error)=>{
    console.log(error);
})