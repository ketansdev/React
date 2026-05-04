import "./task-form.css";
import Tag from "../Tag/Tag";

const TaskForm = () => {
  return (
    <header className="app_header">
      <form>
        <input
          className="form-input"
          type="text"
          placeholder="Enter your task !!"
        />
        <div className="task_form_bottom">
          <div className="tags">
            <Tag tagName = "DEV"/>
            <Tag tagName = "QA"/>
            <Tag tagName = "Product Owner"/>
          </div>

          <div className="select_and_add">
            <select name="" id="" className="task_options">
              <option value="Ready for Development">
                Ready for Development
              </option>
              <option value="In Progress">In Progress</option>
              <option value="Ready for Test">Ready for Test</option>
              <option value="Closed">Closed</option>
            </select>
            <button type="submit" className="add_btn">+ Add</button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
