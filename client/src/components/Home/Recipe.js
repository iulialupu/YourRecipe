import React from "react";
import { Link } from "react-router-dom";

import HrDecoLine from "../HrDecoLine";
import AboutRecipeInfo from "../AboutRecipeInfo";
import Ingredients from "../Ingredients";
import RecipeTitle from "../RecipeTitle";
import StarsRating from "../StarsRating";
import Button from "react-bootstrap/Button";

function Recipe({ recipe }) {
  // const recipe = {
  //   id: 1,
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
  const {
    _id,
    title,
    rating,
    ingredients,
    author,
    createDate,
    updateDate
  } = recipe;

  return (
    <div className="recipe-card paper-bg">
      <div className="recipe-content">
        <Link to={`/recipe/${_id}`}>
          <RecipeTitle title={title} />
        </Link>

        <StarsRating rating={rating} />

        {/* <AboutRecipeInfo
          createDate={createDate}
          updateDate={updateDate}
          author={author}
        /> */}

        <HrDecoLine />

        <Ingredients ingredients={ingredients} />

        <HrDecoLine />

        <div className="admin-btns d-flex justify-content-center">
          <Link
            to={`recipe/edit/${_id}`}
            className="btn btn-secondary mr-2 px-4"
          >
            Edit
          </Link>
          <Button variant="dark" className="px-3">
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Recipe;
