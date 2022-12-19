require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const cors = require("cors");
app.use(cors());

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

const port = 3001;
app.listen(port, () => console.log(`Todo app listening on port ${port}`));
