import { useState } from "react";

const CharachterCounter = () =>{
    let [count, setCount] = useState(0);

    const handleChange = (e) =>{
        console.log(e.target.value)
        setCount(e.target.value.length);
    }
    return (
        <>
            <textarea name="" id="" onChange={handleChange}></textarea>
            <h1>Count : {count}</h1>
        </>
    )
}

export default CharachterCounter;