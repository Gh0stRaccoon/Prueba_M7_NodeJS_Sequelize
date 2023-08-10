const { Bootcamp } = require("../models/bootcamp.model");
const { User } = require("../models/user.model");

/**
 * this functions create a user register on db
 * @param {string} firstName - firstname of the user
 * @param {string} lastName - lastname of the user
 * @param {string} email - email of user
 */
const createUser = async (firstName, lastName, email) => {
  try {
    const user = await User.create({ firstName, lastName, email });
    console.log(
      `**************INICIO**************
      Se ha creado el usuario`,
      JSON.stringify(user.dataValues, null, 2),
      `
      **************FINAL!**************`
    );
  } catch (error) {
    console.log("Error al crear usuario", error.message);
  }
};

/**
 * this function list all users on db
 */
const findAll = async () => {
  try {
    const result = await User.findAll({
      include: [{ model: Bootcamp, as: "bootcamps" }],
    });
    const users = result.map((el) => el.dataValues);
    console.log(JSON.stringify(users, null, 2));
  } catch (error) {
    console.log("Error al buscar todos los usuarios", error.message);
  }
};

/**
 * this function shows a user on db finded by id
 * @param {number} id
 */
const findUserById = async (id) => {
  try {
    if (id) {
      const user = await User.findByPk(id, {
        include: [
          {
            model: Bootcamp,
            as: "bootcamps",
          },
        ],
      });
      if (!user) throw new Error("No se encontró el usuario indicado.");
      console.log(
        `**************INICIO**************`,
        JSON.stringify(user.dataValues, null, 2),
        `**************FINAL!**************
      `
      );
      return;
    }
    throw new Error("No se proporcionó un ID");
  } catch (error) {
    console.log("Error al obtener el usuario", error.message);
  }
};

/**
 * this function shows a user on db finded by id, just one parameter on payload is required
 * @param {number} id
 * @param {object} payload
 */
const updateUserById = async (id, payload) => {
  try {
    const user = await User.findByPk(id);

    if (!user) throw new Error("No se encontró el usuario indicado.");

    const { dataValues: currentUser } = user;
    const [editedRows, result] = await User.update(
      {
        firstName: payload.firstName || currentUser.firstName,
        lastName: payload.lastName || currentUser.lastName,
        email: payload.email || currentUser.email,
      },
      { where: { id }, returning: true }
    );
    if (!result) throw new Error("No se encontró el usuario indicado");

    const userUpdated = result.map((el) => el.dataValues);
    console.log(
      `**************INICIO**************`,
      JSON.stringify(userUpdated, null, 2),
      `**************FINAL!**************`
    );
  } catch (error) {
    console.log("Error al actualizar usuario.", error.message);
  }
};

/**
 * this function deletes a user from database
 * @param {number} id
 */
const deleteUserById = async (id) => {
  try {
    if (!id) throw new Error("El id no se ha indicado");

    const rowsDeleted = await User.destroy({
      where: { id },
    });

    if (rowsDeleted === 0) throw new Error("No hay nada que borrar");

    console.log(`
    **************INICIO**************
    Usuarios eliminados: ${rowsDeleted}
    **************FINAL!**************
    `);
  } catch (error) {
    console.log("Error al eliminar usuario:", error.message);
  }
};

module.exports = {
  findAll,
  createUser,
  findUserById,
  updateUserById,
  deleteUserById,
};
