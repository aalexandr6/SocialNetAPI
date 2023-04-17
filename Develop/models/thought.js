//thought,reaction
//https://mongoosejs.com/docs/schematypes.html
const { Schema, model } = require("mongoose");
const ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: "enter a thought!",
      minlength: 1,
      maxlength: 300,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => dateFormat(createdAtVal),
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [ReactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

// thought model to the ThoughtSchema
const Thought = model("Thought", ThoughtSchema);

// reaction schema
const ReactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: "enter a reaction!",
      minlength: 1,
      maxlength: 300,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      //https://mongoosejs.com/docs/guide.html
      type: Date,
      default: Date.now,
      //val is the current date
      get: (createdAtVal) => dateFormat(createdAtVal),
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

// get total count of reactions
ThoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

module.exports = Thought;
