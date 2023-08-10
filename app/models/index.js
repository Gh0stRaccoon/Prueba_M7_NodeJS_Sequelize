const db = require("../config/db.config");
const { Bootcamp } = require("./bootcamp.model");
const { User } = require("./user.model");
const { generateSeeds } = require("../utils/generateSeeds");
const { DataTypes } = require("sequelize");

const UserBootcamp = db.define(
  "user_bootcamp",
  {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    bootcamp_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "user_bootcamp",
    indexes: [
      {
        unique: true,
        fields: ["user_id", "bootcamp_id"],
      },
    ],
  }
);

User.belongsToMany(Bootcamp, {
  through: UserBootcamp,
  as: "bootcamps",
  foreignKey: "user_id",
});

Bootcamp.belongsToMany(User, {
  through: UserBootcamp,
  as: "users",
  foreignKey: "bootcamp_id",
});

const sync = async () => {
  try {
    await db.sync();
    console.log("Sync sucessfully");
    await generateSeeds();
  } catch (error) {
    console.log("Fail to sync", error);
  }
};

module.exports = {
  sync,
};
