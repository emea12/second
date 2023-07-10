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
require("dotenv").config();
const Login = require("./router/login");

const { connect } = require("./db/connectDB");
const { authoticateUser } = require("./middleware/auth");
const { verifyJWT } = require("./middleware/verifyJWT");
// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.json());

// route
app.use("/register", createUser);
app.use("/", home);
app.use("/", register);
app.use("/", Login);

app.use(authoticateUser);
app.use(verifyJWT);
app.use("/", users);
app.use("/",  user);

app.listen(PORT, () => {
  connect()
    .then(console.log("running in " + PORT))
    .catch((error) => console.log(error));
});
