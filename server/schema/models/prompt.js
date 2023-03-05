const mongoose = require('mongoose');

const promptSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    created_at: {
      type: Date,
      default: Date.now
    },
    post_count: {
      type: Number,
      default: 0
    },
    posts: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post'
    }]
  });

const Prompt = mongoose.model('Prompt', promptSchema);

module.exports = {Prompt};