const express = require("express");

const mongoose = require("mongoose");
require("dotenv").config();

const PORT = 5000;

const app = express();
app.use(express.json());

const url_mongo = process.env.DATABASE_URL_DEV;
mongoose.connect(url_mongo);

const db = mongoose.connection;

app.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});
