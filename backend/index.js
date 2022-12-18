require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const validator = require("validator");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const userModel = require("./UserModels");
const todosModel = require("./Todos");

const app = express();
const cors = require("cors");
app.use(cors());

const port = 3001;

mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.use(express.json());
// Allows express to read a request body
// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/* ---------------------------------------------------- USER CRUD ---------------------------------------------------- */

/* ---------------------------------------------------- TODOITEM CRUD ---------------------------------------------------- */

/* ---------------------------------------------------- APP LISTEN ---------------------------------------------------- */

app.listen(port, () => console.log(`TicketBlaster app listening on port ${port}`));
