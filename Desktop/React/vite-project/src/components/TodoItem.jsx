import "../App.css";
const TodoItem = ({todo}) => {
  return (
    <>
      <p className="todoItem">{todo}</p>
    </>
  );
};
export default TodoItem;
