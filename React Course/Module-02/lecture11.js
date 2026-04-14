//  Shallow copy and Deep copy

const user = {
    name : "Ketan",
    age : 25,
    location : {
        country : "India",
        address : {
            city : "Mumbai"
        }
    }
}


//  shallow copy
// user.location.address.city = "Panvel";
// const shallowCopy = Object.assign({}, user);
// console.log(shallowCopy);

// const shallowCopy1 = {...user};
// console.log(shallowCopy1);


// const deepCopy = JSON.parse(JSON.stringify(user));
// deepCopy.location.address.city = "Panvel";
// console.log("deepCopy",deepCopy.location.address.city);
// console.log("deepCopy", deepCopy);
// console.log("user", user)



// const originalObject = {
//     name : "Swapnil",
//     address : {
//         city : "Mumbai",
//     }
// }

// const deepCopy = JSON.parse(JSON.stringify(originalObject));

// deepCopy.address.city = "Panvel";

// console.log(originalObject)
// console.log(deepCopy);





//  shallow copy

// const person = {
//     name : "Yash",
//     address : {
//         city : "Pune"
//     }
// }

// const shallowCopy = {...person};
// shallowCopy.address.city = "Delhi";
// console.log("shallowCopy",shallowCopy);
// console.log("person",person);


const person1 = {
    name : "Swapnil",
    age : 31,
    address : {
        city : "Panvel"
    }
}

const shallowCopy1 = {...person1};
shallowCopy1.address.city = "Revdanda";
console.log(shallowCopy1);
console.log(person1);