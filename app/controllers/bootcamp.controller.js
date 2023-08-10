const { Bootcamp } = require("../models/bootcamp.model");
const { User } = require("../models/user.model");

/**
 * This function create a bootcamp registrer on db
 * @param {string} title - title of the bootcamp
 * @param {number} cue - bootcamp cue
 * @param {string} description - bootcamp description
 */
const createBootcamp = async (title, cue, description) => {
  try {
    const bootcamp = await Bootcamp.create({ title, cue, description });
    console.log(
      `**************INICIO**************
      Creado el Bootcamp:`,
      JSON.stringify(bootcamp.dataValues, null, 2),
      `
      **************FINAL!**************`
    );
  } catch (error) {
    console.log("Error al crear el Bootcamp.", error.errors[0].message);
  }
};

/**
 *  this funciton allows to add
 * @param {number} user_id the id of the user to add
 * @param {number} bootcamp_id the id of the bootcamp you want to include the user to
 */
const addUser = async (user_id, bootcamp_id) => {
  try {
    const bootcamp = await Bootcamp.findByPk(bootcamp_id);
    const user = await User.findByPk(user_id);
    bootcamp.addUser(user);
    console.log(`
    *****************INICIO*****************
      Agregado el usuario id=${user_id} al bootcamp con id=${bootcamp_id}
    *****************FINAL!*****************
    `);
  } catch (error) {
    console.log("No se pudo agregar el usuario al bootcamp", error);
  }
};

/**
 * this function find a bootcamp by id
 * @param {number} id
 */
const findById = async (id) => {
  if (!id) throw new Error("No se especificó el ID");

  const result = await Bootcamp.findByPk(id, {
    include: [{ model: User, as: "users" }],
  });

  if (!result) throw new Error("No se encontraron coincidencias");
  console.log(JSON.stringify(result.dataValues, null, 2));
  return;
};

/**
 * this function show all the bootcamps and users related
 */
const findAll = async () => {
  const result = await Bootcamp.findAll({
    include: [
      { model: User, as: "users", attributes: ["id", "firstName", "lastName"] },
    ],
  });

  const bootcamps = result.map((bootcamp) => bootcamp.dataValues);

  console.log(JSON.stringify(bootcamps, null, 2));
};

module.exports = { createBootcamp, addUser, findById, findAll };
