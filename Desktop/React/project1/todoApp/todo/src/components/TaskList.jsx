import "../App.css";
import Tasks from "./Tasks";
const TaskList = ({tasks,handleDelete}) => {
  return (
    <div className="taskContainer">
      {tasks.map((task)=><Tasks task={task} handleDelete={handleDelete} />)}
      
    </div>
  );
};
export default TaskList;
