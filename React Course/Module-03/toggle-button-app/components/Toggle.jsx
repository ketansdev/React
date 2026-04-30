import { useState } from "react";

const Toggle = () => {
  let [showText, setShowText] = useState(true);

  let name = "Ketan";
  const handleName = () => {
    setShowText(prev => !prev)
  };

  return (
    <>
      <p>Name : {showText && name}</p>
      <button onClick={handleName}>{showText ? "Hide" : "Show"} Text</button>
    </>
  );
};

export default Toggle;
