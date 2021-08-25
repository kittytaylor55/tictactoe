import { gql } from "@apollo/client";

const loginQuery = gql`
  query ($name: String!, $password: String!) {
    login(username: $username, password: $password) {
      name
    }
  }
`;

const registerMutation = gql`
  mutation ($name: String!, $password: String!, $confirmPassword: String!) {
    register(
      username: $username
      password: $password
      confirmPassword: $confirmPassword
    ) {
      name
    }
  }
`;

export { loginQuery, registerMutation };
