const TodoModel = require("../models/TodoModel");

module.exports.getAllTodos = (req, res) => {
  res.json({
    message: "All my todos!",
  });
};
