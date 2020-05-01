import { connect } from 'react-redux';

import LoginForm from '../component/loginform/LoginForm';

import { login, changeField } from '../actions/auth';

// == Data / state
const mapStateToProps = (state) => ({
  email: state.auth.email,
  password: state.auth.password,
  logged: state.auth.logged,
});

// == Actions / dispatch
const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    dispatch(changeField(value, name));
  },
  handleLogin: () => {
    dispatch(login());
  },
});

// création du lien : container
const LoginFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginForm);

export default LoginFormContainer;
