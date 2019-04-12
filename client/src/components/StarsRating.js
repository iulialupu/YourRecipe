import React from "react";
import StarRatingComponent from "react-star-rating-component";

function StarsRating({ rating }) {
  const ratingValue = rating.length
    ? rating.reduce((s, current) => s + current) / rating.length
    : 0;
  const [stars, setStars] = React.useState(ratingValue);

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
          setStars(ratingValue);
        }}
        starColor={"#ffb400"}
        emptyStarColor={`#333`}
      />
    </div>
  );
}

export default StarsRating;
