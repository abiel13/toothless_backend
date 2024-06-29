const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    cart: {
      type: [mongoose.Types.ObjectId],
      ref: "Product",
      required: true,
    },
    profilePics: {
      type: String,
      required: true,
    },
    seller: {
      type: Boolean,
      required: true,
      default: false,
    },
    favorites: {
      type: [mongoose.Types.ObjectId],
      ref: "Product",
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
