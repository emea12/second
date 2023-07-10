const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");

exports.GetDB = () => {
  let userDB = fs.readFileSync(path.resolve("db", "users.json"), {
    encoding: "utf-8",
  });
  userDB = JSON.parse(userDB);

  return userDB;
};
exports.SetDB = (users) => {
  fs.writeFileSync(path.resolve("db", "users.json"), JSON.stringify(users));
};

exports.GetItemByID = (id, db) => {
  const item = db.find((one) => one.id === id);
  return item;
};
exports.GetItemByName = (name, db) => {
  const Username = db.find((one) => one.name === name);
  return Username;
};

exports.GetItem = (key, db) => {
  const item = db.find((one) => one["email"] === key);
  return item;
};

exports.handleError = (res, err) => {
  const errors = {
    email: "",
    name: "",
  };


  if (err.code === 11000) {
    return  res.status(StatusCodes.BAD_REQUEST).send("email already exit");
  }

  if (err.message.includes("User validation failed")) {
    Object.values(err.errors).map((error) => {
      errors[error.properties.path] = error.properties.message;
    });
  }

  // if (errors.email) {
  //   // console.log(`email: ${errors.email}`);
  //   // return res.status(StatusCodes.BAD_REQUEST).send(errors.email)
  //   return errors.email
  // }
  // if (errors.name) {
  //   // console.log(` name: ${errors.name}`);
  //   // return res.status(StatusCodes.BAD_REQUEST).send(errors.name)
  //   return errors.name
  // }
  // }

  return errors;

  // console.log(err)
};

exports.checkPassword = (psd) => {
  const psdRegex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
  if (psd.match(psdRegex)) {
    return true;
  } else {
    return false;
  }
};

exports.signJwt = (userData = {}, JWTSecret, expiresIn) => {
  const token = jwt.sign(
    userData,
    JWTSecret,
   
    { expiresIn: expiresIn }
  );
  return token
};
