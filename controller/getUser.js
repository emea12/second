// const { GetDB } = require("../services/functions");
// const { GetDB, GetItemByID } = require("../services/functions");
// const jwt = require("jsonwebtoken")

const User = require("../models/user");

exports.getUser = async(req, res) => {
  const {userID} = req.params

  const user =  await User.findById(userID)

  // const {token} = req
  // const user = jwt.verfiy(token,process.env.JWT_SECRET)
  // res.send(user)
//   console.log(req.params.userID);
//   const userDB = GetDB();

//   const user = GetItemByID(req.params.userID, userDB);
  
//   console.log(user);

//   res.send(user.name);

res.send(user.name)
 };

// crud
