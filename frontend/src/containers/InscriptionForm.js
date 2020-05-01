import { connect } from 'react-redux';

import InscriptionForm from '../component/inscriptionForm/InscriptionForm';

import { createAccount, changeField } from '../actions/auth';

// == Data / state
const mapStateToProps = (state) => ({
  email: state.auth.email,
  surname: state.auth.surname,
  password: state.auth.password,
  verifPassword: state.auth.verifPassword,
});

// == Actions / dispatch
const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    dispatch(changeField(value, name));
  },
  handleInscription: () => {
    dispatch(createAccount());
  },
});

// création du lien : container
const InscriptionFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(InscriptionForm);

export default InscriptionFormContainer;
