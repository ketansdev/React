import { useState } from "react";

const ArrayUseState = () => {
  const [val, setVal] = useState([2, 3, "Ketan", true, 50]);

  const handleChange = () =>{
    console.log("btn clicked");
    const newVal = [...val];
    newVal[2] = "Namita";

    setVal(newVal);
  }
  return (
    <div>
    <h1>New Array is {val}</h1>
      <button onClick={handleChange}>Click</button>
    </div>
  );
};

export default ArrayUseState;
