const User = require("../models/user");

class UserRepository {
  async createUser(userData) {
    try {
      const user = new User(userData);
      await user.save();
      return user;
    } catch (error) {
      throw new Error(`Error creating user: ${error.message}`, 400);
    }
  }

  // Find a user by ID
  async findUserById(userId) {
    try {
      const user = await User.findById(userId).populate("cart favorites");
      return user;
    } catch (error) {
      throw new Error(`Error finding user by ID: ${error.message}`, 400);
    }
  }

  // Find a user by username
  async findByUsername(username) {
    try {
      const user = await User.findOne({ username }).populate("cart favorites");
      return user;
    } catch (error) {
      throw new Error(`Error finding user by username: ${error.message}`, 400);
    }
  }

  // Update a user by ID
  async UpdateUserById(userId, updateData) {
    try {
      const user = await User.findByIdAndUpdate(userId, updateData, {
        new: true,
      }).populate("cart favorites");
      return user;
    } catch (error) {
      throw new Error(`Error updating user: ${error.message}`, 400);
    }
  }

  // Delete a user by ID
  async deleteUserById(userId) {
    try {
      await User.findByIdAndDelete(userId);
    } catch (error) {
      throw new Error(`Error deleting user: ${error.message}`, 400);
    }
  }

  // Add a product to the cart
  async addToCart(userId, productId) {
    try {
      const user = await User.findById(userId);
      user.cart.push(productId);
      await user.save();
      return user;
    } catch (error) {
      throw new Error(`Error adding to cart: ${error.message}`, 400);
    }
  }

  // Remove a product from the cart
  async removeToCart(userId, productId) {
    try {
      const user = await User.findById(userId);
      user.cart.pull(productId);
      await user.save();
      return user;
    } catch (error) {
      throw new Error(`Error removing from cart: ${error.message}`, 400);
    }
  }

  // Add a product to favorites
  async addFavorite(userId, productId) {
    try {
      const user = await User.findById(userId);
      user.favorites.push(productId);
      await user.save();
      return user;
    } catch (error) {
      throw new Error(`Error adding to favorites: ${error.message}`, 400);
    }
  }

  // Remove a product from favorites
  async removeFavorites(userId, productId) {
    try {
      const user = await User.findById(userId);
      user.favorites.pull(productId);
      await user.save();
      return user;
    } catch (error) {
      throw new Error(`Error removing from favorites: ${error.message}`, 400);
    }
  }
}

module.exports = UserRepository;
