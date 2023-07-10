const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const { handleError, checkPassword, signJwt } = require("../services/functions");
const { StatusCodes } = require("http-status-codes");

const createUser = async (req, res) => {
  const { name, password, id, age, email } = req.body;

  if (!checkPassword(password)) {
    return res.status(StatusCodes.BAD_REQUEST).send("password between 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character")
    
  }
  // const userDB = GetDB();
  // const user = GetItem(email, userDB);
  // if (user) {
  //   return res.send(`${email} exits`);
  // }

  // JSON.stringify(req.body)
  // const { readFileSync, writeFileSync } = fs;
  // let data = JSON.stringify(req.body);

  // console.log(req.body);
  // incase the user repetes it email

  // hashedPassword

  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);

  // req.body.id = uuidv4();

  // JSON.stringify(userDB);

  // creating file to store the things and also chaning it to json

  const newUser = { name, password: hashedPassword, age, email };

  try {
    const user = await User.create(newUser);
    const token = signJwt({ userID: user._id }, process.env.JWT_SECRET, "30d");
    res.send({ token });
  } catch (err) {
    const errMessage = handleError(res, err);
  res.status(StatusCodes.BAD_REQUEST).send(errMessage)
    // console.log(errMessage);
  }

  // userDB.push({ name, password: hashedPassword, id: uuidv4(), age, email });
  // console.log(path.resolve("db", "users.json"));
  // after sending show
  // sign jwt
  
  // SetDB(userDB);
  
};

module.exports = createUser;
