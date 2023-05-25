import React from "react";

const Button = ({ label, value, onClick, styles }) => {
  return (
    <button onClick={() => onClick(value)} className={styles}>
      {label}
    </button>
  );
};

export default Button;
