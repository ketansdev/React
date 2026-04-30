import { useState } from "react";

const Background = () => {
  let [bgColor, setBgColor] = useState("white");

  let colors = ["red", "yellow", "green", "blue", "pink"];

  const styles = {
    backgroundColor: bgColor,
    fontSize: "25px",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const buttonStyle = {
    padding: "12px 20px",
    fontSize: "18px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    backgroundColor: "black",
    color: "white",
  };

  const handleColorChange = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    console.log(randomIndex);
    setBgColor(colors[randomIndex]);
  };
  return (
    <>
      <h1 style={styles}>Background Color : {bgColor}</h1>
      <button style={buttonStyle} onClick={handleColorChange}>
        Change Color
      </button>
    </>
  );
};

export default Background;
