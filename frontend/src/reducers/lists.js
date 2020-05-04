// Action Types
import {
  ADD_IMAGE,
  ADD_VIDEO,
  CHANGE_FIELD,
  SET_VIDEOS,
  SET_IMAGES,
  DELETE_IMAGE,
  DELETE_VIDEO,
  SET_OLD_MEDIA,
  MODIF_VIDEO,
  MODIF_IMAGE,
  ADD_TAG,
  SET_TAG,
} from '../actions/lists';

// Initial State
// state.recipes....
const initialState = {
  media: '',
  tag: '',
  newTag: '',
  image: [],
  video: [],
  oldMedia: '',
};

// Reducer
const listsReducer = (state = initialState, action = {}) => {
  console.log(action);
  switch (action.type) {
    case SET_OLD_MEDIA:
      return {
        ...state,
        oldMedia: action.posts,
      };
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
    case SET_TAG:
      return {
        ...state,
        tag: action.tag,
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
    case ADD_TAG:
      return {
        ...state,
        newTag: action.newTag,
      };
    case MODIF_VIDEO:
      return {
        ...state,
        video: action.video,
      };
    case MODIF_IMAGE:
      return {
        ...state,
        image: action.image,
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
