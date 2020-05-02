import { connect } from 'react-redux';

import App from '../App';
import { loadVideos, loadImages } from '../actions/lists';
// == Data / state
const mapStateToProps = (state) => ({
  loading: state.auth.loading,
  logged: state.auth.logged,
});

// == Actions / dispatch
const mapDispatchToProps = (dispatch) => ({
  handleLoadVideos: () => {
    dispatch(loadVideos());
  },
  handleLoadImages: () => {
    dispatch(loadImages());
  },
});

// création du lien : container
// connect(redux)(react) - connect(ce dont on a besoin)(qui en a besoin)
const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
