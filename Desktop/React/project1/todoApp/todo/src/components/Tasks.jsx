import '../App.css'
const Tasks=({task,handleDelete})=>{
return <div className="tasks">
  <p>{task}</p>
  <button className="deleteTaskBtn" onClick={()=>handleDelete(task)}> delete</button>
</div>
}
export default Tasks