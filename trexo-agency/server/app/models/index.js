const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
// connecting mySQL with Sequelize to handle queries
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
// models
db.agencies = require("./agency.model.js")(sequelize, Sequelize);
db.packages = require("./package.model.js")(sequelize, Sequelize);

// // relationships
db.packages.belongsTo(db.agencies, { foreignKey: "agencyId", as: "agency" });
db.agencies.hasMany(db.packages, { foreignKey: "agencyId", as: "packages" });

module.exports = db;
