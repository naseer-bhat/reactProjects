import { useEffect, useState } from "react";
import AddTodo from "./AddTodo";
import DisplayTodo from "./DisplayTodo";
function TodoContainer() {
 const api=''
 useEffect(()=>{
  
 })

  const [todos, setTodos] = useState([]);

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };
  const handleToggle = (title) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.title == title) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  const handleDelete = (title) => {
    const filteredTodos = todos.filter((todo) => todo.title != title);
    setTodos(filteredTodos);
  };
const handleEdit=(title)=>{
console.log(title)
}

  return (
    <>
      <AddTodo onAdd={handleAddTodo}  />
      <DisplayTodo
        todos={todos}
        handleDelete={handleDelete}
        handleToggle={handleToggle}
        handleEdit={handleEdit}
      />
    </>
  );
}
export default TodoContainer;
