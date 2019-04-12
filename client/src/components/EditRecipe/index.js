import React from "react";
import { connect } from "react-redux";
import { pick } from "lodash";

import RecipeForm from "../RecipeForm";
import { updateRecipe, fetchRecipe } from "../../actions/recipeActions";
import RecipeFormContainer from "../RecipeFormContainer";

function EditRecipe({ updateRecipe, fetchRecipe, match, recipe }) {
  const { id } = match.params;

  React.useEffect(() => {
    fetchRecipe(id);
  }, []);

  const onSubmit = formValues => {
    updateRecipe(id, formValues);
  };

  console.log("RECIPE", recipe);

  return (
    <RecipeFormContainer>
      <h2>Edit the recipe:</h2>
      {recipe && (
        <RecipeForm
          initialValues={pick(recipe, "title", "ingredients", "instructions")}
          onSubmit={onSubmit}
        />
      )}
    </RecipeFormContainer>
  );
}

const mapStateToProps = (state, ownProps) => ({
  recipe: state.recipes[ownProps.match.params.id]
});

export default connect(
  mapStateToProps,
  { updateRecipe, fetchRecipe }
)(EditRecipe);
