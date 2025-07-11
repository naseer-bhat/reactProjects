import "../App.css";
import Button from "./Button";
const ButtonContainer = ({ buttons,handleOnClick }) => {

  
  return (
    <div className="btnContainer">
      {buttons.map((btn) => (
        <Button button={btn} handleOnClick={handleOnClick} />
      ))}
    </div>
    
  );
};
export default ButtonContainer;
