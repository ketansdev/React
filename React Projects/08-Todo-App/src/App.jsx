import Table from "./components/Table";
import Header from "./components/Header";
import { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);
  return (
    <div>
      <Header todos={todos} setTodos={setTodos}/>
      <Table  todos={todos} setTodos={setTodos}/>
    </div>
  );
};

export default App;
