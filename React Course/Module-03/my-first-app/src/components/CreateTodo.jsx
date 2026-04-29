const CreateTodo = () => {
    const styles = {
        color: "red",
        fontSize : "80px",
        // textAlign: "Center"
    }
  const isDisabled = false;
  const task = 5;
  const countTask = () => {
    return task === 0 ? `No Task Available` : `Total Tasks are ${task}`;
  };
  return (
    <>
      <h1 style={styles}>Calculation : {countTask()}</h1>
      <button disabled={isDisabled} value="Add Task Btn">
        Add Task
      </button>
    </>
  );
};

export default CreateTodo;
