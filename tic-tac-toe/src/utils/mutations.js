import { gql } from '@apollo/client';

export const CREATE_GAME = gql `
    mutation createGame {

    }
`
export const SIGN_UP = gql `
    mutation signup($email: String!, $password: String!) {
        signup(email: $email, password: $password){
            token
            user {
                _id
                email
            }
        }
    }
`
export const LOGIN = gql `
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                email
            }
        }
    }
`