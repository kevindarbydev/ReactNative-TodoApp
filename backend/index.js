require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const validator = require("validator");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const app = express();
const cors = require("cors");
app.use(cors());

const port = 3001;

mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING)
  .then(() => console.log("Connected successfully"))
  .catch((err) => console.log(err));

app.use(express.json());
// Allows express to read a request body
// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const todoRoute = require("./src/routes/TodoRoute");
const userRoute = require("./src/routes/UserRoute");
app.use("/todo", todoRoute);
app.use("/user", userRoute);

app.listen(port, () => console.log(`Todo app listening on port ${port}`));
