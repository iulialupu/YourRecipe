import React from "react";
import { connect } from "react-redux";

import RecipeForm from "../RecipeForm";
import { createRecipe } from "../../actions/recipeActions";
import RecipeFormContainer from "../RecipeFormContainer";

function AddRecipe({ createRecipe, user }) {
  const onSubmit = formValues => {
    if (user !== undefined) {
      const { id, name } = user;
      createRecipe(formValues, { id, name });
    }
  };

  return (
    <RecipeFormContainer>
      <h2>Add a new recipe:</h2>
      <RecipeForm onSubmit={onSubmit} />
    </RecipeFormContainer>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.auth.user
  };
};

export default connect(
  mapStateToProps,
  { createRecipe }
)(AddRecipe);
