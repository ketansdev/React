import { useState } from "react";

const Password = () => {
  let [input, setInput] = useState(false);

  const buttonStyle = {
    padding: "12px 20px",
    fontSize: "18px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    backgroundColor: "black",
    color: "white",
  };

  const inputStyle = {
    padding: "12px 20px",
    fontSize: "18px",
    margin : "10px 0",
    borderRadius: "8px",
    outline: "none",
    color: "black",
  };

  const handleInput = () => {
    setInput((prev) => !prev);
  };
  return (
    <>
      <input style={inputStyle} type={input ? "text" : "password"} />
      <button style={buttonStyle} onClick={handleInput}>
        {input ? "Hide" : "Show"} Password
      </button>
    </>
  );
};

export default Password;
