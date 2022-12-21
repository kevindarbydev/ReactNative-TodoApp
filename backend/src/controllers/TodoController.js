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
/* ----- GET ALL by ID ------*/
module.exports.getById = async (req, res) => {
  if (req.body.userId === undefined){
    res.send("id undefined");
    return;
  }
  const userId = req.body.id;
  try {
    
    const todos = await todoModel.find(userId);
    res.send(todos);
  } catch (err) {
    console.log(err);
  }
};

/*------ CREATE ------*/
module.exports.saveTodo = async (req, res) => {
  const task = req.body.task;
  const id = req.body.userId;
  const dateCompleted = req.body.dateCompleted;
  console.log("Task content: " + task + "....id: "+id + "  dateCompleted: "+dateCompleted);
  if (id !== undefined) {
console.log("Received task: " + task + ", id: " + id);
  }
  try {
    const TodoInfo = {
      task: task,
      userId: id,
      dateCompleted: dateCompleted,
    };
    await todoModel.create(TodoInfo);

    res.send({ success: true });
    console.log("Task saved in DB successfully")
  } catch (err) {
    console.log(err);
  }
};
