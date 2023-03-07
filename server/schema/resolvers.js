const { User, Post, Prompt, Comment } = require("./models/index");
const { signToken } = require("../utils/auth");
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
      return user;
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

      const token = signToken(user);

      return { token, user };
    },

    activePrompt: async (_, { promptId }, { user }) => {
      const prompt = await Prompt.findById(promptId);

      const updatedUser = await User.findOneAndUpdate(
        { _id: user._id },
        { $set: { activePrompt: prompt._id } },
        { new: true }
      );

      return updatedUser.activePrompt;
    },

    createPost: async (_, { promptId, caption }, { user }) => {
      const post = new Post({
        creator: user._id,
        prompt: promptId,
        caption,
      });

      const savedPost = await post.save();

      return savedPost;
    },
  },
};

module.exports = resolvers;
