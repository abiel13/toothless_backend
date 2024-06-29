const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  Port: process.env.PORT,
  Mongo_Uri: process.env.MONGO_URI,
};
