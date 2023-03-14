const { User, Post, Prompt, Comment } = require("./models/index");
const { signToken } = require("../utils/auth");
const { AuthenticationError, ApolloError } = require("apollo-server-express");
const bcrypt = require("bcrypt");
const GraphQLUpload = require("graphql-upload/GraphQLUpload.js");
const fs = require("fs");
const path = require("path");
require("dotenv").config();
const uploadPhoto = require("./resolverUtils/uploadPhoto");

const resolvers = {
  Upload: GraphQLUpload,

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
      const post = await Post.find({})
        .sort({ created_at: -1 })
        .populate("prompt")
        .populate("creator");
      return post;
    },

    getMe: async (_, __, { user }) => {
      const me = await User.findById(user._id)
        .populate("activePrompt")
        .populate({ path: "posts", populate: { path: "creator" } });

      if (!me) {
        throw new ApolloError("User not found");
      }

      return me;
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

    createPost: async (_, { promptId, caption, photo }, context) => {
      try {
        const prompt = await Prompt.findById(promptId);

        if (!prompt) {
          throw new ApolloError("Prompt does not exist");
        }

        const user = await User.findById(context.user._id);

        const imageRes = await uploadPhoto(photo);
        const { url: imageUrl } = imageRes;

        const post = new Post({
          prompt,
          caption,
          creator: user,
          createdAt: Date.now(),
          photo: imageUrl,
        });

        await post.save();

        const newUser = await User.updateOne(
          { _id: user._id },
          { $push: { posts: post } }
        );

        return post;
      } catch (err) {
        console.log(err);
      }
    },
    uploadPhoto: async (_, { file }, context) => {
      const response = await uploadPhoto(file);
      return null;
    },
  },
};

module.exports = resolvers;
