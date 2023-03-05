import { gql } from "@apollo/client";

export const QUERY_POSTS = gql`
  query Query {
    getPosts {
      creator {
        username
      }
      prompt {
        title
      }
      created_at
    }
  }
`;
