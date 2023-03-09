const asyncHandler = require("express-async-handler");

const Notification = require("../models/notificationsModel");

const getNotifications = asyncHandler(async (req, res) => {
  const notifications = await Notification.find();

  res.status(200).json(notifications);
});

module.exports = {
  getNotifications,
};
