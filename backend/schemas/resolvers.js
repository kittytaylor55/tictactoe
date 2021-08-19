const {Game} = require ('../models') 
const resolvers = {
    Query:{
        games: async () => {
            return Game.find().sort({ createdAt: -1 });
          },
          game: async (parent, { gameId }) => {
            return Game.findOne({ _id: gameId });
          },
    }, 
    Mutation:{
        createGame: async (parent, args) => {
            const game = await Game.create({})
            console.log(game)
            return game 
    }}}

    module.exports = resolvers 