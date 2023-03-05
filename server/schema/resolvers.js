const { User, Post, Prompt, Comment } = require("./models/index");
const { createToken } = require("../utils/auth");
const { AuthenticationError } = require("apollo-server-express");
const bcrypt = require("bcrypt");

const resolvers = {
    Query: {
        getUsers: async () => {
            const user = await User.find();
            return user;
        },

        getPrompts: async () => {
            const prompt = await Prompt.find();
            return prompt;
        },

        getPosts: async () => {
            const post = await Post.find({}).populate("prompt").populate("creator");
            return post;
        },
    },

    Mutation: {
        register: async (_, { email, username, password }) => {
            const user = await User.create({ email, username, password });
            const token = createToken(user);
            return { token, user };
        },

        login: async (_, { username, password }) => {
            const user = await User.findOne({ username });

            if (!user) {
                throw new AuthenticationError("Incorrect credentials - user");
            }

            const pwCheck = await bcrypt.compare(password, user.password);

            if (!pwCheck) {
                throw new AuthenticationError("Incorrect credentials - pw");
            }

            const token = createToken(user);

            return { token, user };
        },
    }
};

module.exports = resolvers;
