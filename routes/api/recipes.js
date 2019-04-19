const express = require("express");
const router = express.Router();

// Item Model
const Recipe = require("../../models/Recipe");

// api/recipes
////////////////
// Get all recipes
// access: public
router.get("/", (req, res) => {
  Recipe.find((err, foundArticles) => {
    if (!err) {
      {
      }
      res.send(foundArticles);
    } else {
      res.send(err);
    }
    console.log(foundArticles);
  });
});

// Add a recipe
// access: private
router.post("/", (req, res) => {
  console.log("new recipe", req.body);
  const recipe = new Recipe({
    title: req.body.title,
    ingredients: req.body.ingredients,
    instructions: req.body.instructions
  });
  recipe.save(function(err) {
    if (!err) {
      res.status(200).send(recipe);
    } else {
      console.log(err);
    }
  });
});

// api/recipes/:id
//////////////////
// Get a recipe
// access: public
router.get("/:id", (req, res) => {
  Recipe.findById(req.params.id, (err, foundRecipe) => {
    if (foundRecipe) {
      res.send(foundRecipe);
    } else {
      res.send("No recipe with the specified id was found");
    }
  });
});

// Update a recipe
// access: private
router.patch("/:id", (req, res) => {
  Recipe.update({ _id: req.params.id }, { $set: req.body }, err => {
    if (!err) {
      Recipe.findById(req.params.id, (err, foundRecipe) => {
        if (foundRecipe) {
          res.send(foundRecipe);
        } else {
          res.send("No recipe with the specified id was found");
        }
      });
    } else {
      res.send(err);
    }
  });
});

// Delete a recipe
// access: private
router.delete("/:id", (req, res) => {
  Recipe.findByIdAndRemove(req.params.id, err => {
    if (!err) {
      res.send(req.params.id);
    } else {
      res.send(err);
    }
  });
});

module.exports = router;
