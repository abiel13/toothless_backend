const { default: mongoose } = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    cart: {
      type: mongoose.Types.ObjectId,
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
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
