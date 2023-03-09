const getNotifications = (req, res) => {
  res.status(200).json([
    {
      id: 1,
      type: "reacted",
      post: "My first tournament today!",
      user: { id: 1, name: "Mark Webber" },
    },
    { id: 2, type: "follow", post: null, user: { id: 2, name: "Angela Gray" } },
  ]);
};

module.exports = {
  getNotifications,
};
