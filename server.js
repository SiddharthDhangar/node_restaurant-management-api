//1. imports
const express = require("express");
const app = express();
require("dotenv").config();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

//2. app init
const port = process.env.PORT;  
const db = require("./db");

// Import the router files
const personRoutes = require("./routes/personRoutes.js");
const menuRoutes = require("./routes/menuItemRoutes.js");

// Use the routers
app.use("/person", personRoutes);
app.use("/menu", menuRoutes);

//3. routes
app.get("/", (req, res) => {
  res.send("Hey I am here...");
});

//4. start server
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
