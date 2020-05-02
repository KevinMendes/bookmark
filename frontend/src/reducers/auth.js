import { CHANGE_FIELD, SET_USER } from '../actions/auth';

// Action Types

// Initial State
// state.auth....
const initialState = {
  email: '',
  password: '',
  verifPassword: '',
  logged: false,
  loadgin: true,
  surname: '',
  userId: '',
  token: localStorage.getItem('token') ? localStorage.getItem('token') : '',
};

// Reducer
const authReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD:
      return {
        ...state,
        [action.name]: action.value,
      };
    case SET_USER:
      return {
        ...state,
        user: action.user,
        email: action.email,
        userId: action.userId,
        surname: action.surname,
        logged: action.logged,
        loading: false,
      };
    default:
      return state;
  }
};

export default authReducer;
