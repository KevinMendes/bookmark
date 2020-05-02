/* eslint-disable no-console */
import axios from 'axios';
import {
  LOAD_IMAGES, LOAD_VIDEOS, ADD_VIDEO, ADD_IMAGE,
} from '../actions/lists';

// Middleware
const listMiddleware = (store) => (next) => (action) => {
  // Fonction utilisée pour sauvegarder l'utilisateur dans le store via le then
  const state = store.getState();
  const lien = state.lists.media;
  // En fonction de l'action, je réagis
  switch (action.type) {
    case LOAD_IMAGES: {
      axios.post('http://localhost:8000/Image/allImage', {
        userId: state.auth.userId,
      })
        .then((response) => {
          console.log(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
      break;
    }
    case LOAD_VIDEOS: {
      axios.post('http://localhost:8000/Video/allVideo', {
        userId: state.auth.userId,
      })
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
      break;
    }
    case ADD_IMAGE: {
      axios.get(`http://cors-anywhere.herokuapp.com/https://flickr.com/services/oembed/?format=json&url=${lien}`)
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
      axios.get(`https://vimeo.com/api/oembed.json?url=${lien}`)
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
    default:
      break;
  }
  next(action);
};

export default listMiddleware;
