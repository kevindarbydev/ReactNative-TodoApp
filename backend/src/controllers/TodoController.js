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
  const id = req.body.userId;
  console.log(task+ "....id: "+id);
  if (id !== undefined) {
console.log("Received task: " + task + ", id: " + id);
  }
  try {
    const TodoInfo = {
      task: task,
      userId: id,
    };
    await todoModel.create(TodoInfo);

    res.send({ success: true });
    console.log("Task created successfully")
  } catch (err) {
    console.log(err);
  }
};
