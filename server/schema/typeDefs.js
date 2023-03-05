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
  }

  type Post {
    creator: User
    prompt: Prompt
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
    register(username: String!, email: String!, password: String!): Auth
    createPost(prompt: String!, creator: String!): Post
    createComment(post: ID!, creator: String!, text: String!): Comment
  }
`;
module.exports = typeDefs;
