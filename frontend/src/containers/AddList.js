import { connect } from 'react-redux';

import AddList from '../component/addList/AddList';

import { addImage, addVideo, changeField } from '../actions/lists';

// == Data / state
const mapStateToProps = (state) => ({
  newTag: state.lists.newTag,
  media: state.lists.media,
  tag: state.lists.tag,
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
});

// création du lien : container
// connect(redux)(react) - connect(ce dont on a besoin)(qui en a besoin)
const ListsContainer = connect(mapStateToProps, mapDispatchToProps)(AddList);

export default ListsContainer;
