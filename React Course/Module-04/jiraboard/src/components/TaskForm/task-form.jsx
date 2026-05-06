import "./task-form.css";
import Tag from "../Tag/Tag";
import { useState } from "react";

const TaskForm = () => {
  const [taskData, setTaskData] = useState({
    "task": "",
    "status": "Ready for Development",
    "tags" : []
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

  const selectedTags = (tag) =>{
      if(taskData.tags.some((item) => item === tag)){
       const filterTags =  taskData.tags.filter((item) => item !== tag);
       setTaskData((prev) =>{
        return{...prev, tags:filterTags}
       })
      }else{
        setTaskData((prev) =>{
          return{...prev, tags:[...prev.tags, tag]}
        })
      }
  }

  console.log("taskData",taskData)


  

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
            <Tag tagName="DEV" selectedTags = {selectedTags}/>
            <Tag tagName="QA" selectedTags = {selectedTags}/>
            <Tag tagName="Product Owner" selectedTags = {selectedTags}/>
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
