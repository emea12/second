const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const createUser = (req, res) => {
  // JSON.stringify(req.body)
  const { readFileSync, writeFileSync } = fs;
  let data = JSON.stringify(req.body);

  let UserDB = readFileSync(path.resolve("db", "users.json"), {
    encoding: "utf8",
  });
  UserDB = JSON.parse(UserDB);

  // console.log(req.body);
  // incase the user repetes it email
  for (const user of UserDB) {
    if (user.email === req.body.email) {
      return res.send(`${req.body.email} exits`);
    }
  }
  req.body.id = uuidv4();
  UserDB.push(req.body);
  UserDB = JSON.stringify(UserDB);

  // creating file to store the things and also chaning it to json

  fs.writeFileSync(path.resolve("db", "users.json"), UserDB);

  console.log(path.resolve("db", "users.json"));
  // after sending show
  res.send("we recieved the things");
};

module.exports = createUser;
