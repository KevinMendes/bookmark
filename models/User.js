// Utilisation de sequilize
const Sequelize = require("sequelize");
// Utilisation du fichier de connexion à la DB
const sequelize = require("../utils/database");

// Création de la table user
const User = sequelize.define("user", {
  id: {
    type: Sequelize.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  surname: {
    type: Sequelize.CHAR(20),
    allowNull: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: true,
    unique: true,
  },
});

// Note : Sequilize génère automatiquement created_at

module.exports = User;
