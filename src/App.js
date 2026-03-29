import React, { useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState(null);

  const generateNumber = () => {
    const randomNum = Math.floor(Math.random() * 100) + 1; // 1–100
    setNumber(randomNum);
  };

  return (
    <div className="container">
      <h1>🎲 Random Number Generator</h1>

      {number === null ? (
        <p className="placeholder">No number generated yet</p>
      ) : (
        <h2 className="number">{number}</h2>
      )}

      <button onClick={generateNumber}>Generate Random Number</button>
    </div>
  );
}

export default App;
