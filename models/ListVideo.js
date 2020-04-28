// Utilisation de sequilize
const Sequelize = require("sequelize");
// Utilisation du fichier de connexion à la DB
const sequelize = require("../utils/database");

// Création de la table listvideo
const ListVideo = sequelize.define("listvideo", {
  id: {
    type: Sequelize.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  lien: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  titre: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  auteur: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  hauteur: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  largeur: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  duree: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

// Note : Sequilize génère automatiquement created_at

module.exports = ListVideo;
