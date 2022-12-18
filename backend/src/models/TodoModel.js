const mongoose = require("mongoose");
const TodoSchema = new mongoose.Schema({
  experience: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    required: true,
  },
  note: {
    type: String,
    required: true,
  },
  dateCreated: {
    type: Date,
    required: true,
  },
  //
  email: {
    type: String,
    required: true,
  },
});

const Todo = mongoose.model("Todo", TodoSchema);
module.exports = Todo;
