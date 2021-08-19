//documentation for build
const {gql} = require('apollo-server-express')

const typeDefs = gql`
type Game {
   _id: ID
   xIsNext: Boolean
}

type User {
    _id: ID!
    email: String
  }

  type Auth {
    token: ID!
    user: User
  }

type Query {
    games: [Game], 
    game(gameId:ID!): Game
    me: User
}

type Mutation {
    createGame: Game
    login(email: String!, password: String!): Auth
    signup(email: String!, password: String!): Auth
}
`
   //add update game and more by create game
module.exports = typeDefs

//get by id, create game, update game