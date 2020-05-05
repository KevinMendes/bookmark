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
  MODIF_IMAGE,
  MODIF_VIDEO,
  ADD_TAG,
  DESTROY_TAG,
  MODIFY_TAG,
} from '../actions/lists';

// Middleware
const listMiddleware = (store) => (next) => (action) => {
  const state = store.getState();
  let id = '';
  // Fonctions utilisées pour sauvegarder les stores dans le store via le then
  const saveVideos = (response) => {
    store.dispatch(setVideos(response.data.result));
  };
  const saveImages = (response) => {
    store.dispatch(setImages(response.data.result));
  };
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
    case MODIF_IMAGE: {
      axios
        .get(
          `http://cors-anywhere.herokuapp.com/https://flickr.com/services/oembed/?format=json&url=${lien}`,
        )
        .then((response) => {
          axios.post('http://localhost:8000/Image/modifImage', {
            mediaId: state.lists.oldMedia.id,
            lien,
            titre: response.data.title,
            auteur: response.data.author_name,
            hauteur: response.data.height,
            largeur: response.data.width,
          });
        })
        .catch((err) => {
          console.log(err);
        });
      next(action);
      break;
    }
    case MODIF_VIDEO: {
      axios
        .get(
          `https://vimeo.com/api/oembed.json?url=${lien}`,
        )
        .then((response) => {
          axios.post('http://localhost:8000/Video/modifVideo', {
            mediaId: state.lists.oldMedia.id,
            lien,
            titre: response.data.title,
            auteur: response.data.author_name,
            hauteur: response.data.height,
            largeur: response.data.width,
            duree: response.data.duration,
          });
        })
        .catch((err) => {
          console.log(err);
        });
      next(action);
      break;
    }
    case MODIFY_TAG: {
      axios.post('http://localhost:8000/Tag/updateTag', {
        newTag: state.lists.newTag,
        tagId: action.id,
      })
        .catch((err) => {
          console.log(err);
        });
      next(action);
      break;
    }
    case ADD_TAG: {
      if (state.lists.oldMedia.lien.indexOf('flickr') !== -1) {
        axios.post('http://localhost:8000/Tag/createTagImage', {
          tag: state.lists.newTag,
          mediaId: state.lists.oldMedia.id,
        });
        window.location.replace('/');
      } else {
        axios.post('http://localhost:8000/Tag/createTagVideo', {
          tag: state.lists.newTag,
          mediaId: state.lists.oldMedia.id,
        });
        window.location.replace('/');
        loadImages();
        loadVideos();
      }
      break;
    }
    case ADD_IMAGE: {
      axios.post('http://localhost:8000/Tag/createTag', {
        tag: state.lists.newTag,
      })
        .then((response) => {
          id = response.data.result.id;
          console.log(id);
        }).then(() => {
          console.log(id);
          axios
            .get(`http://cors-anywhere.herokuapp.com/https://flickr.com/services/oembed/?format=json&url=${lien}`).then((response) => {
              axios.post('http://localhost:8000/Image/createImage', {
                lien,
                titre: response.data.title,
                auteur: response.data.author_name,
                hauteur: response.data.height,
                largeur: response.data.width,
                userId: state.auth.userId,
                tagId: id,
              });
            });
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
    case DESTROY_TAG: {
      axios
        .post('http://localhost:8000/Tag/destroyTag', {
          tagId: action.id,
        })
        .then(() => {
          store.dispatch(loadVideos());
          store.dispatch(loadImages());
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
        .post('http://localhost:8000/Image/destroyImage', {
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
