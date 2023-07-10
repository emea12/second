const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/user");
const { signJwt } = require("../services/functions");

const loginUser = async (req, res) => {
  const { name, password } = req.body;

  if (!name || !password) {
    return res.status(400).send(" name or password does not match");
  }

  const user = await User.findOne({ name });
  if (!user) {
    return res.status(401).send("name is not found");
  }

  const passworMatch = bcrypt.compareSync(password, user.password);
  if (!passworMatch) {
    return res.status(401).send(" name or password does not match");
  }
  const token = signJwt({ userdId: user.id }, process.env.JWT_SECRET, "30d");
  res.send({ token });
};

module.exports = loginUser;
