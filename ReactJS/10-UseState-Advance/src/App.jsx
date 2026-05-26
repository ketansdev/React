import { useState } from "react";
import ArrayUseState from "./components/ArrayUseState";

const App = () => {
  const [user, setUser] = useState({ name: "ketan", age: 25 });

  const handleChange = () =>{
    const newUser = {...user};
    newUser.name = "Swapnil";
    newUser.age = 30;

    setUser(newUser);
  }
  return (
    <div>
      <h1>{user.name}, {user.age}</h1>
      <button onClick={handleChange}>Click</button>
      <ArrayUseState />
    </div>
    

  );
  
};

export default App;
