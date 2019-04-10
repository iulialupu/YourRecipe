import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Field, FieldArray, reduxForm } from "redux-form";

import validate from "./validate";

class AddRecipe extends React.Component {
  renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div>
      <Form.Label>{label}</Form.Label>
      <Form.Control {...input} type={type} placeholder={label} />
      {touched && error && <span>{error}</span>}
    </div>
  );

  renderIngredientsField = ({
    input,
    label,
    type,
    meta: { touched, error }
  }) => (
    <>
      <Form.Control
        className="ingredients-input-field"
        {...input}
        type={type}
        placeholder={label}
      />
      {touched && error && <span>{error}</span>}
    </>
  );

  renderInstructionsField = ({
    input,
    label,
    type,
    meta: { touched, error }
  }) => (
    <>
      <textarea
        className="instructions-input-field form-control"
        {...input}
        type={type}
        placeholder={label}
      />
      {touched && error && <span>{error}</span>}
    </>
  );

  renderIngredients = ({ fields, meta: { touched, error } }) => (
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
              title="Remove Ingedient"
              onClick={() => fields.remove(index)}
            >
              <i className="fas fa-trash-alt" />
            </Button>
          </li>
        ))}
        <Button
          className="mt-1"
          size="sm"
          variant="secondary"
          type="button"
          onClick={() => fields.push()}
        >
          <i className="plus-icon fas fa-plus" /> Add Ingredient
        </Button>
        {touched && error && <li className="error">{error}</li>}
      </ul>
    </div>
  );

  renderInstructions = ({ fields, meta: { error } }) => (
    <div className="form-add-multiple">
      <Form.Label>Add instructions:</Form.Label>
      <ul>
        {fields.map((ingredient, index) => (
          <li key={index}>
            <Field
              name={ingredient}
              type="textarea"
              component={this.renderInstructionsField}
              label={`Instruction ${index + 1}`}
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
        <Button
          className="mt-1"
          variant="secondary"
          sm={2}
          size="sm"
          type="button"
          onClick={() => fields.push()}
        >
          <i className="plus-icon fas fa-plus" /> Add step
        </Button>
        {error && <li className="error">{error}</li>}
      </ul>
    </div>
  );

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    console.log(this.props);
    return (
      <main className="add-recipe-container">
        <Container>
          <Row className="justify-content-md-center">
            <Col md={10} lg={8}>
              <div className="add-recipe">
                <h2>Add a new recipe:</h2>
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
            </Col>
          </Row>
        </Container>
      </main>
    );
  }
}

export default reduxForm({
  form: "createRecipeForm",
  validate
})(AddRecipe);
