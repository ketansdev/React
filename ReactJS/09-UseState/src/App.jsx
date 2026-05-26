import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const hanldeIncrease = () => {
    setCount(count + 1);
  };

  const hanldeDecrease = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h1 className="text-center text-5xl bg-gray-600 mb-10 p-20 rounded font-semibold">{count}</h1>
      <div className="flex flex-row gap-10">
        <button onClick={hanldeIncrease} className="bg-gray-400 px-5 py-2 rounded cursor-pointer">Increase</button>
        <button onClick={hanldeDecrease} className="bg-gray-400 px-5 py-2 rounded cursor-pointer">Decrease</button>
      </div>
    </div>
  );
};

export default App;
