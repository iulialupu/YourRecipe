import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { connect } from "react-redux";

import Recipe from "./Recipe";
import { fetchRecipes } from "../../actions/recipeActions";

function RecipesList({ fetchRecipes, recipes }) {
  React.useEffect(() => {
    fetchRecipes();
  }, []);

  const renderRecipes = () => {
    return recipes.map(recipe => <Recipe recipe={recipe} key={recipe._id} />);
  };

  return (
    <section className="recipes-list">
      <Container>
        <Row className="justify-content-md-center">
          <Col xs xl="6" lg="8" md="10">
            {recipes ? renderRecipes() : null}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

const mapStateToProps = state => {
  return {
    recipes: Object.values(state.recipes)
  };
};

export default connect(
  mapStateToProps,
  { fetchRecipes }
)(RecipesList);
