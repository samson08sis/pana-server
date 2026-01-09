const express = require("express");
const {
  getNewsItems,
  createNewsItem,
  updateNewsItem,
  deleteNewsItem,
  deleteAll,
} = require("../../controllers/newsController");

const router = express.Router();

router.get("/", getNewsItems);
router.post("/", createNewsItem);
router.put("/:id", updateNewsItem);
router.delete("/delete/:id", deleteNewsItem);
// DEV
router.delete("/delete-all", deleteAll);

module.exports = router;
