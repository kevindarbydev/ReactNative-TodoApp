const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  level: {
    type: Number,
    default: 0,
  },
  xp: {
    type: Number,
    default: 0,
  },
});

// Mongoose will assume there is a collection called the plural of this name (i.e., 'users' in this case).
const User = mongoose.model("User", UserSchema);
module.exports = User;
