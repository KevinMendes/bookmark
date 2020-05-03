/* eslint-disable no-console */
import axios from 'axios';
import {
  LOAD_IMAGES,
  LOAD_VIDEOS,
  ADD_VIDEO,
  ADD_IMAGE,
  setImages,
  setVideos,
  DELETE_VIDEO,
  DELETE_IMAGE,
  loadVideos,
  loadImages,
} from '../actions/lists';

// Middleware
const listMiddleware = (store) => (next) => (action) => {
  // Fonctions utilisées pour sauvegarder les stores dans le store via le then
  const saveVideos = (response) => {
    store.dispatch(setVideos(response.data.result));
  };
  const saveImages = (response) => {
    store.dispatch(setImages(response.data.result));
  };
  const state = store.getState();
  const lien = state.lists.media;
  // En fonction de l'action, je réagis
  switch (action.type) {
    case LOAD_IMAGES: {
      axios
        .post('http://localhost:8000/Image/allImage', {
          userId: state.auth.userId,
        })
        .then(saveImages)
        .catch((err) => {
          console.log(err);
        });
      break;
    }
    case LOAD_VIDEOS: {
      axios
        .post('http://localhost:8000/Video/allVideo', {
          userId: state.auth.userId,
        })
        .then(saveVideos)
        .catch((err) => {
          console.log(err);
        });
      break;
    }
    case ADD_IMAGE: {
      axios
        .get(
          `http://cors-anywhere.herokuapp.com/https://flickr.com/services/oembed/?format=json&url=${lien}`,
        )
        .then((response) => {
          console.log('here');
          console.log(response);
          axios.post('http://localhost:8000/Image/createImage', {
            lien,
            titre: response.data.title,
            auteur: response.data.author_name,
            hauteur: response.data.height,
            largeur: response.data.width,
            userId: state.auth.userId,
            tagId: state.lists.tag,
          });
        })
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });

      next(action);
      break;
    }
    case ADD_VIDEO: {
      console.log('entré middleware');
      axios
        .get(`https://vimeo.com/api/oembed.json?url=${lien}`)
        .then((response) => {
          console.log(response);
          axios.post('http://localhost:8000/Video/createVideo', {
            lien,
            titre: response.data.title,
            auteur: response.data.author_name,
            hauteur: response.data.height,
            largeur: response.data.width,
            duree: response.data.duration,
            userId: state.auth.userId,
            tagId: state.lists.tag,
          });
        })
        .catch((err) => {
          console.log(err);
        });

      next(action);
      break;
    }
    case DELETE_VIDEO: {
      axios
        .post('http://localhost:8000/video/destroyVideo', {
          id: action.id,
        })
        .then(() => {
          store.dispatch(loadVideos());
        })
        .catch((err) => {
          console.log(err);
        });

      next(action);
      break;
    }
    case DELETE_IMAGE: {
      axios
        .post('http://localhost:8000/image/destroyVideo', {
          id: action.id,
        })
        .then(() => {
          store.dispatch(loadImages());
        })
        .catch((err) => {
          console.log(err);
        });

      next(action);
      break;
    }
    default:
      break;
  }
  next(action);
};

export default listMiddleware;
