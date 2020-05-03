import { connect } from 'react-redux';

import VideoPagination from '../component/pagination/videoPagination';

// == Data / state
const mapStateToProps = (state) => ({
  videos: state.lists.video,
});

// == Actions / dispatch
const mapDispatchToProps = {};


// création du lien : container
// connect(redux)(react) - connect(ce dont on a besoin)(qui en a besoin)
const VideoPaginationContainer = connect(mapStateToProps, mapDispatchToProps)(VideoPagination);

export default VideoPaginationContainer;
