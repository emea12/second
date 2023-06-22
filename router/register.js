const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const getRegister = require("../controller/getRegister");
const createUser = require("../controller/createUser");



const router = express.Router();

router.route("/register").get(getRegister).post(createUser);




// router.post("/register", creatUser)

// router.get("/register", getRegister)

module.exports = router;
