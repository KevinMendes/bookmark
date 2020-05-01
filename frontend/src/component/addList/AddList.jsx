import React from 'react';
import PropTypes from 'prop-types';
import Field from './field/index';

const AddList = ({
  media, newTag, changeField, handleAddVideo, handleAddImage,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (media.indexOf('flickr') !== -1) {
      handleAddImage();
    } else if (media.indexOf('viameo') !== -1) {
      handleAddVideo();
    } else {
      const form = document.querySelector('form.addList-form-element');
      const alertMessage = document.createElement('p');
      alertMessage.id = 'alertMessage';
      alertMessage.innerText = "Votre lien n'est pas valide";
      if (document.getElementById('alertMessage')) {
        document.getElementById('alertMessage').remove();
      }
      form.appendChild(alertMessage);
    }
  };

  return (
    <div className="addList-form">
      <h1> Ajouter un lien et un tag </h1>
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
          name="tag"
          type="text"
          placeholder="Ajouter un tag"
          onChange={changeField}
          value={newTag}
        />
        <button type="submit" className="login-form-button">
          OK
        </button>
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
};

export default AddList;
