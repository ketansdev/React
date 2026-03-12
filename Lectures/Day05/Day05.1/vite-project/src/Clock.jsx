import { useEffect } from "react";
import { useState } from "react";

function Clock() {
  let [time, setTime] = useState(new Date().toLocaleTimeString());
  let [show, setShow] = useState(true);

  useEffect(() => {
    if(!show)
      return;
    
    let intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
      console.log("Hii");
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [show]);
  return (
    <>
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? "hide" : "show"}
      </button>
      {show && <h1>Current Time : {time}</h1>}
    </>
  );
}

export default Clock;
