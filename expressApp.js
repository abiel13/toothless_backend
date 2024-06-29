const cors = require("cors");
const express = require("express");
const { HandleError } = require("./utils");
const { product } = require("./api");

module.exports.expressApp = async (app) => {
  app.use(cors());

  app.use(express.json());

  product(app);

  app.use(HandleError);
};
