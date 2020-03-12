const Sequelize = require('sequelize');
const db = require('../db');

const Hex = db.define('hex', {});

module.exports = Hex;
