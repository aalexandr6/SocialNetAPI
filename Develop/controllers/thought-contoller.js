//mongoosejs.com/docs/async-await.html
const {Thought, User} = require('../models');

module.exports = {
    // get all thoughts
async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find({});
      res.json(thoughts);
    }
    catch (err) {
        res.status(500).json(err);
        }
},
// get one thought
async getOneThought(req, res) {
    try {
        const thought = await Thought.findOne(req.params.id);
        res.json(thought);
        }
    catch (err) {
        res.status(500).json(err);
        }
},
// create thought
async createThought(req, res) {
    try {
        const thought = await Thought.create(req.body);
        res.json(thought);
        }
    catch (err) {
        res.status(500).json(err);
        }
},
// update thought
async updateThought(req, res) {
    try {
        const Thoughtid = req.params.id;
        const thought = await Thought.findOneAndUpdate(
            { _id: Thoughtid },
            { $set: req.body },
            { runValidators: true, new: true }
        );
        res.json(thought);
        }
    catch (err) {
        res.status(500).json(err);
        }
},
// delete thought
async deleteThought(req, res) {
    try {
        const thought = await Thought.findOneAndDelete(req.params.id);
        res.json(thought);
        }
    catch (err) {
        res.status(500).json(err);
        }
    },
//reaction

