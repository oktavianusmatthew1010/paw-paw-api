const sequelize = require('../config/database');
const User = require('./user');
const Pet = require('./pets');

const db = {
  sequelize,
  User,
  Pet,
};

module.exports = db;
