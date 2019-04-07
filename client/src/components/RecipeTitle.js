import React from "react";

function RecipeTitle({ title }) {
  return (
    <h3 className="recipe-title">
      <span className="name-line" />
      <span className="name-text">{title}</span>
      <span className="name-line" />
    </h3>
  );
}

export default RecipeTitle;
