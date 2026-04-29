import { useState } from "react";

const Count = () => {
  let [count, setCount] = useState(0);

  const styles = {
    textAlign: "center",
    fontSize: "23px",
    backgroundColor: "lightGray",
    border: "none",
    borderRadius: "5px",
    margin: "5px",
  };

  const handleIncrement = () => {
    setCount(count + 1);
    console.log("Increment Button Clicked !! ", count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
    console.log("Decrement Button Clicked !!", count - 1);
  };

  const handleReset = () => {
    setCount(0)
  };
  return (
    <>
      <p style={{ fontSize: "25px" }}>Count : {count}</p>
      <button style={styles} onClick={handleIncrement}>
        Increment
      </button>
      <button style={styles} onClick={handleReset}>
        Reset
      </button>
      <button style={styles} onClick={handleDecrement}>
        Decrement
      </button>
    </>
  );
};

export default Count;
