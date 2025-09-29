const express = require("express");
const router = express.Router();
const upload = require("../../middlewares/multer");
const { postImage, deleteImage } = require("../../controllers/cloudinary");

router.post("/upload", upload.single("image"), postImage);
router.delete("/delete", deleteImage);

module.exports = router;
