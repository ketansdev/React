import "./task-column.css";

const TaskColumn = (props) => {
  return (
    <>
      <section className="task_column">
        {props.icon && (<img src={props.icon} alt="task_icon" className="task_column_icon" />)}
        <h2 className="task_column_heading">{props.title}</h2>
      </section>
    </>
  );
};

export default TaskColumn;
