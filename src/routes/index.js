const express = require("express");
const router = express.Router();

const homeRoutes = require("./homeRoutes/index.js");
const aboutUsRoutes = require("./aboutUsRoutes/index.js");
const contactUsRoutes = require("./contactUsRoutes/index.js");
const imageRoutes = require("./couldinary/index.js/imageRoutes");
const newsRoutes = require("./newsRoutes/index.js");

// Mount each route under its own path
router.use("/api/home", homeRoutes);
router.use("/api/about-us", aboutUsRoutes);
router.use("/api/contact", contactUsRoutes);
router.use("/api/cloudinary", imageRoutes);
router.use("/api/news", newsRoutes);

// Always keep it below the other routes so requests will only match this if found no other matching routes
router.use("/", (req, res) => {
  res.json({ message: "Panacea's Server" });
});

module.exports = router;
