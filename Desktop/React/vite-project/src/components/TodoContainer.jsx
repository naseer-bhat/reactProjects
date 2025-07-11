import TodoItem from "./TodoItem"
import "../App.css"
import Button from "./Button"
const TodoContainer=({todos})=>{
  return(<div className="taskContainer">{todos.map(todo=><><TodoItem todo={todo}/> <Button/></> )}
    
    
  </div>)
  
}
export default TodoContainer