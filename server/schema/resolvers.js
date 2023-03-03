const { User, Post, Prompt, Comment } = require('./models/index');
const {createToken} = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');
console.log(createToken);

const resolvers = {

    Query: {
        getUsers: async (_, { username, password }) => {
            const user = await User.findOne({ username, password });
            return user;
        },
        
        // posts: async (_, { post }) => {
        //     const post = await Post.findOne({ post });
        //     return post;
        // },
        
        // prompt: async (_, { title, category }) => {
        //     const params = {};

        //     if (title) {
        //         params.title = title;
        //     }

        //     if (category) {
        //         params.category = category;
        //     }

        //     const prompt = await Prompt.find(params).populate({ prompt });
        //     return prompt;
        // },

        // comment: async (_, { post }) => {
        //     const comment = await Comment.findOne({ post });
        //     return comment;
        // }
    },

    Mutation: {
        register: async (_, { unique_id, email, username, password }) => {
            const user = await User.create({ unique_id, email, username, password });
            const token = createToken(user);
            return { token, user };
        },

        // login: async (_, { username, password }) => {
        //     const user = await User.findOne({ username, password });

        //     if (!user.username || !user.password) {
        //         throw new AuthenticationError('Username or password is incorrect!');
        //     }

        //     const token = createToken(user);
        //     return { token, user };
        // },

        // createPost: async (_, { post }) => {
        //     const post = await Post.create({ post });

        //     return { post }; 
        // },

        // addComment: async (_, { post }, context) => {
        //     console.log(context);

        //     if (context.user) {
        //         const comment = new Comment ({ post });

        //         await User.findByIdAndUpdate(context.user.id, { $push: {comment: comment}});

        //         return comment;
        //     }
            
        //     throw new AuthenticationError('Not logged in');
        // },
    },   
};

module.exports = resolvers;