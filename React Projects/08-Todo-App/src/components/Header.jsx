// import { Plus } from "lucide-react";
import { useState } from "react";

const Header = ({ todos, setTodos }) => {
  const [value, setValue] = useState("");
  console.log(todos, setTodos);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);

    if (!value.trim()) return;

    setTodos([...todos, value]);
    setValue("");
  };
  return (
    <div className="flex flex-col justify-center items-center gap-5 p-10 w-full max-w-250 m-auto">
      <h1 className="text-5xl font-bold text-white text-center">My Todo App</h1>
      <form
        className="w-full  flex flex-col md:flex-row justify-center items-center gap-4 md:gap-10"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Enter your task .."
          className="w-full md:flex-1 rounded-md bg-[#1E1F1E] px-4 py-2 text-gray-100 placeholder-gray-400 ring-1 ring-gray-700 focus:ring-2 focus:ring-cyan-500"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button className="w-full md:w-auto rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-5 py-2.5 font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:scale-105 hover:shadow-indigo-500/30 cursor-pointer">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default Header;
