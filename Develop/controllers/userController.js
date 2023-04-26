const User = require("../models/User");
const Thought = require("../models/Thought");
//https://mongoosejs.com/docs/async-await.html
//https://www.codepedia.org/ama/cleaner-code-in-nodejs-with-async-await-mongoose-calls-example
//https://mongoosejs.com/docs/queries.html

module.exports = {
  // get all users
  async getUsers(req, res) {
    try {
      const users = await User.find({});
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // get one user by id
  async getOneUser(req, res) {
    try {
      const user = await User.findOne(req.params.id);
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // create user
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // update user by id
  async updateUser(req, res) {
    try {
      const userid = req.params.id;
      const user = await User.findOneAndUpdate(
        { _id: userid },
        { $set: req.body },
        { runValidators: true, new: true }
      );
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // delete user by id
  async deleteUser(req, res) {
    try {
      const user = await User.findOneAndDelete(req.params.id);
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // add friend
  async addFriend(req, res) {
    try {
      const userid = req.params.id;
      const friendid = req.params.friendid;
      const friend = await User.findOneAndUpdate(
        { _id: userid },
        { $push: { friends: friendid } },
        { runValidators: true, new: true }
      );
      res.json(friend);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // delete friend
  async deleteFriend(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.id },
        { $pull: { friends: req.params.friendId } },
        { new: true }
      ).populate("friends");

      if (!user) {
        return res.status(404).json("No such user");
      }

      res.json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
