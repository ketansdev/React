import Card from "./Card";

const Button = () => {
    const value = "Ketan";
    const isDisabled = true;

    const checkIfNum = ()=>{
        return value === "" || typeof(value) === "string" ? `Its a String ${value}` : `Its a number ${value}`
    }

    const styles = {
      textAlign : "center",
      color: "green",
      fontSize: "25px"
    }
  return (
    <>
      <p style={styles}>Output : {checkIfNum()}</p>
      <button disabled = {isDisabled}>Click Me</button>
      <Card/>
    </>
  );
};

export default Button;