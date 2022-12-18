const UserModel = require("../models/UserModel");

module.exports.getAllUsers = (req, res) => {
  res.json({
    message: "All my users!",
  });
};
