//  Nested object 


// let user = {
//     name: "Ketan",
//     age : 25,
//     address: {
//         city : "Mumbai",
//         pincode : 400018,
//     }
// }

// // optional chaining
// const city = user.address?.city;
// console.log(city)



// Nullish Coalescing operator

let user = {
    name: "Ketan",
    greet: function(){
        return `Hello ${this.name}`
    },
    preferences : ''
}

const city = user.address?.city ?? "Mumbai";
console.log(city)

let prefs = user.preferences ?? "No preferences is set";
console.log(prefs)