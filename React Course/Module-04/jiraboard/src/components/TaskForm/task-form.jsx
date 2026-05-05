import "./task-form.css";
import Tag from "../Tag/Tag";
import { useState } from "react";

const TaskForm = () => {
  const [taskData, setTaskData] = useState({
    "task": "",
    "status": "Ready for Development"
  })


  const handleChange = (e) =>{
      const {name, value} = e.target;
      setTaskData((prev) => {
        return {...prev, [name]:value}
      });
  };

  const handleClick = (e) =>{
    e.preventDefault();
    console.log(taskData);
  }


  

  return (
    <header className="app_header">
      <form onSubmit={handleClick}>
        <input
          className="form-input"
          type="text"
          name = "task"
          placeholder="Enter your task !!"
          onChange={handleChange}
          
        />
        <div className="task_form_bottom">
          <div className="tags">
            <Tag tagName="DEV" />
            <Tag tagName="QA" />
            <Tag tagName="Product Owner" />
          </div>

          <div className="select_and_add">
            <select
              name=""
              id=""
              className="task_options"
              name = "status"
              onChange={handleChange}
              
            >
              <option value="Ready for Development">
                Ready for Development
              </option>
              <option value="In Progress">In Progress</option>
              <option value="Ready for Test">Ready for Test</option>
              <option value="Closed">Closed</option>
            </select>
            <button type="submit" className="add_btn" >
              + Add
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
