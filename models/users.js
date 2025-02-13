const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name required"],
    minlength: 2,
    maxlength: 30,
  },
  about: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  avatar: {
    type: String,
    required: true,
    validate: {
      validator: (err) => {
        return /^(https?:\/\/)(www\.)?([a-zA-Z0-9._~:/?%#\[\]@!$&'()*+,;=]+)(\/[a-zA-Z0-9._~:/?%#\[\]@!$&'()*+,;=]*)*(#.*)?$/.test(
          err
        );
      },
      message: "Invalid url",
    },
  },
});

module.exports = mongoose.model("user", userSchema);
