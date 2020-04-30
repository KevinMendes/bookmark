// Action Types
import { SAVE_LISTS } from '../actions/lists';

// Initial State
// state.recipes....
const initialState = {
  loading: true,
  list: [],
};

// Reducer
const listsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_LISTS:
      return {
        ...state,
        list: action.lists,
        loading: false,
      };
    default:
      return state;
  }
};

export default listsReducer;
