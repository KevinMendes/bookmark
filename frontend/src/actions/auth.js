// Types
export const CHANGE_FIELD = 'CHANGE_FIELD';
export const SET_USER = 'SET_USER';
export const CHECK_LOGGED = 'CHECK_LOGGED';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const GET_USER = 'GET_USER';
// Creators
export const changeField = (value, name) => ({
  type: CHANGE_FIELD,
  value,
  name,
});

export const setAuthUser = (
  logged,
  email,
  surname,
  token,
  id,
) => ({
  type: SET_USER,
  logged,
  email,
  surname,
  token,
  id,
});

export const handleGetUser = (userId) => ({
  type: GET_USER,
  userId,
});

export const checkLogged = () => ({
  type: CHECK_LOGGED,
});

export const login = () => ({
  type: LOGIN,
});

export const logout = () => ({
  type: LOGOUT,
});
