const Sequelize = require('sequelize');

const sequelize = new Sequelize('bookmark', 'root', 'Motdepasse!', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;