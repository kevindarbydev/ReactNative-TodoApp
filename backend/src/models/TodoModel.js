const mongoose = require("mongoose");
const TodoSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
  dateCompleted: {
    type: Date,
  },
  userId: {
    type: String,
  },
});

const Todo = mongoose.model("Todo", TodoSchema);
module.exports = Todo;
