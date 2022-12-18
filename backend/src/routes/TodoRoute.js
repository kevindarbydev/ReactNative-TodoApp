const { Router } = require("express");
const { getAllTodos } = require("../controllers/TodoController");

const router = Router();

router.get("/", getAllTodos);

module.exports = router;
