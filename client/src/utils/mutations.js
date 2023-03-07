import { gql } from "@apollo/client";

export const REGISTER_USER = gql`
mutation Mutation($username: String!, $email: String!, $password: String!) {
  register(username: $username, email: $email, password: $password) {
    unique_id
  }
}`;