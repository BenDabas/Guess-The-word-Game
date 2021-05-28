import React from 'react';

import './index.css';

const Input = ({ userInput, handleUserInput, placeholderText }) => {
  return (
    <input
      value={userInput}
      onChange={handleUserInput}
      className="input"
      placeholder={placeholderText}
    />
  );
};

export default Input;
