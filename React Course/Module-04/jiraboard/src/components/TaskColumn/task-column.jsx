import "./task-column.css";
import TaskCard from "../TaskCard/task-card";

const TaskColumn = (props) => {
  return (
    <>
      <section className="task_column">
      <div className="task_column_heading">

        {props.icon && (<img src={props.icon} alt="task_icon" className="task_column_icon" />)}
        <h2 className="task_column_heading">{props.title}</h2>
      </div>
        <TaskCard/>
      </section>
    </>
  );
};

export default TaskColumn;
