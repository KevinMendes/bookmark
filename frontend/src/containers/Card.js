import { connect } from 'react-redux';
import { deleteImage, deleteVideo } from '../actions/lists';
import Card from '../component/Card/Card';

// == Data / state
const mapStateToProps = (state) => ({
  video: state.lists.video,
});

// == Actions / dispatch
const mapDispatchToProps = (dispatch) => ({
  deleteVideo: (id) => {
    dispatch(deleteVideo(id));
  },
  deleteImage: (id) => {
    dispatch(deleteImage(id));
  },
});


// création du lien : container
// connect(redux)(react) - connect(ce dont on a besoin)(qui en a besoin)
const CardContainer = connect(mapStateToProps, mapDispatchToProps)(Card);

export default CardContainer;
