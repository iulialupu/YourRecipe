import React from "react";

function Instructions({ instructions }) {
  const renderInstructions = () => {
    return instructions.map((instruction, i) => (
      <li key={i} className="instructions-item">
        <span className="step-number">{i + 1}</span>
        <span className="step-text">{instruction}</span>
      </li>
    ));
  };

  return (
    <div className="instructions">
      <h4>Instructions:</h4>
      <ul className="instructions-list">{renderInstructions()}</ul>
    </div>
  );
}

export default Instructions;
