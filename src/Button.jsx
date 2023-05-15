import React from "react";

const Button = ({ label, value, onClick }) => {
  return (
    <button onClick={() => onClick(value)}>
      {label}
    </button>
  );
};

export default Button;
