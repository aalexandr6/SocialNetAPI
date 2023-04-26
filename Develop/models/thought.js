//thought,reaction
//https://mongoosejs.com/docs/schematypes.html
const { Schema, model, Types } = require("mongoose");
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: "enter a reaction!",
      minlength: 1,
      maxlength: 200,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      //https://mongoosejs.com/docs/guide.html
      //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const thoughtSchema = new Schema(
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
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const Thought = model("thought", thoughtSchema);

// reaction schema
reactionSchema.virtual("Dateformat").get(function () {
  return this.reactions.length;
});

// get total count of reactions
thoughtSchema.virtual("Dateformat").get(function () {
  return this.reactions.length;
});

//reaction virtual
thoughtSchema.virtual("reactionLength").get(function () {
  return this.reactions.length;
});

module.exports = Thought;
