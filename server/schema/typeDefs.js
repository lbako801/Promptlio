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
    comment(post: ID): Comment
    prompts: Prompt
  }

  type Mutation {
    login(username: String!, password: String!): Auth
    register(name: String!, username: String!, email: String!, password: String!): Auth
    createPost(post: String!, creator: String!, likes: Int!, createdAt: String!, comment: String!): Post
    addComment(post: ID!, creator: String!, text: String!, created_at: String!): Comment
    newPrompt(title: String!, ): Prompt
  }

  `
module.exports = typeDefs;