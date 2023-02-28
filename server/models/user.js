const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  unique_id: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    validate: passwordValidator,
  },
  profile_pic: {
    type: String,
    default: "/path/to/default/image.jpg",
  },
  prompts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Prompt",
    },
  ],
  following: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  followers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  liked_posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
});

const emailValidator = {
  validator: function (value) {
    const emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailRegex.test(value);
  },
  message: "Please enter a valid email address",
};

const passwordValidator = {
  validator: function (value) {
    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(value);
  },
  message:
    "Password must be at least 8 characters long and contain at least one capital letter, one number, and one special character.",
};

const User = mongoose.model("User", userSchema);

module.exports = User;