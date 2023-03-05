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

export const QUERY_PROMPTS = gql`
  query Query {
    getPrompts {
      _id
      title
    }
  }
`;
