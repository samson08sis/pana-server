const express = require("express");
const {
  getContent,
  updateAll,
  updateSection,
  resetContent,
} = require("../../controllers/aboutUsController");
const router = express.Router();

router.get("/", getContent);
router.put("/update-all", updateAll);
router.put("/update/:section", updateSection);
// DEV
router.delete("/delete-all", resetContent);

module.exports = router;
