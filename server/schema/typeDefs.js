const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type User {
    id: ID!        
    username: String!
    email: String!
    token: String!    
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
    prompt: Prompt
    comment(post: ID): Comment    
  }

  type Mutation {
    login(username: String!, password: String!): Auth
    register(unique_id: String!, username: String!, email: String!, password: String!, token: String!): Auth
    createPost(post: String!, creator: String!, likes: Int!, createdAt: String!, comment: String!): Post    
    addComment(post: ID!, creator: String!, text: String!, created_at: String!): Comment    
  }

  `
module.exports = typeDefs;