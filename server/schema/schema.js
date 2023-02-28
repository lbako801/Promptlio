const { User } = require('./schema/user');
const {Post} = require('./schema/post');
const {Comment} = require('./schema/comment');
const { Prompt } = require('./schema/prompt');

module.exports = { User, Post, Comment, Prompt };