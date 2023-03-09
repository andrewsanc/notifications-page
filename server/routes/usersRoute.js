const express = require("express");
const router = express.Router();
const { getUsers, registerUser } = require("../controllers/usersController");

router.route("/").get(getUsers).post(registerUser);

module.exports = router;
