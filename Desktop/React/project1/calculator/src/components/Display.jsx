
import "../App.css"
const Display=({input})=>{
  return(
    <input type="text" className="display" value={input} readOnly  placeholder="input" />
  )
}
export default Display