import { connect } from 'react-redux';

import LoginForm from '../component/loginform/LoginForm';

import { login, logout, changeField } from '../actions/auth';

// == Data / state
const mapStateToProps = (state) => ({
  email: state.auth.email,
  password: state.auth.password,
  isLogged: state.auth.isLogged,
});

// == Actions / dispatch
const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    dispatch(changeField(value, name));
  },
  handleLogin: () => {
    dispatch(login());
  },
  handleLogout: () => {
    dispatch(logout());
  },
});

// création du lien : container
// connect(redux)(react) - connect(ce dont on a besoin)(qui en a besoin)
const LoginFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginForm);

export default LoginFormContainer;
