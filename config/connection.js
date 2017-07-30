// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************
// Dependencies
var mysql = require('mysql2');
var Sequelize = require("sequelize");
// Creates mySQL connection using Sequelize
if (process.env.JAWSDB_URL){
	var sequelize = new Sequelize(process.env.JAWSDB_URL, {
	  logging: false,
	  dialectOptions: {
	    ssl: true /* for SSL config since Heroku gives you this out of the box */
	  }
	});
} else {

	var sequelize = new Sequelize("burgers2_db", "root", "Mamumysql!", {
	  host: "localhost",
	  dialect: "mysql",
	  pool: {
	    max: 5,
	    min: 0,
	    idle: 10000
	  }
	});
}
// Exports the connection for other files to use
module.exports = sequelize;
