// Create Express App
const express = require("express");
const DBConnection = require("./config/DB");
const app = express();

// Setting up config file
if (process.env.NODE_ENV !== "PRODUCTION")
  require("dotenv").config({ path: "backend/config/config.env" });

//   Database Connection
// DBConnection();

// Create Express Server
const port = process.env.PORT || 3000;
const host = `localhost:${port}`;
const server = app.listen(port, () => {
  console.log(`Server is running on ${host}`);
});
