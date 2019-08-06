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

    if (!loggedDev.deslikes.includes(targetDev._id)) {
      loggedDev.deslikes.push(targetDev._id);

      const indexOfLike = loggedDev.likes.indexOf(targetDev._id);
      if (indexOfLike !== -1) {
        loggedDev.likes.splice(indexOfLike, 1);
      }
      await loggedDev.save();
    }

    return res.json(loggedDev);
  }
};
