import React from "react";
import StarRatingComponent from "react-star-rating-component";

function StarsRating({ rating }) {
  const [stars, setStars] = React.useState(rating);

  return (
    <div className="star-rating">
      <StarRatingComponent
        name={"stars-rating"}
        value={stars}
        starCount={5}
        //   onStarClick={} /* on icon click handler */
        onStarHover={(nextValue, prevValue, name) => {
          setStars(nextValue);
        }}
        onStarHoverOut={(nextValue, prevValue, name) => {
          setStars(rating);
        }}
        starColor={"#ffb400"}
        emptyStarColor={`#333`}
      />
    </div>
  );
}

export default StarsRating;
