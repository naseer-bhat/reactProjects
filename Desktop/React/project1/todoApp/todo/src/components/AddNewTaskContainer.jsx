import { useState } from 'react'
import '../App.css'

const AddNewTaskContainer=({handleOnClick})=>{
  const [task,setTask]=useState('')
  const handleOnChange=(e)=>{
    setTask(e.target.value)
  }
  return <div className="addNewTask">
    <input type="text" onChange={handleOnChange}  value={task}/>
    <button className="addTaskBtn" onClick={()=>handleOnClick(task)}> Add Task</button>
  </div>
}
export default AddNewTaskContainer