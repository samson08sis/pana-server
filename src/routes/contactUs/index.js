const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");

router.get("/", contactController.getContactContent);
router.put("/update", contactController.updateAll);
router.put("/update/:section", contactController.updateSection);
router.delete("/reset", contactController.resetContactContent);

module.exports = router;
