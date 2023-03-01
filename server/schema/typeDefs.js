const graphQL = require('apollo-server-express');

const typeDefs = graphQL`

  type User {
    id: ID!
    name: String!
    username: String!
    email: String!
    profile_pic: String!
    posts: [Post]!
    prompts: [Prompt]!
    comments: [Comment]!
  }

  type Post {
    creator: User!
    prompt: Prompt!
    likes: [User]!
    created_at: String!
    comments: [Comment]
  }

  type Comment {
    creator: User!
    post: Post!
    text: String!
    created_at: String!
  }

  type Prompt {
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
    getUsers: User
    posts: [Post]
    post(id: Int!): Post
  }

  type Mutation {
    login(username: String!, password: String!): Auth
    register(name: String!, username: String!, email: String!, password: String!): Auth
    createPost(post: String!, creator: String!, likes: Int!, createdAt: String!, comment: String!):
  }

  `
module.exports = typeDefs;