import { useState } from "react";

const App = () => {
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex flex-col gap-5 text-center bg-[#C5C8D9] p-10 rounded-xl">
      <h1 className="text-3xl font-bold">
        Character Count :<span>{text.length}</span>{" "}
      </h1>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <label htmlFor="input">Name : </label>
        <input
          type="text"
          placeholder="Enter your name !!.."
          id="input"
          className="border px-3 py-1 rounded"
          value={text}
          onChange={(e)=>{
            setText(e.target.value)
          }}
        />
      </form>
    </div>
  );
};

export default App;
