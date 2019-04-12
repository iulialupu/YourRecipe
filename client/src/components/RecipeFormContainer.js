import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function RecipeFormContainer({ children }) {
  return (
    <main className="recipe-container">
      <Container>
        <Row className="justify-content-md-center">
          <Col md={10} lg={8}>
            <div className="form-recipe">{children}</div>
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default RecipeFormContainer;
