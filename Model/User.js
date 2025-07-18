const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  picture: {type:String ,default:'https://www.pngkit.com/png/detail/281-2812821_user-account-management-logo-user-icon-png.png'} ,
  password:String,
  comment: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
