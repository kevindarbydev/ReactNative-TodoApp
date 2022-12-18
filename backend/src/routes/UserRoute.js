const { Router } = require("express");
const { getAllUsers } = require("../controllers/UserController");

const router = Router();

router.get("/", getAllUsers);

module.exports = router;
