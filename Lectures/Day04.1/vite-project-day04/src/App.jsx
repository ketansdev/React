import { useState } from "react";

function App(){

  let [count, setCount] =  useState(0);

  // let count = 0;

  // function increaseNum(){
  //   count++;
  //   console.log(count);
  //   const para = document.querySelector("p");
  //   para.textContent = `Counter: ${count}`;

  //   const button = document.querySelector("button");
  //   button.textContent = `Increment: ${count}`;
  // }


function increaseNum(){
  count++;
  setCount(count);
}

  return (
    <>
      <p>Counter : {count}</p>
      <button onClick={increaseNum}>Increment: {count}</button>
    </>
  )

}

export default App