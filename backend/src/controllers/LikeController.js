const Dev = require("../models/Dev");

module.exports = {
  async store(req, res) {
    const { devId } = req.params;
    const { user } = req.headers;

    const loggedDev = await Dev.findById(user);
    const targetDev = await Dev.findById(devId);

    if (!targetDev) {
      return res.status(400).json({ error: "Dev not exists" });
    }

    if (!loggedDev.likes.includes(targetDev._id)) {
      loggedDev.likes.push(targetDev._id);
      await loggedDev.save();
    }

    if (targetDev.likes.includes(loggedDev._id)) {
      const loggedSocketId = req.connectedUsers[user];
      const targetSocketId = req.connectedUsers[devId];

      if (loggedSocketId) {
        req.io.to(loggedSocketId).emit("match", targetDev);
      }

      if (targetSocketId) {
        req.io.to(targetSocketId).emit("match", loggedDev);
      }
    }

    return res.json(loggedDev);
  }
};
