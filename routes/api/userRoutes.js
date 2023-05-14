const users = require("express").Router();

const {
  getUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/userController");

users.route("/").get(getUsers).post(createUser);
users.route("/:id").get(getOneUser).put(updateUser).delete(deleteUser);
users.route("/:userId/friends/:friendId").post(addFriend).delete(deleteFriend);


