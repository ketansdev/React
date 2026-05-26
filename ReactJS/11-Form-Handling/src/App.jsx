const App = () => {
  const handleSubmit = (e) => {
    console.log("click")
    e.preventDefault();
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <label htmlFor="input">Name:</label>
        <input type="text" placeholder="Enter your name !!" id="input" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
