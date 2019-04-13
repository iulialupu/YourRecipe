import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { connect } from "react-redux";

import HrDecoLine from "../HrDecoLine";
import AboutRecipeInfo from "../AboutRecipeInfo";
import Ingredients from "../Ingredients";
import RecipeTitle from "../RecipeTitle";
import StarsRating from "../StarsRating";
import Instructions from "../Instructions";
import { fetchRecipe } from "../../actions/recipeActions";
import AdminBtnDeleteModal from "../AdminBtnsDeleteModal";

function ShowRecipe({ match, fetchRecipe, recipe }) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    const { id } = match.params;
    fetchRecipe(id);
  }, []);

  const renderShowRecipe = () => {
    const {
      _id,
      title,
      rating,
      ingredients,
      author,
      createDate,
      updateDate,
      instructions
    } = recipe;
    return (
      <div className="show-recipe paper-bg">
        <RecipeTitle title={title} />

        <StarsRating rating={rating} />

        <AdminBtnDeleteModal id={_id} title={title} />

        <Row className="justify-content-md-center">
          <Col xs Xl="4" lg="6" md="8">
            {/* <AboutRecipeInfo
                createDate={createDate}
                updateDate={updateDate}
                author={author}
              /> */}

            <HrDecoLine />
          </Col>
        </Row>

        <Ingredients ingredients={ingredients} />

        <Instructions instructions={instructions} />
      </div>
    );
  };

  return (
    <main className="show-recipe-container">
      <Container>{recipe ? renderShowRecipe() : null}</Container>
    </main>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    recipe: state.recipes[ownProps.match.params.id]
  };
};

export default connect(
  mapStateToProps,
  { fetchRecipe }
)(ShowRecipe);
