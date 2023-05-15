import { useState } from "react";
import "./Calculator.css";
import Button from "./Button";

function Calculator() {
  const [displayData, setDisplayData] = useState("");

  const handleButtonClick = (value) => {
    let updateDisplayData = displayData;

    if (value === "=") {
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
      updateDisplayData = "";
    } else {
      updateDisplayData += value;
    }

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
            className="btn-clear dark-grey"
          />
          <Button
            label="+/-"
            value="-"
            onClick={handleButtonClick}
            className="btn-operator dark-grey"
          />
          <Button
            label="%"
            value="%"
            onClick={handleButtonClick}
            className="btn-percent dark-grey"
          />
          <Button
            label="÷"
            value="/"
            onClick={handleButtonClick}
            className="btn-operator"
          />
          <Button
            label="7"
            value="7"
            onClick={handleButtonClick}
            className="btn-number"
          />
          <Button
            label="8"
            value="8"
            onClick={handleButtonClick}
            className="btn-number"
          />
          <Button
            label="9"
            value="9"
            onClick={handleButtonClick}
            className="btn-number"
          />
          <Button label="×" value="*" onClick={handleButtonClick} />
          <Button
            label="4"
            value="4"
            onClick={handleButtonClick}
            className="btn-number"
          />
          <Button
            label="5"
            value="5"
            onClick={handleButtonClick}
            className="btn-number"
          />
          <Button
            label="6"
            value="6"
            onClick={handleButtonClick}
            className="btn-number"
          />
          <Button
            label="-"
            value="-"
            onClick={handleButtonClick}
            className="btn-operator"
          />
          <Button
            label="1"
            value="1"
            onClick={handleButtonClick}
            className="btn-number"
          />
          <Button
            label="2"
            value="2"
            onClick={handleButtonClick}
            className="btn-number"
          />
          <Button
            label="3"
            value="3"
            onClick={handleButtonClick}
            className="btn-number"
          />
          <Button
            label="+"
            value="+"
            onClick={handleButtonClick}
            class="btn-operator"
          />
          <Button
            label="0"
            value="0"
            onClick={handleButtonClick}
            className="btn-number large"
          />
          <Button
            label="."
            value="."
            onClick={handleButtonClick}
            className="btn-operator grey"
          />
          <Button
            label="="
            value="="
            onClick={handleButtonClick}
            className="btn-equals"
          />
        </div>
      </div>
    </div>
  );
}

export default Calculator;
