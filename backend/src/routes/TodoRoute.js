const { Router } = require("express");
const {
  getAllTodos,
  saveTodo,
  getById,
} = require("../controllers/TodoController");

const router = Router();

router.get("/", getAllTodos);
router.post("/completed", getById);
router.post("/save", saveTodo);

module.exports = router;
