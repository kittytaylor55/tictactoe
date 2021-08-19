//documentation for build
const {gql} = require('apollo-server-express')

const typeDefs = gql`
type Game {
   _id: ID
   xIsNext: Boolean
}

type Query {
    games: [Game], 
    game(gameId:ID!): Game
}

type Mutation {
    createGame: Game
 
}
`
   //add update game and more by create game
module.exports = typeDefs

//get by id, create game, update game