import { useState } from "react"

function AddTodo({onAdd}){
  const [input,setInput]= useState('')
  const handleAddTodo=()=>{
    const newTodo={
      id:Date.now(),
      title: input,
      completed:false,
    }
    onAdd(newTodo)
    setInput('')
  }
return(
  <div>
    <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
    <button onClick={handleAddTodo}>Add Todo</button>
  </div>
)
}
export default AddTodo