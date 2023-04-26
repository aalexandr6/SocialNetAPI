//https://mongoosejs.com/docs/schematypes.html
const { Schema, model } = require("mongoose");
const userSchema = new Schema(
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
        ref: "thought",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "user",
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
userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

// User model to the UserSchema
const User = model("user", userSchema);

module.exports = User;
