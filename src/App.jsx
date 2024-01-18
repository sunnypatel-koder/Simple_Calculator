import React from "react";
// import ReactDOM from "react-dom/client";
import "./App.css";
import Display from "./components/Display";
import Buttons from "./components/Buttons";
import { useState } from "react";

function App() {
  let [calVal, setCalVal] = useState("");

  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      let newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };

  return (
    <>
      <div id="calculator">
        <Display displayVal={calVal} />
        <Buttons onChangeHandler={onButtonClick} />
      </div>
    </>
  );
}

export default App;
