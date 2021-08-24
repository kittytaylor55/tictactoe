const { Schema, model } = require("mongoose");

const gameSchema = new Schema({
  isFinished: {
    type: Boolean,
  },
  userid: {
    type: String,
  },
  xIsNext: {
    type: Boolean,
    default: true,
  },
  stepNumber: {
    type: Number,
    default: 0,
  },
  history: [
    {
      squares: [
        {
          type: String,
        },
      ],
    },
  ],
});

const Game = model("Game", gameSchema);
module.exports = Game;
