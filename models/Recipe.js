const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  authorId: {
    type: String,
    required: true
  },
  authorName: {
    type: String,
    required: true
  },
  create_date: {
    type: Date
  },
  update_date: {
    type: Date
  },
  rating: [Number],
  image: {
    type: Array,
    required: false
  },
  ingredients: {
    type: Array,
    required: true
  },
  instructions: {
    type: Array,
    required: true
  }
});

module.exports = Recipe = mongoose.model("recipe", RecipeSchema);
