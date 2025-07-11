import { useState } from "react";
import "./App.css";
import  TodoContainer from "./Components/TodoContainer";
import NewTask from "./Components/NewTask";

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);
  function handleOnChange(e) {
    setNewTodo(e.target.value);
  }
  function handleOnClick() {
    if (!todos.includes(newTodo)) {
      let resultTodo = [...todos, newTodo];
      setTodos(resultTodo);
      // console.log(resultTodo);
    }
    else{ 
      alert('Todo Already Exists')
    }
   
    }
 function handleEdit(e){
      setNewTodo('edit')
    
  }
  return (
    <>
      <NewTask handleOnChange={handleOnChange} handleOnClick={handleOnClick} inputValue={newTodo}/>
      {todos.map((todo, index) => (
        <TodoContainer todo={todo} index={index} handleEdit={handleEdit}/>
      ))}
    </>
  );
}

export default App;
