/* eslint-disable no-console */
import axios from 'axios';
import {
  loadVideos, loadImages, ADD_VIDEO, ADD_IMAGE,
} from '../actions/lists';

// Fonction utilisée par les différents catch pour la gestion de l'erreur
const handleError = (error) => {
  console.log("Une erreur s'est produite", error);
};

// Middleware
const listMiddleware = (store) => (next) => (action) => {
  // Fonction utilisée pour sauvegarder l'utilisateur dans le store via le then
  const state = store.getState();
  // En fonction de l'action, je réagis
  switch (action.type) {
    case ADD_IMAGE: {
      console.log('entré middleware');
      const lien = state.lists.media;
      axios.get(`https://flickr.com/services/oembed/?format=json&url=${lien}`,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
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
    default:
      break;
  }
  next(action);
};

export default listMiddleware;
