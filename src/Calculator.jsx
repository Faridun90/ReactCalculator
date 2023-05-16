import { useState, useEffect } from "react";
import "./Calculator.css";
import Button from "./Button";

function Calculator() {
  const [displayData, setDisplayData] = useState("0");

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleKeyDown = (event) => {
    const { key } = event;

    if (key === "Enter") {
      handleButtonClick("=");
    } else if (key === "Backspace") {
      handleButtonClick("clear");
    } else if (key in keyMappings) {
      handleButtonClick(keyMappings[key]);
    }
  };

  const keyMappings = {
    "0": "0",
    "1": "1",
    "2": "2",
    "3": "3",
    "4": "4",
    "5": "5",
    "6": "6",
    "7": "7",
    "8": "8",
    "9": "9",
    "+": "+",
    "-": "-",
    "*": "*",
    "/": "/",
    ".": ".",
    "=": "=",
  };

  const handleButtonClick = (value) => {
    let updateDisplayData = displayData;
    if (value === "=") {
      console.log(1);
      try {
        if (displayData.includes("%")) {
          updateDisplayData = handlePercentage(displayData);
        } else {
          updateDisplayData = eval(displayData).toFixed(3);
        }
      } catch (error) {
        updateDisplayData = "Error";
      }
    } else if (value === "clear") {
      console.log(2);
      updateDisplayData = "0";
    } else if (value === "+/-") {
      console.log(3);
      updateDisplayData = flipSign(displayData);
    } else {
      console.log(4);
      console.log(value);
      if (displayData === "0") {
        console.log(displayData);
        console.log("A");
        updateDisplayData = value;
      } else {
        console.log("B");
        updateDisplayData += value;
      }
    }
    console.log("final upda53", updateDisplayData);
    setDisplayData(updateDisplayData);
  };

  const handlePercentage = (operatingString) => {
    const regex = /[-+*/÷x]/;
    const splitStep = operatingString.split(regex);
    const percentage = splitStep[splitStep.length - 1].replace("%", "");
    const numPercent = Number(percentage);
    const pow = numPercent / Math.pow(10, 2);
    const targetNum = splitStep[splitStep.length - 2];
    const target = Number(targetNum);

    let result = "";
    if (operatingString.includes("+")) {
      result = target + target * pow;
    } else {
      result = target - target * pow;
    }

    return String(result);
  };

  const flipSign = (value) => {
    if (value.startsWith("-")) {
      return value.substring(1);
    } else {
      return `-${value}`;
    }
  };

  return (
    <div>
      <h1>Welcome To My Calculator App</h1>
      <div className="container">
        <div className="display">{displayData}</div>
        <div className="buttons">
          <Button
            label="AC"
            value="clear"
            onClick={handleButtonClick}
            styles="btn-clear dark-grey"
          />
          <Button
            label="+/-"
            value="-"
            onClick={handleButtonClick}
            styles="btn-operator dark-grey"
          />
          <Button
            label="%"
            value="%"
            onClick={handleButtonClick}
            styles="btn-percent dark-grey"
          />
          <Button
            label="÷"
            value="/"
            onClick={handleButtonClick}
            styles="btn-operator"
          />
          <Button
            label="7"
            value="7"
            onClick={handleButtonClick}
            styles="btn-number"
          />
          <Button
            label="8"
            value="8"
            onClick={handleButtonClick}
            styles="btn-number"
          />
          <Button
            label="9"
            value="9"
            onClick={handleButtonClick}
            styles="btn-number"
          />
          <Button
            label="×"
            value="*"
            onClick={handleButtonClick}
            styles="btn-operator"
          />
          <Button
            label="4"
            value="4"
            onClick={handleButtonClick}
            styles="btn-number"
          />
          <Button
            label="5"
            value="5"
            onClick={handleButtonClick}
            styles="btn-number"
          />
          <Button
            label="6"
            value="6"
            onClick={handleButtonClick}
            styles="btn-number"
          />
          <Button
            label="-"
            value="-"
            onClick={handleButtonClick}
            styles="btn-operator"
          />
          <Button
            label="1"
            value="1"
            onClick={handleButtonClick}
            styles="btn-number"
          />
          <Button
            label="2"
            value="2"
            onClick={handleButtonClick}
            styles="btn-number"
          />
          <Button
            label="3"
            value="3"
            onClick={handleButtonClick}
            styles="btn-number"
          />
          <Button
            label="+"
            value="+"
            onClick={handleButtonClick}
            styles="btn-operator"
          />
          <Button
            label="0"
            value="0"
            onClick={handleButtonClick}
            styles="btn-number large"
          />
          <Button
            label="."
            value="."
            onClick={handleButtonClick}
            styles="btn-operator grey"
          />
          <Button
            label="="
            value="="
            onClick={handleButtonClick}
            styles="btn-equals"
          />
        </div>
      </div>
    </div>
  );
}

export default Calculator;
