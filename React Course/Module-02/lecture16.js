//  ternary operator and short circuiting (|| and &&)

const age = 14;
const status = age >= 18 ? "Adult" : "Kid";

console.log(status);



const value = "" || "Default";

console.log(value);


const isLoggedIn = true;
isLoggedIn && console.log("Welcome user !!")