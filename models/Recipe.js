const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema({
  name: {
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
  //   ingredients: {
  //     type: Array,
  //     required: true
  //   },
  //   steps: {
  //     type: Array,
  //     required: true
  //   },
  comments: []
});

module.exports = Recipe = mongoose.model("recipe", RecipeSchema);
