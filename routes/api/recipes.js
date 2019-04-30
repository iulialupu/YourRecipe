const express = require("express");
const router = express.Router();
const auth = require("./middleware/auth");

// Recipe Model
const Recipe = require("../../models/Recipe");

// api/recipes
////////////////
// Get all recipes
// access: public
router.get("/", (req, res) => {
  Recipe.find((err, foundArticles) => {
    if (!err) {
      res.send(foundArticles);
    } else {
      res.send(err);
    }
    console.log(foundArticles);
  });
});

// Add a recipe
// access: private
router.post("/", auth, (req, res) => {
  const recipe = new Recipe({ ...req.body });
  if (req.user === req.body.authorId) {
    recipe.save(function(err) {
      if (!err) {
        res.status(200).send(recipe);
      } else {
        console.log(err);
      }
    });
  } else {
    res.status(401).json({ msg: "Access denied" });
  }
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
      res
        .status(400)
        .json({ msg: "No recipe with the specified id was found" });
    }
  });
});

// Update a recipe
// access: private
router.patch("/:id", auth, (req, res) => {
  Recipe.update({ _id: req.params.id }, { $set: req.body }, err => {
    if (!err) {
      Recipe.findById(req.params.id, (err, foundRecipe) => {
        if (foundRecipe) {
          res.send(foundRecipe);
        } else {
          res
            .status(400)
            .json({ msg: "No recipe with the specified id was found" });
        }
      });
    } else {
      res.send(err);
    }
  });
});

// Update a recipe | Add Star Rating
// access: public
router.patch("/:id/rating", (req, res) => {
  // Recipe.findByIdAndUpdate(req.params.id, { rating: req.body }, foundRecipe => {
  //   if (foundRecipe) {
  //     res.send(foundRecipe);
  //   } else {
  //     res
  //       .status(400)
  //       .json({ msg: "No recipe with the specified id was found" });
  //   }
  // });

  Recipe.update({ _id: req.params.id }, { rating: req.body }, err => {
    if (!err) {
      Recipe.findById(req.params.id, (err, foundRecipe) => {
        if (foundRecipe) {
          res.send(foundRecipe);
        } else {
          res
            .status(400)
            .json({ msg: "No recipe with the specified id was found" });
        }
      });
    } else {
      res.send(err);
    }
  });
});

// Delete a recipe
// access: private
router.delete("/:id", auth, (req, res) => {
  Recipe.findByIdAndRemove(req.params.id, err => {
    if (!err) {
      res.send(req.params.id);
    } else {
      res.send(err);
    }
  });
});

module.exports = router;
