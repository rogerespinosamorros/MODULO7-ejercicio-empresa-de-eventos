const { error } = require("console");
const express = require("express");

const mongoose = require("mongoose");
require("dotenv").config();

const PORT = 5000;

const app = express();
app.use(express.json());

const url_mongodb = process.env.DATABASE_URL_DEV;
mongoose.connect(url_mongodb);

const db = mongoose.connection;

db.on("error", (error) => {
  console.log(`Error al conectar con mongo ${error}`);
});

db.on("connected", () => {
  console.log(`Succes connect`);
});

db.on("disconnected", () => {
  console.log(`Mongo is disconnected`);
});

app.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});
