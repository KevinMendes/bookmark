import { CHANGE_FIELD, SET_USER } from '../actions/auth';

// Action Types

// Initial State
// state.auth....
const initialState = {
  email: '',
  password: '',
  isLogged: false,
  surname: '',
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
        isLogged: action.logged,
      };
    default:
      return state;
  }
};

export default authReducer;
