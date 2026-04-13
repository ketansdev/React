// class Person{
//     constructor(name){
//         this._name = name;
//     }
// }

// const person = new Person("Ketan");


// class / constructor 


// class Person{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }

//     greet(){
//         return `My name is ${this.name} and my age is ${this.age}`
//     }
// }

// const p1 = new Person("Ketan", 25);
// console.log(p1.greet());





// Getter and setter

// class Person{
//     constructor(name){
//         this._name = name;
//     }

//     get name(){
//         return this._name;
//     }

//     set name(val){
//         if(val.length <= 2){
//             console.log("Name should be more than 2 charachters");
//         }else{
//             this._name = val
//         }
//     }
// }

// const p1 = new Person("Ketan");
// console.log(p1.name);

// p1.name = "Yash";
// console.log(p1.name);






// #truly private

// class Person{
//     #name;
//     constructor(name){
//         this.#name = name;
//     }

//     greet(){
//         console.log(`hello ${this.#name}`)
//     }
// }

// const p1 = new Person("Ketan")
// p1.greet();


// console.log(p1.#name)