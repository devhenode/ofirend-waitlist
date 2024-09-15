const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 

const Wishlist = sequelize.define('Wishlist', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  }
});

module.exports = Wishlist;
