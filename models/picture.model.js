const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    const Picture = sequelize.define("picture", {
        large: DataTypes.STRING,
        medium: DataTypes.STRING,
        thumbnail: DataTypes.STRING,
    },
    {
        createdAt: false,
        updatedAt: false,
    });
  
    return Picture;
  };