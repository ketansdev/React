import "./App.css";
import { useState } from "react";
const App = () => {
  let [color, setColor] = useState("white");

  const handleClick = (e) => {
    console.log(e.target.getAttribute("color"))
    setColor(e.target.getAttribute("color"));
  };

  return (
    <div className="container" style={{backgroundColor: color}}>
      <div className="button_container">
        <button color="red" onClick={handleClick}>Red</button>
        <button color="green" onClick={handleClick}>Green</button>
        <button color="blue" onClick={handleClick}>Blue</button>
        <button color="yellow" onClick={handleClick}> Yellow</button>
        <button color="pink" onClick={handleClick}>Pink</button>
      </div>
    </div>
  );
};

export default App;
