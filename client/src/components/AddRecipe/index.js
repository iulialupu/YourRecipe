import React from "react";
import { connect } from "react-redux";

import RecipeForm from "../RecipeForm";
import { createRecipe } from "../../actions/recipeActions";
import RecipeFormContainer from "../RecipeFormContainer";

function AddRecipe({ createRecipe }) {
  const onSubmit = formValues => {
    console.log("FORM VALUES FROM ADD", formValues);
    createRecipe(formValues);
  };

  return (
    <RecipeFormContainer>
      <h2>Add a new recipe:</h2>
      <RecipeForm onSubmit={onSubmit} />
    </RecipeFormContainer>
  );
}

export default connect(
  null,
  { createRecipe }
)(AddRecipe);
