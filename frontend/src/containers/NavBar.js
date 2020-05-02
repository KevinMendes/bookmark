import { connect } from 'react-redux';

import NavBar from '../component/navbar/navbar';
import { logout } from '../actions/auth';
// == Data / state

// == Actions / dispatch
const mapDispatchToProps = (dispatch) => ({
  handleLogout: () => {
    dispatch(logout());
  },
});

// création du lien : container
// connect(redux)(react) - connect(ce dont on a besoin)(qui en a besoin)
const NavBarContainer = connect(null, mapDispatchToProps)(NavBar);

export default NavBarContainer;
