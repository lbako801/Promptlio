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
      caption
      photo
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

export const QUERY_ME = gql`
  query GetMe {
    getMe {
      posts {
        caption
        creator {
          username
        }
      }
      activePrompt {
        _id
        title
      }
    }
  }
`;
