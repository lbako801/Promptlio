const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

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

const userSchema = new mongoose.Schema({  
  email: {
    type: String,
    required: true,
    unique: true,
    validate: emailValidator,
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
  token: {
    type: String,
  },
  profile_pic: {
    type: String,
    default: "/path/to/default/image.jpg",
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    }
  ],
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
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ]
});


userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  if (this.isNew) {
    const userUniqueId = Math.floor(100000 + Math.random() * 900000).toString();
    this.unique_id = userUniqueId;
  }
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = {User};