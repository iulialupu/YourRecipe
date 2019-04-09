const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  create_date: {
    type: Date,
    default: Date.now
  },
  update_date: {
    type: Date,
    default: Date.now
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
  },
  comments: []
});

module.exports = Recipe = mongoose.model("recipe", RecipeSchema);
