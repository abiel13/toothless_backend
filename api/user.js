const { UserService } = require("../services");

module.exports = (app) => {
  const userService = new UserService();

  // Create a new user
  app.post("/users", async (req, res) => {
    try {
      const user = await userService.createUser(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });

  // Get a user by ID
  app.get("/users/:id", async (req, res) => {
    try {
      const user = await userService.getUserById(req.params.id);
      res.status(200).json({
        data: user,
        message: "success",
      });
    } catch (error) {
      next(error);
    }
  });

  // Get a user by username
  app.get("/users/username/:username", async (req, res) => {
    try {
      const user = await userService.getUserByUsername(req.params.username);
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  });

  // Update a user by ID
  app.put("/users/:id", async (req, res) => {
    try {
      const user = await userService.updateUser(req.params.id, req.body);
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  });

  // Delete a user by ID
  app.delete("/users/:id", async (req, res) => {
    try {
      await userService.deleteUser(req.params.id);
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  });

  // Add a product to the cart
  app.post("/users/:id/cart", async (req, res) => {
    try {
      const user = await userService.addToCart(
        req.params.id,
        req.body.productId
      );
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  });

  // Remove a product from the cart
  app.delete("/users/:id/cart", async (req, res) => {
    try {
      const user = await userService.removeFromCart(
        req.params.id,
        req.body.productId
      );
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  });

  // Add a product to favorites
  app.post("/users/:id/favorites", async (req, res) => {
    try {
      const user = await userService.addToFavorites(
        req.params.id,
        req.body.productId
      );
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  });

  // Remove a product from favorites
  app.delete("/users/:id/favorites", async (req, res) => {
    try {
      const user = await userService.removeFromFavorites(
        req.params.id,
        req.body.productId
      );
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  });
};
