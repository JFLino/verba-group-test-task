const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    const Location = sequelize.define("location", {
        streetNumber: DataTypes.INTEGER,
        streetName: DataTypes.STRING,
        city: DataTypes.STRING,
        state: DataTypes.STRING,
        country: DataTypes.STRING,
        postcode: DataTypes.STRING,
        latitude: DataTypes.DOUBLE,
        longitude: DataTypes.DOUBLE,
        timezoneOffset: DataTypes.STRING,
        timezoneDescription: DataTypes.STRING,
    },
    {
        createdAt: false,
        updatedAt: false,
    });
  
    return Location;
  };