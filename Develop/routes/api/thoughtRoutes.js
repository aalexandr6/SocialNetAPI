const thought = require("express").Router();

const {
  getThoughts,
  getOneThought,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction,
} = require("../../controllers/thoughtControllers");

thought.route("/").get(getThoughts).post(createThought);
thought
  .route("/:id")
  .get(getOneThought)
  .put(updateThought)
  .delete(deleteThought);
thought.route("/:thoughtId/reactions").post(createReaction);
thought.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

module.exports = thought;
