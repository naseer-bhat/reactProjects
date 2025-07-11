import Display from "./components/Display";
import ButtonContainer from "./components/ButtonContainer";
import { useState } from "react";
import "./App.css";
let buttons = [
  "AC",
  "<-",
  "%",
  "+",
  "7",
  "8",
  "9",
  "*",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "+",
  "0",
  "00",
  ".",
  "=",
];

const App = () => {
  const [input, setInput] = useState([]);
  const handleOnClick = (e) => {
    const buttonText = e.target.value;
    if (buttonText === "AC") {
      setInput("");
    } else if (buttonText === "=") {
      const result = eval(input);
      setInput(result);
    } else {
      const newVal = input + buttonText;
      setInput(newVal);
    }
  };

  return (
    <>
      <h1>calculator</h1>
      <div className="container">
        <Display input={input} />
        <ButtonContainer buttons={buttons} handleOnClick={handleOnClick} />
      </div>
    </>
  );
};
export default App;
