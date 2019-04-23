import {
  LOGIN_FAIL,
  REGISTER_FAIL,
  LOGOUT_USER,
  AUTH_SUCCESS,
  AUTH_FAIL
} from "../actions/types";

const initialState = {
  isAuthenticated: false,
  user: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        user: { ...action.payload },
        isAuthenticated: true
      };
    case LOGIN_FAIL:
    case REGISTER_FAIL:
    case AUTH_FAIL:
    case LOGOUT_USER:
      return {
        ...state,
        user: null,
        isAuthenticated: false
      };
    default:
      return state;
  }
}
