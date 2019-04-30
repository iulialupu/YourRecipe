import axios from "axios";
import history from "../history";
import {
  CREATE_RECIPE,
  FETCH_RECIPE,
  UPDATE_RECIPE,
  DELETE_RECIPE,
  FETCH_RECIPES,
  RATE_RECIPE
} from "./types";
import { tokenConfig } from "./authActions";

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

// CREATE | POST
export const createRecipe = (formValues, { id, name }) => dispatch => {
  axios
    .post(
      "/api/recipes",
      {
        ...formValues,
        authorId: id,
        authorName: name,
        create_date: Date.now()
      },
      tokenConfig()
    )
    .then(response => {
      dispatch({ type: CREATE_RECIPE, payload: response.data });
      history.push(`/recipe/${response.data._id}`);
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
  const response = await axios.patch(
    `/api/recipes/${id}`,
    {
      ...formValues,
      update_date: Date.now()
    },
    tokenConfig()
  );

  dispatch({ type: UPDATE_RECIPE, payload: response.data });
  history.push(`/recipe/${id}`);
};

// DELETE
export const deleteRecipe = id => async dispatch => {
  await axios.delete(`/api/recipes/${id}`, tokenConfig());

  dispatch({ type: DELETE_RECIPE, payload: id });
  history.push("/");
};

// RATING A RECIPE | PATCH
export const rateRecipe = (id, rating) => async dispatch => {
  const response = await axios.patch(`/api/recipes/${id}/rating`, rating);

  dispatch({ type: RATE_RECIPE, payload: response.data });
};
