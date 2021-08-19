const { Game, User } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    games: async () => {
      return Game.find().sort({ createdAt: -1 });
    },
    game: async (parent, { gameId }) => {
      return Game.findOne({ _id: gameId });
    },
    me: () => {
      return {};
    },
  },
  Mutation: {
    createGame: async (parent, args) => {
      const game = await Game.create({});
      console.log(game);
      return game;
    },
    signup: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    },
  },
};

module.exports = resolvers;
