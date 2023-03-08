const { User, Post, Prompt, Comment } = require("./models/index");
const { signToken } = require("../utils/auth");
const { AuthenticationError, ApolloError } = require("apollo-server-express");
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
      const post = await Post.findAll({}).populate("prompt").populate("creator");
      return post;
    },

    getMe: async () => {
      const me = await User.findById(req.user.id);
      return me;
    }
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

      if (!prompt) {
        throw new ApolloError("Could not find that prompt :(");
      }

      const updatedUser = await User.findOneAndUpdate(
        { _id: user._id },
        { $set: { activePrompt: prompt } },
        { new: true }
      ).populate("activePrompt");

      if (!updatedUser) {
        throw new ApolloError("Could not update the User :(");
      }

      return updatedUser;
    },

    createPost: async (_, { promptId, caption }, context) => {
      try {

        const prompt = await Prompt.findById(promptID);

        if (!prompt) {
          throw new UserInputError("Prompt does not exist");
        }

        const post = new Post({
          prompt,
          caption,
          creator: context.user._id,
          createdAt: Date.now(),
        });

        await post.save();

        const user = await User.findOneAndUpdate(
          currentUser._id,
          { $push: { posts: post } },
          { new: true }
        );

        return post;

      } catch (err) {
        console.log(err);
      }

    },

  },
};

module.exports = resolvers;