const express = require("express");
const router = express.Router();

const homeRoutes = require("./homeRoutes");
const aboutUsRoutes = require("./aboutUsRoutes");
const imageRoutes = require("./couldinary/imageRoutes");

// Mount each route under its own path
router.use("/api/home", homeRoutes);
router.use("/api/about-us", aboutUsRoutes);
router.use("/api/cloudinary", imageRoutes);

// Always keep it below the other routes so requests will only match this if found no other matching routes
router.use("/", (req, res) => {
  res.json({ message: "Panacea's Server" });
});

module.exports = router;
