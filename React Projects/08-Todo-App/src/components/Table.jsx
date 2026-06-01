import { SquarePen, Trash } from "lucide-react";

const Table = ({ todos, setTodos }) => {

  const editTask = (idx) =>{
    console.log("Task Edited");
    console.log(todos, idx)
  }
  const deleteTask = (idx) =>{
    console.log("Task Deleted", idx);
    setTodos(todos.filter((_,i)=> i !== idx))
  }
  return (
    <div className="w-full max-w-250 m-auto">
      <table className="table-fixed w-full text-white">
        <thead>
          <tr className="border-b border-gray-700">
            <th>Tasks</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>

            {todos.map((todo, idx) => (
              
                <tr className="border-b border-gray-800 hover:bg-gray-900" key={idx}>
                <td className="p-5">{todo}</td>
                <td className="flex flex-row gap-5 justify-center items-center p-5">
                    <button className='cursor-pointer' onClick={() =>{
                      editTask(idx)
                    }}><SquarePen /></button>
                    <button className="cursor-pointer" onClick={() =>{
                      deleteTask(idx);
                    }}><Trash /></button>
                </td>
                </tr>
              
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
