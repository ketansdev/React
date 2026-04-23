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

function testApi(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
}

testApi();