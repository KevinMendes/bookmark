/* eslint-disable no-console */
import axios from 'axios';
import jwt from 'jwt-decode';
import {
  LOGIN,
  LOGOUT,
  CHECK_LOGGED,
  setAuthUser,
  handleGetUser,
  GET_USER,
  login,
  CREATE_ACCOUNT,
} from '../actions/auth';

// Fonction utilisée par les différents catch pour la gestion de l'erreur
const handleError = (error) => {
  console.log('Une erreur s\'est produite', error);
};

// Middleware
const authMiddleware = (store) => (next) => (action) => {
  // Fonction utilisée pour sauvegarder l'utilisateur dans le store via le then
  const saveUser = (response) => {
    // eslint-disable-next-line no-unused-vars
    let logged = '';
    store.dispatch(setAuthUser(
      logged = true,
      response.data.email,
      response.data.surname,
      response.data.userId,
    ));
  };
  const state = store.getState();
  let token = localStorage.getItem('token');
  // En fonction de l'action, je réagis
  switch (action.type) {
    case CHECK_LOGGED: {
      if (state.auth.token) {
        const decryptToken = jwt(token);
        store.dispatch(handleGetUser(decryptToken.userId));
      }
      break;
    }
    case LOGIN: {
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
        url: 'http://localhost:8000/user/account/',
        withCredentials: true,
      })
        .then(saveUser)
        .catch((err) => {
          console.log(err);
          // window.location.assign('/');
          // localStorage.removeItem('token');
        });
      break;
    }
    case CREATE_ACCOUNT: {
      axios.post('http://localhost:8000/user/createAccount', {
        password: state.auth.password,
        email: state.auth.email,
        surname: state.auth.surname,
      })
        .then((response) => {
          console.log(response);
          // store.dispatch(saveUser(response.data));
          store.dispatch(login());
        })
        .catch((err) => {
          console.log(err);
        });

      next(action);
      break;
    }

    case LOGOUT: {
      axios({
        method: 'post',
        url: 'http://localhost:3000/logout',
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

export default authMiddleware;
