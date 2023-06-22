const express = require("express");
const app = express();
// const fs = require("fs");
// const path = require("path");
const PORT = process.env.PORT || 3000;
const createUser = require("./router/register");
const home = require("./router/home");
const register = require("./router/register");
const users = require("./router/users");
const user = require("./router/user");

app.use(express.urlencoded({extended:false}))
app.set("view engine", "ejs");

app.use("/register", createUser);
app.use("/", home);
app.use("/", register);
app.use("/", users);
app.use("/", user);

app.listen(PORT, () => {
  console.log("running in " + PORT);
});