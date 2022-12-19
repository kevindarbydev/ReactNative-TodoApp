const todoModel = require("../models/TodoModel");

/*------ GET ALL ------*/
module.exports.getAllTodos = async (req, res) => {
  try {
    const todos = await todoModel.find();
    res.send(todos);
  } catch (err) {
    console.log(err);
  }
};
