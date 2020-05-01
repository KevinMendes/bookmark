import { connect } from 'react-redux';

import Lists from '../component/lists/lists';

// == Data / state
const mapStateToProps = (state) => ({
  loading: state.lists.loading,
});

// == Actions / dispatch
const mapDispatchToProps = {};

// création du lien : container
// connect(redux)(react) - connect(ce dont on a besoin)(qui en a besoin)
const ListsContainer = connect(mapStateToProps, mapDispatchToProps)(Lists);

export default ListsContainer;
