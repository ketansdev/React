import { useState } from "react";
import "./App.css";

function App() {
  let [name, setName] = useState("Ketan");
  function changeText() {
    setName("Swapnil");
  }

  return (
    <>
      <h1>{name}</h1>
      <button onClick={changeText}>Change Name</button>
    </>
  );
}

export default App;
