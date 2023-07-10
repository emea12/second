const { StatusCodes } = require("http-status-codes");
const User = require("../models/user");


exports.removeUser = async  (req, res) => {

  const {userID} = req.params
  const user = await User.findByIdAndDelete(userID)
  res.send(user)
}
