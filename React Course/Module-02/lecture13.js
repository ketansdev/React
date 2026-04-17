//  Call , Apply , Bind

const user1 = {
    name : "Ketan",
    age : 25
}

const user2 = {
    name : "Yash",
    age : 23
}

// function printUserDetails(city, country){
//     console.log(`Name : ${this.name} , age : ${this.age} , Location : ${city} , ${country}`)
// }

// printUserDetails.call(user1, "Panvel", "India");



// function printSecondUser(game, team){
//     console.log(`Name: ${this.name}, age : ${this.age}, Favourite game : ${game} , Team : ${team}`)
// }

// printSecondUser.apply(user2, ["Cricket", "India"]);



function userDetails(city, state){
    console.log(`Name: ${this.name}, age: ${this.age} , I am from ${city}, ${state}`)
}

const result = userDetails.bind(user1, "Mumbai", "Maharashtra");
result();


const obj = {
    name : "Swapnil",
    role : "Technician"
}

function detail(city, district){
    return `I am ${this.name} and I am ${this.role} and I work in ${city}, ${district}`
}

const user = detail.bind(obj, "Panvel", "Raigad");
console.log(user());


const obj1 = {
    name : "Shubham",
    age : 22,
    hobby : "Riding",
    about : function(){
        return `My name is ${this.name} and I am ${this.age} and I love ${this.hobby}`;
    }
}


const aboutFn = obj1.about.bind(obj1);
console.log(aboutFn());