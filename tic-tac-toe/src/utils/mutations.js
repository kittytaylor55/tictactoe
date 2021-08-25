import { gql } from "@apollo/client";

// export const CREATE_GAME = gql `
//     mutation createGame {

//     }
// `
export const SIGN_UP = gql`
  mutation signup($username: String!, $password: String!) {
    signup(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
export const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
