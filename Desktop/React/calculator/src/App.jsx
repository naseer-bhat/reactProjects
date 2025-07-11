import { useState } from "react";
import "./App.css";
function App() {
  let arr = [
    "AC",
    "X",
    "%",
    "-",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "/",
    "1",
    "2",
    "3",
    "+",
    "0",
    ".",
    "=",
  ];
  const [input, setInput] = useState('');
  function handleOnChange(value) {}
  function handleOnClick(val) {
    setInput((prev) => prev + val);
    if (val === "AC") {
      setInput("");
    } else if (val === "X") {
      setInput(input.slice(0,-1))
    } else if (val === "=") {
      const result = eval(input);
      setInput(result);
    }
  }
  return (
    <div className="container">
      <input className="inputBox"
        type="text"
        value={input}
        onChange={(e) => handleOnChange(e.target.value)}
      />
      <div className="btnContainer">
        {arr.map((btn) => (
          <div >
            <button className="btn"
              onClick={() => {
                handleOnClick(btn);
              }}
            >
              {btn}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default App;
