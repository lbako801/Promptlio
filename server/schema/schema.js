const { User } = require('./schema/user');
const {Post} = require('./schema/post');
const {Comment} = require('./schema/comment');
const { Prompt } = require('./schema/prompt');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

module.exports = { User, Post, Comment, Prompt, typeDefs, resolvers };