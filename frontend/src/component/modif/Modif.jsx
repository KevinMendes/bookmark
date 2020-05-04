/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import PropTypes from 'prop-types';
import Field from './field/index';

const Modif = (
  {
    changeField,
    media,
    modifVideo,
    modifImage,
    oldMedia,
  },
) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (media.indexOf('flickr') !== -1) {
      modifImage();
    } else if (media.indexOf('vimeo') !== -1) {
      modifVideo();
    } else {
      const form = document.querySelector('p.alter');
      const alertMessage = document.createElement('p');
      alertMessage.id = 'alertMessage';
      alertMessage.innerText = "Votre lien n'est pas valide";
      if (document.getElementById('alertMessage')) {
        document.getElementById('alertMessage').remove();
      }
      form.append(alertMessage);
    }
  };
  return (
    <div>
      <p>{oldMedia.titre}</p>

      <p className="alter"> Insérer un nouveau lien pour modifier l'entrée :</p>
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
        <button type="submit" className="login-form-button">
          OK
        </button>
      </form>
    </div>
  );
};

Modif.propTypes = {
  changeField: PropTypes.func.isRequired,
  modifVideo: PropTypes.func.isRequired,
  oldMedia: PropTypes.objectOf(PropTypes.number, PropTypes.string).isRequired,
  media: PropTypes.string.isRequired,
  modifImage: PropTypes.func.isRequired,
};
export default Modif;
