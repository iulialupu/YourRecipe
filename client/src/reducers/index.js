import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import errorReducer from "./errorReducer";
import authReducer from "./authReducer";
import recipeReducer from "./recipeReducer";

export default combineReducers({
  recipes: recipeReducer,
  form: formReducer,
  error: errorReducer,
  auth: authReducer
});
