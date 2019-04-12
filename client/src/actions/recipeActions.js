import recipes from "../apis/recipes";
import axios from "axios";
import history from "../history";
import {
  CREATE_RECIPE,
  FETCH_RECIPE,
  UPDATE_RECIPE,
  DELETE_RECIPE,
  FETCH_RECIPES
} from "./types";

// GET ALL
export const fetchRecipes = () => async dispatch => {
  axios
    .get("/api/recipes")
    .then(response =>
      dispatch({ type: FETCH_RECIPES, payload: response.data })
    );
};

// GET ONE
export const fetchRecipe = id => async dispatch => {
  const response = await axios.get(`/api/recipes/${id}`);

  dispatch({ type: FETCH_RECIPE, payload: response.data });
};

// CREATE | PUT
export const createRecipe = formValues => dispatch => {
  console.log("FORM VALUES FROM ACTION", formValues);
  axios
    .post("/api/recipes", {
      ...formValues
    })
    .then(response => {
      console.log(response);
      dispatch({ type: CREATE_RECIPE, payload: response.data });
      history.push(`/api/recipes/${response.data._id}`);
    })
    .catch(function(error) {
      if (error.response) {
        console.log(error.response);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
      console.log(error.config);
    });
};

// UPDATE | PATCH
export const updateRecipe = (id, formValues) => async dispatch => {
  const response = await axios.patch(`recipes/${id}`, formValues);

  dispatch({ type: UPDATE_RECIPE, payload: response.data });
  history.push(`/api/recipes/${id}`);
};

// DELETE
export const deleteRecipe = id => async dispatch => {
  await axios.delete(`/api/recipes/${id}`);

  dispatch({ type: DELETE_RECIPE, payload: id });
  history.push("/");
};
