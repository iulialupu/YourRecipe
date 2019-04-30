import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import HrDecoLine from "../HrDecoLine";
import AboutRecipeInfo from "../AboutRecipeInfo";
import Ingredients from "../Ingredients";
import RecipeTitle from "../RecipeTitle";
import StarsRating from "../StarsRating";
import AdminBtnDeleteModal from "../AdminBtnsDeleteModal";

function Recipe({ recipe, auth }) {
  const {
    _id,
    title,
    rating,
    ingredients,
    authorId,
    authorName,
    create_date: createDate,
    update_date: updateDate
  } = recipe;

  return (
    <div className="recipe-card paper-bg">
      <div className="recipe-content">
        <Link to={`/recipe/${_id}`}>
          <RecipeTitle title={title} />
        </Link>
        <StarsRating rating={rating} id={_id} />
        <AboutRecipeInfo
          createDate={createDate}
          updateDate={updateDate}
          authorName={authorName}
        />
        <HrDecoLine />
        <Ingredients ingredients={ingredients} />

        {auth.user && auth.user.id.localeCompare(authorId) === 0 ? (
          <>
            <HrDecoLine />
            <AdminBtnDeleteModal id={_id} title={title} />
          </>
        ) : null}
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(Recipe);
