import React from "react";

import "./index.css";

const Button = ({ text, width, height, handleButton }) => {
  console.log(width, height, text);
  return (
    <button className="button" onClick={handleButton} style={{ height, width }}>
      {text}
    </button>
  );
};

export default Button;
