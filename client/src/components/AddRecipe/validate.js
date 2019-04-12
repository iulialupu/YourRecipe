const validate = values => {
  const errors = {};
  if (!values.title) {
    errors.title = "You must provide a title";
  }

  if (
    !values.ingredients ||
    !values.ingredients.length ||
    !values.ingredients[0]
  ) {
    errors.ingredients = { _error: "At least one ingredient must be provided" };
  }

  if (
    !values.instructions ||
    !values.instructions.length ||
    !values.instructions[0]
  ) {
    errors.instructions = {
      _error: "At least one instruction must be provided"
    };
  }

  console.log("Validate errors", errors, values);
  return errors;
};

export default validate;
