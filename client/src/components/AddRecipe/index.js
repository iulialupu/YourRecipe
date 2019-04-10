import React from "react";
import Container from "react-bootstrap/Container";
import { Field, FieldArray, reduxForm } from "redux-form";
import validate from "./validate";

class AddRecipe extends React.Component {
  renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div>
      <label>{label}</label>
      <div>
        <input {...input} type={type} placeholder={label} />
        {touched && error && <span>{error}</span>}
      </div>
    </div>
  );

  renderIngredients = ({ fields, meta: { error } }) => (
    <ul>
      <li>
        <button type="button" onClick={() => fields.push()}>
          Add Ingredient
        </button>
      </li>
      {fields.map((ingredient, index) => (
        <li key={index}>
          <button
            type="button"
            title="Remove Ingedient"
            onClick={() => fields.remove(index)}
          />
          <Field
            name={ingredient}
            type="text"
            component={this.renderField}
            label={`Ingedient`}
          />
        </li>
      ))}
      {error && <li className="error">{error}</li>}
    </ul>
  );

  renderInstructions = ({ fields, meta: { error } }) => (
    <ul>
      <li>
        <button type="button" onClick={() => fields.push()}>
          Add step
        </button>
      </li>
      {fields.map((ingredient, index) => (
        <li key={index}>
          <button
            type="button"
            title="Remove Step"
            onClick={() => fields.remove(index)}
          />
          <Field
            name={ingredient}
            type="text"
            component={this.renderField}
            label={`Instruction ${index + 1}`}
          />
        </li>
      ))}
      {error && <li className="error">{error}</li>}
    </ul>
  );

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    console.log(this.props);
    return (
      <main className="add-recipe-container">
        <Container>
          <div className="add-recipe paper-bg">
            <form onSubmit={handleSubmit}>
              <Field
                name="title"
                type="text"
                component={this.renderField}
                label="Recipe Name"
              />
              <FieldArray
                name="ingredients"
                component={this.renderIngredients}
              />
              <FieldArray
                name="intructions"
                component={this.renderInstructions}
              />
              <div>
                <button type="submit" disabled={submitting}>
                  Submit
                </button>
                <button
                  type="button"
                  disabled={pristine || submitting}
                  onClick={reset}
                >
                  Clear Values
                </button>
              </div>
            </form>
          </div>
        </Container>
      </main>
    );
    return (
      <main className="add-recipe-container">
        <Container>
          <div className="add-recipe paper-bg">
            {/* <form onSubmit={handleSubmit}>
              <Field
                name="title"
                type="text"
                component={renderField}
                label="Recipe Name"
              />
              <FieldArray name="ingredients" component={renderIngredients} />
              <FieldArray name="intructions" component={renderInstructions} />
              <div>
                <button type="submit" disabled={submitting}>
                  Submit
                </button>
                <button
                  type="button"
                  disabled={pristine || submitting}
                  onClick={reset}
                >
                  Clear Values
                </button>
              </div>
            </form> */}
          </div>
        </Container>
      </main>
    );
  }
}

export default reduxForm({
  form: "createRecipeForm",
  validate
})(AddRecipe);
