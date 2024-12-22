//Importamos el modelo en el controlador, donde vamos a hacer las peticiones a la db
const userModel = require("../Models/userModel");

const bcrypt = require("bcrypt");

//Creamos el endPoint para añadir usuario
const signup = async (req, res) => {
  try {
    //Crea un nuevo objeto de modelo utilizando los datos enviados en la solicitud POST
    const user = new userModel({
      name: req.body.name,
      lastName: req.body.lastName,
      email: req.body.email,
      password: await bcrypt.hash(req.body.password, 10),
      //Encripta la contraseña utilizando bcrypt con un factor de coste 10
    });
    //Guarda el objeto de modelo en la base de datos
    await user.save();

    res.status(200).json({ status: "succeeded", user, error: null });
  } catch (error) {
    res
      .status(500)
      .json({ status: "failed", data: null, error: error.message });
  }
};

const getUsers = async (req, res) => {
  try {
  } catch (error) {}
};

module.exports = { signup, getUsers };
