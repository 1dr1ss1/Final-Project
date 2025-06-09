const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
// connecting mySQL with Sequelize to handle queries
const connex = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorAliases: false,
});

const db = {};
db.Sequelize = Sequelize;
db.connex = connex;
// models
db.agencies = require("./agency.model.js")(connex, Sequelize);
db.packages = require("./package.model.js")(connex, Sequelize);

// // relationships
db.packages.belongsTo(db.agencies, { foreignKey: "agencyId" });
db.agencies.hasMany(db.packages, { foreignKey: "agencyId" });

module.exports = db;
