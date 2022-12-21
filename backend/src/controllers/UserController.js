const userModel = require("../models/UserModel");
const validator = require("validator");
const bcrypt = require("bcrypt");
const saltRounds = 10;

/*------ GET ALL ------*/
module.exports.getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find();
    res.send(users);
  } catch (err) {
    console.log(err);
  }
};

/*------ DELETE BY ID ------*/
module.exports.deleteUser = async (req, res) => {
  const id = req.params.id;
  console.log("Deleting user: " + id);
  try {
    const results = await userModel.deleteOne({ id: id });
    res.send(results);
  } catch (err) {
    console.log(err);
  }
};

/*------ CREATE ------*/
module.exports.saveUser = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const username = req.body.username;
  console.log("Received email: " + email + "\n Password: " + password);

  try {
    if (email && password && validator.isStrongPassword(password)) {
      // Check to see if the user already exists. If not, then create it.
      const user = await userModel.findOne({ email: email });
      if (user) {
        console.log("Invalid registration - email " + email + " already exists.");
        res.send({ success: false });
        return;
      } else {
        hashedPassword = await bcrypt.hash(password, saltRounds);
        console.log("Registering email " + email);
        const userToSave = {
          email: email,
          password: hashedPassword,
          username: username,
        };
        await userModel.create(userToSave);
        res.send({ success: true });
        return;
      }
    }
  } catch (error) {
    console.log(error.message);
  }
  res.send({ success: false });
};

/*------ UPDATE BY ID ------*/
module.exports.updateUser = async (req, res) => {
  const id = req.params.id;
  const level = req.body.level;
  const xp = req.body.xp;
  const email = req.body.email;
  const password = req.body.password;
  const username = req.body.username;

  console.log("User id: " + id);
  try {
    const updatedUser = {
      level: level,
      xp: xp,
      email: email,
      password: password,
      username: username,
    };

    console.log("Trying to update record with credentials: " + id);
    const results = await userModel.replaceOne(
      {
        id: id,
      },
      updatedUser
    );
    console.log("matched: " + results.matchedCount);
    console.log("modified: " + results.modifiedCount);
    console.log(results);
    res.send({ success: true, updatedUser: updatedUser });
  } catch (err) {
    console.log(err);
  }
};

/*------ FIND BY EMAIL ------*/
module.exports.checkLogin = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  console.log("Received email: " + email + " and password: " + password);

  try {
    if (email && password) {
      // Check to see if the user already exists.
      const user = await userModel.findOne({ email: email });
      if (!user) {
        console.log("Invalid login - email " + email + " doesn't exist.");
        res.send({ success: false });
        return;
      } else {
        const isSame = await bcrypt.compare(password, user.password);
        if (isSame) {
          console.log("User exists " + email);
          console.log("Successful login");
          // sending back the whole user object when this endpoint is called successfully
          res.send({ success: true, user: user });

          return;
        }
      }
    }
  } catch (error) {
    console.log("(LOGIN) Error occured: " + error.message);
  }
  res.send({ success: false });
};
