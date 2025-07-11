import AddNewTaskContainer from './components/AddNewTaskContainer'
import './App.css'

import TaskList from './components/TaskList'
import { useState } from 'react'
const App=()=>{
  const [tasks,setTasks]=useState([])
const handleOnClick=(task)=>{
const newtask= task
setTasks([...tasks,newtask])
}
const handleDelete=(deletedTask)=>{
const updatedTasks=tasks.filter(task=>task!==deletedTask)
setTasks(updatedTasks)
}

return <div className="container">
  <AddNewTaskContainer handleOnClick={handleOnClick}/>
  {!tasks.length==0 && <TaskList tasks={tasks} handleDelete={handleDelete} />}
</div>
}
export default App