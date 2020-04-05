const Sequelize = require('sequelize');
const db = require('../db');

const History = db.define('history', {});

module.exports = History;
