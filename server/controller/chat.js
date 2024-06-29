const User = require("../models/user");
module.exports.handlegetAllUsers = async (req, res, next) => {
    try {
      const users = await User.find({ _id: { $ne: req.params.id } }).select([
        "email",
        "username",
        //"avatarImage",
        "_id",
      ]);
      console.log(users);
      return res.json(users);
    } catch (ex) {
      next(ex);
    }
  };