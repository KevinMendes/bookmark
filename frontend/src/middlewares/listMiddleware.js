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
  const lien = state.lists.media;
  // En fonction de l'action, je réagis
  switch (action.type) {
    case ADD_IMAGE: {
      console.log('entré middleware');
      axios.get(`http://cors-anywhere.herokuapp.com/https://flickr.com/services/oembed/?format=json&url=${lien}`,
        {
          headers: {
            'Content-Type': 'application/octet-stream',
            'Access-Control-Allow-Origin': false,
          },
        })
        .then((response) => {
          console.log('here');
          console.log(response);
          axios.post('http://localhost:8000/Image/createImage', {
            lien: lien,
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
      axios.get(`http://cors-anywhere.herokuapp.com/https://flickr.com/services/oembed/?format=json&url=${lien}`,
        {
          headers: {
            'Content-Type': 'application/octet-stream',
            'Access-Control-Allow-Origin': false,
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
