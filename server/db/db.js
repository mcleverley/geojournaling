const Sequelize = require('sequelize');

const db = new Sequelize(`postgres://localhost:5432/geojournaling`, {
  logging: false,
});

module.exports = db;
