const { Port } = require("./config");
const express = require("express");
const { databaseConnection } = require("./database");
const { expressApp } = require("./expressApp");

async function startServer() {
  const app = express();

  await expressApp(app);
  await databaseConnection();

  app.listen(Port, () => {
    console.log(
      "===================== app connected ========================="
    ); 
  });
}

startServer();
