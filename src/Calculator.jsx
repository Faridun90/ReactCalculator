import { useState, useEffect } from "react";
import "./Calculator.css";
import Button from "./Button";
import { ButtonMapper } from "./constants";

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
    "%": "%",
    ".": ".",
    "=": "=",
  };

  const handleButtonClick = (value) => {
    setDisplayData((prevDisplayData) => {
      let updateDisplayData = prevDisplayData;

      if (value === "=") {
        try {
          if (prevDisplayData.includes("%")) {
            updateDisplayData = handlePercentage(prevDisplayData);
          } else {
            updateDisplayData = eval(prevDisplayData).toFixed(3);
          }
        } catch (error) {
          updateDisplayData = "Error";
        }
      } else if (value === "clear") {
        updateDisplayData = "0";
      } else if (value === "+/-") {
        updateDisplayData = flipSign(prevDisplayData);
      } else {
        if (prevDisplayData === "0") {
          updateDisplayData = value;
        } else {
          updateDisplayData += value;
        }
      }

      return updateDisplayData;
    });
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

  function renderButtons() {
    return (
      <>
        {ButtonMapper.map((button, index) => {
          return (
            <Button
              label={button.label}
              value={button.value}
              styles={button.styles}
              onClick={handleButtonClick}
              key={index}
            />
          );
        })}
      </>
    );
  }

  return (
    <div>
      <h1>Welcome To My Calculator App</h1>
      <div className="container">
        <div className="display">{displayData}</div>
        <div className="buttons">{renderButtons()}</div>
      </div>
    </div>
  );
}

export default Calculator;
