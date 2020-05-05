/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import Field from './field/index';
import './modif.css';

const Modif = ({
  changeField,
  media,
  modifVideo,
  modifImage,
  oldMedia,
  newTag,
  addTag,
  destroyTag,
  modifyTag,
}) => {
  const handleModifyTag = (e) => {
    e.preventDefault();
    modifyTag(e.currentTarget.value);
  };
  const deleteTag = (e) => {
    destroyTag(e.currentTarget.value);
  };
  const handleSubmit = () => {
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
  const handleAddTag = () => {
    addTag();
  };
  return (
    <div className="wrap">
      <div className="modify-link">
        <p>
          Titre du lien :
          {oldMedia.titre}
        </p>

        <p className="alter">
          {' '}
          Insérer un nouveau lien pour modifier l'entrée :
        </p>
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
          <Link to="/" onClick={handleSubmit}>
            <button type="submit" className="login-form-button">
              OK
            </button>
          </Link>
        </form>
      </div>
      <div className="add-tag">
        <h1>Ajouter un tag à ce média</h1>
        <Field
          name="newTag"
          placeholder="NouveauTag"
          type="text"
          onChange={changeField}
          value={newTag}
        />
        <button type="submit" className="login-form-button" onClick={handleAddTag}>
          OK
        </button>
      </div>
      <div className="delete-tag">
        <h1>Supprimer un tag lié à ce média</h1>
        {oldMedia.tags.map((tag) => (
          <Button key={`d${tag.tag}`} variant="danger" value={tag.id} onClick={deleteTag}>
            {tag.tag}
            {' '}
          </Button>
        ))}
      </div>
      <div className="modify-tag">
        {oldMedia.tags.map((tag) => (
          <form key={tag.tag}>
            {tag.tag}
            {' '}
            Modifier ce tag :
            {' '}
            <Field
              name="newTag"
              placeholder="NouveauTag"
              list={tag.tag}
              type="text"
              onChange={changeField}
              value={newTag}
            />
            <button type="submit" className="login-form-button" value={tag.id} onClick={handleModifyTag}>
              OK
            </button>
          </form>
        ))}
      </div>
    </div>
  );
};

Modif.propTypes = {
  changeField: PropTypes.func.isRequired,
  modifVideo: PropTypes.func,
  oldMedia: PropTypes.object.isRequired,
  media: PropTypes.string.isRequired,
  modifImage: PropTypes.func,
  newTag: PropTypes.string.isRequired,
  destroyTag: PropTypes.func.isRequired,
  addTag: PropTypes.func.isRequired,
  modifyTag: PropTypes.func.isRequired,
};
export default Modif;
