const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        gender: DataTypes.STRING,
        title: DataTypes.STRING,
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        email: DataTypes.STRING,
        dateOB: DataTypes.DATE,
        ageFB: DataTypes.INTEGER,
        dateOR: DataTypes.DATE,
        ageFR: DataTypes.INTEGER,
        phone: DataTypes.STRING,
        cell: DataTypes.STRING,
        idName: DataTypes.STRING,
        idValue: DataTypes.STRING,
        nat: DataTypes.STRING,
    },
    {
        createdAt: false,
        updatedAt: false,
    });
  
    return User;
  };