// Types
export const CHANGE_FIELD = 'CHANGE_FIELD';
export const ADD_VIDEO = 'ADD_VIDEO';
export const LOAD_VIDEOS = 'LOAD_VIDEOS';
export const ADD_IMAGE = 'ADD_IMAGE';
export const LOAD_IMAGES = 'LOAD_IMAGES';
export const SET_IMAGES = 'SET_IMAGES';
export const SET_VIDEOS = 'SET_VIDEOS';

// Creators
export const setVideos = (videos) => ({
  type: SET_VIDEOS,
  videos,
});

export const setImages = (images) => ({
  type: SET_IMAGES,
  images,
});

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

