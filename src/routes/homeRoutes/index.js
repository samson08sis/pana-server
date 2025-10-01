// routes/homeRoutes.js
const express = require("express");
const router = express.Router();
const {
  getHomeContent,
  updateSection,
  updateAll,
  resetHomeContent,
} = require("../../controllers/homeController");

router.get("/", getHomeContent);
router.put("/update-all", updateAll);
router.put("/update/:section", updateSection);
// DEV
router.delete("/delete-all", resetHomeContent);

module.exports = router;
