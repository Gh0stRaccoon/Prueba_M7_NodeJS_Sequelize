const { DataTypes } = require("sequelize");
const db = require("../config/db.config");

const Bootcamp = db.define(
  "Bootcamp",
  {
    // attributes defined here
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cue: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 5,
        max: 20,
      },
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = { Bootcamp };
