import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { connect } from "react-redux";

import CreateRecipeForm from "./CreateRecipeForm";
import { createRecipe } from "../../actions/recipeActions";

function AddRecipe({ createRecipe }) {
  const onSubmit = formValues => {
    console.log("FORM VALUES FROM INDEX", formValues);
    createRecipe(formValues);
  };

  return (
    <main className="add-recipe-container">
      <Container>
        <Row className="justify-content-md-center">
          <Col md={10} lg={8}>
            <CreateRecipeForm onSubmit={onSubmit} />
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default connect(
  null,
  { createRecipe }
)(AddRecipe);
