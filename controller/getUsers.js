const User = require("../models/user");


const getUsers = async (req, res) => {
  console.log(req.user);
 const  user =  await User.find()

  res.send(user);
};

module.exports = getUsers;
