const { DataTypes } = require("sequelize");
const db = require("../config/db.config");

const User = db.define(
  "User",
  {
    // attributes defined here
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = { User };
