import React from "react";
import StarRatingComponent from "react-star-rating-component";
import { connect } from "react-redux";

import { rateRecipe } from "../actions/recipeActions";

function StarsRating({ id, rating, rateRecipe }) {
  const ratingValue = rating.length
    ? rating.reduce((s, current) => s + current) / rating.length
    : 0;
  const [stars, setStars] = React.useState(ratingValue);

  const handleClick = starValue => {
    rating.push(starValue);
    rateRecipe(id, rating);
  };

  return (
    <div className="star-rating">
      <StarRatingComponent
        name={"stars-rating"}
        value={stars}
        starCount={5}
        onStarClick={handleClick}
        onStarHover={(nextValue, prevValue, name) => {
          setStars(nextValue);
        }}
        onStarHoverOut={(nextValue, prevValue, name) => {
          setStars(ratingValue);
        }}
        starColor={"#ffb400"}
        emptyStarColor={`#333`}
      />
    </div>
  );
}

export default connect(
  null,
  { rateRecipe }
)(StarsRating);
