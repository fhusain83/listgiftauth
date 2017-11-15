var Sequelize = require("sequelize");
var path = require("path");
var env = "development";
var config = require(path.join(__dirname, '..', 'config', 'config.json'))[env];
var sequelize = new Sequelize(config.database, config.username, config.password, config);
module.exports = sequelize;