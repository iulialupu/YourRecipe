import recipes from "../apis/recipes";
import {
  CREATE_RECIPE,
  FETCH_RECIPE,
  EDIT_RECIPE,
  DELETE_RECIPE,
  FETCH_RECIPES
} from "./types";
import axios from "axios";

export const fetchRecipes = () => async dispatch => {
  recipes
    .get("/api/recipes")
    .then(response =>
      dispatch({ type: FETCH_RECIPES, payload: response.data })
    );
};

export const fetchRecipe = id => async dispatch => {
  const response = await recipes.get(`/api/recipe/${id}`);

  dispatch({ type: FETCH_RECIPE, payload: response.data });
};

export const createRecipe = formValues => async dispatch => {
  const response = await recipes.post("/recipess", { ...formValues });

  dispatch({ type: "CREATE_RECIPE", payload: response.data });
};
