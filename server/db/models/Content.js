const Sequelize = require('sequelize');
const db = require('../db');

const Content = db.define('content', {
  type: { type: Sequelize.STRING },
  title: { type: Sequelize.STRING, allowNull: false },
  categories: { type: Sequelize.ARRAY(Sequelize.STRING) },
  x: { type: Sequelize.FLOAT, allowNull: false },
  y: { type: Sequelize.FLOAT, allowNull: false },
});

module.exports = Content;
