const UserRepository = require("../database/repository/userRepository");
const { CustomError } = require("../utils/customError");

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async createUser(userData) {
    try {
      return await userRepository.createUser(userData);
    } catch (error) {
      throw new CustomError(`error in UserService: `, 400, error.message);
    }
  }

  async getUserById(userId) {
    try {
      return await userRepository.findUserById(userId);
    } catch (error) {
      throw new CustomError(`error in UserService: `, 400, error.message);
    }
  }

  async getUserByUsername(username) {
    try {
      return await userRepository.findUserByUsername(username);
    } catch (error) {
      throw new CustomError(`error in UserService: `, 400, error.message);
    }
  }

  async updateUser(userId, updateData) {
    try {
      return await userRepository.updateUserById(userId, updateData);
    } catch (error) {
      throw new CustomError(`error in UserService: `, 400, error.message);
    }
  }

  async deleteUser(userId) {
    try {
      await userRepository.deleteUserById(userId);
    } catch (error) {
      throw new CustomError(`error in UserService: `, 400, error.message);
    }
  }

  async addToCart(userId, productId) {
    try {
      return await userRepository.addToCart(userId, productId);
    } catch (error) {
      throw new CustomError(`error in UserService: `, 400, error.message);
    }
  }

  async removeFromCart(userId, productId) {
    try {
      return await userRepository.removeFromCart(userId, productId);
    } catch (error) {
      throw new CustomError(`error in UserService: `, 400, error.message);
    }
  }

  async addToFavorites(userId, productId) {
    try {
      return await userRepository.addToFavorites(userId, productId);
    } catch (error) {
      throw new CustomError(`error in UserService: `, 400, error.message);
    }
  }

  async removeFromFavorites(userId, productId) {
    try {
      return await userRepository.removeFromFavorites(userId, productId);
    } catch (error) {
      throw new CustomError(`error in UserService: `, 400, error.message);
    }
  }
}

module.exports = UserService;
