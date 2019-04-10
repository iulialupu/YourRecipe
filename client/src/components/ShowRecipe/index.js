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

function ShowRecipe({ match, fetchRecipe, recipe }) {
  // const recipe = {
  //   title: "Cajun Chicken Pasta",
  //   author: {
  //     id: 1,
  //     userName: "John Doe"
  //   },
  //   createDate: "Jun, 2 2015",
  //   updateDate: "Dec, 6 2017",
  //   rating: 3.4,
  //   ingredients: [
  //     "4 ounces linguine pasta",
  //     "2 skinless, boneless chicken breast halves",
  //     "2 teaspoons Cajun seasoning",
  //     "2 tablespoons butter",
  //     "1 red bell pepper, sliced",
  //     "1 green bell pepper, sliced",
  //     "4 fresh mushrooms, sliced",
  //     "1 green onion, chopped",
  //     "1 cup heavy cream",
  //     "1/4 teaspoon dried basil",
  //     "1/4 teaspoon lemon pepper",
  //     "1/4 teaspoon salt",
  //     "1/8 teaspoon garlic powder",
  //     "1/8 teaspoon ground black pepper",
  //     "1/4 cup grated Parmesan cheese"
  //   ],
  //   instructions: [
  //     "Bring a large pot of lightly salted water to a boil. Add pasta and cook for 8 to 10 minutes or until al dente; drain.",
  //     "Place the chicken and the Cajun seasoning in a plastic bag. Shake to coat. In a large skillet over medium heat, saute the chicken in butter or margarine until almost tender (5 to 7 minutes).",
  //     "Add the red bell pepper, green bell pepper, mushrooms and green onion. Saute and stir for 2 to 3 minutes. Reduce heat.",
  //     "Add the cream, basil, lemon pepper, salt, garlic powder and ground black pepper. Heat through. Add the cooked linguine, toss and heat through. Sprinkle with grated Parmesan cheese and serve."
  //   ]
  // };

  React.useEffect(() => {
    window.scrollTo(0, 0);
    const { id } = match.params;
    fetchRecipe(id);
  }, []);

  const renderShowRecipe = () => {
    const {
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
