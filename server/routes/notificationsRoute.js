const express = require("express");
const router = express.Router();
const { getNotifications } = require("../controllers/notificationsController");

router.route("/").get(getNotifications);

module.exports = router;
