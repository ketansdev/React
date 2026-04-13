const person = {
    name : "Ketan",
    age : 25,
    greet : function(){
        return `Hello ${this.name}`
    }
}

// console.log(person.greet())

// for in loop
// for(let key in person){
//     console.log(key, person[key]);
// }


// object methods
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));


for(let [key, val] of Object.entries(person)){
    console.log(key,val);
}


// constructor - new Object key word
// const Person = new Object();

// Person.name = "Yash";
// console.log(Person);

