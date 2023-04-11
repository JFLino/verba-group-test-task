const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    const Credential = sequelize.define("credential", {
        uuid: DataTypes.STRING,
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        salt: DataTypes.STRING,
        md5: DataTypes.STRING,
        sha1: DataTypes.STRING,
        sha256: DataTypes.STRING,
    },
    {
        createdAt: false,
        updatedAt: false,
    });
  
    return Credential;
  };