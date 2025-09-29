// src/app.js

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const routes = require("./routes");
const connectDB = require("../config/db");

const app = express();

// Connect to DB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/", (req, res) => {
  res.json({ Message: "Panacea's Server" });
});
app.use("/api", routes);

// 404 handler
app.use((req, res, next) => {
  res.status(404).json({ message: "Not Found" });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

module.exports = app;
