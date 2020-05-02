import { connect } from 'react-redux';

import Lists from '../component/lists/lists';
import { loadVideos, loadImages } from '../actions/lists';

// == Data / state
const mapStateToProps = (state) => ({
  loading: state.lists.loading,
  userId: state.auth.userId,
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
const ListsContainer = connect(mapStateToProps, mapDispatchToProps)(Lists);

export default ListsContainer;
