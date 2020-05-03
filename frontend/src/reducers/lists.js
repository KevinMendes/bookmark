// Action Types
import {
  ADD_IMAGE,
  ADD_VIDEO,
  CHANGE_FIELD,
  SET_VIDEOS,
  SET_IMAGES,
  DELETE_IMAGE,
  DELETE_VIDEO,
} from '../actions/lists';

// Initial State
// state.recipes....
const initialState = {
  media: '',
  tag: '12',
  newTag: '',
  image: [],
  video: [],
};

// Reducer
const listsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD:
      return {
        ...state,
        [action.name]: action.value,
      };
    case SET_VIDEOS:
      return {
        ...state,
        video: action.videos,
      };
    case SET_IMAGES:
      return {
        ...state,
        image: action.images,
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
    case DELETE_VIDEO:
      return {
        ...state,
        id: action.id,
      };
    case DELETE_IMAGE:
      return {
        ...state,
        id: action.id,
      };
    default:
      return state;
  }
};

export default listsReducer;
