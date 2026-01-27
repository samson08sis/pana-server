const express = require("express");
const {
  getPageHeader,
  upsertPageHeader,
} = require("../../controllers/services/pageContentControllers");

const router = express.Router();

router.get("/", getPageHeader);
router.put("/", upsertPageHeader);

module.exports = router;
