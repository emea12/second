const path = require("path");
const fs = require("fs");

const getUsers = (req, res) => {
  let users = fs.readFileSync(path.resolve("db", "users.json"), {
    encoding: "utf-8",
  });
  users = JSON.parse(users);
  res.render("users", { title: "Users", users: users });
};

module.exports = getUsers;
