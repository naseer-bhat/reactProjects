

export  default function TodoContainer({todo,handleEdit}){
  return(
    <div>
          <p>{todo}</p>
          <button onClick={handleEdit}>edit</button>
        </div>
  )
}