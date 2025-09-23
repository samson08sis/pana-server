// routes/homeRoutes.js
const express = require("express");
const router = express.Router();
const {
  getHomeContent,
  updateSection,
} = require("../controllers/homeController");

router.get("/", getHomeContent);
router.put("/:section", updateSection);

module.exports = router;
