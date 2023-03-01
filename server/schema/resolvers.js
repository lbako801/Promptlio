const User = require('.schema');
const createToken = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {

    Query: {
        getUsers: async (_, { username, password }) => {
            const user = await User.findOne({ username, password });
            return user;
        },
        posts : async (_, { post }) => {
            const post = await Post.findOne({ post });
            return post;
    },

    Mutation: {
        register: async (_, { name, email, username, password }) => {
            const user = await User.create({ name, email, username, password });
            const token = createToken(user);
            return { token, user };
        },

        login: async (_, { username, password }) => {
            const user = await User.findOne({ username, password });

            if (!user.username || !user.password) {
                throw new AuthenticationError('Username or password is incorrect!');
            }

            const token = createToken(user);
            return { token, user };
        },

        createPost: async (_, { post }) => {
            const post = await Post.create({ post });

            return { post }; 
        },
    },
  }
    

};

module.exports = resolvers;