// Dependencies
// =============================================================
// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");


  var Burger = sequelize.define("burgers", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    burger_name: {
      type: Sequelize.STRING
    },
    devoured: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    }
  }, {
    timestamps: false
  });

Burger.sync();

module.exports = Burger;