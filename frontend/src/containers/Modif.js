import { connect } from 'react-redux';

import Modif from '../component/modif/Modif';
import {
  changeField, modifImage, addTag, destroyTag, modifyTag,
} from '../actions/lists';
// == Data / state
const mapStateToProps = (state) => ({
  userId: state.auth.userId,
  media: state.lists.media,
  oldMedia: state.lists.oldMedia,
  newTag: state.lists.newTag,
});

// == Actions / dispatch
const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    dispatch(changeField(value, name));
  },
  modifImage: () => {
    dispatch(modifImage());
  },
  addTag: () => {
    dispatch(addTag());
  },
  destroyTag: (id) => {
    dispatch(destroyTag(id));
  },
  modifyTag: (id) => {
    dispatch(modifyTag(id));
  },
});


// création du lien : container
// connect(redux)(react) - connect(ce dont on a besoin)(qui en a besoin)
const ModifContainer = connect(mapStateToProps, mapDispatchToProps)(Modif);

export default ModifContainer;
