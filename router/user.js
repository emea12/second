const express = require("express");
const app = express();
const { getUser } = require("../controller/getUser");
const { removeUser } = require("../controller/removeUser");
const { updateUser } = require("../controller/updateUser");



const router = express.Router();

router.route("/users/:userID").get(getUser).delete(removeUser).patch(updateUser);

module.exports = router