import { useEffect, useState } from "react";

const LeftSection = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(100);

  useEffect(()=>{
    console.log("Useeffect is running");
  }, [num2])
  return (
    <div className="flex flex-col justify-center items-center h-[100vh] w-full">
    <h1 className="text-5xl font-bold">Value of num1 : <span className="text-amber-500 text-6xl">{num1}</span></h1>
    <h1 className="text-5xl font-bold">Value of num2 : <span className="text-amber-500 text-6xl">{num2}</span></h1>
      <button 
      className="bg-white text-black px-3 py-2 m-5 rounded cursor-pointer"
      onMouseEnter={()=>{
        setNum1(num1 + 1)
      }} onMouseLeave={()=>{
        setNum2(num2+10)
      }}>
        Hover
      </button>
    </div>
  );
};

export default LeftSection;
