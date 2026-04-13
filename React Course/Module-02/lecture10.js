//  Destructuring in Javascript 


// object destructuring
const user = {
    name : "Ketan",
    age : 30,
    city : "Mumbai"
}


const {name, age, city : location} = user;
console.log(name, age, location);


const {email = "Not Provided"} = user;
console.log(email)



//  Array destructuring

const colors = ["Red", "Yellow", "Green"];
const [first, , third] = colors;

console.log(first,third )

