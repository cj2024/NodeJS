const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "Chinmay@281", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
