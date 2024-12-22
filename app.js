const express = require("express");

const mongoose = require("mongoose");
const PORT = 5000;

const userRouter = require("./Routes/userRouter");

const app = express();
app.use(express.json());

require("dotenv").config();

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

app.use("/users", userRouter);

app.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});
