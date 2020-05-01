// Types
export const CHANGE_FIELD = 'CHANGE_FIELD';
export const ADD_VIDEO = 'ADD_VIDEO';
export const LOAD_VIDEOS = 'LOAD_VIDEOS';
export const ADD_IMAGE = 'ADD_IMAGE';
export const LOAD_IMAGES = 'LOAD_IMAGES';

// Creators
export const changeField = (value, name) => ({
  type: CHANGE_FIELD,
  value,
  name,
});

export const addVideo = () => ({
  type: ADD_VIDEO,
});

export const loadVideos = () => ({
  type: LOAD_VIDEOS,
});

export const addImage = () => ({
  type: ADD_IMAGE,
});

export const loadImages = () => ({
  type: LOAD_IMAGES,
});

