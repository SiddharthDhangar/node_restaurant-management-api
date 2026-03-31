const mongoose = require("mongoose");
require("dotenv").config();
//Define the MongoDB connection URL
const mongoURL = process.env.MONGO_URL;

// set up mongodb connection
mongoose.connect(mongoURL);

// Get the default connection
// Mongoose maintains a default object representing the MongoDB connection.
const db = mongoose.connection;

// Define event listeners for database connection

db.on("connected", () => {
  console.log("Connected to MongoDB server");
});

db.on("error", (error) => {
  console.log("MongoDB connection error: ", error);
});

db.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

module.exports = db;
