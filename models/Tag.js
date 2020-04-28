// Utilisation de sequilize
const Sequelize = require("sequelize");
// Utilisation du fichier de connexion à la DB
const sequelize = require("../utils/database");
// Création de la table status
const Tag = sequelize.define("tag", {
  id: {
    type: Sequelize.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  tag: {
    type: Sequelize.CHAR(20),
    allowNull: false,
  },
});

module.exports = Tag;
