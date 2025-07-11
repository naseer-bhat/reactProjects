function DisplayTodo({todos,handleDelete,handleToggle,handleEdit}){
 
return(
  <div>
    {
      todos.map((todo,index)=>(
        <div key={index}>
          <p>{todo.title}</p>
          <p >{todo.completed?'Completed':'pending'} <input type="checkbox" onClick={()=>handleToggle(todo.title)} /></p>
          
          <button onClick={()=>handleDelete(todo.title)}>Delete</button>
          <button onClick={()=>{handleEdit(todo.title)}}>Edit</button>
        </div>
      ))
    }
  </div>
)
}
export default DisplayTodo