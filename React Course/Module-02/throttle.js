// const btn = document.getElementById("btn");
// let countVal = document.getElementById("count");

// let count = 0;

// function throttle(fn, limit){
//     let wait = false;
//     return function(){
//         if(wait) return;

//         fn();
//         wait = true;

//         setTimeout(()=>{
//             wait = false;
//         }, limit);
//     }
// }
// let updateCount = () =>{
//     countVal.textContent = count++;
// }

// btn.addEventListener("click", throttle(updateCount, 5000))

function add(y, z) {
  return this.x + y + z;
}

const obj2 = { x: 10 };

const f = add.bind(obj2, 5);

console.log(f(2), add.call({ x: 1 }, 2, 3), add.apply({ x: 2 }, [3, 4]));
