
const express = require("express")
const register = require("./register")
const getHome = require("../controller/getHome")
const router = express.Router()

router.get("/", getHome)

module.exports = router