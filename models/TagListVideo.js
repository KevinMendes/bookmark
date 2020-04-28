// Utilisation de sequilize
const Sequelize = require("sequelize");
// Utilisation du fichier de connexion à la DB
const sequelize = require("../utils/database");

// Création de la table intermédiaire entre tag et list video
const TagListVideo = sequelize.define(
  "taglistvideo",
  {},
  { timestamps: false }
);

module.exports = TagListVideo;
