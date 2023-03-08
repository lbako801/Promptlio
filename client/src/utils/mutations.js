import { gql } from "@apollo/client";

export const REGISTER_USER = gql`
  mutation Mutation($username: String!, $email: String!, $password: String!) {
    register(username: $username, email: $email, password: $password) {
      unique_id
    }
  }
`;

export const LOGIN = gql`
  mutation Mutation($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
    }
  }
`;

export const SET_ACTIVE_PROMPT = gql`
  mutation Mutation($promptId: String!) {
    activePrompt(promptId: $promptId) {
      activePrompt {
        title
        _id
      }
      unique_id
      email
      password
    }
  }
`;
