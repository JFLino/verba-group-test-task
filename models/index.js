const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  logging: false,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./user.model.js")(sequelize, Sequelize);
db.credentials = require("./credential.model.js")(sequelize, Sequelize);
db.locations = require("./location.model.js")(sequelize, Sequelize);
db.pictures = require("./picture.model.js")(sequelize, Sequelize);

//Связть между User и Credential
db.credentials.hasOne(db.users, {
    onDelete: 'CASCADE'
});
db.users.belongsTo(db.credentials);


//Связть между User и Location
db.locations.hasOne(db.users, {
  onDelete: 'CASCADE'
});
db.users.belongsTo(db.locations);


//Связть между User и Picture
db.pictures.hasOne(db.users, {
  onDelete: 'CASCADE'
});
db.users.belongsTo(db.pictures);

module.exports = db;