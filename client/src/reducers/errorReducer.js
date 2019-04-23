import { GET_ERRORS, CLEAR_ERRORS } from "../actions/types";

export default (state = { msg: {} }, action) => {
  switch (action.type) {
    case GET_ERRORS:
      return { ...state, msg: { ...action.payload } };
    case CLEAR_ERRORS:
      return { ...state, msg: {} };
    default:
      return state;
  }
};
