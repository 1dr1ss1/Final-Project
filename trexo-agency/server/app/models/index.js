const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
// connecting mySQL with Sequelize to handle queries
const connex = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  port: 8081,
  operatorAliases: false,
});

const db = {};
db.Sequelize = Sequelize;
db.connex = connex;
db.packages = require("./package.model.js")(connex, Sequelize);
module.exports = { db };
