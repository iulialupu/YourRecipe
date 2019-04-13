import React from "react";
import { Link } from "react-router-dom";

import HrDecoLine from "../HrDecoLine";
import AboutRecipeInfo from "../AboutRecipeInfo";
import Ingredients from "../Ingredients";
import RecipeTitle from "../RecipeTitle";
import StarsRating from "../StarsRating";
import Button from "react-bootstrap/Button";
import DeleteRecipeModal from "../DeleteRecipeModal";

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

  const [modalIsOpen, setModalState] = React.useState(false);

  const modalClose = () => setModalState(false);

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
          <Button
            variant="dark"
            className="px-3"
            onClick={() => setModalState(true)}
          >
            Delete
          </Button>
        </div>
      </div>

      <DeleteRecipeModal
        id={_id}
        title={title}
        show={modalIsOpen}
        onHide={modalClose}
      />
    </div>
  );
}

export default Recipe;
