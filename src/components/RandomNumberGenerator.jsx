import React, { useState } from "react";
import "./RandomNumberGenerator.css";

const RandomNumberGenerator = () => {
  const [randomNumber, setRandomNumber] = useState(null);

  const generateNumber = () => {
    const number = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(number);
  };

  return (
    <div className="container">
      <h2>🎲 Random Number Generator</h2>

      {randomNumber === null ? (
        <p className="placeholder">No number generated yet</p>
      ) : (
        <p className="number">{randomNumber}</p>
      )}

      <button onClick={generateNumber}>
        Generate Random Number
      </button>
    </div>
  );
};

export default RandomNumberGenerator;
