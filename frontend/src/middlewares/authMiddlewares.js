/* eslint-disable no-console */
import axios from 'axios';
import jwt from 'jwt-decode';
import { loadLists } from '../actions/lists';
import {
  LOGIN,
  LOGOUT,
  setAuthUser,
  handleGetUser,
  GET_USER,
} from '../actions/auth';

// Fonction utilisée par les différents catch pour la gestion de l'erreur
const handleError = (error) => {
  console.log('Une erreur s\'est produite', error);
};

// Middleware
const ajaxMiddleware = (store) => (next) => (action) => {
  // Fonction utilisée pour sauvegarder l'utilisateur dans le store via le then
  const saveUser = (response) => {
    console.log(response.data);
    console.log(response);
    let logged = '';
    store.dispatch(setAuthUser(
      logged = true,
      response.data.email,
      response.data.surname,
    ));
  };
  let token = localStorage.getItem('token');
  // En fonction de l'action, je réagis
  switch (action.type) {
    case LOGIN: {
      const state = store.getState();

      axios({
        method: 'post',
        url: 'http://localhost:8000/user/login',
        withCredentials: true,
        data: {
          email: state.auth.email,
          password: state.auth.password,
        },
      })
        .then((response) => {
          token = response.data.token;
          const decryptToken = jwt(token);
          localStorage.setItem('token', token);
          store.dispatch(handleGetUser(decryptToken.userId));
        })
        .catch(handleError);
      break;
    }
    case GET_USER: {
      axios({
        method: 'get',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        url: 'http://165.22.18.208:8001/user/account',
        withCredentials: true,
      })
        .then(saveUser, store.dispatch(loadLists()))
        .catch((err) => {
          console.log(err);
          window.location.assign('/');
          localStorage.removeItem('token');
        });
      break;
    }
    case LOGOUT: {
      axios({
        method: 'post',
        url: 'http://localhost:3001/logout',
        withCredentials: true,
      })
        .then(saveUser)
        .catch(handleError);
      break;
    }
    default:
      break;
  }

  next(action);
};

export default ajaxMiddleware;
