// Types
export const CHANGE_FIELD = 'CHANGE_FIELD';
export const ADD_VIDEO = 'ADD_VIDEO';
export const LOAD_VIDEOS = 'LOAD_VIDEOS';
export const ADD_IMAGE = 'ADD_IMAGE';
export const LOAD_IMAGES = 'LOAD_IMAGES';
export const SET_IMAGES = 'SET_IMAGES';
export const SET_VIDEOS = 'SET_VIDEOS';
export const DELETE_VIDEO = 'DELETE_VIDEO';
export const DELETE_IMAGE = 'DELETE_IMAGE';
export const SET_OLD_MEDIA = 'SET_OLD_MEDIA';
export const MODIF_IMAGE = 'MODIF_IMAGE';
export const MODIF_VIDEO = 'MODIF_VIDEO';

// Creators
export const setOldMedia = (posts) => ({
  type: SET_OLD_MEDIA,
  posts,
});

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

export const modifImage = () => ({
  type: MODIF_IMAGE,
});

export const modifVideo = () => ({
  type: MODIF_VIDEO,
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

export const deleteVideo = (id) => ({
  type: DELETE_VIDEO,
  id,
});

export const deleteImage = (id) => ({
  type: DELETE_IMAGE,
  id,
});
