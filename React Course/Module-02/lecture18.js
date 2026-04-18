//  Prototype

// const arr = [1, 2, 3];

// const result = arr.map(item => item + 1);
// console.log(result);

// Array.prototype.greet = function(){
//     console.log("Hello Coders");
// }


// Array.prototype.last = function(){
//    return this[this.length-1];
// }
// console.log(arr.last());

// console.log(Array.prototype);



// Object.create()

// const userObj = {
//     greet: function() {
//         return `Hello ${this.name}`
//     }
// }

// const newObj = Object.create(userObj);
// newObj.name = "Ketan";

// console.log(newObj.greet());



// Class Constructor

class A {
    constructor(name){
        this.name = name;
    }

    greet(){
        return `Good morning ${this.name}`
    }
}

class B extends A {
    sayHi(){
        return `Hi ${this.name}`
    }
}

const b = new B("Ketan");
console.log(b.sayHi());
console.log(b.greet())


