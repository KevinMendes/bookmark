import { connect } from 'react-redux';

import AddList from '../component/addList/AddList';

import { addImage, addVideo, changeField, addTag } from '../actions/lists';

// == Data / state
const mapStateToProps = (state) => ({
  newTag: state.lists.newTag,
  media: state.lists.media,
  userId: state.auth.userId,
  tag: [],
});

// == Actions / dispatch
const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    dispatch(changeField(value, name));
  },
  handleAddImage: () => {
    dispatch(addImage());
  },
  handleAddVideo: () => {
    dispatch(addVideo());
  },
  addTag: () => {
    dispatch(addTag());
  },
});

// création du lien : container
// connect(redux)(react) - connect(ce dont on a besoin)(qui en a besoin)
const ListsContainer = connect(mapStateToProps, mapDispatchToProps)(AddList);

export default ListsContainer;
