const bootcampController = require("../controllers/bootcamp.controller");
const userController = require("../controllers/user.controller");

const challengeQueries = async () => {
  console.log("-------------- Consultando Bootcamps por ID --------------");
  await bootcampController.findById(1);
  await bootcampController.findById(2);
  await bootcampController.findById(3);
  console.log("-------------- Consultando todos los Bootcamps --------------");
  await bootcampController.findAll();
  console.log("-------------- Consultando Usuarios por ID --------------");
  await userController.findUserById(1);
  console.log("-------------- Consultando todos los Usuarios --------------");
  await userController.findAll();
  console.log("-------------- Actualizando Usuario por ID --------------");
  await userController.updateUserById(1, {
    firstname: "Pedro",
    lastname: "Sanchez",
  });
  console.log("-------------- Eliminando Usuario por ID --------------");
  await userController.deleteUserById(1);
};

module.exports = {
  challengeQueries,
};
