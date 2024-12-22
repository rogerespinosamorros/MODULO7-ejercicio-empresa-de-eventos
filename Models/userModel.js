const mongoose = require("mongoose");

//Creamos un esquema y la estructura que queremos
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, //Asegura que no se repita email
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now, //Asigna la fecha actual por defecto
  },
});

//Creamos el model de user/usuario, y le indicamos el nombre, el esquema y el nombre de la colección
const User = mongoose.model("User", userSchema, "Users");
//Exportamos el modelo
module.exports = User;
