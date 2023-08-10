const { Sequelize } = require("sequelize");
const { database } = require("./envs.config");

const db = new Sequelize(database);

async function syncDB() {
  try {
    await db.authenticate();
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Unable to connect to database", error);
  }
}

syncDB();

module.exports = db;
