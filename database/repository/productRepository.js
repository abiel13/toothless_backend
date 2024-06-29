const Product = require("../models/product");
const { CustomError } = require("../../utils");

class ProductRepository {
  async createProduct(schema) {
    try {
      const newProduct = await Product.create(schema);
      return "Created Product Successfully";
    } catch (error) {
      throw error;
    }
  }

  async getProducts() {
    try {
      const products = await Product.find();
      return products;
    } catch (error) {
      throw new CustomError("Error getting products", 400, error.stack);
    }
  }

  async getProduct(_id) {
    try {
      const products = await Product.find({ _id });
      return products;
    } catch (error) {
      throw new CustomError("Error getting product", 400, error.stack);
    }
  }

  async searchProduct(query) {
    const result = await Product.aggregate([
      {
        $search: {
          index: "products",
          text: {
            query: query,
            path: {
              wildcard: "*",
            },
          },
        },
      },
    ]);

    return result;
  }
}

module.exports = ProductRepository;
