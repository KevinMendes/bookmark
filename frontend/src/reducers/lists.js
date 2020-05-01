// Action Types
import { ADD_IMAGE, ADD_VIDEO, CHANGE_FIELD } from '../actions/lists';

// Initial State
// state.recipes....
const initialState = {
  media: '',
  tag: '12',
  newTag: '',
  image: '',
  video: '',
};

// Reducer
const listsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD:
      return {
        ...state,
        [action.name]: action.value,
      };
    case ADD_IMAGE:
      return {
        ...state,
        image: action.image,
      };
    case ADD_VIDEO:
      return {
        ...state,
        video: action.video,
      };
    default:
      return state;
  }
};

export default listsReducer;
