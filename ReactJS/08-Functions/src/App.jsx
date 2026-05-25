import "./App.css";

const App = () => {
  // const handleChange = (e) => {
  //   console.log(e.target.value);
  // };
  const handleChange = (val) => {
    console.log(val);
  };
  const handleClick = () => {
    console.log("Button Clicked");
  };
  return (
    <div>
      {/* <input
        onChange={handleChange}
        type="text"
        placeholder="Enter your name here !!"
      /> */}
      <input
        onChange={function (e) {
          handleChange(e.target.value);
        }}
        type="text"
        placeholder="Enter your name here !!"
      />
      <button onClick={handleClick}>Click Here</button>
      <div
        onMouseMove={(e) => {
          console.log(e.clientX, e.clientY);
        }}
        className="box"
      ></div>
    </div>
  );
};

export default App;
