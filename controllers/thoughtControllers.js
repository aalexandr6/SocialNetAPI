//mongoosejs.com/docs/async-await.html
//https://www.codepedia.org/ama/cleaner-code-in-nodejs-with-async-await-mongoose-calls-example
//https://mongoosejs.com/docs/queries.html

const Thought = require("../models/Thought");
const User = require("../models/User");

module.exports = {
  // get all thoughts
  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find({});
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // get one thought
  async getOneThought(req, res) {
    try {
      const thought = await Thought.findOne(req.params.id);
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // create thought
  async createThought(req, res) {
    try {
      const newThought = await Thought.create(req.body);
      const user = await User.updateOne(
        { _id: req.body.userId },
        { $push: { thoughts: Thought._id } },
        { runValidators: true, new: true }
      );
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // update thought
  async updateThought(req, res) {
    try {
      const Thoughtid = req.params.id;
      const thought = await Thought.findOneAndUpdate(
        { _id: Thoughtid },
        { $push: { reactions: req.body } },
        { new: true }
      );
      if (!thought) {
        return res.status(404).json("No thought with that Id");
      }
      res.json(thought);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  // delete thought
  async deleteThought(req, res) {
    try {
      const thought = await Thought.findOneAndDelete(req.params.id);
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // create reaction
  async createReaction(req, res) {
    try {
      const newReaction = {
        reactionBody: req.body.reactionBody,
        username: req.body.username,
      };

      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.id },
        { $push: { reactions: newReaction } },
        { new: true }
      );
      res.json(!thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // delete reaction
  async deleteReaction(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.id });
      if (!thought) {
        return res.status(404).json("No thought with that Id");
      }
      thought.reactions.pull({ _id: req.params.reactionId }), thought.save();
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
