const { ProductService } = require("../services");
const { CustomError } = require("../utils");

module.exports = (app) => {
  const services = new ProductService();

  app.get("/product", async (req, res, next) => {
    try {
      const response = await services.listProducts();
      res.status(200).json({
        data: response,
        message: "success",
      });
    } catch (error) {
      next(error);
    }
  });

  app.post("/product", async (req, res, next) => {
    try {
      const { title, price, product_location, imageUrl, description } =
        req.body;
      const response = await services.createProduct({
        title,
        price,
        product_location,
        imageUrl,
        description,
      });

      res.status(200).json({
        data: response,
      });
    } catch (error) {
      next(error);
    }
  });

  app.get("/product/:id", async (req, res, next) => {
    try {
      const response = await services.getProductById(req.params.id);

      res.status(200).json({
        data: response,
        message: "success",
      });
    } catch (error) {
      next(error);
    }
  });

  app.get("/product/search/:id", async (req, res, next) => {
    try {
      const response = await services.queryProducts(req.params.id);

      res.status(200).json({
        data: response,
        message: "success",
      });
    } catch (error) {
      next(error);
    }
  });
};
