const validate = values => {
  const errors = {};
  if (!values.title) {
    errors.title = "Required";
  }
  if (!values.ingredients || !values.ingredients.length) {
    errors.ingredients = { _error: "At least one ingredient must be entered" };
  }
  if (!values.instructions || !values.instructions.length) {
    errors.instructions = { _error: "At least one step must be entered" };
  }

  return errors;
};

export default validate;
