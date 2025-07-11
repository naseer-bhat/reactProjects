import TodoHeader from "./components/TodoHeader"
import TodoContainer from "./components/TodoContainer"
// import Hello from "./Hello"
// import Random from "./Random"
let todos=['tea','coffee','black tea','tea','coffee','black tea']

function App(){
  return(<>
    <TodoHeader/>
    <TodoContainer todos={todos}/>
    </>
  )
}
export default App