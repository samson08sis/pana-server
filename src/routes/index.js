const express = require("express");
const router = express.Router();

const homeRoutes = require("./homeRoutes");
const imageRoutes = require("./couldinary/imageRoutes");

// Mount each route under its own path
router.use("/", (req, res) => {
  res.json({ message: "Panacea's Server" });
});
router.use("/api/home", homeRoutes);
router.use("/api/cloudinary", imageRoutes);

module.exports = router;
