const mongoose = require("mongoose");
const TodosSchema = new mongoose.Schema({
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

// Mongoose will assume there is a collection called the plural of this name (i.e., 'users' in this case).
const Todos = mongoose.model("TodoItem", TodosSchema);
module.exports = Todos;
