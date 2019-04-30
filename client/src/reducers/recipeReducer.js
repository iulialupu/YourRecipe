import _ from "lodash";

import {
  CREATE_RECIPE,
  FETCH_RECIPE,
  UPDATE_RECIPE,
  DELETE_RECIPE,
  FETCH_RECIPES,
  RATE_RECIPE
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case UPDATE_RECIPE:
    case RATE_RECIPE:
      return { ...state, [action.payload._id]: action.payload };
    case FETCH_RECIPE:
      return { ...state, [action.payload._id]: action.payload };
    case CREATE_RECIPE:
      return { ...state, [action.payload._id]: action.payload };
    case DELETE_RECIPE:
      return _.omit(state, action.payload);
    case FETCH_RECIPES:
      return { ...state, ..._.mapKeys(action.payload, "_id") };
    default:
      return state;
  }
};
