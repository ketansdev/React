import './App.css'
import TaskColumn from './components/TaskColumn/task-column'
import TaskForm from './components/TaskForm/task-form'
import doneIcon from './assets/done.png'

const App = () => {
  return (
    <div className="app">
    <h1 className='app_heading'>Jira Board</h1>
        <TaskForm/>
        <main className="app_main">
          <TaskColumn title = "Ready for Development"/>
          <TaskColumn title = "In Progress"/>
          <TaskColumn title = "Ready for Test"/>
          <TaskColumn title = "Closed" icon = {doneIcon}/>
        </main>
        <footer></footer>
    </div>
  )
}

export default App
