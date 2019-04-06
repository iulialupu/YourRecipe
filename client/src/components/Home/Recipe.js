import React from "react";
import StarRatingComponent from "react-star-rating-component";

function Recipe() {
  const recipe = {
    name: "Cajun Chicken Pasta",
    author: {
      id: 1,
      userName: "John Doe"
    },
    createDate: "Jun, 2 2015",
    updateDate: "Dec, 6 2017",
    rating: 3.4,
    ingredients: [
      "4 ounces linguine pasta",
      "2 skinless, boneless chicken breast halves",
      "2 teaspoons Cajun seasoning",
      "2 tablespoons butter",
      "1 red bell pepper, sliced",
      "1 green bell pepper, sliced",
      "4 fresh mushrooms, sliced",
      "1 green onion, chopped",
      "1 cup heavy cream",
      "1/4 teaspoon dried basil",
      "1/4 teaspoon lemon pepper",
      "1/4 teaspoon salt",
      "1/8 teaspoon garlic powder",
      "1/8 teaspoon ground black pepper",
      "1/4 cup grated Parmesan cheese"
    ],
    instructions: [
      "Bring a large pot of lightly salted water to a boil. Add pasta and cook for 8 to 10 minutes or until al dente; drain.",
      "Place the chicken and the Cajun seasoning in a plastic bag. Shake to coat. In a large skillet over medium heat, saute the chicken in butter or margarine until almost tender (5 to 7 minutes).",
      "Add the red bell pepper, green bell pepper, mushrooms and green onion. Saute and stir for 2 to 3 minutes. Reduce heat.",
      "Add the cream, basil, lemon pepper, salt, garlic powder and ground black pepper. Heat through. Add the cooked linguine, toss and heat through. Sprinkle with grated Parmesan cheese and serve."
    ]
  };
  const { name, rating, ingredients, author, createDate, updateDate } = recipe;
  const [stars, setStars] = React.useState(rating);

  const renderIngredients = () => {
    return ingredients.map((ingredient, i) => (
      <li key={i} className="ingredients-item">
        {ingredient}
      </li>
    ));
  };

  return (
    <div className="recipe-card">
      <div className="recipe-content">
        <h3 className="recipe-name">
          <span className="name-line" />
          <span className="name-text">{name}</span>
          <span className="name-line" />
        </h3>

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

        <div className="create-info">
          <div>
            <span className="label">Posted:</span>
            {createDate}
          </div>

          <div>
            <span className="label">Edited:</span>
            {updateDate}
          </div>

          <div>
            <span className="label">By:</span>
            {author.userName}
          </div>
        </div>

        <div className="horizontal-line" />

        <div className="ingredients">
          <h4>Ingredients:</h4>
          <ul className="ingredients-list">{renderIngredients()}</ul>
        </div>
      </div>
    </div>
  );
}

export default Recipe;
