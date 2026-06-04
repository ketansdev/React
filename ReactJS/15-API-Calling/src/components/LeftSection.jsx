import { useState } from "react";

const LeftSection = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const response = await fetch("https://api.github.com/users");
    const data = await response.json();
    console.log(data);
    setData(data);
  };
  return (
    <div>
      <button onClick={getData} className="bg-gray-300 p-3 rounded m-5">
        Get Data
      </button>
      <div className="flex flex-wrap justify-center items-center">
        {data.map((item, idx) => {
          return (
            <div key={idx} className="w-80 h-100 bg-[#2A3659] border-2 border-gray-700 m-5 flex flex-col items-center justify-center gap-5 rounded-2xl">
              <img src={item.avatar_url} alt="" className="w-50 h-auto rounded-[50%] border border-amber-400" />
              <h1 className="text-2xl font-bold capitalize text-white">{item.login}</h1>
              <a className="bg-[#6F77A6] p-2 rounded text-gray-300 cursor-pointer" href={item.html_url}>View Profile</a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LeftSection;
