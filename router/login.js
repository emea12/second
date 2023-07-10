const express = require("express");
const loginUser = require("../controller/loginUser");

const router = express.Router();

router.route("/login").post(loginUser);
module.exports = router