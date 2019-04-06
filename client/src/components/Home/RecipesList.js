import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Recipe from "./Recipe";

function RecipesList() {
  return (
    <section className="recipes-list">
      <Container>
        <Row className="justify-content-md-center">
          <Col xs Xl="6" lg="8" md="10">
            <Recipe />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default RecipesList;
