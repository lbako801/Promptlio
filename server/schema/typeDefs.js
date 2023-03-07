const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    unique_id: ID
    username: String
    email: String
    token: String
    password: String
    profile_pic: String
    posts: [Post]
    prompts: [Prompt]
    comments: [Comment]
    activePrompt: [Prompt]
  }

  type Post {
    creator: User
    prompt: Prompt
    caption: String
    likes: [User]
    created_at: String
    comments: [Comment]
  }

  type Comment {
    creator: User!
    post: Post!
    text: String!
    created_at: String!
  }

  type Prompt {
    _id: ID
    title: String!
    category: String!
    created_at: String!
    post_count: Int!
    posts: [Post]!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    getUsers: [User]
    getPosts: [Post]
    getPrompts: [Prompt]
    post(id: Int!): Post
    comment(post: ID): Comment
  }

  type Mutation {
    login(username: String!, password: String!): Auth
    register(username: String!, email: String!, password: String!): User
    createPost(promptId: ID!, caption: String): Post!
    createComment(post: ID!, creator: String!, text: String!): Comment
    activePrompt(activePrompt: String): User
    getCurrentPrompt(promptId: ID!): Prompt
  }
`;
module.exports = typeDefs;
