//https://mongoosejs.com/docs/queries.html
//https://mongoosejs.com/docs/async-await.html
//https://www.codepedia.org/ama/cleaner-code-in-nodejs-with-async-await-mongoose-calls-example
//https://mongoosejs.com/docs/queries.html
const connection = require("./config/connection");
const User = require("./models/User");
const Thought = require("./models/Thought");
const { default: mongoose } = require("mongoose");
//users
const users = [
  {
    username: "aaron",
    email: "ap@email.com",
  },
];
//
const posts = [
  {
    ThoughtText: "test",
    username: "testing",
  },
  {
    ThoughtText: "test",
    username: "testing",
  },
];
const Reaction = [
  {
    reactionId: "test",
    reactionBody: "test",
  },
];

connection.once("open", async () => {
  await Thought.deleteMany({});
  await User.deleteMany({});
  const createdUsers = await User.insertMany(users);
  const createdPosts = await Thought.insertMany(posts);
  console.log("seeded");
  mongoose.disconnect();
});

console.table(createdUsers);
console.table(createdPosts);
console.log("seeded");
process.exit();
