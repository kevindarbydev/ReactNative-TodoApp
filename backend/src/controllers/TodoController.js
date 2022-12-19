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

/*------ CREATE ------*/
module.exports.saveTodo = async (req, res) => {
  const task = req.body.task;

  try {
    const TodoInfo = {
      task: task,
    };
    await todoModel.create(TodoInfo);

    res.send({ success: true });
  } catch (err) {
    console.log(err);
  }
};
