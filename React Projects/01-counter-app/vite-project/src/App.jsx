import { useState } from "react";

function App() {
  let [count, setCount] = useState(0);

  function increaseNum() {
    count++;
    setCount(count);
  }

  function decreaseNum() {
    count--;
    setCount(count);
  }

  function reset(){
    setCount(0);
  }
  return (
    <>
    <h1>My Counter App</h1>
      <p>Counter: {count}</p>
      <div>
        <button onClick={increaseNum}>Increment</button>
        <button onClick={reset}>Reset</button>
        <button onClick={decreaseNum}>Decrement</button>
      </div>
    </>
  );
}

export default App;
