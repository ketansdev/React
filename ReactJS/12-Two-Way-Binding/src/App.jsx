import { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="bg-red-400 max-w-200 h-100 flex justify-center items-center rounded-4xl p-10">
      <form
        className="flex flex-col gap-2"
        onSubmit={(e) => {
          console.log("Form Submitted by :", name);
          handleSubmit(e);
        }}
      >
        <label htmlFor="input">Name</label>
        <input
          type="text"
          placeholder="Enter your name !!"
          id="input"
          className="w-100 border solid border-gray-500 px-3 py-1 rounded"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <div>
          <button className="bg-gray-200 px-5 py-2 rounded">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default App;
