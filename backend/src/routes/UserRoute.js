const { Router } = require("express");
const {
  getAllUsers,
  saveUser,
  checkLogin,
  deleteUser,
  updateUser,
} = require("../controllers/UserController");

const router = Router();

router.get("/", getAllUsers);
router.delete("/delete/:id", deleteUser);
router.post("/save", saveUser);
router.post("/update/:id", updateUser);
router.post("/login", checkLogin);

module.exports = router;
