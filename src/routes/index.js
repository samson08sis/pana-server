const express = require("express");
const router = express.Router();

// Example route: GET /api/
router.get("/", (req, res) => {
  res.json({ message: "You're here!" });
});

module.exports = router;
