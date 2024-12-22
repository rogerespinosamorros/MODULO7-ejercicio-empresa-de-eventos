//Importamos las rutas de Express
const router = require("express").Router();
//Importamos las funciones que vamos a usar en las rutas
const { signup, getUsers } = require("../Controllers/userController");

//GET para obtener todos los usuarios
router.get("/getUsers", getUsers);
//POST para crear un usuario
router.post("/signup", signup);

module.exports = router;
