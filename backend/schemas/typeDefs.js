//documentation for build
const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Game {
    _id: ID
    userid: ID
    xIsNext: Boolean
    history: [History]
  }

  type History {
    squares: [String]
  }
  input InputHistory {
    squares: [String]
  }
  type User {
    _id: ID!
    username: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    games: [Game]
    game(gameId: ID!): Game
    me: User
  }

  type Mutation {
    createGame: Game
    updateGame(history: InputHistory): Game
    login(username: String!, password: String!): Auth
    signup(username: String!, password: String!): Auth
  }
`;
//add update game and more by create game
module.exports = typeDefs;

//get by id, create game, update game
