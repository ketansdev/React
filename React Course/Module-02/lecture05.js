// function greet(){
//     console.log("Hello React");
// }

// greet();



// Arrow Function 

// let greet = () =>{
//     console.log("Hello React");
// }

// greet();


// const myName = () => "Ketan Shetge";
// console.log(myName());



// const user = {
//     name : "Ketan",
//     greet: function(){
//         console.log("Hello React", this.name);
//     }
// }

// user.greet();


// const user1 = {
//     name : "Ketan",
//     greet: () => {
//         console.log("Hello React", this.name);
//     }
// }

// user1.greet();


// function show() {
//   console.log(arguments);
// }
// show(1, 2, 3); // works


function test(){
    name = "Ajju";
    let user = {
        name: "Ketan",
        greet : function(){
            console.log(this.name);
        }
    }

    user.greet();
}

test();


console.log(this)


function show() {
  console.log("this",this);
}

show();