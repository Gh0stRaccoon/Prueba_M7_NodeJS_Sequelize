const userController = require("../controllers/user.controller");
const bootcampController = require("../controllers/bootcamp.controller");

const createUsers = async () => {
  await userController.createUser("Mateo", "Díaz", "mateo.diaz@correo.com");
  await userController.createUser(
    "Santiago",
    "Mejías",
    "santiago.mejías@correo.com"
  );
  await userController.createUser("Lucas", "Rojas", "lucas.rojas@correo.com");
  await userController.createUser(
    "Facundo",
    "Fernandez",
    "facundo.fernandez@correo.com"
  );
};

const createBootcamps = async () => {
  await bootcampController.createBootcamp(
    "Introduciendo El Bootcamp De React.",
    10,
    "React es la librería más usada en JavaScript para el desarrollo de interfaces."
  );
  await bootcampController.createBootcamp(
    "Bootcamp Desarrollo Web Full Stack.",
    12,
    "Crearás aplicaciones web utilizando las tecnologías y lenguajes más actuales y populares, como: JavaScript, nodeJS, Angular, MongoDB, ExpressJS."
  );
  await bootcampController.createBootcamp(
    "Bootcamp Big Data, Inteligencia Artificial & Mahine Learning.",
    10,
    "Domina DataScience, y todo el ecosistema de lenguajes y herramientas de Big Data, e intégralos con modelos avanzados de Artificial Intelligence y Machine Learning."
  );
};

const addUsers = async () => {
  await bootcampController.addUser(1, 1);
  await bootcampController.addUser(2, 1);
  await bootcampController.addUser(1, 2);
  await bootcampController.addUser(1, 3);
  await bootcampController.addUser(2, 3);
  await bootcampController.addUser(3, 3);
};

const generateSeeds = async () => {
  await createUsers();
  await createBootcamps();
  await addUsers();
};

module.exports = { generateSeeds };
