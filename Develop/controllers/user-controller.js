const {User} = require("../models");
//https://mongoosejs.com/docs/async-await.html
module.exports = {
  // get all users
  async getUsers(req, res) {
    try {
      const users = await User.find({});
      res.json(users);
    }
    catch (err) { 
      res.status(500).json(err);
    }
  },
  // get one user by id
  async getOneUser(req, res) {
    try {
      const user = await User.findOne(req.params.id);
      res.json(user);
    }
    catch (err) {
      res.status(500).json(err);
    }
  },
  // create user
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    }
    catch (err) {
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
    }
    catch (err) {
      res.status(500).json(err);
    }
  },
  // delete user by id
  async deleteUser(req, res) {
    try {
      const user = await User.findOneAndDelete(req.params.id);
      res.json(user);
    }
    catch (err) {
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
    }
    catch (err) {
      res.status(500).json(err);
    }
  },
  // delete friend
  async deleteFriend(req, res) {
    try {
      const userid = req.params.id;
      const friendid = req.params.friendid;
      const friend = await User.findOneAndUpdate(
        { _id: userid },
        { $pull: { friends: friendid } },
        { runValidators: true, new: true }
      );
      res.json(friend);
    }
    catch (err) {
      res.status(500).json(err);
    }
  }
};


      
