import jwt_decode from "jwt-decode";
import axios from "axios";

import {
  LOGIN_FAIL,
  REGISTER_FAIL,
  AUTH_SUCCESS,
  AUTH_FAIL,
  LOGOUT_USER
} from "../actions/types";
import { getErrors, clearErrors } from "./errorActions";
import setTokenHeader from "./utils/setTokenHeader";

// * set the current user
export const setCurrentUser = () => {
  const token = localStorage.getItem("token");
  if (token) {
    // Set token to Auth header
    // setTokenHeader(token); //
    // Decode token to get user data
    const decoded = jwt_decode(token);
    // Add current user to state
    return {
      type: AUTH_SUCCESS,
      payload: decoded
    };
  }
  return {
    type: AUTH_FAIL
  };
};

// GET USER INFO IF AUTHENTICATED
export const getUser = () => dispatch => {
  dispatch(setCurrentUser());
};

// REGISTER USER
export const register = ({ name, email, password }) => dispatch => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  // Request body
  const body = JSON.stringify({ name, email, password });

  axios
    .post("/api/users/register", body, config)
    .then(res => {
      const { token } = res.data;
      // Add the token to local storage
      localStorage.setItem("token", token);
      // Remove any existing errors
      dispatch(clearErrors());
      // Add the user obj to state
      dispatch(setCurrentUser());
    })
    .catch(err => {
      dispatch(getErrors(err.response.data));
      dispatch({
        type: REGISTER_FAIL
      });
    });
};

// LOGIN USER
export const login = ({ email, password }) => dispatch => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  // Request body
  const body = JSON.stringify({ email, password });

  axios
    .post("/api/users/login", body, config)
    .then(res => {
      const { token } = res.data;
      // Add the token to local storage
      localStorage.setItem("token", token);
      // Remove any existing errors
      dispatch(clearErrors());
      // Add the user obj to state
      dispatch(setCurrentUser());
    })
    .catch(err => {
      dispatch(getErrors(err.response.data));
      dispatch({
        type: LOGIN_FAIL
      });
    });
};

// LOGOUT USER
export const logout = () => {
  // Remove token from local storage
  localStorage.removeItem("token");
  // Remove auth header for future requests
  setTokenHeader(false);
  // Set current user to null
  return {
    type: LOGOUT_USER
  };
};

// * Setup config/headers and token
export const tokenConfig = () => {
  // Get token from localstorage
  const token = localStorage.getItem("token");
  // Headers
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };
  // If token, add to headers
  if (token) {
    config.headers["x-auth-token"] = token;
  }
  return config;
};
