// Utilisation de sequilize
const Sequelize = require("sequelize");
// Utilisation du fichier de connexion à la DB
const sequelize = require("../utils/database");

// Création de la table intermédiaire entre tag et list image
const TagListImage = sequelize.define(
  "taglistimage",
  {},
  { timestamps: false }
);
// Note : defince(modelName: type, attibutes: object, option: object) en passant un objet attribut vide et
// et en passant timestamps: false en option, on retire le comportement par défaut de sequelize
// qui met automatiquement un created_at et un updated_at
module.exports = TagListImage;
