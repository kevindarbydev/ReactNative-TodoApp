const { Router } = require("express");
const { getAllTodos, saveTodo } = require("../controllers/TodoController");

const router = Router();

router.get("/", getAllTodos);
router.post("/save", saveTodo);

module.exports = router;
