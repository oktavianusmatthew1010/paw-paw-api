const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');

const Pet = sequelize.define('Pet', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: { type: DataTypes.STRING, allowNull: false },
  photoUrl: DataTypes.STRING,
  breed: DataTypes.STRING,
  age: DataTypes.STRING,
  weight: DataTypes.STRING,
  gender: DataTypes.STRING,
  dob: DataTypes.STRING,
  notes: DataTypes.TEXT,
  owner: {
    type: DataTypes.UUID,
    allowNull: false,
  },
});

Pet.belongsTo(User, { foreignKey: 'owner', as: 'user' });

module.exports = Pet;
