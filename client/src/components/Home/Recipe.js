import React from "react";
import { Link } from "react-router-dom";

import HrDecoLine from "../HrDecoLine";
import AboutRecipeInfo from "../AboutRecipeInfo";
import Ingredients from "../Ingredients";
import RecipeTitle from "../RecipeTitle";
import StarsRating from "../StarsRating";
import AdminBtnDeleteModal from "../AdminBtnsDeleteModal";

function Recipe({ recipe }) {
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
        <AdminBtnDeleteModal id={_id} title={title} />
      </div>
    </div>
  );
}

export default Recipe;
