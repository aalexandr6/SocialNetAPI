//https://mongoosejs.com/docs/schematypes.html
const { Schema, model } = require("mongoose");
const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: "Username is required",
      trim: true,
    },
    email: {
      type: String,
      required: "Email is required",
      unique: true,
      //https://masteringjs.io/tutorials/mongoose/mongoose-validate-unique-email
      //validate
      match: [/.+@.+\..+/, "please enter a valid e-mail address"],
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

// get total count of friends
UserSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

// User model to the UserSchema
const User = model("User", UserSchema);

module.exports = User;
