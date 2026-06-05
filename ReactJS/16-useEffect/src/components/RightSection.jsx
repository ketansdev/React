import { useEffect, useState } from "react";

const RightSection = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  const changeA = () =>{
    console.log("A is changed");
  }

  const changeB = () =>{
    console.log("B is changed");
  }

  useEffect(()=>{
    changeA()
  },[a])

  useEffect(()=>{
    changeB();
  }, [b])
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <h1 className="text-5xl font-bold">Value of A : <span className="text-red-400">{a}</span></h1>
      <h1 className="text-5xl font-bold">Value of B : <span className="text-red-400">{b}</span></h1>
      <div className="flex gap-5 m-5">
        <button className="bg-white text-black px-3 py-2 rounded cursor-pointer" onClick={()=>{
            setA(a + 1)
        }}>
          Increment A
        </button>
        <button className="bg-white text-black px-3 py-2 rounded cursor-pointer" onClick={()=>{
            setB(b - 1)
        }}>
          Decrement B
        </button>
      </div>
    </div>
  );
};

export default RightSection;
