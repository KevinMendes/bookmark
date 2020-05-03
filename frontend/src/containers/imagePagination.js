import { connect } from 'react-redux';

import ImagePagination from '../component/pagination/imagePagination';

// == Data / state
const mapStateToProps = (state) => ({
  images: state.lists.image,
});

// == Actions / dispatch
const mapDispatchToProps = {};


// création du lien : container
// connect(redux)(react) - connect(ce dont on a besoin)(qui en a besoin)
const ImagePaginationContainer = connect(mapStateToProps, mapDispatchToProps)(ImagePagination);

export default ImagePaginationContainer;
