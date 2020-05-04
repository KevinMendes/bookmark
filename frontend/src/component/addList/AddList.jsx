import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Field from './field/index';


const AddList = ({
  media, newTag, changeField, handleAddVideo, handleAddImage, addTag,
}) => {
  const handleSubmit = () => {
    if (media.length > 0 && newTag.length > 0) {
      if (media.indexOf('flickr') !== -1) {
        handleAddImage();
      } else if (media.indexOf('vimeo') !== -1) {
        handleAddVideo();
      } else {
        const form = document.querySelector('h1.h1mark');
        const alertMessage = document.createElement('p');
        alertMessage.id = 'alertMessage';
        alertMessage.innerText = "Votre lien n'est pas un lien flickr ou viameo";
        if (document.getElementById('alertMessage')) {
          document.getElementById('alertMessage').remove();
        }
        form.appendChild(alertMessage);
      }
      addTag();
    } else {
      const form = document.querySelector('h1.h1mark');
      const alertMessage = document.createElement('p');
      alertMessage.id = 'alertMessage';
      alertMessage.innerText = 'Veuillez ajouter un lien et ajouter un tag';
      if (document.getElementById('alertMessage')) {
        document.getElementById('alertMessage').remove();
      }
      form.appendChild(alertMessage);
    }
  };

  return (
    <div className="addList-form">
      <h1 className="h1mark"> Ajouter un lien et un tag </h1>
      <form
        autoComplete="off"
        className="addList-form-element"
        onSubmit={handleSubmit}
      >
        <Field
          name="media"
          placeholder="Lien du média"
          type="text"
          onChange={changeField}
          value={media}
        />
        <Field
          name="newTag"
          type="text"
          placeholder="Ajouter un tag, séparer par une ',' pour en ajouter plusieurs"
          onChange={changeField}
          value={newTag}
        />
        <Link to="/" onClick={handleSubmit}>
          <button type="submit" className="login-form-button">
            OK
          </button>
        </Link>
      </form>
    </div>
  );
};

AddList.propTypes = {
  newTag: PropTypes.string.isRequired,
  media: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleAddVideo: PropTypes.func.isRequired,
  handleAddImage: PropTypes.func.isRequired,
  addTag: PropTypes.func.isRequired,
};

export default AddList;
