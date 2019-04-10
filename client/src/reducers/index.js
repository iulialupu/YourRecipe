import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import recipeReducer from "./recipeReducer";

export default combineReducers({
  recipes: recipeReducer,
  form: formReducer
});
