const { Game, User } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    games: async () => {
      return Game.find().sort({ createdAt: -1 });
    },
    game: async (parent, { gameId }, context) => {
      if (context.user) {
        return await Game.findOne({
          userid: context.user._id,
          isFinished: false,
        });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    me: () => {
      return {};
    },
  },
  Mutation: {
    createGame: async (parent, args, context) => {
      if (context.user) {
        const game = await Game.create({
          history: [{ squares: Array(9).fill(null) }],
          userid: context.user._id,
        });
        console.log(game);
        return game;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    updateGame: async (parent, args, context) => {
      if (context.user) {
        return await Game.findOneAndUpdate(
          { userid: context.user._id, isFinished: false },
          {
            ...args,
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    signup: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },
  },
};

module.exports = resolvers;
