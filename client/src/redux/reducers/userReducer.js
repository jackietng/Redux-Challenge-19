import { LOGIN_USER, LOGOUT_USER, UPDATE_USER } from '../actions/userActions';

const initialState = {
  isAuthenticated: false,
  user: null, // Contains user details such as name, email, etc.
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case LOGOUT_USER:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    case UPDATE_USER:
      return {
        ...state,
        user: { ...state.user, ...action.payload },
      };
    default:
      return state;
  }
};
