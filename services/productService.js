const ProductRepository = require("../database/repository/productRepository");

class ProductService {
  constructor() {
    this.repository = new ProductRepository();
  }

  async createProduct(schema) {
    try {
      const response = await this.repository.createProduct(schema);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async listProducts() {
    try {
      const response = await this.repository.getProducts();
      return response;
    } catch (error) {
      throw error;
    }
  }
  async getProductById(id) {
    try {
      const response = await this.repository.getProduct(id);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async queryProducts(query) {
    try {
      const response = await this.repository.searchProduct(query);
      return response;
    } catch (error) {
      throw error;
    }
  }

  
}

module.exports = ProductService;
