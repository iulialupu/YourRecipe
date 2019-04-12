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
  axios
    .get("/api/recipes")
    .then(response =>
      dispatch({ type: FETCH_RECIPES, payload: response.data })
    );
};

export const fetchRecipe = id => async dispatch => {
  const response = await axios.get(`/api/recipe/${id}`);

  dispatch({ type: FETCH_RECIPE, payload: response.data });
};

export const createRecipe = formValues => dispatch => {
  console.log("FORM VALUES FROM ACTION", formValues);
  axios
    .post("/api/recipes", {
      ...formValues
    })
    .then(response => {
      console.log(response);
      dispatch({ type: "CREATE_RECIPE", payload: response.data });
    })
    .catch(function(error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
      }
      console.log(error.config);
    });
};
