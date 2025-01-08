export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const UPDATE_USER = 'UPDATE_USER';

export const loginUser = (userData) => ({
  type: LOGIN_USER,
  payload: userData,
});

export const logoutUser = () => ({
  type: LOGOUT_USER,
});

export const updateUser = (userData) => ({
  type: UPDATE_USER,
  payload: userData,
});
