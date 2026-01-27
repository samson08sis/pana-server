const express = require("express");
const router = express.Router();

const homeRoutes = require("./homeRoutes/index.js");
const aboutUsRoutes = require("./aboutUsRoutes/index.js");
const contactUsRoutes = require("./contactUsRoutes/index.js");
const imageRoutes = require("./couldinary/imageRoutes.js");
const newsRoutes = require("./newsRoutes/index.js");
const servicesRoutes = require("./servicesRoutes/pageContent.js");
const serviceDataRoutes = require("./servicesRoutes/data.js");

// Mount each route under its own path
router.use("/api/home", homeRoutes);
router.use("/api/about-us", aboutUsRoutes);
router.use("/api/contact", contactUsRoutes);
router.use("/api/cloudinary", imageRoutes);
router.use("/api/news", newsRoutes);
router.use("/api/services", servicesRoutes);

// Data routes
router.use("/api/data/services", serviceDataRoutes);

// Always keep it below the other routes so requests will only match this if found no other matching routes
router.use("/", (req, res) => {
  res.json({ message: "Panacea's Server" });
});

module.exports = router;
