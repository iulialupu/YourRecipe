import React from "react";

function Ingredients({ ingredients }) {
  const renderIngredients = () => {
    return ingredients.map((ingredient, i) => (
      <li key={i} className="ingredients-item">
        {ingredient}
      </li>
    ));
  };

  return (
    <div className="ingredients">
      <h4>Ingredients:</h4>
      <ul className="ingredients-list">{renderIngredients()}</ul>
    </div>
  );
}

export default Ingredients;
