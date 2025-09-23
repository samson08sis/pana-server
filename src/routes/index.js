const express = require("express");
const router = express.Router();

const homeRoutes = require("./homeRoutes");

// Mount each route under its own path
router.use("/home", homeRoutes);

module.exports = router;
