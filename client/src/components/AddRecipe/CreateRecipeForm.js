import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Field, FieldArray, reduxForm } from "redux-form";

import validate from "./validate";

class CreateRecipeForm extends React.Component {
  renderError = ({ touched, error, submitFailed, dirty }) => {
    if ((touched && error) || (dirty && error) || (submitFailed && error)) {
      return <div className="error-message">{error}</div>;
    } else {
      return null;
    }
  };

  renderField = ({ input, label, type, meta }) => (
    <div>
      <Form.Label>{label}</Form.Label>
      <Form.Control {...input} type={type} placeholder={label} />
      {this.renderError(meta)}
    </div>
  );

  renderIngredientsField = ({ input, label, type, meta }) => (
    <>
      <Form.Control
        className="ingredients-input-field"
        {...input}
        type={type}
        placeholder={label}
      />
      {console.log(label, input, meta)}
    </>
  );

  renderInstructionsField = ({ input, label, type, meta }) => (
    <>
      <textarea
        className="instructions-input-field form-control"
        {...input}
        type={type}
        placeholder={label}
      />
      {console.log(label, input, meta)}
    </>
  );

  renderIngredients = ({ fields, meta }) => (
    <div className="form-add-multiple">
      <Form.Label>Add ingredients:</Form.Label>
      <ul>
        {fields.map((ingredient, index) => (
          <li key={index} className="d-flex align-items-center">
            <Field
              name={ingredient}
              type="text"
              component={this.renderIngredientsField}
              label={`Ingedient  ${index + 1}`}
            />
            <Button
              className="delete-btn align-self-stretch"
              size="sm"
              variant="danger"
              type="button"
              title="Remove Ingredient"
              onClick={() => fields.remove(index)}
            >
              <i className="fas fa-trash-alt" />
            </Button>
          </li>
        ))}
        <li>
          <Button
            className="mt-1"
            size="sm"
            variant="secondary"
            type="button"
            onClick={() => fields.push()}
          >
            <i className="plus-icon fas fa-plus" /> Add ingredient
          </Button>
          {this.renderError(meta)}
        </li>
      </ul>
    </div>
  );

  renderInstructions = ({ fields, meta }) => (
    <div className="form-add-multiple">
      <Form.Label>Add instructions:</Form.Label>
      <ul>
        {fields.map((ingredient, index) => (
          <li key={index}>
            <Field
              name={ingredient}
              type="textarea"
              component={this.renderInstructionsField}
              label={`Step ${index + 1}`}
            />
            <Button
              className="align-self-stretch mt-1"
              size="sm"
              variant="danger"
              type="button"
              title="Remove Step"
              onClick={() => fields.remove(index)}
            >
              <i className="plus-icon fas fa-trash-alt" /> Remove
            </Button>
          </li>
        ))}
        <li>
          <Button
            className="mt-1"
            variant="secondary"
            sm={2}
            size="sm"
            type="button"
            onClick={() => fields.push()}
          >
            <i className="plus-icon fas fa-plus" /> Add instruction
          </Button>
          {this.renderError(meta)}
        </li>
      </ul>
    </div>
  );

  onSubmit = formValues => {
    const newFormValues = formValues;
    for (let key in newFormValues) {
      if (Array.isArray(newFormValues[key])) {
        newFormValues[key] = newFormValues[key].filter(
          item => item !== undefined
        );
      }
    }
    console.log("Without UNDEFINED", newFormValues);
    this.props.onSubmit(formValues);
  };

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <div className="add-recipe">
        <h2>Add a new recipe:</h2>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <Field
            name="title"
            type="text"
            component={this.renderField}
            label="Recipe Title"
          />

          <FieldArray name="ingredients" component={this.renderIngredients} />

          <FieldArray name="instructions" component={this.renderInstructions} />
          <hr />
          <div className="submit-btnd-group">
            <Button
              style={{ marginRight: "1rem" }}
              variant="dark"
              type="submit"
              disabled={submitting}
            >
              Submit
            </Button>
            <Button
              variant="outline-dark"
              type="button"
              disabled={pristine || submitting}
              onClick={reset}
            >
              Clear Values
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: "createRecipeForm",
  validate
})(CreateRecipeForm);
